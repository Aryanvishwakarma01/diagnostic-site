import ContactHeading from "./ContactHeading"

const ContactUs = () => {
  return (
    <>
      <ContactHeading />
      <div className='w-full flex flex-col gap-5 py-10'>
        {/* <h1 className='text-center text-4xl font-bold'>CONTACT <span className='text-orange-500'>US</span></h1> */}
        <div className='flex flex-col sm:flex-row items-center justify-evenly gap-10 sm:gap-5'>
          <div className='w-[60%] sm:w-[20%] h-[120px] sm:h-[180px] flex flex-col items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 bg-white rounded-lg'>
            <i className="ri-map-pin-fill text-2xl sm:text-4xl"></i>
            <h1 className='text-xl sm:text-2xl font-semibold'>Location here</h1>
          </div>
          <div className='w-[60%] sm:w-[20%] h-[120px] sm:h-[180px] flex flex-col items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 bg-white rounded-lg'>
            <i className="ri-phone-fill text-2xl sm:text-4xl"></i>
            <h1 className='text-xl sm:text-2xl font-semibold hover:text-orange-500'><a href="tel:9646548046"> +91-9646548046</a></h1>
          </div>
          <div className='w-[60%] sm:w-[20%] h-[120px] sm:h-[180px] flex flex-col items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 bg-white rounded-lg'>
            <i className="ri-alarm-fill text-2xl sm:text-4xl"></i>
            <h1 className='text-xl sm:text-2xl font-semibold'>Timings Here</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs