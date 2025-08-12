import React from 'react'

const AboutHeading = () => {
  return (
    // <div className='relative flex items-center  justify-center h-[150px] sm:h-[200px] w-full'>
    //     <img src="https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573868/ultrasound2_qvyvgh.jpg" alt="" className='absolute inset-0 z-0 h-full w-full object-cover' />
    //     <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    //     <h1 className='absolute text-center z-20 font-bold text-4xl sm:text-6xl text-white'>ABOUT US</h1>
    //   </div>

    <div className="text-center pt-10 bg-gradient-to-br from-slate-50 to-slate-50">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        About
        <span className={`text-transparent bg-clip-text bg-gradient-to-r bg-orange-500 transition-all duration-500`}> Us</span>
      </h1>
      <div className={`w-24 h-1 bg-gradient-to-r bg-orange-500 mx-auto rounded-full transition-all duration-500`}></div>

    </div>
  )
}

export default AboutHeading