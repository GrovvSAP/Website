import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import "./Careers.css";
import Cta from '../components/Cta';
import Cta2 from '../components/Cta2';

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

            <div id="why-section" className="bg-gray-100 py-12 mt-32">
    <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Should You Work With Us?</h2>
        <p className="text-gray-700 mb-8">We have a lot to offer to our team members. Here are a few reasons why you'll love working with us:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-full flex flex-col items-center justify-center">
                <i className="fas fa-briefcase text-3xl text-green-500 mb-3"></i>
                <h3 className="text-lg font-semibold mb-2">Exciting Opportunities</h3>
                <p className="text-gray-700 text-center max-w-xs">Join a dynamic team and work on challenging projects that will help you grow professionally.</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-full flex flex-col items-center justify-center">
                <i className="fas fa-users text-3xl text-green-500 mb-3"></i>
                <h3 className="text-lg font-semibold mb-2">Collaborative Environment</h3>
                <p className="text-gray-700 text-center max-w-xs">Be part of a supportive and collaborative work culture that values teamwork and creativity.</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-full flex flex-col items-center justify-center">
                <i className="fas fa-chalkboard-teacher text-3xl text-green-500 mb-3"></i>
                <h3 className="text-lg font-semibold mb-2">Learning Opportunities</h3>
                <p className="text-gray-700 text-center max-w-xs">Access to continuous learning and professional development resources to enhance your skills.</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-full flex flex-col items-center justify-center">
                <i className="fas fa-heart text-3xl text-green-500 mb-3"></i>
                <h3 className="text-lg font-semibold mb-2">Employee Well-being</h3>
                <p className="text-gray-700 text-center max-w-xs">We prioritize the well-being of our employees, offering flexible work arrangements and more.</p>
            </div>
        </div>
    </div>
</div>

{/* <div className="bg-gray-100 py-12 mt-32">sdfsdf</div> */}




<Cta2/>


<div id="why-section" className="bg-gray-100 py-20 mt-">
    <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Explore Job Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-lg flex flex-col items-center justify-center relative">
                <div className="flex items-center justify-end mb-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full uppercase text-sm absolute right-2 top-2">Entry Level</span>
                </div>
                
                <i className="fas fa-code text-3xl text-green-500 mb-3"></i>
                <h3 className="text-lg font-semibold mb-2 text-xl">SQL Developer</h3>
                <p className="text-gray-700 text-center max-w-xs text-lg">Join our team as an SQL Developer and work on building, maintaining, and optimizing our database systems. Collaborate with cross-functional teams to design and implement efficient SQL queries and database solutions.</p>
                <a href="/jobPosition" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 text-base">Apply Now</a>
            </div>
            <div className="bg-white p-6 shadow-md hover:bg-green-200 transition duration-300 rounded-lg flex flex-col items-center justify-center relative">
                <div className="flex items-center justify-end mb-2">
                    <span className="bg-orange-300 text-white px-2 py-1 rounded-full uppercase text-sm absolute right-2 top-2">Mid - Senior</span>
                </div>
                <i className="fas fa-cogs text-3xl text-green-500 mb-3"></i>
                <h3 className="text-lg font-semibold mb-2 text-xl">Project Manager</h3>
                <p className="text-gray-700 text-center max-w-xs text-lg">We're seeking a dedicated Project Manager to lead and oversee various projects from initiation to completion. Collaborate with stakeholders, manage resources, and ensure successful project delivery while adhering to timelines.</p>
                <a href="/jobPosition" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 text-base">Apply Now</a>
            </div>
        </div>
    </div>
</div>



{/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}

{/* <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
    <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        <div className="flex space-x-12"> 
            <div className="w-6/12"> 
             
            </div> */}
{/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}


         
        
                {/* </div>
            </div>
             </div> */}
            {/* BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB */}
            
       


            <Footer />
        </>


    )
}

export default Contact;