"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { language, switchLanguage } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkmode = () => {
    const currentState = localStorage.getItem("idDarkMode");
    const isDarkMode = JSON.parse(currentState);
    if (isDarkMode) {
      localStorage.setItem("idDarkMode", false);
      document.body.classList.remove("dark-theme");
      document.documentElement.style.setProperty('--svg-fill-color', '#010002');
      document.documentElement.style.setProperty('--svg-fill-color-dark', '#ffffff');
      document.body.style.backgroundImage = "url(/assets/img/bg/page-bg-1.jpg)";
      setDarkMode(false);
    } else {
      localStorage.setItem("idDarkMode", true);
      document.body.classList.add("dark-theme");
      document.documentElement.style.setProperty('--svg-fill-color', '#ffffff');
      document.documentElement.style.setProperty('--svg-fill-color-dark', '#010002');
      document.body.style.backgroundImage = "url(/assets/img/bg/page-bg-dark-1.jpg)";
      setDarkMode(true);
    }
  };

  useEffect(() => {
    const currentState = localStorage.getItem("idDarkMode");
    const isDarkMode = JSON.parse(currentState);
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.documentElement.style.setProperty('--svg-fill-color', '#ffffff');
      document.documentElement.style.setProperty('--svg-fill-color-dark', '#010002');
      document.body.style.backgroundImage = "url(/assets/img/bg/page-bg-dark-1.jpg)";
    } else {
      document.body.classList.remove("dark-theme");
      document.documentElement.style.setProperty('--svg-fill-color', '#010002');
      document.documentElement.style.setProperty('--svg-fill-color-dark', '#ffffff');
      document.body.style.backgroundImage = "url(/assets/img/bg/page-bg-1.jpg)";
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bostami-header-area mb-30" style={{ marginBottom: '15px' }}>
      <div className="container">
        <div className="bostami-header-wrap" style={{ padding: '10px 0' }}>
          <div className="row align-items-center" style={{ minHeight: 'auto' }}>
            <div className="col-12">
              <div className="bostami-header-menu-btn text-right">
                <div
                  className="dark-btn dark-btn-stored mode-btn"
                  onClick={handleDarkmode}
                  style={{ margin: '0 10px' }}
                >
                  {darkMode ? (
                    <i className="sunicon fa-light fa-sun-bright"></i>
                  ) : (
                    <i className="moonicon fa-solid fa-moon"></i>
                  )}
                </div>
                <LanguageSwitcher
                  currentLanguage={language}
                  switchLanguage={switchLanguage}
                  isDarkMode={darkMode}
                />
                <div
                  className={`menu-btn toggle_menu ${menuOpen && "active"}`}
                  onClick={() => setMenuOpen(prev => !prev)}
                  style={{ margin: '0 5px' }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
