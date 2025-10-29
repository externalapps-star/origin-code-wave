import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, X, Shield, BarChart3, Target, User } from 'lucide-react';
import { 
  getCookieConsent, 
  acceptAllCookies, 
  rejectAllCookies, 
  hasConsented,
  getCookieCategories 
} from '@/lib/cookie-utils';
import CookieSettingsModal from './CookieSettingsModal';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasUserConsented = hasConsented();
    if (!hasUserConsented) {
      setShowBanner(true);
      // Add slight delay for smooth animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setShowBanner(false);
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowSettings(true);
  };

  const handleSettingsClose = () => {
    setShowSettings(false);
  };

  const handleSettingsSave = () => {
    setShowSettings(false);
    setShowBanner(false);
    setIsVisible(false);
  };

  if (!showBanner) return null;

  const categories = getCookieCategories();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Cookie Banner */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-background border-t shadow-2xl">
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        We Value Your Privacy
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground mt-1">
                        We use cookies to enhance your experience and analyze our traffic.
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRejectAll}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Cookie Categories Overview */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {Object.entries(categories).map(([key, category]) => (
                      <div key={key} className="flex items-center gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          {key === 'necessary' && <Shield className="h-3 w-3 text-green-600" />}
                          {key === 'functional' && <User className="h-3 w-3 text-blue-600" />}
                          {key === 'analytics' && <BarChart3 className="h-3 w-3 text-purple-600" />}
                          {key === 'marketing' && <Target className="h-3 w-3 text-orange-600" />}
                          {key === 'preferences' && <Settings className="h-3 w-3 text-pink-600" />}
                        </div>
                        <span className="text-muted-foreground">{category.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Legal Notice */}
                  <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                    <p>
                      By clicking "Accept All", you consent to our use of cookies. 
                      You can customize your preferences or learn more in our{' '}
                      <a href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a href="/terms-of-use" className="text-primary hover:underline">
                        Terms of Use
                      </a>
                      .
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAcceptAll}
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      Accept All Cookies
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      className="flex-1"
                    >
                      Reject All
                    </Button>
                    <Button
                      onClick={handleCustomize}
                      variant="outline"
                      className="flex-1 sm:flex-none"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <CookieSettingsModal
        isOpen={showSettings}
        onClose={handleSettingsClose}
        onSave={handleSettingsSave}
      />
    </>
  );
};

export default CookieConsent;

