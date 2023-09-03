import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/logotrasnparent.png'; 
 // language toggle button////
import { useTranslation } from 'react-i18next';





const NavLinks = () => {
  const [t, i18n] = useTranslation("global");

  // Initialize language and content direction based on local storage
  const initialLanguage = localStorage.getItem('language') || 'en';
  const initialIsRTL = initialLanguage === 'he';

  const [isRTL, setIsRTL] = useState(initialIsRTL);

  // Watch for changes in the language and update content direction
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
  }, [isRTL, i18n]);

  // Toggle language and content direction
  const handleToggle = () => {
    setIsRTL(prevIsRTL => !prevIsRTL);
  };

    return (
        <>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/#about">
                About Grovv
            </HashLink> */}
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/yaniv">
                {t("header.About")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/Services">
                {t("header.Services")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/Competence">
                {t("header.Competence")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500"  to="/roman">
                {t("header.Partners")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" to="/clients2">
                {t("header.Costumers")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" to="/contact">
                {t("header.Contact")}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" to="/careers">
                {t("header.Careers")}
            </HashLink>


{/*     "header" :{
        "message":"Abot Grovv",
         "About":"על החברה",
         "Services":"שירותים",
         "Competence":"תיק עבודות",
         "Partners": "שותפים",
         "Costumers":"Costumers",
         "Contact": "Contact Us",
         "Careers": "Careers"
    },
 */}

<div className={`switch ${isRTL ? 'rtl' : 'ltr'}`}>
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          checked={isRTL}
          onChange={handleToggle}
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">HE</span>
        <span className="off">EN</span>
      </div>
      </div>
        </>
    )
}

export default NavLinks;