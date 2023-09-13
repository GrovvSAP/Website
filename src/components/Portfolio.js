import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [t, i18n] = useTranslation('global');
  const [isLoading, setIsLoading] = useState(true);
  const isRTL = i18n.language === 'en';

  useEffect(() => {
    // Mark loading as complete
    setIsLoading(false);
  }, [isRTL, i18n]);

  // Render loading screen while isLoading is true
  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <div className="my-4 py-4" id='portfolio'>
        <h2 className=" text-custom-color2 my-2 text-center text-3xl text-green-900 uppercase font-bold">{t("Competence.header")}</h2>
        <div className='flex justify-center'>
          <div className='w-24 border-b-4 border-green-900 mb-8'></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h4 className="text-custom-color2 font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{t("Competence.DMC_H")}</h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                  {t("Competence.DMC_C")}
                </p>
                <div className="flex justify-center my-4">
                  <a
                    href="https://www.sap.com/products/scm/digital-manufacturing-cloud.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    {t("Competence.Butoom")}
                    <svg className={`w-4 h-4 ml-1 ${isRTL ? 'transform scale-x-[1]' : 'lg:transform scale-x-[-1]'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="text-custom-color2  font-semibold  my-4 text-lg md:text-2xl text-center mb-4 h-12">{t("Competence.ME_H")}</h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                  {t("Competence.MII_C")}
                </p>
                <div className="flex justify-center my-4">
                  <a
                    href="https://www.sap.com/products/scm/execution-mes.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    {t("Competence.Butoom")}
                    <svg className={`w-4 h-4 ml-1 ${isRTL ? 'transform scale-x-[1]' : 'lg:transform scale-x-[-1]'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="text-custom-color2 font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{t("Competence.MII_H")}</h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                  {t("Competence.MII_C")}
                </p>
                <div className="flex justify-center my-4">
                  <a
                    href="https://www.sap.com/products/scm/manufacturing-intelligence-integration.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    {t("Competence.Butoom")}
                    <svg className={`w-4 h-4 ml-1 ${isRTL ? 'transform scale-x-[1]' : 'lg:transform scale-x-[-1]'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="text-custom-color2 font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12"> {t("Competence.Fiori_H")}</h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                  {t("Competence.Fiori_C")}
                </p>
                <div className="flex justify-center my-4">
                  <a
                    href="https://www.sap.com/products/technology-platform/fiori.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    {t("Competence.Butoom")}
                    <svg className={`w-4 h-4 ml-1 ${isRTL ? 'transform scale-x-[1]' : 'lg:transform scale-x-[-1]'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>   
          </div>
          <div className="text-center my-4"></div>
          <div className="flex items-center justify-center">
            <a
              id="yaniv"
              href="/Competence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center mx-auto w-auto px-4 py-3 my-4 text-lg shadow-xl rounded-xl"
            >
              {t("Competence.Butoom2")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
