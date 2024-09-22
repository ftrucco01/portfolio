import React, { useEffect, useState } from 'react';

/**
 * Component for switching languages.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.currentLanguage - The current language ('en' or 'es').
 * @param {Function} props.switchLanguage - The function to switch languages.
 * @param {boolean} props.isDarkMode - Flag indicating if dark mode is enabled.
 * @returns {JSX.Element} The rendered component.
 */
function LanguageSwitcher({ currentLanguage, switchLanguage, isDarkMode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const style = {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.3)',
    fontSize: '30px',
    transition: 'all 0.3s ease',
  };

  return (
    <div className="dark-btn dark-btn-stored mode-btn" onClick={switchLanguage} style={style}>
      {isClient ? (currentLanguage === 'en' ? '🇦🇷' : '🇬🇧') : null}
    </div>
  );
}

export default LanguageSwitcher;