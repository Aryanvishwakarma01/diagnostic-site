import React from 'react'
import { Link } from 'react-router-dom'
function RightNav() {
  return (
    <div className='right_nav'>
        <ul className=" list-none flex items-center gap-10 text-base font-medium text-black cursor-pointer">
                <li className="text-orange-500 hover:text-orange-600 transition"><Link to="/">HOME</Link></li>
                <li className="hover:text-orange-500 transition"><Link to="../About">ABOUT US</Link></li>
                <li className="hover:text-orange-500 transition"><Link to="../Facility">FACILITIES</Link></li>
                {/* <li className="hover:text-orange-500 transition">DIAGNOSTIC SERVICES</li> */}
                <li className="hover:text-orange-500 transition"><Link to="../ContactUs">CONTACT US</Link></li>
                <li className="hover:bg-orange-500 transition bg-green-600 p-2 text-white transition-all duration-400"><a href="tel:9646548046"> +91-9646548046</a></li>
            </ul>
    </div>
  )
}

export default RightNav