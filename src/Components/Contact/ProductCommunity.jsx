import React from "react";
import bottlepill from "../Contact/imagesContact/bottlepills.png";
import hands from "../Contact/imagesContact/hand.png";
import injectionbottle from "../Contact/imagesContact/injectionbottle.png";
import pills from "../Contact/imagesContact/pills.png";
import { ArrowRight } from "lucide-react"; // Optional icon

const ProductCommunity = () => {
  return (
    <section className="max-w-full bg-amber-800 flex justify-center py-10 px-4 sm:px-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-start gap-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
              Join our trustable Medifit product community
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white">
              Join us as we build a community where wellness is accessible,
              education is empowering, and health is a shared journey.
            </p>
            <button className="flex items-center gap-2 rounded-xl bg-amber-950 px-6 py-3 text-white hover:bg-amber-900 transition-all duration-300">
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-center">
          <img src={pills} alt="pills" className="w-full max-w-[100px] object-contain mx-auto" />
          <img src={hands} alt="hands" className="w-full max-w-[100px] object-contain mx-auto" />
          <img src={injectionbottle} alt="injection bottle" className="w-full max-w-[100px] object-contain mx-auto" />
          <img src={bottlepill} alt="bottle pill" className="w-full max-w-[100px] object-contain mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default ProductCommunity;
