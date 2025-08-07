import React from 'react'
import Ultrasound from '../images/Ultrasound.png';
const Page2 = () => {
  return (
    <div className="page2 relative flex w-full p-15 justify-between items-center">
    <div className="page2_left relative w-[50%] flex flex-col gap-6">
      <h1 className='text-4xl font-bold'>Welcome to <span className='text-orange-500'>Harsha Lab & Diagnostic</span></h1>
      <p className='text-[18px] sm:text-xl text-gray-900 '>Harsh Lab & Diagnostic, located in [Sector/Area Name, City], is a trusted name among diagnostic centers in the region. Known for its accurate and timely services, it has quickly earned a strong reputation. The center is supported by a dedicated team committed to providing quality care to patients from both nearby and distant areas.</p>
      <div className="page2_buttons flex items-center justify-center sm:justify-start gap-3">
        <button className='border py-4 px-10 rounded-4xl text-white bg-green-700 hover:bg-orange-500 transition duration-300 font-bold cursor-pointer'>Read More</button>
        <button className='border py-4 px-10 rounded-4xl text-white bg-green-700 hover:bg-orange-500 transition duration-300 font-bold'><i className="ri-phone-fill"></i><a href="tel:9646548046"> Call Now</a></button>
      </div>
    </div>
    <div className="page2_right w-3/5 sm:w-1/6  object-cover ">
      <img src={Ultrasound} className="w-full h-full mt-5 m-auto" alt=""/>
    </div>
  </div>
  )
}

export default Page2