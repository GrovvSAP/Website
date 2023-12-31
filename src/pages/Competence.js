import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [t, i18n] = useTranslation('global');
  const [isLoading, setIsLoading] = useState(true);
  const initialLanguage = localStorage.getItem('language') || 'en';
  const initialIsRTL = initialLanguage === 'he';
  const [isRTL, setIsRTL] = useState(initialIsRTL);

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


  
    return (
        <>
	<div>
		<NavBar/>
	</div>
	<div className="my-40 py-4" id='portfolio'>
		<h2 className="my-2 text-center text-3xl text-custom-color2 uppercase font-bold"> {t("Competence.header")}</h2>
		<div className='flex justify-center'>
			<div className='w-24 border-b-4 border-green-900 mb-8'/>
		</div>
		<div className="px-4" data-aos="fade-down" data-aos-delay="600">
			<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
				<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-custom-color2 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
					<div className="m-2 text-justify text-sm">
						<h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{t("Competence.DMC_H")}</h4>
						<p className="text-md font-medium leading-5 h-auto md:h-48">
                                  
                                {t("Competence.DMC_C")}
                                </p>
						<div className="flex justify-center my-4">
							<a href="https://www.sap.com/products/scm/digital-manufacturing-cloud.html" target="_blank" rel="noopener noreferrer" className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
        {t("Competence.Butoom")}
        {/* <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
								</svg> */}
      </a>
						</div>
					</div>
				</div>
				<div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-custom-color2 hover:scale-105 rounded-lg shadow-2xl p-3">
					<div className="m-2 text-justify text-sm">
						<h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{t("Competence.ME_H")}</h4>
						<p className="text-md font-medium leading-5 h-auto md:h-48">
                                {t("Competence.MII_C")}
                                </p>
						<div className="flex justify-center my-4">
							<a href="https://www.systema.com/portfolio/sap-manufacturing/sap-me" target="_blank" rel="noopener noreferrer" className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
        {t("Competence.Butoom")}
        {/* <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
								</svg> */}
      </a>
						</div>
                                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
							<li className="flex items-center space-x-2 px-8">
								<span className="bg-green-600 rounded-full p-1">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
									</svg>
								</span>
								<span className="text-gray-600 capitalize">Free Setup Guidance</span>
							</li>
						</ul> */}
                            </div>
				</div>
				<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-custom-color2 hover:scale-105 rounded-lg shadow-2xl p-3">
					<div className="m-2 text-justify text-sm">
						<h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{t("Competence.MII_H")}</h4>
						<p className="text-md font-medium leading-5 h-auto md:h-48">
                                    
                                {t("Competence.MII_C")}
                           
                                </p>
						<div className="flex justify-center my-4">
							<a href="https://www.sap.com/products/scm/manufacturing-intelligence-integration.html" target="_blank" rel="noopener noreferrer" className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
        {t("Competence.Butoom")}
        {/* <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
								</svg> */}
      </a>
						</div>
					</div>
				</div>
				<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-custom-color2 hover:scale-105 rounded-lg shadow-2xl p-3">
					<div className="m-2 text-justify text-sm">
						<h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{t("Competence.Fiori_H")}</h4>
						<p className="text-md font-medium leading-5 h-auto md:h-48">
                               
                                {t("Competence.Fiori_C")}
                                </p>
						<div className="flex justify-center my-4">
							<a href="https://www.sap.com/products/technology-platform/fiori.html" target="_blank" rel="noopener noreferrer" className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
        {t("Competence.Butoom")}
        {/* <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
								</svg> */}
      </a>
						</div>
					</div>
				</div>
				
      
				<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-custom-color2 hover:scale-105 rounded-lg shadow-2xl p-3">
					<div className="m-2 text-justify text-sm">
						<h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{t("Competence.PCO_H")}</h4>
						<p className="text-md font-medium leading-5 h-auto md:h-48">
                                {t("Competence.PCO_C")}
                                </p>
						<div className="flex justify-center my-4">
							<a href="https://www.systema.com/portfolio/sap-manufacturing/sap-pco" target="_blank" rel="noopener noreferrer" className="text-white bg-custom-bg-color2 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
        {t("Competence.Butoom")}
      
      </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer/>
</>


    )
}

export default Contact;


