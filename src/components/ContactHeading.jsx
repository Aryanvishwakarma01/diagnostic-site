import React from 'react'

const ContactHeading = () => {
    return (
        // <div className='relative flex items-center justify-center h-[150px] sm:h-[200px] w-full'>
        //     <img src="https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573866/img1_afjdka.jpg" alt="" className='absolute inset-0 z-0 h-full w-full object-cover' />
        //     <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        //     <h1 className='absolute text-center z-20 font-bold text-4xl sm:text-6xl text-white'>CONTACT US</h1>
        // </div>
        <div className="text-center py-10 bg-gradient-to-br from-slate-50 via-white to-gray-50">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact
                <span className={`text-transparent bg-clip-text bg-gradient-to-r bg-orange-500 transition-all duration-500`}> Us</span>
            </h1>
            <div className={`w-24 h-1 bg-gradient-to-r bg-orange-500 mx-auto rounded-full mb-6 transition-all duration-500`}></div>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
                We’re here to listen and help.
                Reach out anytime in working hours — your health matters to us.
            </p>
        </div>
    )
}

export default ContactHeading