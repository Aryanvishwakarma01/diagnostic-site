import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function RightNav() {
  return (
    <div className='right_nav'>
      <ul className=" list-none flex items-center gap-10 text-base font-medium text-black cursor-pointer">
        <li className="transition">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500"
            }
          >
            HOME
          </NavLink>
        </li>


        <li className="transition">
          <NavLink
            to="/Facility"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500"
            }
          >
            FACILITIES
          </NavLink>
        </li>

        <li className="transition">
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500"
            }
          >
            CONTACT US
          </NavLink>
        </li>
        <li className="transition">
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black hover:text-orange-500"
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