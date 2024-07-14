'use client';

import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";
import AboutOne from "@/components/homes/about/AboutOne";
import React, { useState } from 'react';
import MenuTwo from "@/components/homes/menus/MenuTwo";
import translations from '../utils/translations';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function page() {
  const [language, setLanguage] = useState('en');
  const switchLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };
  const { title, description, greeting } = translations[language];

  return (
    <>
      <div className="page-wrapper home-1" id="home-1">
        <Header />
        <h1>{title}</h1> {/* Ejemplo de uso de las traducciones */}
        <LanguageSwitcher currentLanguage={language} switchLanguage={switchLanguage} />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <AboutOne />
            <MenuTwo />
          </div>
          <h1>{greeting}</h1> {/* Ejemplo de uso de las traducciones */}
        </div>
      </div>
    </>
  );
}