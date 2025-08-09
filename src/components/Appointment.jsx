import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';

const Appointment = () => {
    const [formData, setFormData] = useState({
        testName: "",
        patientName: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        message: ""
    });



    const [isSubmitting, setIsSubmitting] = useState(false); // NEW STATE

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Start submitting

        emailjs
            .send(
                "service_hpexoqa",
                "template_m7m88xd",
                formData,
                "JYa2rapV2h5sKJbQY"
            )
            .then(
                () => {
                    // alert("Appointment sent successfully!");
                    toast.success("Appointment sent successfully!");
                    setFormData({
                        testName: "",
                        patientName: "",
                        age: "",
                        gender: "",
                        phone: "",
                        ptEmail: "",
                        appointmentDate: "",
                        ptAddress: "",
                        message: ""
                    });
                    setIsSubmitting(false); // Reset button text
                },
                (error) => {
                    console.error(error.text);
                    toast("Failed to send appointment.");
                    setIsSubmitting(false); // Reset even if failed
                }
            );
    };

    return (
        <div className='w-full flex items-center justify-center flex-col gap-10 pt-10'>
            <h1 className='text-2xl sm:text-4xl font-bold tracking-wide text-center'>
                APPOINTMENT <span className='text-orange-500'>FORM</span>
            </h1>
            <div className='w-[90%] mb-5 gap-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 bg-white rounded-lg'>
                <form onSubmit={handleSubmit} className='flex w-full flex-col gap-5 justify-center text-[16px] sm:text-xl'>

                    {/* Test Name */}
                    <div>
                        <label>Test Name</label>
                        <select
                            name="testName"
                            value={formData.testName}
                            onChange={handleChange}
                            required
                            className='border w-full rounded mt-2 p-2 text-gray-500 text-sm sm:text-xl'
                        >
                            <option value="">Select Test</option>
                            <option value="Electrocardiogram">Electrocardiogram</option>
                            <option value="Blood Collection">Blood Collection</option>
                            <option value="Blood Collection at Home">Blood Collection at Home</option>
                        </select>
                    </div>

                    {/* Patient Name */}
                    <div>
                        <label>Patient Name</label>
                        <input
                            type="text"
                            name="patientName"
                            placeholder='Enter patient name'
                            maxLength={20}
                            value={formData.patientName}
                            onChange={handleChange}
                            className='w-full rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl'
                            required
                        />
                    </div>

                    {/* Age & Phone */}
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col w-[48%]'>
                            <label>Age</label>
                            <input
                                type="text"
                                name="age"
                                placeholder='Enter patient age'
                                value={formData.age}
                                onChange={handleChange}
                                className='rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl'
                                required
                            />
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label>Phone No.</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder='Enter patient phone'
                                maxLength={10}
                                value={formData.phone}
                                onChange={handleChange}
                                className='rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl'
                                required
                            />
                        </div>
                    </div>

                    {/* Gender & Email */}
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col w-[48%]'>
                            <label>Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className='border p-2 mt-2 rounded text-gray-500 text-sm sm:text-xl'
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label>Email</label>
                            <input
                                type="email"
                                name="ptEmail"
                                placeholder='Enter patient email'
                                maxLength={30}
                                value={formData.ptEmail}
                                onChange={handleChange}
                                className='rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl'
                                required
                            />
                        </div>
                    </div>

                    {/* Appointment Date */}
                    <div>
                        <label>Appointment Date</label>
                        <input
                            type="date"
                            name="appointmentDate"
                            value={formData.appointmentDate}
                            onChange={handleChange}
                            className='w-full rounded border mt-2 p-2 text-gray-500 placeholder:text-[14px] placeholder:sm:text-xl'
                            required
                        />
                    </div>


                    {/* Patient Name */}
                    <div>
                        <label>Address</label>
                        <input
                            type="text"
                            name="ptAddress"
                            placeholder='Enter patient address'
                            maxLength={50}
                            value={formData.ptAddress}
                            onChange={handleChange}
                            className='w-full rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl'
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label>Your Message</label>
                        <textarea
                            name="message"
                            placeholder='Enter your message'
                            value={formData.message}
                            onChange={(e) =>
                                handleChange({
                                    target: {
                                        name: "message",
                                        value: e.target.value.trim() === "" ? "No additional Information" : e.target.value
                                    }
                                })
                            }
                            className='w-full rounded border mt-2 p-2 placeholder:text-[14px] placeholder:sm:text-xl'
                        />
                    </div>


                    {/* Submit */}
                    <div className='flex items-center justify-center'>
                        <input
                            type='submit'
                            id='submit'
                            disabled={isSubmitting} // disable while submitting
                            className='border px-8 transition-all duration-300 py-2 sm:text-2xl rounded-4xl bg-green-800 text-white font-semibold hover:bg-orange-500 cursor-pointer disabled:opacity-70'
                            value={isSubmitting ? "Submitting..." : "Submit"} // dynamic text
                        />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Appointment;
