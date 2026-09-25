import { createContext, useContext, useState, ReactNode } from 'react';
import type { Localized, Period } from '@/content';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /** Resolve a Localized value to the current language. */
  l: (value: Localized) => string;
  /** Format a Period as "start - end", with "Present" for an open end. */
  formatPeriod: (period: Period, present: Localized) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const l = (value: Localized) => (typeof value === 'string' ? value : value[language]);

  const formatPeriod = (period: Period, present: Localized) =>
    `${period.start} - ${period.end ?? l(present)}`;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, l, formatPeriod }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
