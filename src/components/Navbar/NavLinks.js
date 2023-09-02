import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/logotrasnparent.png'; 
 // language toggle button////
import { useTranslation } from 'react-i18next';





const NavLinks = () => {
    const [isRTL, setIsRTL] = useState(false);
    const [t, i18n] = useTranslation("global");
  
    useEffect(() => {
      const body = document.body;
      if (isRTL) {
        body.classList.remove('dir-ltr');
        body.classList.add('dir-rtl');
      } else {
        body.classList.remove('dir-rtl');
        body.classList.add('dir-ltr');
      }
    }, [isRTL]);
  
    const handleToggle = () => {
      setIsRTL(prevIsRTL => !prevIsRTL);
      const lang = isRTL ? 'en' : 'he';
      i18n.changeLanguage(lang);
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