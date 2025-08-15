import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const LabGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Modern Laboratory Equipment",
      description: "State-of-the-art diagnostic instruments and testing equipment"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Blood Sample Analysis",
      description: "Precise blood testing and analysis with advanced microscopy"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Professional Medical Staff",
      description: "Experienced technicians and healthcare professionals"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1722407348192-a44ce83704da?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Clean & Sterile Environment",
      description: "Hygienic laboratory facilities maintaining highest safety standards"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white pt-4 pb-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Gallery</span> 
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl px-6 mx-auto">
            Modern labs, advanced equipment, and expert care for accurate diagnostics.


          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex items-center justify-between flex-col sm:flex-row gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group w-[300px] cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(image)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {image.description}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LabGallery;