import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

import img5 from '../images/SYSTEMA.png';
import img6 from '../images/sap.png';





const Contact = () => {
    useDocTitle('MLD | Molad e Konsult - Send us a message')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type':  'multipart/form-data'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            clearInput()
            //handle success
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            //handle error
            const { response } = error;
            if(response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if(response.data.errors !== null) {
                setErrors(response.data.errors)
            }
            
        });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>

            <div id="services" className="bg-gray-100 py-12"  style={{ marginTop: '120px' }}>
        <section data-aos="zoom-in-down">
            
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-85CD40 uppercase font-bold">services</h2>
                    
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-85CD40'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-85CD40">We cooperate with the largest companies in the economy</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto text-center"> {/* Add mx-auto and text-center */}
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
            <div className="m-2 text-justify text-sm">
                <img alt="card img" className="mx-auto rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img6} /> {/* Add mx-auto */}
                <h2 className="font-semibold my-4 text-2xl text-center">Systems, Applications, and Products </h2>
                <p className="text-md font-medium">
                 
SAP Company is a global leader recognized for its transformative software solutions that empower businesses by seamlessly integrating processes, data, and resources, driving operational excellence, and fostering innovation across industries.
                </p>
            </div>
        </div>

        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
            <div className="m-2 text-justify text-sm">
                <img alt="card img" className="mx-auto rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5}     /> {/* Add mx-auto */}
                <h2 className="font-semibold my-4 text-2xl text-center">Art of
Automation</h2>
                <p className="text-md font-medium">
                Systema Company stands as a pioneering technology firm, renowned for its cutting-edge software solutions that revolutionize and optimize various aspects of business operations, ultimately empowering organizations to achieve higher levels of efficiency, productivity, and success.
                </p>
            </div>
        </div>                    
    </div>
</div>

        </section>

        <section>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                    {/* <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <div className='text-85CD40 mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                        </div>
                        <h3 className="text-3xl  text-85CD40 
                        font-bold">We <span className='font-black'>Build</span></h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>
                                With over 10 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.
                            </p>
                        </div>
                    </div> */}
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <div className='text-85CD40 mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                        </div>
                        <h3 className="text-3xl  text-85CD40 font-bold">We <span className='font-black'>Collaborate</span></h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
            <Footer />
        </>


    )
}

export default Contact;


