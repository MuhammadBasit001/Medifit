import React from "react";
import bag from "../images/bag.png";
import medicine from '../images/tablets.png'

const Home = () => {
  return (
    <section className="bg-[#E2DFCF] text-[#503017] w-full h-full px-4 py-4 md:px-12 relative md:flex md:justify-center">
      <div className=" w-full lg:w-[80vw] px-4 py-4 lg:px-12 relative md:flex ">
        <div className=" md:w-1/2 min-h-[calc(100vh-91px)] flex justify-center items-center ">
          <div className="gap-9 flex flex-col">
            <h4 className="text-7xl font-poppins">
              Your trusted care now and always
            </h4>
            <p className="text-2xl">
              For the best results, align your health needs with your medication
              plan
            </p>
            <button className="w-fit bg-[#503217]  text-white flex items-center gap-2 text-3xl p-2 rounded-xl py-4 px-8">
              <img src={bag} alt="bag icon" className="w-6 h-6" />
              Shop Now
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 min-h-[calc(100vh-91px)]">
          <div>
            <img src={medicine} alt="medicine image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
