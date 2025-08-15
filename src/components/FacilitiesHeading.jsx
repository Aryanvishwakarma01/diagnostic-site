import React from 'react'
// import xray from '../images/xray.jpg';

const FacilitiesHeading = () => {
  return (
    <>
      {/* <div className='relative flex items-center justify-center h-[150px] sm:h-[200px] w-full'>
        <img src={xray} alt="" className='absolute inset-0 z-0 h-full w-full object-cover' />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <h1 className='absolute text-center z-20 font-bold text-white text-4xl sm:text-6xl'>FACILITIES</h1>
      </div> */}

      <div className="text-center py-10 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our
          <span className={`text-transparent bg-clip-text bg-gradient-to-r bg-orange-500 transition-all duration-500`}> Facilities</span>
        </h1>
        <div className={`w-24 h-1 bg-gradient-to-r bg-orange-500 mx-auto rounded-full mb-6 transition-all duration-500`}></div>
        <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          State-of-the-art technology meets compassionate care.
          Designed to heal, comfort, and inspire trust.
        </p>
      </div>
    </>
  )
}

export default FacilitiesHeading