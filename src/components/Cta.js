
import {Link} from 'react-router-dom';




import React, { useState, useEffect } from 'react';


 // language toggle button////
import { useTranslation } from 'react-i18next';


const Cta = () => {
    const [t, i18n] = useTranslation("global");
    const [isLoading, setIsLoading] = useState(true);
  
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
  
    // Render loading screen while isLoading is true
    if (isLoading) {
      return <div></div>;
    }
    return ( 
        <div className="w-full flex items-center justify-center text-white cta">
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">                    
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="mb-4">
                        <p className='text-2xl md:text-4xl font-bold mb-4'>{t("CTA.header1")}</p>
                        <p className="text-lg md:text-2xl">{t("CTA.header2")} <span className='font-black'></span></p>
                    </div>
                    
                    <div className="w-full lg:w-72 pt-6 lg:mx-12">
                        <Link to="/contact" className="bg-transparent border hover:bg-blue-500 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">{t("CTA.buttom")}
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10
                        .293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;