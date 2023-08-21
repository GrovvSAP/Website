import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import "./Careers.css";
import emailjs from '@emailjs/browser';

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










    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     document.getElementById('submitBtn').disabled = true;
    //     document.getElementById('submitBtn').innerHTML = 'Loading...';
    //     let fData = new FormData();
    //     fData.append('first_name', firstName)
    //     fData.append('last_name', lastName)
    //     fData.append('email', email)
    //     fData.append('phone_number', phone)
    //     fData.append('message', message)

    //     axios({
    //         method: "post",
    //         url: process.env.REACT_APP_CONTACT_API,
    //         data: fData,
    //         headers: {
    //             'Content-Type':  'multipart/form-data'
    //         }
    //     })
    //     .then(function (response) {
    //         document.getElementById('submitBtn').disabled = false;
    //         document.getElementById('submitBtn').innerHTML = 'send message';
    //         clearInput()
    //         //handle success
    //         Notiflix.Report.success(
    //             'Success',
    //             response.data.message,
    //             'Okay',
    //         );
    //     })
    //     .catch(function (error) {
    //         document.getElementById('submitBtn').disabled = false;
    //         document.getElementById('submitBtn').innerHTML = 'send message';
    //         //handle error
    //         const { response } = error;
    //         if(response.status === 500) {
    //             Notiflix.Report.failure(
    //                 'An error occurred',
    //                 response.data.message,
    //                 'Okay',
    //             );
    //         }
    //         if(response.data.errors !== null) {
    //             setErrors(response.data.errors)
    //         }
            
    //     });
    // }


    return (
        <>
            <div>
                <NavBar />
            </div>

     






{/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}

<div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
    <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        <div className="flex space-x-12">
            <div className="w-7/12">
                

                

                

                <h3 className="text-dark-green font-bold text-lg mt-6 mb-2">Responsibilities</h3>
                <ul className="list-disc ml-8">
                    <li>Gather requirements, design, develop, test, implement and support robust and scalable end-to-end BI solutions to improve business analysis capabilities.</li>
                    <li>Translate business needs into data models by collaborating with analysts, developers and stakeholders across the company.</li>
                    <li>Assist in the design of data warehouses to ensure compatibility and scalability with BI solutions.</li>
                    <li>Create meaningful data visualizations to better communicate data insights to the business teams.</li>
                    <li>Support and train end-users for maximizing BI solutions effectiveness.</li>
                    <li>Support and maintain existing implementations.</li>
                </ul>

                <h3 className="text-dark-green font-bold text-lg mt-6 mb-2">Requirements:</h3>
                <p>Apply if you have:</p>
                <ul className="list-disc ml-8">
                    <li>B.Sc. in Information System Engineering / Industrial Engineering or equivalent</li>
                    <li>Proficient in SQL and Excel</li>
                    <li>Understanding of relational database and ETL processes concepts</li>
                    <li>Experience with data visualization tools such as Looker, Tableau, QlikView</li>
                    <li>Excellent communication and leadership skills</li>
                    <li>Team player</li>
                    <li>Service-oriented</li>
                    <li>High attention to detail</li>
                    <li>Fast learner, team player, independent with a positive attitude and passion for data</li>
                </ul>

            

            </div>
{/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}


         
        <form onSubmit={sendEmail} className="w-6/12 ml-4">
        <div className="w-full bg-white p-8 my-4 md:px-12 rounded-2xl shadow-2xl">
                    <h1 className="font-bold text-center text-green-900 lowerrcase text-4xl">Apply </h1>
                
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <div>
                        <input 
                            name="first_name" 
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" 
                            placeholder="First Name*" 
                            value={firstName}
                            onChange={(e)=> setFirstName(e.target.value)}
                            onKeyUp={clearErrors}
                        />
                        {errors && 
                            <p className="text-red-500 text-sm">{errors.first_name}</p>
                        }
                    </div>
                    <div>
                        <input 
                            name="last_name" 
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" 
                            placeholder="Last Name*"
                            value={lastName}
                            onChange={(e)=> setLastName(e.target.value)}
                            onKeyUp={clearErrors}
                        />
                        {errors && 
                            <p className="text-red-500 text-sm">{errors.last_name}</p>
                        }
                    </div>
                    <div>
                        <input 
                            name="email"
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" 
                            placeholder="Email*"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            onKeyUp={clearErrors}   
                        />
                        {errors && 
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        }
                    </div>
                    <div>
                        <input
                            name="phone_number" 
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" 
                            placeholder="Phone*"
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                            onKeyUp={clearErrors}
                        />
                        {errors && 
                            <p className="text-red-500 text-sm">{errors.phone_number}</p>
                        }
                    </div>
                </div>
                    <div>
                        <input 
                            name="email"
                            className="w-full bg-gray-100 text-gray-900 mt-7 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" 
                            placeholder="Location (City)*"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            onKeyUp={clearErrors}   
                        />
                        {errors && 
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        }
                    </div>
                    <div>
                        <input 
                            name="email"
                            className="w-full bg-gray-100 text-gray-900 mt-7 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" 
                            placeholder="LinkedIn Profile URL *"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            onKeyUp={clearErrors}   
                        />
                        {errors && 
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        }
                    </div>


        <div className="my-4">
                    <textarea 
                        name="message" 
                        placeholder="Tell us about yourself" 
                        className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        value={message}
                        onChange={(e)=> setMessage(e.target.value)}
                        onKeyUp={clearErrors}
                    ></textarea>
                    {errors && 
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    }
                </div>

                <div className="file-input-container">
  <label htmlFor="avatar">Upload your CV</label>
  <input
    type="file"
    id="avatar"
    name="avatar"
    accept=".png, .jpeg, .jpg, .pdf, .doc, .docx"

  />
</div>




                
                <div className="my-8 w-full lg:w-6/7 ml-auto">
                    <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-green-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
                </div>

                </form>

                </div>
            </div>
             </div>
            {/* BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB */}
            
       


            <Footer />
        </>


    )
}

export default Contact;