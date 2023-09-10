import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Clients2 from './pages/Clients2';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Competence from './pages/Competence';
import AboutGrovv from './pages/AboutGrovv';
import Roman from './pages/Roman';
import JobDescription from './pages/JobDescription';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Services from './pages/Services';


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Grovv");
  

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/clients2" element={<Clients2 />} /> 
            <Route path="/careers" element={<Careers />} /> 
            <Route path="/partners" element={<Careers />} /> 
            <Route path="/Competence" element={<Competence />} /> 
            <Route path="/About" element={<AboutGrovv />} /> 
            <Route path="/services" element={<Services />} />
            <Route path="/roman" element={<Roman />} /> 

            <Route path="/jobPosition" element={<JobDescription />} /> 
            <Route path="/yaniv" element={<AboutGrovv />} /> 

          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
