// LanguageContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a context for the language settings
const LanguageContext = createContext();

// Create a custom hook to use the language settings
export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [isRTL, setIsRTL] = useState(localStorage.getItem('isRTL') === 'true');

  // Function to toggle language direction
  const toggleLanguage = () => {
    const newIsRTL = !isRTL;
    setIsRTL(newIsRTL);
    localStorage.setItem('isRTL', newIsRTL);
  };

  return (
    <LanguageContext.Provider value={{ isRTL, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export {LanguageContext};