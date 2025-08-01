
import img1 from '../components/img1.jpg'
const ContactUs = () => {
  return (
    <>
      <div className='relative flex items-center justify-center h-[300px] w-full mb-5'>
        <img src={img1} alt="" className='absolute inset-0 z-0 h-full w-full object-cover' />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <h1 className='absolute text-center z-20 font-bold text-6xl sm:text-8xl text-white'>CONTACT US</h1>
      </div>
     <div className='w-full flex flex-col gap-5 h-[50vh]'>
        <h1 className='text-center text-4xl font-bold'>CONTACT <span className='text-orange-500'>US</span></h1>
        <div className='flex items-center justify-evenly'>
            <div className='w-[30%] h-[200px] flex flex-col items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 bg-white rounded-lg'>
                <i className="ri-map-pin-fill text-7xl"></i>
                <h1 className='text-3xl font-semibold'>Location here</h1>
            </div>
           <div className='w-[30%] h-[200px] flex flex-col items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 bg-white rounded-lg'>
                <i className="ri-phone-fill text-7xl"></i>
                <h1 className='text-3xl font-semibold hover:text-orange-500'><a href="tel:9646548046"> +91-9646548046</a></h1>
            </div>
            <div className='w-[30%] h-[200px] flex flex-col items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 bg-white rounded-lg'>
                <i className="ri-alarm-fill text-7xl"></i>
                <h1 className='text-3xl font-semibold'>Timings Here</h1>
            </div>
        </div>
     </div>
    </>
  )
}

export default ContactUs