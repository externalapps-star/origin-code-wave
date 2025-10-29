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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Cookie Preferences
          </DialogTitle>
          <DialogDescription>
            Manage your cookie preferences. You can enable or disable different types of cookies below.
            Note that some cookies are essential for the website to function properly.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAcceptAll}
              variant="outline"
              className="flex-1"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Accept All
            </Button>
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="flex-1"
            >
              <XCircle className="h-4 w-4 mr-2" />
              Reject All
            </Button>
          </div>

          <Separator />

          {/* Cookie Categories */}
          <div className="space-y-4">
            {Object.entries(categories).map(([key, category]) => {
              const categoryKey = key as CookieCategory;
              const info = cookieInfo[categoryKey];
              const isEnabled = preferences[categoryKey];
              const isNecessary = categoryKey === 'necessary';

              return (
                <div
                  key={categoryKey}
                  className={`p-4 rounded-lg border transition-colors ${
                    isEnabled ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={info.color}>
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">
                            {category.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                        {isNecessary && (
                          <Badge variant="secondary" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>

                      <div className="ml-8 space-y-1">
                        {info.details.map((detail, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="ml-4 flex items-center">
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
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleSave}
              disabled={!hasChanges}
              className="flex-1 sm:flex-none"
            >
              Save Preferences
            </Button>
            <Button
              onClick={handleCancel}
              variant="outline"
              className="flex-1 sm:flex-none"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsModal;

