import React from "react";
import girl from "../About/AboutImages/girl.png";
import bottle1 from "../About/AboutImages/bottle1.png";
import bottle2 from "../About/AboutImages/bottle2.png";

const Hero = () => {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="bg-[#E2DFCF] text-[#503017] w-full px-4 py-4 md:px-12 relative z-10 overflow-visible">
        <div className="w-full lg:w-[80vw] md:h-[calc(100vh-120px)] mx-auto px-4 py-4 lg:px-12 flex flex-col justify-center items-center">
          {/* Heading */}
          <div className="sm:w-3/4 z-10">
            <p className="text-2xl md:text-4xl lg:text-6xl py-4 font-bold text-center">
              Health products you can trust service you deserve
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-wrap justify-center items-start gap-4 w-5/6 mt-4 relative z-20 ">
            {/* Medium image */}
            <img
              src={bottle2}
              alt="Medium"
              className="h-[260px] sm:h-[300px] object-contain"
            />

            {/* Big center image */}
            <img
              src={bottle1}
              alt="Big Center"
              className="h-[260px] sm:h-[430px] object-contain"
            />

            {/* Small image */}
            <img
              src={girl}
              alt="Small"
              className="h-[260px] sm:h-[260px] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
