import { Link, NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="footer w-full bg-gray-800 flex items-start justify-between px-2 sm:px-20 py-8">
        <div className="footer_card flex flex-col w-[30%] sm:w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-[18px] sm:text-2xl font-bold py-2">About Us</h1>
          <p className="text-sm text-center sm:text-justify">Harsha Lab & Diagnostic, located in [Sector/Area Name, City], is a trusted name among diagnostic centers in the region. Known for its accurate and timely services, it has quickly earned a strong reputation.</p>
          <div className="flex gap-3 text-2xl">
            <i className="ri-facebook-fill cursor-pointer hover:text-orange-500"></i>
            <i className="ri-twitter-fill cursor-pointer hover:text-orange-500"></i>
            <i className="ri-instagram-fill cursor-pointer hover:text-orange-500"></i>
          </div>
        </div>

        <div className="flex flex-col w-[30%] sm:w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-[18px] sm:text-2xl py-2 font-bold">Useful Links</h1>
          <ul className="text-sm items-center justify-center flex flex-col gap-2">
            <li className="hover:border-b-2 w-max px-auto  border-white"><NavLink to="/">HOME</NavLink></li>
            <li className="hover:border-b-2 w-max px-auto  border-white"><NavLink to="/About">ABOUT US</NavLink></li>
            <li className="hover:border-b-2 w-max px-auto  border-white"><NavLink to="/Facilities">FACILITIES</NavLink></li>
            <li className="hover:border-b-2 w-max px-auto  border-white"><NavLink to="/Contact-Us">CONTACT US</NavLink></li>
          </ul>
        </div>

        <div className="flex flex-col w-[30%] sm:w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-[18px] sm:text-2xl py-2 font-bold">Contact</h1>
          <ul className="text-[13px] sm:text-base flex flex-col gap-5">
            <li> <i className="ri-phone-fill text-orange-500"></i><a href="tel:9646548046"> +91-9646548046</a></li>
            <li><i className="ri-map-pin-fill text-orange-500"></i> Address</li>
            <li><i className="ri-alarm-fill text-orange-500"></i> Timings</li>

          </ul>
        </div>
      </div>
      <div className="text-center text-white bg-black"><p className="py-4 text-xs">&copy; 2025 Harsh Lab and Diagnostic Centre. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer