import React from 'react'
import Ultrasound from './Ultrasound.jpg';
const Page2 = () => {
  return (
    <div className="page2 flex w-full p-15 justify-between items-center h-[80vh]">
    <div className="page2_left w-[50%] flex flex-col gap-6">
      <h1 className='text-4xl font-bold'>Welcome to <span className='text-orange-500'>Harsh Lab & Diagnostic</span></h1>
      <p className='text-xl text-gray-900'>LM Diagnostic in Sector 24-C Chandigarh is a top player in the category of Diagnostic Centers in Chandigarh. Within a short duration of time, we have gained immense reputation. This establishment acts as a one-stop destination serving patients both local and from far off places. It employs individuals those are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company.</p>
      <div className="page2_buttons flex items-center gap-3">
        <button className='border py-4 px-10 rounded-4xl text-white bg-green-700 font-bold cursor-pointer'>Read More</button>
        <button className='border py-4 px-10 rounded-4xl text-white bg-green-700 font-bold'><i class="ri-phone-fill"></i> Call Now</button>
      </div>
    </div>
    <div className="page2_right w-[40%] h-full">
      <img src={Ultrasound} className="h-[90%] mt-5 m-auto" alt=""/>
    </div>
  </div>
  )
}

export default Page2