import { CookieConsentState, CookiePreferences, CookieCategory } from '@/types/cookie';

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_VERSION = '1.0';

export const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  functional: false,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const getCookieConsent = (): CookieConsentState | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    
    // Check if stored version matches current version
    if (parsed.version !== COOKIE_VERSION) {
      return null;
    }
    
    return parsed;
  } catch (error) {
    console.error('Error reading cookie consent:', error);
    return null;
  }
};

export const setCookieConsent = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return;
  
  const consentState: CookieConsentState = {
    hasConsented: true,
    preferences: {
      ...preferences,
      necessary: true, // Always true
    },
    timestamp: Date.now(),
    version: COOKIE_VERSION,
  };
  
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentState));
  } catch (error) {
    console.error('Error saving cookie consent:', error);
  }
};

export const clearCookieConsent = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch (error) {
    console.error('Error clearing cookie consent:', error);
  }
};

export const hasConsented = (): boolean => {
  const consent = getCookieConsent();
  return consent?.hasConsented ?? false;
};

export const hasConsentedToCategory = (category: CookieCategory): boolean => {
  const consent = getCookieConsent();
  if (!consent) return false;
  
  // Necessary cookies are always allowed
  if (category === 'necessary') return true;
  
  return consent.preferences[category] ?? false;
};

export const getCookieCategories = (): Record<CookieCategory, { name: string; description: string }> => ({
  necessary: {
    name: 'Necessary Cookies',
    description: 'Essential for the website to function properly. These cannot be disabled.',
  },
  functional: {
    name: 'Functional Cookies',
    description: 'Store your account information, subscription data, and user preferences to provide personalized service.',
  },
  analytics: {
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
  },
  marketing: {
    name: 'Marketing Cookies',
    description: 'Used for email subscriptions and marketing communications. Required for newsletter signups.',
  },
  preferences: {
    name: 'Preference Cookies',
    description: 'Remember your UI preferences, theme settings, and interface customizations.',
  },
});

// GDPR/CCPA compliant cookie management
export const acceptAllCookies = (): void => {
  setCookieConsent({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: true,
    preferences: true,
  });
};

export const rejectAllCookies = (): void => {
  setCookieConsent({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
    preferences: false,
  });
};

export const saveCustomPreferences = (preferences: Partial<CookiePreferences>): void => {
  const currentConsent = getCookieConsent();
  const currentPreferences = currentConsent?.preferences ?? defaultPreferences;
  
  setCookieConsent({
    ...currentPreferences,
    ...preferences,
    necessary: true, // Always true
  });
};

