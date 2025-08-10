import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function RightNav() {
  return (
    <div className='right_nav hidden sm:block'>
      <ul className="list-none flex items-center gap-8 text-lg font-semibold cursor-pointer">
        
        <li className="relative group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive 
                ? "text-orange-500 font-bold" 
                : "text-gray-700 hover:text-orange-500 transition-all duration-300 group-hover:scale-105"
            }
          >
            Home
          </NavLink>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
        </li>
          
        <li className="relative group">
          <NavLink
            to="/facilities"
            className={({ isActive }) =>
              isActive 
                ? "text-orange-500 font-bold" 
                : "text-gray-700 hover:text-orange-500 transition-all duration-300 group-hover:scale-105"
            }
          >
            Facilities
          </NavLink>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
        </li>

        <li className="relative group">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive 
                ? "text-orange-500 font-bold" 
                : "text-gray-700 hover:text-orange-500 transition-all duration-300 group-hover:scale-105"
            }
          >
            Contact Us
          </NavLink>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
        </li>

        <li className="relative group">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive 
                ? "text-orange-500 font-bold" 
                : "text-gray-700 hover:text-orange-500 transition-all duration-300 group-hover:scale-105"
            }
          >
            About Us
          </NavLink>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
        </li>

        <li className="ml-4">
          <NavLink
            to="/book-appointment"
            className={({ isActive }) =>
              isActive 
                ? "text-white bg-red-600 px-6 py-3 rounded-full font-bold shadow-lg transform scale-105" 
                : "text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            }
          >
            <i className="ri-calendar-check-fill"></i>
            Book Appointment
          </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default RightNav