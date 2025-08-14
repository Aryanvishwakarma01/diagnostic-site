import { useEffect, useState } from 'react';

// Mock NavLink component for demonstration
import { NavLink } from "react-router-dom";


const slides = [
  {
    image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573866/img1_afjdka.jpg",
    title: "Electrocardiogram",
    description: "ECG records heart's electrical activity to detect various heart conditions.",
    bg: "from-orange-500 to-red-500"
  },
  {
    image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573866/img2_ouhadg.jpg",
    title: "Blood Collection",
    description: "Drawing blood from veins to test, diagnose, or monitor health.",
    bg: "from-green-500 to-teal-500"
  },
  {
    image: "https://res.cloudinary.com/dfnbm55zk/image/upload/v1754573868/img3_bvmza9.jpg",
    title: "Blood Collection at Home",
    description: "Healthcare professional collects blood sample at home for medical testing.",
    bg: "from-blue-500 to-indigo-500"
  }
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsFading(false);
      }, 300);
    }, 3000); // Slightly longer for better UX

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg} transition-all duration-500`}></div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          key={current}
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover transition-all duration-700 transform scale-110"
        />
        <div className="absolute inset-0 bg-black/40 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/30 sm:to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-between px-8 max-w-7xl mx-auto">

        {/* Left Content */}
        <div className={`w-full sm:w-[45%] text-center sm:text-left transition-all duration-500 ${isFading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
            <i className="ri-stethoscope-fill"></i>
            Medical Service
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md max-w-md mx-auto sm:mx-0">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button
              type="button"
              className="group bg-white text-gray-800 py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <NavLink to="/contact-us" className="flex items-center gap-2 text-inherit no-underline">
                <i className="ri-questionnaire-fill group-hover:scale-110 transition-transform duration-300"></i>
                Enquiry Now
              </NavLink>
            </button>



            <button className="group bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <a href="tel:9646548046" className="flex items-center gap-2 text-white no-underline">
                <i className="ri-phone-fill group-hover:rotate-12 transition-transform duration-300"></i>
                Call Now
              </a>
            </button>
          </div>
        </div>

        {/* Right side - Hidden on mobile for better text readability */}
        <div className="hidden sm:block w-[50%]"></div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsFading(true);
              setTimeout(() => {
                setCurrent(index);
                setIsFading(false);
              }, 300);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
              ? 'bg-white scale-125'
              : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          setIsFading(true);
          setTimeout(() => {
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
            setIsFading(false);
          }, 300);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 hidden sm:block"
      >
        <i className="ri-arrow-left-line text-xl"></i>
      </button>

      <button
        onClick={() => {
          setIsFading(true);
          setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
            setIsFading(false);
          }, 300);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 hidden sm:block"
      >
        <i className="ri-arrow-right-line text-xl"></i>
      </button>
    </div>
  );
}

export default Slider;  