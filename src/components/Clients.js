

import Barkan from '../images/clients/Barkan.png';
import Mekorot from '../images/clients/Mekorot.png';
import temo from '../images/clients/temo.png';
import Avgol from '../images/clients/Avgol.png';
import PCB from '../images/clients/PCB.png';
import Moog from '../images/clients/Moog.png';
import Nilit from '../images/clients/Nilit.png';
import sap from '../images/clients/sap.png';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

const clientImage = {
    height: '10rem',
    width: '100%',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
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
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">{t("Clients.header")}</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-green-900'></div>
                        </div>
                        {/* <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-900">Some of our clients.</h2> */}
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-4 lg:grid-cols-4">
                        <div style={{...clientImage,paddingBottom:'2rem'}}className= "overflow-hidden flex justify-center transition-all  hover:opacity-100 w-1/6">
                            <img src={Barkan} alt="client" />                           
                        </div>

                        <div style={{...clientImage,paddingBottom:'2rem'}} className="overflow-hidden p-3 flex justify-center transition-all  hover:opacity-100">
                            <img src={temo} alt="client" />                            
                        </div> 

                      

                        <div style={{...clientImage,paddingBottom:'2rem'}} className="overflow-hidden p-3 flex justify-center transition-all  hover:opacity-100">
                            <img src={Avgol} alt="client" />                            
                        </div>
                        
                      

                        <div style={{...clientImage,paddingBottom:'2rem'}} className="overflow-hidden p-3 flex justify-center transition-all  hover:opacity-100">
                            <img src={Mekorot} alt="client" />                            
                        </div>

                        <div style={{ ...clientImage, paddingTop: '2rem' }} className="overflow-hidden p-3 flex justify-center transition-all  hover:opacity-100">
                            <img src={PCB} alt="client" />                            
                        </div>

                        <div style={{ ...clientImage, paddingTop: '2rem' }} className="overflow-hidden p-3 flex justify-center transition-all  hover:opacity-100">
                            <img src={Moog} alt="client" />                            
                        </div>

                        <div style={{ ...clientImage, paddingTop: '2rem' }} className="overflow-hidden p-3 flex justify-center transition-all  hover:opacity-100">
                            <img src={Nilit} alt="client" />                            
                        </div>

                        <div style={{ ...clientImage, paddingTop: '2rem' }} className="overflow-hidden p-3 flex justify-center transition-all  hover:opacity-100">
                            <img src={sap} alt="client" />                            
                        </div>
    
    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;