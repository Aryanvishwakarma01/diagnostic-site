import React from 'react';
import xray from './xray.jpg';
import ntscan from './ntscan.jpg';
import fetal from './fetal.png';
import Ultrasound2 from './Ultrasound.jpg';
import colordoppler from './colordoppler.jpeg';
import ultrasound3d from './ultrasound3d.jpg';

const Facilities = () => {
  const facilitiesArr = [
    { image: ntscan, name: "NT Scan" },
    { image: xray, name: "Xray" },
    { image: fetal, name: "Fetal Echocardiography" },
    { image: colordoppler, name: "Colour Doppler" },
    { image: ultrasound3d, name: "3D/4D Ultrasound" },
    { image: Ultrasound2, name: "Ultrasound" },
  ];

  function reloadPage() {
    location.reload(); // This reloads the current page
  }
  return (
    <div className="w-full min-h-[80vh] bg-gray-100 p-10 flex flex-col gap-5">
      <h1 className="text-4xl text-center font-bold">
        OUR <span className="text-orange-500">FACILITIES</span>
      </h1>
      <div id="facilities" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {facilitiesArr.map((item, index) => (
          <div key={index} className="h-[250px] w-[350px] bg-white rounded-xl overflow-hidden shadow-md mx-auto">
            <img src={item.image} className="h-[85%] w-full object-cover" alt={item.name} />
            <h1 className="text-center text-xl font-bold">{item.name}</h1>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center gap-5 mt-8'>
        <button onClick={reloadPage} className='border px-8 py-3 rounded-4xl bg-green-700 text-white text-[18px] font-bold cursor-pointer'>View More</button>
        <button className='border px-8 py-3 rounded-4xl bg-green-700 text-white text-[18px] font-bold cursor-pointer'><a href="tel:9646548046"><i class="ri-phone-fill"></i> Call Now</a>
</button>
      </div>
    </div>
  );
};

export default Facilities;
