import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function RightNav() {
  return (
    <div className='right_nav hidden sm:block'>
      <ul className=" list-none flex items-center gap-10 text-xl font-medium text-black cursor-pointer">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300"
            }
          >
            HOME
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/facilities"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300"
            }
          >
            FACILITIES
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300"
            }
          >
            CONTACT US
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition duration-300"
            }
          >
            ABOUT US
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default RightNav