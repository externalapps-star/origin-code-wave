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
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">  
          {/* Home Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Cookie Settings</h1>
              <p className="text-muted-foreground">
                Manage your cookie preferences and privacy settings
              </p>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Current Cookie Status
            </CardTitle>
            <CardDescription>
              Here's what cookies are currently enabled on your device
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(categories).map(([key, category]) => {
                const categoryKey = key as CookieCategory;
                const isEnabled = preferences[categoryKey];
                const info = cookieInfo[categoryKey];
                
                return (
                  <div
                    key={categoryKey}
                    className={`p-4 rounded-lg border flex items-center gap-3 ${
                      isEnabled ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className={info.color}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{category.name}</div>
                      <Badge 
                        variant={isEnabled ? "default" : "secondary"}
                        className="text-xs mt-1"
                      >
                        {isEnabled ? 'Enabled' : 'Disabled'}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Quickly manage your cookie preferences with these options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAcceptAll}
                className="flex-1"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Accept All Cookies
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="flex-1"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Reject All Non-Essential
              </Button>
              <Button
                onClick={() => setShowModal(true)}
                variant="outline"
                className="flex-1"
              >
                <Settings className="h-4 w-4 mr-2" />
                Customize Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Cookie Information</CardTitle>
            <CardDescription>
              Learn more about each type of cookie we use
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(categories).map(([key, category]) => {
                const categoryKey = key as CookieCategory;
                const info = cookieInfo[categoryKey];
                const isEnabled = preferences[categoryKey];
                const isNecessary = categoryKey === 'necessary';
                
                return (
                  <div key={categoryKey}>
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${isEnabled ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <div className={info.color}>
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{category.name}</h3>
                          <Badge 
                            variant={isEnabled ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {isEnabled ? 'Enabled' : 'Disabled'}
                          </Badge>
                          {isNecessary && (
                            <Badge variant="outline" className="text-xs">
                              Required
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {category.description}
                        </p>
                        <div className="space-y-1">
                          {info.details.map((detail, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {key !== 'preferences' && <Separator className="mt-6" />}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Legal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-muted-foreground">
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
                >
                  Clear All Preferences
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
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

