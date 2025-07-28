

const Footer = () => {
  return (
    <div className="h-[65vh] w-full bg-gray-800 flex items-start justify-between px-20 py-10">
        <div className="flex flex-col w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-2xl font-bold py-2">About Us</h1>
        <p className="text-[20px]">LM Diagnostic in Ground Floor, SCO 85, Sector 24-C Chandigarh, 160023 is a top player in the category of Diagnostic Centers in Chandigarh. Within a short duration of time, we have gained immense reputation.</p>
        <div className="flex gap-3 text-2xl">
            <i class="ri-facebook-fill"></i>
            <i class="ri-twitter-fill"></i>
            <i class="ri-instagram-fill"></i>
        </div>
        </div>

         <div className="flex flex-col w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-2xl py-2 font-bold">Useful Links</h1>
        <ul className="text-[20px] text-center flex flex-col gap-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Facilities</li>
            <li>Gallery</li>
            <li>Contact Us</li>
        </ul>
        </div>

        <div className="flex flex-col w-[25%] text-white gap-5"><h1 className="border-b-2 text-center text-2xl py-2 font-bold">Contact Details</h1>
        <ul className="text-[20px] flex flex-col gap-5">
            <li> <i className="ri-phone-fill text-orange-500"></i> +91-9646548046</li>
            <li><i className="ri-map-pin-fill text-orange-500"></i> Address</li>
            <li><i className="ri-alarm-fill text-orange-500"></i> Timings</li>
            
        </ul>
        </div>
    </div>
  )
}

export default Footer