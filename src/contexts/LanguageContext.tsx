import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, type Language, type Translations } from '@/i18n/translations';

const STORAGE_KEY = 'huguenin.dev.lang.user';

function readUserLanguage(): Language | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'en' || v === 'pt') return v;
  } catch {
    /* private mode */
  }
  return null;
}

function detectFromNavigator(): Language {
  if (typeof navigator === 'undefined') return 'en';
  const list = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of list) {
    if ((lang || '').toLowerCase().startsWith('pt')) return 'pt';
  }
  return 'en';
}

function initialLanguage(): Language {
  return readUserLanguage() ?? detectFromNavigator();
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    if (readUserLanguage()) return;

    const ac = new AbortController();
    fetch('https://ipapi.co/country_code/', { signal: ac.signal })
      .then((r) => {
        if (!r.ok) throw new Error('geo');
        return r.text();
      })
      .then((code) => {
        setLanguageState(code.trim() === 'BR' ? 'pt' : 'en');
      })
      .catch(() => {
        /* mantém idioma do navegador já aplicado no estado inicial */
      });

    return () => ac.abort();
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    setLanguageState(lang);
  }, []);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
