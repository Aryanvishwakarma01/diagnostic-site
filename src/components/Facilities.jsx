import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'
const Facilities = () => {
  const facilitiesArr = [
    { image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573867/ecg_sszl5v.jpg", name: "Electrocardiogram" },
    { image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573866/bloodsample_lw9chz.jpg", name: "Blood Collect From Home" },
    { image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573867/bloodcollection_qu9duw.png", name: "Blood Collection" }
  ];

  function reloadPage() {
    location.reload(); // This reloads the current page
  }
  return (
    <div className="facilities w-full bg-gray-200 px-[30px] py-[25px] sm:p-15 flex flex-col gap-8 sm:gap-15">
      
      <div id="facilities" className="flex items-center justify-center flex-col gap-15 sm:flex-row sm:gap-10 cursor-pointer">
        {facilitiesArr.map((item, index) => (
          <div key={index} className="facility_card h-[250px] sm:h-[250px] w-[200px] sm:w-[350px] bg-white rounded-xl overflow-hidden shadow-md mx-auto">
            <img src={item.image} className="h-[88%] sm:h-[85%] w-full object-cover" alt={item.name} />
            <h1 className="text-center py-2 text-[14px] sm:text-xl font-bold">{item.name}</h1>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center gap-5'>
        <button className='border py-3 sm:py-4 px-6 sm:px-10 text-[12px] sm:text-[18px] rounded-4xl bg-red-500 hover:bg-red-700 border-none transition duration-300 text-white font-bold cursor-pointer'><NavLink className="flex items-center gap-2" to="/book-appointment"><FaCalendarAlt className='inline' />Book Appointment</NavLink></button>
        <button className='border py-3 sm:py-4 px-6 sm:px-10 text-[12px] sm:text-[18px] rounded-4xl bg-green-700 hover:bg-orange-500 transition duration-300  text-white font-bold cursor-pointer'><a href="tel:9646548046"><i className="ri-phone-fill"></i> Call Now</a>
        </button>
      </div>
    </div>
  );
};

export default Facilities;
