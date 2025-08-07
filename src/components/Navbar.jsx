import { Link, NavLink } from 'react-router-dom';
import RightNav from './RightNav';
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';


function Navbar() {
  const [phoneOpen, setPhoneOpen] = useState(false)

  return (
    <div className='navbar w-full flex items-center justify-between px-20 py-0 relative'>
      <div className="left_nav">
        <img src="https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573868/logo_jzzyxd.png" alt="" className="w-[250px]" />

      </div>
      <li className="phone_no hover:bg-orange-500 bg-green-600 p-2 text-white transition-all duration-400 hidden"><a href="tel:9646548046"> +91-9646548046</a></li>
      <IoIosMenu onClick={() => setPhoneOpen(prev => !prev)} className='menu_btn text-4xl cursor-pointer sm:hidden' />
      <RightNav />

      <div className={`fixed w-full top-0 h-screen -left-[100%] z-50  bg-black/50 transition-all duration-300 ${phoneOpen && "left-0"}`}>
        <ul className="phone_menu z-51 list-none bg-white w-[60%] h-screen flex flex-col items-start px-5 py-15 gap-5 text-base font-medium text-black cursor-pointer relative">
          <IoCloseSharp onClick={() => setPhoneOpen(false)} className='absolute text-2xl border right-5 top-5' />
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
              to="/Facilities"
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
    </div>
  )
}

export default Navbar