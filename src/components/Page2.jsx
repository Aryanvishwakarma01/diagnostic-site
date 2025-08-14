import React from 'react';
import { NavLink } from 'react-router-dom';

const Page2 = () => {
  return (
    <div className="page2 relative flex w-full flex-col sm:flex-row px-6 sm:px-16 py-12 sm:py-10 justify-between items-center bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-[600px]">
      
      {/* Left Section */}
      <div className="page2_left relative w-full sm:w-[55%] p-4 sm:p-0 flex flex-col gap-8">
        
        {/* Heading */}
        <div className="text-center sm:text-left">
          <h1 className='text-2xl sm:text-4xl font-bold leading-tight text-gray-800 mb-4'>
            Welcome to <span className='text-orange-500'>Harsh Lab & Diagnostic</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto sm:mx-0 rounded-full"></div>
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <p className='text-sm sm:text-lg text-gray-700 leading-relaxed text-center sm:text-justify'>
            Harsh Lab & Diagnostic, located in Sector 22, Mohali, is a trusted name among diagnostic centers in the region. Known for its accurate and timely services, it has quickly earned a strong reputation. The center is supported by a dedicated team committed to providing quality care to patients from both nearby and distant areas.
          </p>
        </div>

        {/* Buttons */}
        <div className="page2_buttons flex items-center justify-center sm:justify-start gap-4 flex-wrap">
          
          {/* Read More Button */}
          <NavLink 
            to="/about" 
            className="group bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-full font-semibold text-[12px] sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <i className="ri-book-open-fill group-hover:scale-110 transition-transform duration-300"></i>
            <span>Read More</span>
          </NavLink>

          {/* Call Now Button */}
          <a 
            href="tel:9646548046" 
            className="group bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold text-[12px] sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <i className="ri-phone-fill group-hover:rotate-12 transition-transform duration-200"></i>
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* Image Section */}
     {/* Image Section */}
<div className="page2_right group w-full sm:w-[30%] max-w-[250px] sm:max-w-[400px] flex justify-center mt-6 sm:mt-0">
  <img 
    src="https://res.cloudinary.com/dfnbm55zk/image/upload/v1755183071/WhatsApp_Image_2025-08-13_at_1.20.42_AM_lpk4az.jpg" 
    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl" 
    alt="Medical Ultrasound Equipment"
  />
</div>

      
    </div>
  );
};

export default Page2;
