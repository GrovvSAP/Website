import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { useDocTitle } from '../components/CustomHook';
import emailjs from '@emailjs/browser';
import './Careers.css';

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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  }

  const clearInput = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_d82ze2f', 'template_aloxwud', e.target, 'NwypP86Fv71GM6sTO')
      .then((result) => {
        alert("Your message sent successfully!!");
        clearInput(); // Reset input fields
      }, (error) => {
        console.log(error.text);
      });
  }


    return (
        <>
	<div>
		<NavBar/>
	</div>
	<div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <div className="flex flex-col md:flex-row space-y-4 md:space-x-12">
            <div className="w-full md:w-7/12">
					<h3 className="text-custom-color2 font-bold text-lg mt-6 mb-2"> {t("JobDescription.Responsibilities")}</h3>
					<ul className="list-disc ml-8">
						<li>{t("JobDescription.bullet1")}</li>
						<li>{t("JobDescription.bullet2")}</li>
						<li>{t("JobDescription.bullet3")}</li>
						<li>{t("JobDescription.bullet4")}</li>
						<li>{t("JobDescription.bullet5")}</li>
						<li>{t("JobDescription.bullet6")}</li>
					</ul>
					<h3 className="text-custom-color2 font-bold text-lg mt-6 mb-2">{t("JobDescription.Requirements")}</h3>
					<ul className="list-disc ml-8">
						<li>{t("JobDescription.bullet_1")}</li>
						<li>{t("JobDescription.bullet_2")}</li>
						<li>{t("JobDescription.bullet_3")}</li>
						<li>{t("JobDescription.bullet_4")}</li>
						<li>{t("JobDescription.bullet_5")}</li>
						<li>{t("JobDescription.bullet_6")}</li>
						<li>{t("JobDescription.bullet_7")}</li>
						<li>{t("JobDescription.bullet_8")}</li>
						<li>{t("JobDescription.bullet_9")}</li>
					</ul>
				</div>
				<form onSubmit={sendEmail} className="w-full md:w-5/12 ml-0 md:ml-4">
              <div className="w-full bg-white p-4 md:p-8 my-4 md:px-12 rounded-2xl shadow-2xl">
						<h1 className="font-bold text-center text-custom-color2 lowerrcase text-4xl">{t("JobDescription.Form_header")} </h1>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
							<div>
								<input name="first_name" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder={t("JobDescription.FirstName" )} value={firstName} onChange={(e)=> setFirstName(e.target.value)} onKeyUp={clearErrors}/> {errors &&
								<p className="text-red-500 text-sm">{errors.first_name}</p>
                        }
                    </div>
							<div>
								<input name="last_name" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder={t("JobDescription.LastName" )} value={lastName} onChange={(e)=> setLastName(e.target.value)} onKeyUp={clearErrors}/> {errors &&
								<p className="text-red-500 text-sm">{errors.last_name}</p>
                        }
                    </div>
							<div>
								<input name="email" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder={t("JobDescription.Email" )} value={email} onChange={(e)=> setEmail(e.target.value)} onKeyUp={clearErrors}/> {errors &&
								<p className="text-red-500 text-sm">{errors.email}</p>
                        }
                    </div>
							<div>
								<input name="phone_number" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="number" placeholder={t("JobDescription.Phone" )} value={phone} onChange={(e)=> setPhone(e.target.value)} onKeyUp={clearErrors}/> {errors &&
								<p className="text-red-500 text-sm">{errors.phone_number}</p>
                        }
                    </div>
						</div>
						<div>
							<input name="email" className="w-full bg-gray-100 text-gray-900 mt-7 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder={t("JobDescription.Location(City)" )} value={email} onChange={(e)=> setEmail(e.target.value)} onKeyUp={clearErrors}/> {errors &&
							<p className="text-red-500 text-sm">{errors.email}</p>
                        }
                    </div>
						<div>
							<input name="email" className="w-full bg-gray-100 text-gray-900 mt-7 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder={t("JobDescription.Linkedin" )} value={email} onChange={(e)=> setEmail(e.target.value)} onKeyUp={clearErrors}/> {errors &&
							<p className="text-red-500 text-sm">{errors.email}</p>
                        }
                    </div>
						<div className="my-4">
							<textarea name="message" placeholder={t("JobDescription.Summery" )} className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" value={message} onChange={(e)=> setMessage(e.target.value)} onKeyUp={clearErrors}/> {errors &&
							<p className="text-red-500 text-sm">{errors.message}</p>
                    }
                </div>
						<div className="file-input-container">
							<label htmlFor="avatar">{t("JobDescription.FileLabel")}</label>
							<input type="file" id="avatar" name="avatar" accept=".png, .jpeg, .jpg, .pdf, .doc, .docx"/>
						</div>
						<div className="my-8 w-full lg:w-6/7 ml-auto">
							<button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-custom-bg-color2 hover:bg-green-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    {t("JobDescription.SubmitButtom")}
                    </button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
           
            
       


            <Footer/>
</>


    )
}

export default Contact;