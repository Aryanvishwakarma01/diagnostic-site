import React from 'react';
import xray from '../images/xray.jpg';

import ecg from '../images/ecg.jpg';
import bloodsample from '../images/bloodsample.jpeg';
import bloodcollection from '../images/bloodcollection.png';


const Facilities = () => {
  const facilitiesArr = [
    { image: ecg, name: "Electrocardiogram" },
    {image: bloodsample, name: "Blood Collect From Home"},
    {image: bloodcollection, name: "Blood Collection"}
  ];

  function reloadPage() {
    location.reload(); // This reloads the current page
  }
  return (
    <div className="facilities w-full bg-gray-100 p-15 flex flex-col gap-15">
      <h1 className="text-4xl text-center font-bold">OUR <span className="text-orange-500">FACILITIES</span></h1>
      <div id="facilities" className="flex items-center justify-center flex-col gap-15 sm:flex-row sm:gap-10">
        {facilitiesArr.map((item, index) => (
          <div key={index} className="facility_card h-[250px] w-[350px] bg-white rounded-xl overflow-hidden shadow-md mx-auto">
            <img src={item.image} className="h-[85%] w-full object-cover" alt={item.name} />
            <h1 className="text-center py-2 text-xl font-bold">{item.name}</h1>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center gap-5'>
        <button onClick={reloadPage} className='border px-8 py-3 rounded-4xl bg-green-700 hover:bg-orange-500 transition duration-300 text-white text-[18px] font-bold cursor-pointer'>View More</button>
        <button className='border px-8 py-3 rounded-4xl bg-green-700 hover:bg-orange-500 transition duration-300  text-white text-[18px] font-bold cursor-pointer'><a href="tel:9646548046"><i className="ri-phone-fill"></i> Call Now</a>
</button>
      </div>
    </div>
  );
};

export default Facilities;
