import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  XCircle,
  ArrowLeft
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  getCookieConsent, 
  saveCustomPreferences, 
  acceptAllCookies, 
  rejectAllCookies,
  getCookieCategories,
  clearCookieConsent 
} from '@/lib/cookie-utils';
import { CookiePreferences, CookieCategory } from '@/types/cookie';
import CookieSettingsModal from '@/components/CookieSettingsModal';

const CookieSettings: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    const consent = getCookieConsent();
    return consent?.preferences || {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  });
  const [showModal, setShowModal] = useState(false);

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

  const handleAcceptAll = () => {
    acceptAllCookies();
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  const handleClearAll = () => {
    clearCookieConsent();
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  const handleModalSave = () => {
    const consent = getCookieConsent();
    if (consent) {
      setPreferences(consent.preferences);
    }
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4">
        {/* Header */}
        <div className="mb-4">  
          {/* Home Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-3 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Cookie Settings</h1>
              <p className="text-sm text-muted-foreground">
                Manage your cookie preferences and privacy settings
              </p>
            </div>
          </div>
        </div>

        {/* Combined Status and Actions */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-4 w-4" />
              Current Status & Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Status - Compact Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
              {Object.entries(categories).map(([key, category]) => {
                const categoryKey = key as CookieCategory;
                const isEnabled = preferences[categoryKey];
                const info = cookieInfo[categoryKey];
                
                return (
                  <div
                    key={categoryKey}
                    className={`p-2 rounded-lg border flex items-center gap-2 ${
                      isEnabled ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className={info.color}>
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs truncate">{category.name}</div>
                      <Badge 
                        variant={isEnabled ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {isEnabled ? 'On' : 'Off'}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions - Compact */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleAcceptAll}
                size="sm"
                className="flex-1 py-3 sm:py-2"
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Accept All
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                size="sm"
                className="flex-1 py-3 sm:py-2"
              >
                <XCircle className="h-3 w-3 mr-1" />
                Reject All
              </Button>
              <Button
                onClick={() => setShowModal(true)}
                variant="outline"
                size="sm"
                className="flex-1 py-3 sm:py-2"
              >
                <Settings className="h-3 w-3 mr-1" />
                Customize
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information - Compact Grid */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Cookie Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {Object.entries(categories).map(([key, category]) => {
                const categoryKey = key as CookieCategory;
                const info = cookieInfo[categoryKey];
                const isEnabled = preferences[categoryKey];
                const isNecessary = categoryKey === 'necessary';
                
                return (
                  <div key={categoryKey} className="p-3 rounded-lg border">
                    <div className="flex items-start gap-3">
                      <div className={`p-1.5 rounded ${isEnabled ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <div className={info.color}>
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm">{category.name}</h3>
                          <Badge 
                            variant={isEnabled ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {isEnabled ? 'On' : 'Off'}
                          </Badge>
                          {isNecessary && (
                            <Badge variant="outline" className="text-xs">
                              Required
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {category.description}
                        </p>
                        <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                          {info.details.map((detail, index) => (
                            <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Legal Information - Compact */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Right to Withdraw Consent:</strong> You can withdraw your consent to 
                non-essential cookies at any time by updating your preferences on this page.
              </p>
              <p>
                <strong>Data Protection:</strong> We are committed to protecting your privacy 
                and comply with applicable data protection laws including GDPR, CCPA, and other 
                relevant privacy regulations.
              </p>
              <p>
                <strong>Cookie Storage:</strong> Your preferences are stored locally in your 
                browser and can be cleared at any time. Clearing your browser data will reset 
                your cookie preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  onClick={handleClearAll}
                  variant="destructive"
                  size="sm"
                  className="flex-1 py-3 sm:py-2"
                >
                  Clear All Preferences
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 py-3 sm:py-2"
                >
                  <Link to="/privacy-policy">
                    View Privacy Policy
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Modal */}
      <CookieSettingsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleModalSave}
      />
    </div>
  );
};

export default CookieSettings;

