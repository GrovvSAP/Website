import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/logotrasnparent.png'; 
const NavLinks = () => {
    return (
        <>
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/#about">
                About Grovv
            </HashLink> */}
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/">
                About Grovv
            </HashLink>
            
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/Services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/Competence">
                Competence - Portfolio
            </HashLink>


            
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500"  to="/roman">
                Partners
            </HashLink>



            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" to="/clients2">
                Costumers
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" to="/contact">
                Contact Us
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" to="/careers">
                Careers
            </HashLink>
            {/* <Link className="text-white bg-green-500 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo">
                Demo our products
            </Link> */}
        </>
    )
}

export default NavLinks;