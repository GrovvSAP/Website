import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AiFillLinkedin } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const Footer = () => {
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

  const handleToggle = () => {
    setIsRTL((prevIsRTL) => !prevIsRTL);
  };

  if (isLoading) {
    return <div></div>;
  }


    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-gre-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="text-custom-color2 font-bold text-4xl mb-4">{t("Footer.FirstSection.header")}</h3>
                            <div className='text-md font-medium text-custom-color2'>
                                
                                <p>{t("Footer.FirstSection.paragraph1")}</p>
                                <p>{t("Footer.FirstSection.paragraph2")}</p>
                                <p>{t("Footer.FirstSection.paragraph3")}</p>
                            </div>
                        </div>
                    </div>
                    

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#203749] text-xl font-bold mb-4">{t("Footer.SecondSection.header")}</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.SecondSection.About")} </HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.SecondSection.Services")}</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.SecondSection.Competence")}</HashLink>
                        </li>     
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.SecondSection.Partners")}</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.SecondSection.Costumers")}</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.SecondSection.Contact Us")}</HashLink>
                        </li>   
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.SecondSection.Careers")}</HashLink>
                        </li> 
                                       
                        </ul>
                    </div>

                    

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className=" text-custom-color2 text-[#203749] text-xl font-bold mb-4">{t("Footer.ThirdSection.header")}</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.Specification")}</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.ProcessAnalysess")}</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.SystemImplementation")}</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.User&AcceptanceTests")}</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.SystemIntegration")}</Link>
                        </li>

                        <li className="mb-2">
                            <Link to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.CustomTailorMadeDevelopments")}</Link>
                        </li>

                        <li className="mb-2">
                            <Link to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.DataMigration")}</Link>
                        </li>

                        <li className="mb-2">
                            <Link to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.ProjectManagement")}</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#203749] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">{t("Footer.ThirdSection.UI/UXuserExperience")}</Link>
                        </li>

                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-custom-color2">
                        <div className="text-xl mb-6">
                        {t("Footer.ForthSection.header")}
                        </div>

                                <div className="text-md font-medium mb-6">
                                {t("Footer.ForthSection.paragraph")}
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">

                                <div className="flex my-4 w-2/3 lg:w-1/2 ml-16">
                        <a href="https://www.linkedin.com/company/grovv-systems/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-green-900  w-8 inline-block mx-1 text-center pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                        </a>
                    </div>

        
        
        
                                    {/* <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-gre-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                    </div>          

                    </div>

                    {/* <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Molad e Konsult
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div> */}

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
