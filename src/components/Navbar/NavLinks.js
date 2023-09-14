import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/logotrasnparent.png'; 
 // language toggle button////
import { useTranslation } from 'react-i18next';
import './NavBarStyle.css';




const NavLinks = () => {
  
  const [t, i18n] = useTranslation("global");
  const [isLoading, setIsLoading] = useState(true);
  //responsive 
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize language and content direction based on local storage
  const initialLanguage = localStorage.getItem('language') || 'en';
  const initialIsRTL = initialLanguage === 'he';

  const [isRTL, setIsRTL] = useState(initialIsRTL);

  useEffect(() => {
    const lang = isRTL ? 'he' : 'en';
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);

    // Update the content direction based on the language
    if (isRTL) {
      document.body.classList.remove('dir-ltr');
      document.body.classList.add('dir-rtl');
    } else {
      document.body.classList.remove('dir-rtl');
      document.body.classList.add('dir-ltr');
    }

    // Mark loading as complete
    setIsLoading(false);
  }, [isRTL, i18n]);

  // Toggle language and content direction
  const handleToggle = () => {
    setIsRTL(prevIsRTL => !prevIsRTL);
  };

  const navigationContainerStyle = {
    direction: 'ltr', // Set the direction to left-to-right (or 'rtl' for right-to-left)
  };

  // Render loading screen while isLoading is true
  if (isLoading) {
    return <div></div>;
  }


 
  
    return (
        <>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
    
            <div style={navigationContainerStyle} >

     
      
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500 yaniv" style={{ fontSize: isRTL ? '1.2rem' : '1rem' }} smooth to="/yaniv">
                {t("header.About")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500 yaniv" style={{ fontSize: isRTL ? '1.2rem' : '1rem' }} smooth to="/Services">
                {t("header.Services")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500 yaniv" style={{ fontSize: isRTL ? '1.2rem' : '1rem' }} smooth to="/Competence">
                {t("header.Competence")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500 yaniv" style={{ fontSize: isRTL ? '1.2rem' : '1rem' }}  to="/roman">
                {t("header.Partners")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500 yaniv" style={{ fontSize: isRTL ? '1.2rem' : '1rem' }} to="/clients2">
                {t("header.Costumers")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500 yaniv" style={{ fontSize: isRTL ? '1.2rem' : '1rem' }} to="/contact">
                {t("header.Contact")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500 yaniv" style={{ fontSize: isRTL ? '1.2rem' : '1rem' }} to="/careers">
                {t("header.Careers")}
            </HashLink>
            </div>


            

<div className={`switch ${isRTL ? 'rtl' : 'ltr'}`}>
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          checked={isRTL}
          onChange={handleToggle}
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">EN</span>
        <span className="off">HE</span>
      </div>
      </div>
        </>
    )
}

export default NavLinks;