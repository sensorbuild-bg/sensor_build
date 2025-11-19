'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'bg' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('bg');

  useEffect(() => {
    // Set body class based on language
    document.body.classList.remove('lang-bg', 'lang-en');
    document.body.classList.add(`lang-${lang}`);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

