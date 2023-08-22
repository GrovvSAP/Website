import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-green-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">SAP DMC</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                SAP DMC, or Data Management Console, is a vital SAP component for streamlined data governance. It centralizes data quality monitoring, integration, and lifecycle management, enhancing consistency and informed decision-making. This tool empowers businesses to optimize data assets, ensuring integrity and compliance while driving operational efficiency.
                                </p>
                                <div className="flex justify-center my-4">
      <a
        href="https://www.sap.com/products/scm/digital-manufacturing-cloud.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
      >
        Read More 
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">SAP ME</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                SAP ME (Manufacturing Execution) serves as a crucial link between shop floor operations and business systems. By enabling real-time data exchange and process synchronization, it enhances production efficiency, quality, and agility, ultimately leading to more informed decision-making and streamlined manufacturing workflows.
                                </p>
                                <div className="flex justify-center my-4">
      <a
        href="https://www.sap.com/products/scm/execution-mes.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
      >
        Read More 
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
    
                                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-green-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">SAP MII</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                SAP MII, or Manufacturing Integration and Intelligence, is a key SAP solution for manufacturing processes. It integrates shop floor data with business systems, enabling real-time visibility and control. This tool empowers businesses to optimize production, enhance efficiency, and make informed decisions by leveraging actionable insights from manufacturing data. SAP MII bridges the gap between the shop floor and the business, facilitating streamlined operations and improved collaboration.
                                </p>
                                <div className="flex justify-center my-4">
      <a
        href="https://www.sap.com/products/scm/manufacturing-intelligence-integration.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
      >
        Read More 
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">SAP Fiori</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                SAP Fiori is a user experience (UX) design approach and a collection of applications that provide a consistent and intuitive interface across SAP software. It focuses on delivering a modern, responsive, and user-centric experience for various business processes. By simplifying and harmonizing the user interaction with SAP applications, Fiori enhances usability, productivity, and user satisfaction. The Fiori design principles are applied to a wide range of applications, spanning from analytics and workflows to transactional tasks, creating a unified and visually appealing experience for users interacting with SAP systems.
                                </p>
                                <div className="flex justify-center my-4">
      <a
        href="https://www.sap.com/products/technology-platform/fiori.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
      >
        Read More 
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
    
                            </div>
                            
                        </div>   
          
          {/*  aaa*/}
                    </div>
                    <div className="text-center my-4"></div>
                    <div className="flex items-center justify-center">
  <a
    id="yaniv"
    href="/Competence"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white bg-green-500 hover:bg-green-800 inline-flex items-center justify-center mx-auto w-auto px-4 py-3 my-4 text-lg shadow-xl rounded-xl"
  >
    See all products
    <svg
      className="w-4 h-4 ml-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </a>
</div>




                </div>
            </div>
        </>
    )
}

export default Portfolio;