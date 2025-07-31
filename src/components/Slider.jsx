import { useEffect, useState } from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: img1,
    title: <>Electrocardiogram</>,
    description: "ECG records heart's electrical activity to detect various heart conditions.",
    bg: "bg-orange-400/90"
  },
  {
    image: img2,
    title: <>Blood Collection</>,
    description: "Drawing blood from veins to test, diagnose, or monitor health.",
    bg: "bg-green-400/90"
  },
  {
    image: img3,
    title: <>Blood Collection at Home</>,
    description: "Healthcare professional collects blood sample at home for medical testing.",
    bg: "bg-blue-400/90"
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
      }, 300); // match fade duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className={`w-full ${slide.bg} h-[500px] overflow-hidden flex items-center px-8 text-white relative`}>
      
      {/* Left Content */}
      <div className={`left w-[30%] h-full flex items-center justify-center flex-col gap-6 text-center transition-opacity duration-300
        ${isFading ? "opacity-0" : "opacity-100"}`}>
        <h1 className="text-4xl font-bold text-wrap">{slide.title}</h1>
        <p className="text-2xl">{slide.description}</p>
        <div className="buttons flex gap-2 text-black">
          <button className="py-3 px-5 rounded-3xl bg-white/80 text-xl font-medium cursor-pointer hover:text-white hover:bg-black transition-ease duration-500">
            <Link to="../ContactUs">Enquiry Now</Link>
          </button>
          <button className="py-3 px-5 rounded-3xl bg-white/80 text-xl font-medium cursor-pointer hover:text-white hover:bg-black transition-ease duration-500">
            <a href="tel:9646548046">Call Now</a>
          </button>
        </div>
      </div>

      {/* Right Image Slide-in */}
      <div className="right relative left-20 right-0 h-full w-[70%] overflow-hidden flex items-center justify-center transition-opacity duration-500">
        <img
          key={current} // re-trigger animation on change
          src={slide.image}
          alt="slide"
          className={`border-12 border-white rounded-l-[50%] w-full h-[130%] object-cover transform transition-transform duration-300 translate-x-0 animate-slide-in`}
        />
      </div>
    </div>
  );
}

export default Slider;