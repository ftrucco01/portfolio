import React from 'react';

function LanguageSwitcher({ currentLanguage, switchLanguage }) {
  return (
    <button onClick={switchLanguage}>
      Switch Language to {currentLanguage === 'en' ? 'Español' : 'English'}
    </button>
  );
}

export default LanguageSwitcher;