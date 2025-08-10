import React from 'react';
import { NavLink } from 'react-router-dom';

const Facilities = () => {
  const facilitiesArr = [
    { image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573867/ecg_sszl5v.jpg", name: "Electrocardiogram" },
    { image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573866/bloodsample_lw9chz.jpg", name: "Blood Collect From Home" },
    { image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573867/bloodcollection_qu9duw.png", name: "Blood Collection" }
  ];

  function reloadPage() {
    location.reload();
  }

  return (
    <div className="facilities w-full bg-gradient-to-br from-blue-50 via-gray-50 to-green-50 px-8 py-12">
      
      {/* Facilities Cards - Horizontal Display */}
      <div id="facilities" className="flex items-center justify-center gap-8 flex-wrap mb-12 cursor-pointer">
        {facilitiesArr.map((item, index) => (
          <div 
            key={index} 
            className="facility_card group h-[280px] w-[280px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            <div className='h-[75%] w-full overflow-hidden'>
              <img 
                src={item.image} 
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" 
                alt={item.name} 
              />
            </div>
            <div className='h-[25%] flex items-center justify-center px-4 bg-gradient-to-r from-blue-50 to-green-50'>
              <h1 className="text-center text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {item.name}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className='flex items-center justify-center gap-4 w-full'>
        <button className='group bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full font-semibold text-[12px] sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-none cursor-pointer flex items-center gap-2'>
          <i className="ri-calendar-fill group-hover:scale-110 transition-transform duration-200"></i>
          <span><NavLink to="/book-appointment">Book Appointment</NavLink></span>
        </button>
        
        <button className='group bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold text-[12px] sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-none cursor-pointer'>
          <a href="tel:9646548046" className="flex items-center gap-2 text-white no-underline">
            <i className="ri-phone-fill group-hover:rotate-12 transition-transform duration-200"></i>
            <span>Call Now</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Facilities;