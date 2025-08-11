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
        ptEmail: "",
        appointmentDate: "",
        ptAddress: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Custom validation function
    const validateForm = () => {
        const requiredFields = [
            { field: 'testName', message: 'Please select a test' },
            { field: 'patientName', message: 'Patient name is required' },
            { field: 'age', message: 'Age is required' },
            { field: 'gender', message: 'Please select gender' },
            { field: 'phone', message: 'Phone number is required' },
            { field: 'ptEmail', message: 'Email is required' },
            { field: 'appointmentDate', message: 'Appointment date is required' },
            { field: 'ptAddress', message: 'Address is required' }
        ];

        for (let item of requiredFields) {
            if (!formData[item.field] || formData[item.field].trim() === '') {
                toast.error(item.message);
                return false;
            }
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.ptEmail)) {
            toast.error('Please enter a valid email address');
            return false;
        }

        // Phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error('Phone number must be exactly 10 digits');
            return false;
        }

        // Age validation
        const age = parseInt(formData.age);
        if (isNaN(age) || age < 1 || age > 120) {
            toast.error('Please enter a valid age (1-120)');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form before submitting
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Prepare data for email (matching your original structure)
        const emailData = {
            ...formData,
            email: formData.ptEmail, // Map ptEmail to email for emailjs template
            message: formData.message || "No additional Information"
        };

        emailjs
            .send(
                "service_hpexoqa",
                "template_m7m88xd",
                emailData,
                "JYa2rapV2h5sKJbQY"
            )
            .then(
                () => {
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
                    setIsSubmitting(false);
                },
                (error) => {
                    console.error(error.text);
                    toast.error("Failed to send appointment.");
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <div className='w-full bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-8'>
            <div className='max-w-4xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h1 className='text-3xl sm:text-4xl font-bold tracking-wide text-gray-800 mb-4'>
                        APPOINTMENT <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>FORM</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-lg">Schedule your medical appointment with us</p>
                </div>

                {/* Form Container */}
                <div className='bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden'>
                    <div className='bg-gradient-to-r from-[#10a056] to-[#068141]

 px-6  py-3'>
                        <h2 className='text-white text-xl font-semibold flex items-center gap-2'>
                            <i className="ri-calendar-check-fill text-2xl"></i>
                            Patient Information
                        </h2> 
                    </div>

                    <div className='p-8'>
                        <form onSubmit={handleSubmit} className='space-y-8'>

                            {/* Test Name */}
                            <div className='space-y-2'>
                                <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                    <i className="ri-stethoscope-fill text-blue-600"></i>
                                    Test Name
                                </label>
                                <select
                                    name="testName"
                                    value={formData.testName}
                                    onChange={handleChange}
                                    required
                                    className='w-full rounded-lg border-2 border-gray-200 p-4 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white'
                                >
                                    <option value="">Select Test</option>
                                    <option value="Electrocardiogram">Electrocardiogram</option>
                                    <option value="Blood Collection">Blood Collection</option>
                                    <option value="Blood Collection at Home">Blood Collection at Home</option>
                                </select>
                            </div>

                            {/* Patient Name */}
                            <div className='space-y-2'>
                                <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                    <i className="ri-user-fill text-green-600"></i>
                                    Patient Name
                                </label>
                                <input
                                    type="text"
                                    name="patientName"
                                    placeholder='Enter patient name'
                                    maxLength={20}
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border-2 border-gray-200 p-4 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white'
                                    required
                                />
                            </div>

                            {/* Age & Phone */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                        <i className="ri-calendar-fill text-purple-600"></i>
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        placeholder='Enter patient age'
                                        min="1"
                                        max="120"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border-2 border-gray-200 p-4 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white'
                                        required
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                        <i className="ri-phone-fill text-green-600"></i>
                                        Phone No.
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder='Enter patient phone'
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border-2 border-gray-200 p-4 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white'
                                        required
                                    />
                                </div>
                            </div>

                            {/* Gender & Email */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                        <i className="ri-user-line text-pink-600"></i>
                                        Gender
                                    </label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                        className='w-full rounded-lg border-2 border-gray-200 p-4 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white'
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Transgender">Transgender</option>
                                    </select>
                                </div>
                                <div className='space-y-2'>
                                    <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                        <i className="ri-mail-fill text-blue-600"></i>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="ptEmail"
                                        placeholder='Enter patient email'
                                        maxLength={30}
                                        value={formData.ptEmail}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border-2 border-gray-200 p-4 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white'
                                        required
                                    />
                                </div>
                            </div>

                            {/* Appointment Date */}
                            <div className='space-y-2'>
                                <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                    <i className="ri-calendar-2-fill text-orange-600"></i>
                                    Appointment Date
                                </label>
                                <input
                                    type="date"
                                    name="appointmentDate"
                                    value={formData.appointmentDate}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border-2 border-gray-200 p-4 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white'
                                    required
                                />
                            </div>

                            {/* Address */}
                            <div className='space-y-2'>
                                <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                    <i className="ri-map-pin-fill text-red-600"></i>
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="ptAddress"
                                    placeholder='Enter patient address'
                                    maxLength={50}
                                    value={formData.ptAddress}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border-2 border-gray-200 p-4 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white'
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className='space-y-2'>
                                <label className='text-gray-700 font-semibold flex items-center gap-2'>
                                    <i className="ri-message-3-fill text-indigo-600"></i>
                                    Your Message
                                </label>
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
                                    rows="4"
                                    className='w-full rounded-lg border-2 border-gray-200 p-4 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white resize-none'
                                />
                            </div>

                            {/* Submit Button */}
                            <div className='flex justify-center pt-6'>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className='group bg-gradient-to-r from-green-600 to-green-700 hover:from-orange-500 hover:to-red-500 text-white font-bold py-4 px-8 rounded-full text-sm sm:text-[16px] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3'
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <i className="ri-send-plane-fill group-hover:translate-x-1 transition-transform duration-300"></i>
                                            Submit Appointment
                                        </>
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Appointment;