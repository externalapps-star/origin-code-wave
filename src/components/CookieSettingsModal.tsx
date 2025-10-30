import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  User, 
  BarChart3, 
  Target, 
  Settings,
  Info,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { 
  getCookieConsent, 
  saveCustomPreferences, 
  acceptAllCookies, 
  rejectAllCookies,
  getCookieCategories,
  defaultPreferences 
} from '@/lib/cookie-utils';
import { CookiePreferences, CookieCategory } from '@/types/cookie';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const currentConsent = getCookieConsent();
      if (currentConsent) {
        setPreferences(currentConsent.preferences);
      } else {
        setPreferences(defaultPreferences);
      }
      setHasChanges(false);
    }
  }, [isOpen]);

  const handlePreferenceChange = (category: CookieCategory, value: boolean) => {
    if (category === 'necessary') return; // Cannot change necessary cookies
    
    const newPreferences = {
      ...preferences,
      [category]: value,
    };
    setPreferences(newPreferences);
    setHasChanges(true);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    setHasChanges(true);
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(allRejected);
    setHasChanges(true);
  };

  const handleSave = () => {
    saveCustomPreferences(preferences);
    setHasChanges(false);
    onSave();
  };

  const handleCancel = () => {
    setHasChanges(false);
    onClose();
  };

  const categories = getCookieCategories();
  const cookieInfo: Record<CookieCategory, { icon: React.ReactNode; color: string; details: string[] }> = {
    necessary: {
      icon: <Shield className="h-5 w-5" />,
      color: "text-green-600",
      details: [
        "Authentication and security",
        "Remember login status",
        "Prevent fraud and abuse",
        "Essential website functionality"
      ]
    },
    functional: {
      icon: <User className="h-5 w-5" />,
      color: "text-blue-600",
      details: [
        "Remember your preferences",
        "Language and region settings",
        "Accessibility options",
        "User interface customization"
      ]
    },
    analytics: {
      icon: <BarChart3 className="h-5 w-5" />,
      color: "text-purple-600",
      details: [
        "Website usage statistics",
        "Performance monitoring",
        "Error tracking and debugging",
        "User behavior analysis (anonymized)"
      ]
    },
    marketing: {
      icon: <Target className="h-5 w-5" />,
      color: "text-orange-600",
      details: [
        "Personalized advertisements",
        "Social media integration",
        "Cross-site tracking",
        "Marketing campaign effectiveness"
      ]
    },
    preferences: {
      icon: <Settings className="h-5 w-5" />,
      color: "text-pink-600",
      details: [
        "Theme and display preferences",
        "Notification settings",
        "Content personalization",
        "User experience optimization"
      ]
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Settings className="h-4 w-4" />
            Cookie Preferences
          </DialogTitle>
          <DialogDescription className="text-sm text-left">
            Manage your cookie preferences below. Essential cookies cannot be disabled.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
          {/* Quick Actions */}
          <div className="flex gap-2">
            <Button
              onClick={handleAcceptAll}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <CheckCircle className="h-3 w-3 mr-1" />
              Accept All
            </Button>
            <Button
              onClick={handleRejectAll}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <XCircle className="h-3 w-3 mr-1" />
              Reject All
            </Button>
          </div>

          {/* Cookie Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {Object.entries(categories).map(([key, category]) => {
              const categoryKey = key as CookieCategory;
              const info = cookieInfo[categoryKey];
              const isEnabled = preferences[categoryKey];
              const isNecessary = categoryKey === 'necessary';

              return (
                <div
                  key={categoryKey}
                  className={`p-3 rounded-lg border transition-colors ${
                    isEnabled ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={info.color}>
                          {info.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-sm">
                            {category.name}
                          </h3>
                          {isNecessary && (
                            <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                              Required
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                        {info.details.map((detail, index) => (
                          <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="ml-3 flex items-center">
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={(value) => handlePreferenceChange(categoryKey, value)}
                        disabled={isNecessary}
                        className="data-[state=checked]:bg-green-600"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Information */}
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-3 w-3 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs text-muted-foreground space-y-2">
                <p>
                  <strong>Your Rights:</strong> You have the right to withdraw your consent at any time. 
                  You can also update your preferences by returning to this settings page.
                </p>
                <p>
                  <strong>Data Protection:</strong> We are committed to protecting your privacy and 
                  comply with applicable data protection laws including GDPR and CCPA.
                </p>
                <p>
                  <strong>More Information:</strong> For detailed information about how we use cookies, 
                  please read our{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="flex gap-2">
          <Button
            onClick={handleSave}
            disabled={!hasChanges}
            size="sm"
            className="flex-1"
          >
            Save Preferences
          </Button>
          <Button
            onClick={handleCancel}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsModal;

