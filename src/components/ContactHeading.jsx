import React from 'react'

const ContactHeading = () => {
    return (
        <div className='relative flex items-center justify-center h-[150px] sm:h-[200px] w-full'>
            <img src="https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573866/img1_afjdka.jpg" alt="" className='absolute inset-0 z-0 h-full w-full object-cover' />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <h1 className='absolute text-center z-20 font-bold text-4xl sm:text-6xl text-white'>CONTACT US</h1>
        </div>
    )
}

export default ContactHeading