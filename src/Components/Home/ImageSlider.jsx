import React, { useState } from "react";
import bag from '../images/bag.png'
import bottle from '../images/bottle.png'
import Asthma from '../images/Asthma.png'
import blood from '../images/blood.png'
import Gloves from '../images/Gloves.png'

const images = [
  Gloves,
  blood,
  Asthma, // Center image
  bottle,
  bag,
];


const Carousel = () => {
  const [centerIndex, setCenterIndex] = useState(2);

  const rotateLeft = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const rotateRight = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  const getWrappedIndex = (index) => {
    return (index + images.length) % images.length;
  };

  const positions = [
    { x: "-160%", scale: 0.75, z: 5 },
    { x: "-80%", scale: 0.9, z: 10 },
    { x: "0%", scale: 1.05, z: 30 },
    { x: "80%", scale: 0.9, z: 10 },
    { x: "160%", scale: 0.75, z: 5 },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0017A0]">
      {/* Left Button */}
      <button
        onClick={rotateLeft}
        className="z-50 p-2 mx-2 bg-white text-xl rounded-full shadow hover:scale-110 transition"
      >
        ◀
      </button>

      {/* Carousel */}
      <div className="relative w-[70vw] h-[350px] overflow-visible">
        {positions.map((pos, i) => {
          const imgIndex = getWrappedIndex(centerIndex + i - 2);
          return (
            <div
              key={i}
              className="absolute aspect-square p-[2px] bg-white rounded-xl overflow-hidden transition-transform duration-700 ease-in-out"
              style={{
                width: "14vw",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translateX(${pos.x}) scale(${pos.scale})`,
                zIndex: pos.z,
              }}
            >
              <img
                src={images[imgIndex]}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={rotateRight}
        className="z-50 p-2 mx-2 bg-white text-xl rounded-full shadow hover:scale-110 transition"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
