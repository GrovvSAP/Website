import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { useDocTitle } from '../components/CustomHook';
import emailjs from '@emailjs/browser';
import './Careers.css';
import Cta from '../components/Cta';
import Cta2 from '../components/Cta2';

const Contact = () => {
  const [t, i18n] = useTranslation('global');
  const [isLoading, setIsLoading] = useState(true);
  const initialLanguage = localStorage.getItem('language') || 'en';
  const initialIsRTL = initialLanguage === 'he';
  const [isRTL, setIsRTL] = useState(initialIsRTL);

  useDocTitle('MLD | Molad e Konsult - Send us a message');

  useEffect(() => {
    const lang = isRTL ? 'he' : 'en';
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);

    if (isRTL) {
      document.body.classList.remove('dir-ltr');
      document.body.classList.add('dir-rtl');
    } else {
      document.body.classList.remove('dir-rtl');
      document.body.classList.add('dir-ltr');
    }

    setIsLoading(false);
  }, [isRTL, i18n]);


  if (isLoading) {
    return <div></div>;
  }

 
    return (
        <>
            <div>
                <NavBar />
            </div>

            <div id="why-section" className="bg-gray-100 py-12 mt-32">
    <div className="container mx-auto text-center">
        <h2 className=" text-custom-color2 text-3xl font-semibold mb-4">{t("Careers.header1")}</h2>
        <p className="text-gray-700 mb-8">{t("Careers.header2")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-full flex flex-col items-center justify-center">
                <i className="fas fa-briefcase text-3xl text-green-500 mb-3"></i>
                <h3 className="text-custom-color2 text-lg font-semibold mb-2">{t("Careers.Bubble1Header")}</h3>
                <p className="text-gray-700 text-center max-w-xs">{t("Careers.Bubble1Content")}</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-full flex flex-col items-center justify-center">
                <i className="fas fa-users text-3xl text-green-500 mb-3"></i>
                <h3 className=" text-custom-color2 text-lg font-semibold mb-2">{t("Careers.Bubble2Header")}</h3>
                <p className="text-gray-700 text-center max-w-xs">{t("Careers.Bubble2Content")}</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-full flex flex-col items-center justify-center">
                <i className="fas fa-chalkboard-teacher text-3xl text-green-500 mb-3"></i>
                <h3 className="text-custom-color2 text-lg font-semibold mb-2">{t("Careers.Bubble3Header")}</h3>
                <p className="text-gray-700 text-center max-w-xs">{t("Careers.Bubble3Content")}</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-full flex flex-col items-center justify-center">
                <i className="fas fa-heart text-3xl text-green-500 mb-3"></i>
                <h3 className="text-custom-color2 text-lg font-semibold mb-2">{t("Careers.Bubble4Header")}</h3>
                <p className="text-gray-700 text-center max-w-xs">{t("Careers.Bubble4Content")}</p>
            </div>
        </div>
    </div>
</div>



<Cta2/>


<div id="why-section" className="bg-gray-100 py-20 mt-">
    <div className="container mx-auto text-center">
        <h2 className=" text-custom-color2 text-3xl font-semibold mb-8">{t("Careers.CardsTtile")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-lg flex flex-col items-center justify-center relative">
                <div className="flex items-center justify-end mb-2">
                    <span className="bg-custom-bg-color2 text-white px-2 py-1 rounded-full uppercase text-sm absolute right-2 top-2">{t("Careers.LeftCardLevel")}</span>
                </div>
                
                <i className="fas fa-code text-3xl text-green-500 mb-3"></i>
                <h3 className="text-custom-color2 text-lg font-semibold mb-2 text-xl">{t("Careers.LeftCardHeader")}</h3>
                <p className="text-gray-700 text-center max-w-xs text-lg">{t("Careers.LeftCardContent")}</p>
                <a href="/jobPosition" className="mt-4 bg-custom-bg-color2 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 text-base">{t("Careers.buttomLeft")}</a>
            </div>
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-lg flex flex-col items-center justify-center relative">
                <div className="flex items-center justify-end mb-2">
                    <span className="bg-orange-300 text-white px-2 py-1 rounded-full uppercase text-sm absolute right-2 top-2">{t("Careers.RightCardLevel")}</span>
                </div>
                <i className="fas fa-cogs text-3xl text-green-500 mb-3"></i>
                <h3 className="text-custom-color2 ext-lg font-semibold mb-2 text-xl">{t("Careers.RightCardHeader")}</h3>
                <p className="text-gray-700 text-center max-w-xs text-lg">{t("Careers.RightCardContent")}</p>
                <a href="/jobPosition" className="mt-4 bg-custom-bg-color2 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 text-base">{t("Careers.buttomLeft")}</a>
            </div>
        </div>
    </div>
</div>

            <Footer />
        </>


    )
}

export default Contact;