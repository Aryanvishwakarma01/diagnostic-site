import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Clock, Star, Award, Check } from 'lucide-react';

const Packages = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedCard, setExpandedCard] = useState(null);

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
            category: "Comprehensive",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
            accentColor: "blue"
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
            category: "Specialized",
            color: "from-emerald-500 to-green-500",
            bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
            accentColor: "emerald"
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
            category: "Specialized",
            color: "from-purple-500 to-violet-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
            accentColor: "purple"
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
            category: "Premium",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
            accentColor: "amber"
        },
    ];

    const currentPackage = packages[currentSlide];

    const handleBookAppointment = (packageData) => {
        console.log('Booking appointment for:', packageData.name);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % packages.length);
        setExpandedCard(null);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + packages.length) % packages.length);
        setExpandedCard(null);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setExpandedCard(null);
    };

    const toggleExpand = (section) => {
        setExpandedCard(expandedCard === section ? null : section);
    };

    const getAccentColors = (color) => {
        const colors = {
            blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
            emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
            purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
            amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50' }
        };
        return colors[color] || colors.blue;
    };

    const accentColors = getAccentColors(currentPackage.accentColor);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Choose Your 
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r bg-orange-500 transition-all duration-500`}> Health Package</span>
                    </h1>
                    <div className={`w-24 h-1 bg-gradient-to-r bg-orange-500 mx-auto rounded-full mb-6 transition-all duration-500`}></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Comprehensive health packages designed by medical experts. Get multiple tests at discounted prices.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={prevSlide}
                        className="flex items-center gap-2 bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 text-gray-600 hover:text-gray-800"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="hidden sm:block">Previous</span>
                    </button>

                    <div className="flex gap-2">
                        {packages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentSlide === index 
                                        ? `${accentColors.bg} scale-125` 
                                        : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="flex items-center gap-2 bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 text-gray-600 hover:text-gray-800"
                    >
                        <span className="hidden sm:block">Next</span>
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Main Card */}
                <div className="relative">
                    <div className={`${currentPackage.bgColor} rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 transform hover:shadow-2xl`}>
                        {/* Popular Badge */}
                        {currentPackage.popular && (
                            <div className="absolute -top-3 left-8 bg-gradient-to-r from-orange-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold z-20 shadow-lg">
                                Most Popular
                            </div>
                        )}

                        {/* Card Header */}
                        <div className="p-8 pb-6">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1">
                                    <div className={`inline-block ${accentColors.light} ${accentColors.text} px-3 py-1 rounded-full text-sm font-medium mb-3`}>
                                        {currentPackage.category}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentPackage.name}</h3>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex items-center gap-1 text-gray-500">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{currentPackage.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Pricing */}
                                <div className="text-right">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl font-bold text-gray-900">₹{currentPackage.discountedPrice}</span>
                                        <div className="flex flex-col items-end">
                                            {/* <span className="text-lg text-gray-500 line-through">₹{currentPackage.originalPrice}</span> */}
                                        </div>
                                    </div>
                                    {/* <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {currentPackage.discount}
                                    </span> */}
                                </div>
                            </div>

                            {/* Book Button */}
                            <button 
                                onClick={() => handleBookAppointment(currentPackage)}
                                className={`w-full bg-green-600 text-white py-4 px-6 rounded-2xl text-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 mb-6 cursor-pointer`}
                            >
                                <a href="tel:9646548046">Book Now</a>
                            </button>

                            {/* Expand Buttons */}
                            <div className="flex items-center justify-center gap-5">
                                <button
                                    onClick={() => toggleExpand('tests')}
                                    className={`flex items-center justify-between py-2 px-5 gap-2 sm:p-5 sm:gap-10 bg-white rounded-xl border-2 ${
                                        expandedCard === 'tests' ? accentColors.border : 'border-gray-200'
                                    } hover:shadow-md transition-all duration-200`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-5 h-5 sm:w-10 sm:h-10 ${accentColors.light} rounded-full flex items-center justify-center`}>
                                            <Check className={`w-3 h-3 sm:w-5 sm:h-5 ${accentColors.text}`} />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold text-[12px] sm:text-[16px] text-gray-900">Tests Included</div>
                                            <div className="text-[10px] sm:text-sm text-gray-600">{currentPackage.tests.length} tests</div>
                                        </div>
                                    </div>
                                    {expandedCard === 'tests' ? 
                                        <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    }
                                </button>

                                <button
                                    onClick={() => toggleExpand('features')}
                                    className={`flex items-center justify-between py-2 px-5 gap-2 sm:p-5 sm:gap-10 bg-white rounded-xl border-2 ${
                                        expandedCard === 'features' ? accentColors.border : 'border-gray-200'
                                    } hover:shadow-md transition-all duration-200`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-5 h-5 sm:w-10 sm:h-10 ${accentColors.light} rounded-full flex items-center justify-center`}>
                                            <Star className={`w-3 h-3 sm:w-5 sm:h-5 ${accentColors.text}`} />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold text-[12px] sm:text-[16px] text-gray-900">Key Features</div>
                                            <div className="text-[10px] sm:text-sm text-gray-600">{currentPackage.features.length} benefits</div>
                                        </div>
                                    </div>
                                    {expandedCard === 'features' ? 
                                        <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    }
                                </button>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedCard && (
                            <div className="px-8 pb-8">
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    {expandedCard === 'tests' && (
                                        <div>
                                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                <Check className={`w-5 h-5 ${accentColors.text}`} />
                                                Tests Included ({currentPackage.tests.length})
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {currentPackage.tests.map((test, index) => (
                                                    <div key={index} className="flex items-center gap-3 p-2">
                                                        <div className={`w-2 h-2 ${accentColors.bg} rounded-full flex-shrink-0`}></div>
                                                        <span className="text-gray-700 text-sm sm:text-lg">{test}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {expandedCard === 'features' && (
                                        <div>
                                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                <Star className={`w-5 h-5 ${accentColors.text}`} />
                                                Key Features
                                            </h4>
                                            <div className="space-y-4">
                                                {currentPackage.features.map((feature, index) => (
                                                    <div key={index} className="flex items-start gap-3 p-2">
                                                        <Check className={`w-5 h-5 ${accentColors.text} flex-shrink-0 mt-0.5`} />
                                                        <span className="text-gray-700 text-sm sm:text-lg leading-relaxed">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Package Counter */}
                    <div className="text-center mt-8">
                        <span className="text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm text-sm">
                            {currentSlide + 1} of {packages.length} packages
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;