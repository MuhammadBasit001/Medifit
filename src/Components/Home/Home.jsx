import React from "react";
import bag from "../images/bag.png";
import medicine from '../images/tablets.png'

const Home = () => {
  return (
  <section className="bg-[#E2DFCF] text-[#503017] w-full px-4 py-4 md:px-12">
  <div className="w-full lg:w-[80vw] mx-auto px-4 py-4 lg:px-12 flex flex-col-reverse md:flex-row items-center gap-4 md:gap-0">
    
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex justify-center items-center md:min-h-[calc(100vh-91px)]">
      <div className="gap-4 md:gap-9 flex flex-col items-center md:items-start ">
        <h4 className="md:text-7xl text-4xl font-poppins text-center md:text-left">
          Your trusted care now and always
        </h4>
        <p className="text-xl md:text-2xl text-center md:text-left">
          For the best results, align your health needs with your medication plan
        </p>
        <button className="w-fit bg-[#503217] text-white flex items-center gap-2 text-xl md:text-3xl p-2 rounded-xl py-4 px-8">
          <img src={bag} alt="bag icon" className="w-6 h-6" />
          Shop Now
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center items-center md:min-h-[calc(100vh-91px)]">
      <img src={medicine} alt="medicine image" className="w-full h-auto object-contain" />
    </div>
  </div>
</section>

  );
};

export default Home;
