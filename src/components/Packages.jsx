import React, { useState } from 'react';

const Packages = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    const packages = [
        {
            id: 1,
            name: "Basic Health Checkup",
            originalPrice: 3500,
            discountedPrice: 750,
            discount: "29% OFF",
            rating: 4.8,
            reviews: 1250,
            duration: "4-6 hours",
            tests: [
                "Complete Blood Count (CBC)",
                "Lipid Profile",
                "Liver Function Test (LFT)",
                "Kidney Function Test (KFT)",
                "Blood Sugar (Fasting)",
                "Urine Routine Examination",
                "HBA1C - Glycated Heamoglobin"
            ],
            features: [
                "Home Sample Collection",
                "Digital Report within 24 hours",
                "Free Doctor Consultation",
                "Lab Certified Results"
            ],
            popular: true,
            image: "🩺",
            category: "Comprehensive"
        },
        {
            id: 2,
            name: "Comprehensive Package",
            originalPrice: 2200,
            discountedPrice: 1000,
            discount: "23% OFF",
            rating: 4.9,
            reviews: 890,
            duration: "2-3 hours",
            tests: [
                "Complete Blood Count (CBC)",
                "Lipid Profile",
                "Liver Function Test (LFT)",
                "Kidney Function Test (KFT)",
                "Blood Sugar (Fasting)",
                "Urine Routine Examination",
                "HBA1C - Glycated Heamoglobin",
                "Thyroid"
            ],
            features: [
                "Comprehensive Heart and Cholesterol Risk Assessment",
                "Liver, Kidney, and Thyroid Health Insights",
                "Diabetes Screening and Management Guidance",
                "Detailed Blood and Urine Analysis Report"
            ],
            popular: false,
            image: "❤️",
            category: "Specialized"
        },
        {
            id: 3,
            name: "Advanced Health Package",
            originalPrice: 1800,
            discountedPrice: 1500,
            discount: "28% OFF",
            rating: 4.7,
            reviews: 675,
            duration: "1-2 hours",
            tests: [
                "Complete Blood Count (CBC)",
                "Lipid Profile",
                "Liver Function Test (LFT)",
                "Kidney Function Test (KFT)",
                "Blood Sugar (Fasting)",
                "Urine Routine Examination",
                "HBA1C - Glycated Heamoglobin",
                "Thyroid",
                "Vitamin D",
                "Vitamin B12",
                "Calcium"
            ],
            features: [
                "Comprehensive Heart, Liver, Kidney, and Thyroid Evaluation",
                "Diabetes Screening with Long-term Blood Sugar Insights",
                "Vitamin D, B12, and Calcium Deficiency Detection",
                "Detailed Blood and Urine Health Analysis"
            ],
            popular: false,
            image: "🩸",
            category: "Specialized"
        },
        {
            id: 4,
            name: "Executive Health Package",
            originalPrice: 2800,
            discountedPrice: 1900,
            discount: "29% OFF",
            rating: 4.8,
            reviews: 1100,
            duration: "3-4 hours",
            tests: [
                "Complete Blood Count (CBC)",
                "Lipid Profile",
                "Liver Function Test (LFT)",
                "Kidney Function Test (KFT)",
                "Blood Sugar (Fasting)",
                "Urine Routine Examination",
                "HBA1C - Glycated Heamoglobin",
                "Thyroid",
                "Vitamin D",
                "Vitamin B12",
                "Calcium",
                "Iron Profile",
                "Magnesium",
                "Phosphorus",
                "ECG"
            ],
            features: [
                "Complete Heart, Organ, and Metabolic Health Evaluation",
                "Vitamin, Mineral, and Iron Deficiency Screening",
                "ECG and Diabetes Risk Assessment",
                "Specialist Consultation with Privacy Assured"
            ],
            popular: false,
            image: "👩‍⚕️",
            category: "Specialized"
        },

    ];

    const handleBookAppointment = (packageData) => {
        setSelectedPackage(packageData);
        // You can integrate this with your appointment booking system
        console.log('Booking appointment for:', packageData.name);
    };

    return (
        <div className='w-full bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h1 className='text-[25px] sm:text-5xl font-bold tracking-wide text-gray-800 mb-4'>
                        Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>Packages</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-[14px] sm:text-xl max-w-2xl mx-auto">
                        Comprehensive health packages designed for your specific needs. Get multiple tests at discounted prices with expert consultations included.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className='flex flex-wrap gap-40 justify-center'>
                    {packages.map((pkg) => (
                        <div key={pkg.id} className='relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] flex-shrink-0'>
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className='absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10'>
                                    Most Popular
                                </div>
                            )}

                            {/* Package Header */}
                            <div className='bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div className='text-4xl'>{pkg.image}</div>
                                    <div className='text-right'>
                                        <div className='flex items-center gap-1 mb-1'>
                                            <i className="ri-star-fill text-yellow-400 text-sm"></i>
                                            <span className='text-sm font-medium'>{pkg.rating}</span>
                                            <span className='text-xs opacity-80'>({pkg.reviews})</span>
                                        </div>
                                        <div className='text-xs opacity-80 flex items-center gap-1'>
                                            <i className="ri-time-fill text-xs"></i>
                                            {pkg.duration}
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-xl font-bold mb-2'>{pkg.name}</h3>
                                <div className='text-xs bg-white/20 px-2 py-1 rounded-full w-fit'>
                                    {pkg.category}
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className='p-6 pb-4'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <span className='text-3xl font-bold text-gray-800'>₹{pkg.discountedPrice}</span>
                                    <div className='flex flex-col'>
                                        {/* <span className='text-lg text-gray-400 line-through'>₹{pkg.originalPrice}</span> */}
                                        {/* <span className='text-green-600 font-semibold text-sm'>{pkg.discount}</span> */}
                                    </div>
                                </div>

                                {/* Tests Included */}
                                <div className='mb-4'>
                                    <h4 className='font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                                        <i className="ri-checkbox-circle-fill text-green-600 text-lg"></i>
                                        Tests Included ({pkg.tests.length})
                                    </h4>
                                    <div className='max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300'>
                                        <ul className='space-y-1'>
                                            {pkg.tests.map((test, index) => (
                                                <li key={index} className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0'></div>
                                                    {test}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className='mb-2'>
                                    <h4 className='font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                                        <i className="ri-star-fill text-orange-500 text-lg"></i>
                                        Features
                                    </h4>
                                    <ul className='space-y-2'>
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className='flex items-center gap-2 text-sm text-gray-600'>
                                                <i className="ri-checkbox-circle-fill text-green-500 text-sm"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                              
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;