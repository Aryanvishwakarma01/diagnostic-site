import React from 'react'
import AboutHeading from './AboutHeading'

const About = () => {
  return (
    <>
      <AboutHeading />
      <div className='w-full bg-gradient-to-br from-slate-50 to-slate-50 py-10 sm:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            
            {/* Image Section */}
            <div className='relative order-2'>
              <div className='relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2'>
                <img 
                  src="https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573866/aboutus_pjgxj2.jpg" 
                  className='w-full h-[250px] sm:h-[500px] lg:h-[600px] object-cover rounded-xl' 
                  alt="Harsh Lab & Diagnostic - Modern medical facility with advanced diagnostic equipment" 
                />
              </div>
              {/* Decorative elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 -z-10'></div>
              <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-full opacity-40 -z-10'></div>
            </div>

            {/* Content Section */}
            <div className='order-2 lg:order-2 space-y-8 px-3'>
              <div className='space-y-6'>
                
                <h2 className='text-2xl sm:text-4xl text-center sm:text-left lg:text-4xl font-bold text-gray-900 leading-tight'>
                  Harsh Lab & Diagnostic 
                  <span className='inline'> Centre</span>
                </h2>
              </div>

              <div className='space-y-6 text-gray-600'>
                <p className='text-lg leading-relaxed text-justify'>
                  <span className='font-semibold text-gray-900'>Harsh Lab & Diagnostic</span> stands as a beacon of excellence in medical diagnostics, combining cutting-edge technology with compassionate patient care to deliver accurate, timely, and affordable diagnostic solutions.
                </p>

                <p className='text-lg leading-relaxed text-justify'>
                  At Harsh Diagnostic, we provide a full range of pathology, radiology, imaging, and specialized tests under one roof. With advanced technology, skilled professionals, and strict quality protocols, we ensure accurate, transparent results. From routine checkups to advanced investigations, we’re your trusted partner in health—serving with integrity, care, and excellence.
                </p>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>Comprehensive Services</h4>
                      <p className='text-sm'>Pathology, radiology, imaging, and specialized tests under one roof</p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>Expert Team</h4>
                      <p className='text-sm'>Experienced pathologists, radiologists, and certified technicians</p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>Quality Standards</h4>
                      <p className='text-sm'>Strict industry protocols with complete transparency in reporting</p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>Patient-Centric</h4>
                      <p className='text-sm'>Accessible, reliable diagnostics without compromising quality</p>
                    </div>
                  </div>
                </div>
                
               
              </div>

    
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About