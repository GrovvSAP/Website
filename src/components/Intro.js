import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';


// language toggle button////
import { useTranslation } from 'react-i18next';

const Intro = () => {

// language toggle button////
    const[t, i18n] = useTranslation("global");
    const isRTL = i18n.language === 'en';
    const func = (lang)=>{

        i18n.changeLanguage(lang);
// language toggle button////

    };
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>





                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className={`text-custom-color2 text-3xl font-bold ${isRTL ? 'text-left' : 'lg:text-right'} `}> {t("hero2.header")}</h3>
                            <div>
                                <p className={`my-3 text-xl text-gray-600 font-semibold ${isRTL ? 'text-left' : 'lg:text-right'} `}>{t("hero2.paragraph")}</p>
                            </div>
                            
                            <div>
                                <p className={`my-3 text-xl text-gray-600 font-semibold ${isRTL ? 'text-left' : 'lg:text-right'} `}>{t("hero2.paragraph2")}</p>
                            </div>
                            <div className={`mb-4 space-x-0 md:space-x-2 md:mb-8 ${isRTL ? 'text-left' : 'lg:text-right'} `}>
                            <Link to="/contact" className="bg-custom-bg-color2   text-white  hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                            {t("hero2.button")}
                            <svg className={`w-4 h-4 ml-1 ${isRTL ? 'transform scale-x-[1]' : 'lg:transform scale-x-[-1]'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>



                
              
            
        </>
    )
}

export default Intro;