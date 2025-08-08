import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function RightNav() {
  return (
    <div className='right_nav hidden sm:block'>
      <ul className=" list-none flex items-center gap-10 text-[20px] font-medium text-black cursor-pointer">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300"
            }
          >
            Home
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/facilities"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300"
            }
          >
            Facilities
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300"
            }
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300"
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default RightNav