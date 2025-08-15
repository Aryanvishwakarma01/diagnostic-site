import React from 'react';
import { Shield, Clock, Award, Users, Heart, Microscope } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accurate Results",
      description: "State-of-the-art equipment and certified technicians ensure precise diagnostic results you can trust.",
      color: "text-orange-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Turnaround",
      description: "Fast processing times with most results available within 4-6 hours for urgent medical needs.",
      color: "text-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Experienced medical professionals and pathologists dedicated to providing quality healthcare services.",
      color: "text-red-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient Care",
      description: "Compassionate service with a patient-first approach, ensuring comfort throughout your visit.",
      color: "text-orange-500"
    },
   
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why  <span className="text-orange-500"> Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-[15px] sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted partner for accurate diagnostics and exceptional care.

          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap  items-center  justify-around gap-5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl py-3 px-3 sm:py-5 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-[300px] sm:w-[450px]"
            >
              <div className={`${feature.color} mb-2 sm:mb-6 transition-transform duration-300`}>
                <span>{feature.icon}</span>
              </div>
              <h3 className="text-[15px] sm:text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;