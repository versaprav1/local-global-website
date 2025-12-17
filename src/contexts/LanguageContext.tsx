import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { translations, Language } from '@/i18n';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (path: string) => string;
  getTranslation: <T>(path: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to get nested value from object using dot notation
const getNestedValue = (obj: unknown, path: string): unknown => {
  return path.split('.').reduce((current: unknown, key: string) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'de' || saved === 'en') ? saved : 'de';
  });

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => {
      const newLang = prev === 'de' ? 'en' : 'de';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  }, []);

  // Get string translation
  const t = useCallback((path: string): string => {
    const value = getNestedValue(translations[language], path);
    if (typeof value === 'string') {
      return value;
    }
    console.warn(`Translation not found for path: ${path}`);
    return path;
  }, [language]);

  // Get any type of translation (arrays, objects, etc.)
  const getTranslation = useCallback(<T,>(path: string): T => {
    const value = getNestedValue(translations[language], path);
    return value as T;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    // During HMR, context may temporarily be undefined - provide fallback
    console.warn('useLanguage: Context not available, using fallback');
    return {
      language: 'de',
      toggleLanguage: () => {},
      t: (path: string) => path,
      getTranslation: <T,>(path: string) => path as T,
    };
  }
  return context;
};
