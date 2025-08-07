import React from 'react'
// import xray from '../components/xray.jpg'
import xray from '../images/xray.jpg';

const FacilitiesHeading = () => {
  return (
    <>
      <div className='relative flex items-center justify-center h-[200px] sm:h-[300px] w-full'>
        <img src={xray} alt="" className='absolute inset-0 z-0 h-full w-full object-cover' />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <h1 className='absolute text-center z-20 font-bold text-white text-6xl sm:text-8xl'>FACILITIES</h1>
      </div>
      
    </>
  )
}

export default FacilitiesHeading