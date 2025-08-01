import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className="footer w-full bg-gray-800 flex items-start justify-between px-20 py-8">
        <div className="footer_card flex flex-col w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-2xl font-bold py-2">About Us</h1>
        <p className="text-sm text-justify">Harsh Lab & Diagnostic, located in [Sector/Area Name, City], is a trusted name among diagnostic centers in the region. Known for its accurate and timely services, it has quickly earned a strong reputation.</p>
        <div className="flex gap-3 text-2xl">
            <i className="ri-facebook-fill cursor-pointer"></i>
            <i className="ri-twitter-fill cursor-pointer"></i>
            <i className="ri-instagram-fill cursor-pointer"></i>
        </div>
        </div>

         <div className="flex flex-col w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-2xl py-2 font-bold">Useful Links</h1>
        <ul className="text-sm text-center flex flex-col gap-2">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="../About">ABOUT US</Link></li>
            <li><Link to="../Facility">FACILITIES</Link></li>
            <li><Link to="../ContactUs">CONTACT US</Link></li>
        </ul>
        </div>

        <div className="flex flex-col w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-2xl py-2 font-bold">Contact Details</h1>
        <ul className="text-base flex flex-col gap-5">
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