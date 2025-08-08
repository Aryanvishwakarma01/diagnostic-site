import React from 'react'
import AboutHeading from './AboutHeading'

const About = () => {
  return (
    <>
      <AboutHeading />
      <div className='flex flex-col sm:flex-row items-center justify-center gap-5 w-full px-5 py-8'>
        <div>
          <img src="https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573866/aboutus_pjgxj2.jpg" className='h-[80%] hidden sm:block' alt="" />
        </div>
        <div className='w-[95%] sm:w-[50%]'>
          {/* <h1 className='text-2xl sm:text-4xl text-center font-bold'>
            About <span className='text-orange-600'>Harsha Lab & Diagnostic Centre</span>
          </h1> */}
          <p className='text-gray-800 text-justify text-[16px] sm:text-[18px] py-10 sm:py-5'>
            Harsha Lab & Diagnostic is a trusted name in medical diagnostics, committed to delivering accurate, timely, and affordable diagnostic solutions. Since our inception, we have focused on combining advanced technology with compassionate care to support patients and healthcare providers in making informed decisions.
            <br />
            At Harsha Diagnostic, we offer a comprehensive range of diagnostic services including pathology, radiology, imaging, and specialized tests – all under one roof. Our facility is equipped with state-of-the-art machines and backed by a team of experienced pathologists, radiologists, lab technicians, and support staff who are dedicated to upholding the highest standards of quality and precision.
            <br />
            We understand the critical role diagnostics play in healthcare, and that’s why we adhere strictly to industry protocols and maintain complete transparency in every report we deliver. Our goal is to make diagnostics more accessible and patient-friendly, without compromising on reliability.
            <br />
            Whether it's routine health checkups, advanced imaging, or specialized investigations, Harsh Diagnostic stands as your reliable partner in health. Your well-being is our priority, and we strive to serve with integrity, care, and excellence.
          </p>
        </div>
      </div>

    </>
  )
}

export default About