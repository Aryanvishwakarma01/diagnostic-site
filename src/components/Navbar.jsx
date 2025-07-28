import logo from './logo.png';


function Navbar(){
    return(
        <div className='navbar w-full flex items-center justify-between px-20'>
        <div className="left_nav">  
            <img src={logo} alt="" className="w-[160px]" />

        </div>
        <ul className="right_nav list-none flex items-center gap-8 text-sm font-medium text-black cursor-pointer">
  <li className="text-orange-500 hover:text-orange-600 transition">HOME</li>
  <li className="hover:text-orange-500 transition">ABOUT US</li>
  <li className="hover:text-orange-500 transition">FACILITIES</li>
  <li className="hover:text-orange-500 transition">DIAGNOSTIC SERVICES</li>
  <li className="hover:text-orange-500 transition">OUR BLOGS</li>
  <li className="hover:text-orange-500 transition">CONTACT US</li>
  <li className="hover:bg-orange-500 transition bg-green-600 p-2 text-white transition-all duration-400">+91- 9646548046</li>
</ul>

    </div>
    )
}

export default Navbar