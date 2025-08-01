import React from 'react'
import Ultrasound from './Ultrasound.png';
const Page2 = () => {
  return (
    <div className="page2 flex w-full p-15 justify-between items-center h-[80vh]">
    <div className="page2_left w-[50%] flex flex-col gap-6">
      <h1 className='text-4xl font-bold'>Welcome to <span className='text-orange-500'>Harsh Lab & Diagnostic</span></h1>
      <p className='text-xl text-gray-900'>Harsh Lab & Diagnostic, located in [Sector/Area Name, City], is a trusted name among diagnostic centers in the region. Known for its accurate and timely services, it has quickly earned a strong reputation. The center is supported by a dedicated team committed to providing quality care to patients from both nearby and distant areas.</p>
      <div className="page2_buttons flex items-center gap-3">
        <button className='border py-4 px-10 rounded-4xl text-white bg-green-700 font-bold cursor-pointer'>Read More</button>
        <button className='border py-4 px-10 rounded-4xl text-white bg-green-700 font-bold'><i className="ri-phone-fill"></i> Call Now</button>
      </div>
    </div>
    <div className="page2_right w-[40%] h-full">
      <img src={Ultrasound} className="h-[350px] mt-5 m-auto" alt=""/>
    </div>
  </div>
  )
}

export default Page2