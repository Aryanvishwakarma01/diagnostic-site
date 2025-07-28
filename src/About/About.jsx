import React from 'react'
import Navbar from '../components/Navbar'
import ultrasound2 from '../components/ultrasound2.jpg'
import aboutus from '../components/aboutus.jpg'
const About = () => {
  return (
    <>
      <div className='relative flex items-center justify-center h-[300px] w-full mb-5'>
        <img src={ultrasound2} alt="" className='absolute inset-0 z-0 h-full w-full object-cover' />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <h1 className='absolute text-center z-20 font-bold text-8xl text-white'>ABOUT US</h1>
      </div>
      <div className='flex items-center justify-center gap-10 w-full h-[80vh]'>
        <img src={aboutus} className='h-[80%]' alt="" />
        <div className='w-[50%]'>
          <h1 className='text-4xl font-bold mb-5'>About <span className='text-orange-600'>Harsh Lab & Diagnostic Centre</span></h1>
          <p className='text-gray-800'>Harsh Lab & Diagnostic is a trusted name in medical diagnostics, committed to delivering accurate, timely, and affordable diagnostic solutions. Since our inception, we have focused on combining advanced technology with compassionate care to support patients and healthcare providers in making informed decisions.

At Harsh Diagnostic, we offer a comprehensive range of diagnostic services including pathology, radiology, imaging, and specialized tests – all under one roof. Our facility is equipped with state-of-the-art machines and backed by a team of experienced pathologists, radiologists, lab technicians, and support staff who are dedicated to upholding the highest standards of quality and precision.

We understand the critical role diagnostics play in healthcare, and that’s why we adhere strictly to industry protocols and maintain complete transparency in every report we deliver. Our goal is to make diagnostics more accessible and patient-friendly, without compromising on reliability.

Whether it's routine health checkups, advanced imaging, or specialized investigations, Harsh Diagnostic stands as your reliable partner in health. Your well-being is our priority, and we strive to serve with integrity, care, and excellence.</p>
          </div>
      </div>
    </>
  )
}

export default About