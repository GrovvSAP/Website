import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../Navbar/NavLinks';
import img from '../../images/logotrasnparent.png'; 
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top &&'bg-white shadow-lg' }`}>
<div className="flex flex-row justify-between items-center py-2">


{/* Grovv logo */}
	<div className="flex justify-start items-center md:px-6 text-center font-semibold w-1/4">
		<HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-500" smooth to="/">
			<img alt="card img" className="logo" src={img}/>
		</HashLink>
	</div>

	<div className="group flex flex-col items-center">

{/* Hamburger icon */}
      <button className="p-2 rounded-lg lg:hidden text-blue-500" onClick={handleClick}>
		      <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		        	<path d="M2 18h20v-2H2v2zm0-5h20v-2H2v2zm0-7v2h20V6H2z"/>
		      </svg>
	    </button>

{/* Routes */}
	<div className='hidden space-x-6 lg:inline-block p-5'>
		<NavLinks/>
	</div>


{/* Routes in small screen */}
	<div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white rounded-lg block lg:hidden shadow-xl top-14 ${isOpen ?"block" :"hidden" }`}>
	    <div className='flex flex-col space-y-6'>
	    	<NavLinks/>
	    </div>
  </div>


</div>
</div>
</nav>

    )
    
}


export default NavBar;
