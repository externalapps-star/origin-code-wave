import { useState, useEffect } from 'react';
import { 
  getCookieConsent, 
  hasConsented, 
  hasConsentedToCategory
} from '@/lib/cookie-utils';
import { CookieConsentState, CookieCategory } from '@/types/cookie';

export const useCookieConsent = () => {
  const [consentState, setConsentState] = useState<CookieConsentState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadConsentState = () => {
      const state = getCookieConsent();
      setConsentState(state);
      setIsLoading(false);
    };

    loadConsentState();

    // Listen for storage changes (e.g., from other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        loadConsentState();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const hasUserConsented = hasConsented();
  const hasConsentedTo = (category: CookieCategory) => hasConsentedToCategory(category);

  return {
    consentState,
    hasUserConsented,
    hasConsentedTo,
    isLoading,
  };
};

export default useCookieConsent;

