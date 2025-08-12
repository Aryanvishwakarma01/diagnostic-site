import React from 'react';
import ContactHeading from './ContactHeading'

const ContactUs = () => {
  return (
    <>
      <ContactHeading />
      <div className='w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 pb-10 px-8'>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-10 max-w-6xl mx-auto'>

          {/* Location Card */}
          <div className='group w-[280px] h-[200px] flex flex-col items-center justify-center gap-4 shadow-xl hover:shadow-2xl p-8 bg-white rounded-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100'>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="ri-map-pin-fill text-3xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300"></i>
            </div>
            <h1 className='text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center leading-tight'>
              Location Here
            </h1>
          </div>

          {/* Phone Card */}
          <div className='group w-[280px] h-[200px] flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-2xl p-8 bg-white rounded-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100'>
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="ri-phone-fill text-3xl text-green-600 group-hover:text-green-700 group-hover:rotate-12 transition-all duration-300"></i>
            </div>
            <h1 className='text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 text-center leading-tight'>
              <a href="tel:9646548046" className="text-inherit no-underline hover:text-green-600">
                +91-9646548046
              </a>
            </h1>
          </div>

          {/* Timings Card */}
          <div className='group w-[280px] h-[200px] flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-2xl p-8 bg-white rounded-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100'>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="ri-alarm-fill text-3xl text-orange-600 group-hover:text-orange-700 transition-colors duration-300"></i>
            </div>
            <h1 className='text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 text-center leading-tight'>
              Timings Here
            </h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContactUs