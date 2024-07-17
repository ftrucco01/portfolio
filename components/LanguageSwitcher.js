import React from 'react';

function LanguageSwitcher({ currentLanguage, switchLanguage, isDarkMode }) {
  const style = {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: '50px',
    height: '50px',
    background: isDarkMode ? '#333' : '#fff',  // Fondo oscuro para modo oscuro
    color: isDarkMode ? '#fff' : '#333',       // Texto claro para modo oscuro
    borderRadius: '50%',
    boxShadow: isDarkMode ? '0 4px 8px rgba(255,255,255,0.3)' : '0 4px 8px rgba(0,0,0,0.3)',
    fontSize: '20px',
    transition: 'all 0.3s ease',               // Suaviza la transición entre modos
  };

  return (
    <div className="language-switcher" onClick={switchLanguage} style={style}>
      {currentLanguage === 'en' ? '🇪🇸' : '🇬🇧'}
    </div>
  );
}

export default LanguageSwitcher;
