import logo from './logo.png';
import { Link } from 'react-router-dom';
import RightNav from './RightNav';
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


function Navbar() {

    function openMenu() {
        const menu = document.getElementById("menu")
        menu.style.display = "block";
    }
    function closeMenu(){
         const menu = document.getElementById("menu")
        menu.style.display = "none";
    }
    return (
        <div className='navbar w-full flex items-center justify-between px-20 relative'>
            <div className="left_nav">
                <img src={logo} alt="" className="w-[160px]" />

            </div>
            <li className="phone_no hover:bg-orange-500 transition bg-green-600 p-2 text-white transition-all duration-400 hidden"><a href="tel:9646548046"> +91-9646548046</a></li>
            <IoIosMenu onClick={openMenu} className='menu_btn text-4xl cursor-pointer hidden' />
            <RightNav />
            <div id='menu' className='absolute w-full left-0 top-0 h-screen z-50 hidden'>
                <ul className="phone_menu relative list-none bg-white w-[60%] h-screen flex flex-col items-start px-5 py-15 gap-5 text-base font-medium text-black cursor-pointer">
                <IoCloseSharp onClick={closeMenu} className='absolute text-2xl border right-5 top-5' />
                    <li className="text-orange-500 border-b-2 hover:text-orange-600 transition"><Link to="/">HOME</Link></li>
                    <li className="hover:text-orange-500 border-b-2 transition"><Link to="../About">ABOUT US</Link></li>
                    <li className="hover:text-orange-500 border-b-2 transition"><Link to="../Facility">FACILITIES</Link></li>
                    {/* <li className="hover:text-orange-500 transition">DIAGNOSTIC SERVICES</li> */}
                    <li className="hover:text-orange-500 border-b-2 transition"><Link to="../ContactUs">CONTACT US</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar