import React, { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const Hero = () => {
  const [t, i18n] = useTranslation('global');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize language and content direction based on sessionStorage
  const initialLanguage = useMemo(() => localStorage.getItem('language') || 'en', []);
  const initialIsRTL = initialLanguage === 'he';

  const [isRTL, setIsRTL] = useState(initialIsRTL);

  useEffect(() => {
    const lang = isRTL ? 'he' : 'en';
    i18n.changeLanguage(lang);
    sessionStorage.setItem('language', lang); // Use sessionStorage here

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

 
  let textAlignmentClass;
  if (initialLanguage=="en") {
     textAlignmentClass='text-left'
  } else {
     textAlignmentClass='text-right'
  }


//   const textAlignmentClass = isRTL ? 'text-right' : 'text-left';





console.log('isRTL:', isRTL);




  return (
    <div className="hero" id="hero">
      <NavBar />

      <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
        <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
          <div className={`lg:w-1/2 flex flex-col justify-center ${textAlignmentClass}`} data-aos="zoom-in" data-aos-delay="200">
            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-green-900">
              {t("hero.header")}
            </h1>
            <div className={`text-xl font-semibold tracking-tight mb-5 text-gray-500 ${textAlignmentClass}`}>
              {t("hero.paragraph")}
            </div>
            <div className={`mb-4 space-x-0 md:space-x-2 md:mb-8 ${textAlignmentClass}`}>
              <Link to="/contact" className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                {t("hero.button")}
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;