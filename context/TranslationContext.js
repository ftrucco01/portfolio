"use client";

import React, { createContext, useContext, useState } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

const translations = { en, es };

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const t = (key) => {
    return translations[locale][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};