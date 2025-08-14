import { Link, NavLink } from 'react-router-dom';
import RightNav from './RightNav';
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  const [phoneOpen, setPhoneOpen] = useState(false)

  return (
    <div className='navbar w-full flex items-center justify-between px-[20px] sm:px-20 py-[10px] sm:py-0 relative'>
      <div className="left_nav">
        <img src="https://res.cloudinary.com/dfnbm55zk/image/upload/v1755190635/Harsh_Lab___Diagnostic_Logo-removebg-preview_sa1hju.png" alt="" className="w-[130px] sm:w-[250px]" />

      </div>

      <li className="phone_no text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-3 py-[4px] rounded-2xl sm:hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"><NavLink to="/book-appointment" className='text-[12px] font-bold flex items-center gap-1'><i className="ri-calendar-check-fill inline"></i>Book Appointment</NavLink></li>

      <IoIosMenu onClick={() => setPhoneOpen(prev => !prev)} className='menu_btn text-3xl cursor-pointer block sm:hidden' />
      <RightNav />

      <div className={`fixed w-full top-0 h-screen -left-[100%] z-50  bg-black/50 transition-all duration-300 ${phoneOpen && "left-0"}`}>
  <ul className="phone_menu z-51 list-none bg-white w-[60%] h-screen flex flex-col items-start px-5 py-15 gap-5 text-base font-medium text-black cursor-pointer relative">
    <IoCloseSharp onClick={() => setPhoneOpen(false)} className='absolute text-2xl border right-5 top-5' />
    
  
      <NavLink onClick={() => setPhoneOpen(false)}
        to="/"
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300 w-full"
        }
      >
        Home
      </NavLink>
    
       
      <NavLink onClick={() => setPhoneOpen(false)}
        to="/packages"
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300 w-full"
        }
      >
        Packages
      </NavLink>
  
      <NavLink onClick={() => setPhoneOpen(false)}
        to="/Facilities"
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300 w-full"
        }
      >
        Facilities
      </NavLink>
    
      <NavLink onClick={() => setPhoneOpen(false)}
        to="/contact-us"
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300 w-full"
        }
      >
        Contact Us
      </NavLink>
    
      <NavLink onClick={() => setPhoneOpen(false)}
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300 w-full"
        }
      >
       About Us
      </NavLink>
  
  </ul>
</div>
    </div>
  )
}

export default Navbar