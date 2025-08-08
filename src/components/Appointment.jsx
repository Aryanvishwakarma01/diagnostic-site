import React from 'react'

const Appointment = () => {



    return (
        <>
            <div className='w-full flex items-center justify-center flex-col gap-10 py-10'>
                <h1 className='text-2xl sm:text-4xl font-bold tracking-wide text-center'>APPOINTMENT <span className='text-orange-500'>FORM</span></h1>
                <div className='w-[90%]  mb-5 gap-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 bg-white rounded-lg'>
                    <form className='flex w-full flex-col gap-5  justify-center text-[16px] sm:text-xl '>
                        <div>
                            <label>Test Name</label>
                            <select className='border w-full rounded mt-2 p-2 text-gray-500 text-sm sm:text-xl' required>
                                <option value="Select Test">Select Test</option>
                                <option value="Electrocardiogram">Electrocardiogram</option>
                                <option value="Blood Collection">Blood Collection</option>
                                <option value="Blood Collection at Home">Blood Collection at Home</option>
                            </select>
                        </div>
                        <div>
                            <label>Patient Name</label>
                            <input type="text" placeholder='Enter patient name' maxLength={20} className='w-full rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl' required/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col w-[48%]'>
                                <label>Age</label>
                                <input type="text" placeholder='Enter patient age' className='rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl' required/>
                            </div>
                            <div className='flex flex-col w-[48%]'>
                                <label>Phone No.</label>
                                <input type="text" placeholder='Enter patient phone' maxLength={10} className='rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl' required/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col w-[48%]'>
                                <label>Gender</label>
                                <select className='border p-2 mt-2 rounded text-gray-500 text-sm sm:text-xl'  required>
                                    <option value="Select Gender">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Transgender">Transgender</option>
                                </select>
                            </div>
                            <div className='flex flex-col w-[48%]'>
                                <label>Email</label>
                                <input type="email" placeholder='Enter patient email' maxLength={30} className='rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl' required/>
                            </div>
                        </div>
                        <div>
                            <label>Your Message</label>
                            <textarea type="text" placeholder='Enter your message'  className='w-full rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl' />
                        </div>
                        <div className='flex items-center justify-center'>
                        <input type='submit' id='submit' className='border px-8 transition-all duration-300 py-2 sm:text-2xl rounded-4xl bg-green-800 text-white font-semibold hover:bg-orange-500 cursor-pointer' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Appointment