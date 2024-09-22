'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

/**
 * LanguageProvider component to provide language context to its children.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The children components to be wrapped by the provider.
 * @returns {JSX.Element} The provider component with language context.
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    import(`../locales/${language}.json`)
      .then((mod) => {
        setTranslations(mod.default);
      })
      .catch(error => console.error("Failed to load translations", error));

    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const switchLanguage = () => {
    setLanguage(lang => lang === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}