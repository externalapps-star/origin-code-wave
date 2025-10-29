export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  timestamp: number;
  version: string;
}

export type CookieCategory = keyof CookiePreferences;

export interface CookieInfo {
  name: string;
  description: string;
  category: CookieCategory;
  duration: string;
  purpose: string;
}

