import { useState } from 'react';
import img1 from './img1.jpg'; 
import img2 from './img2.jpg'; 
import img3 from './img3.jpg'; 

function imageSlider(){
    const slides = [
  {
    image: {img1},
    title: "3D/4D/5D<br>Ultrasound",
    description: "Ultrasounds are advanced imaging technologies used in prenatal care."
  },
  {
    image: {img2},
    title: "Real-Time Baby Scans",
    description: "Experience moving 3D visuals of your baby with advanced 4D technology."
  },
  {
    image: {img3},
    title: "Detailed Anatomy Views",
    description: "Our 5D imaging provides enhanced clarity for medical evaluation."
  }
];

// let current = 0;
let [current,setCurrent]=useState(0)
function updateSlide() {
  const slide = slides[current];
  document.getElementById("slider").src = slide.image;
  document.getElementById("title").innerHTML = slide.title;
  document.getElementById("description").textContent = slide.description;
  
  current = (current + 1) % slides.length;
}

setInterval(updateSlide, 2000);

}

// imageSlider()

function Slider() {
    return(
        <div className="w-full bg-orange-400/90 h-120 flex items-center px-8 text-white relative">
            <div className="left max-w-[400px] h-full flex items-center justify-center flex-col gap-6 text-center" id="left">
                <h1 id="title" className="text-6xl font-bold text-wrap">3D/4D/5D Ultrasound</h1>
                <p id="description" className="text-2xl">Ultrasounds are advanced imaging<br/> technologies used in prenatal care.</p>
                <div className="buttons flex gap-2 text-black">
                    <button className="py-3 px-5 rounded-3xl bg-white/80 text-xl font-medium">Enquiry Now</button>
                    <button className="py-3 px-5 rounded-3xl bg-white/80 text-xl font-medium">Call Now</button>
                </div>
            </div>
            <div className="right absolute right-0 h-full">
                <img id="slider" src={img1} className="w-[800px] h-full" alt="Ultrasound" />
            </div>
        </div>
    )
}

export default Slider