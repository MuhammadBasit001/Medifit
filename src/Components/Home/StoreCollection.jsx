import React from "react";
import bottles from "../images/bottles.png";
import scope from "../images/Stechscope.png";
import suger from "../images/suger.png";
import Asthma from "../images/Asthma.png";
import blood from "../images/blood.png";
import Gloves from "../images/Gloves.png";
import cart from "../images/cart.png";
import glucose from "../images/glucose.png";

const products = [
  {
    name: "B12 medicine",
    price: 19,
    originalPrice: 25,
    image: bottles,
    cta: "Shop now",
    logo: cart,
  },
  {
    name: "Tonometer",
    price: 19,
    originalPrice: 0,
    image: blood,
  },
  {
    name: "ECG cardiograph",
    price: 20,
    originalPrice: 35,
    image: glucose,
  },
  {
    name: "Blood glucose meter",
    price: 15,
    originalPrice: 0,
    image: suger,
  },
  {
    name: "Lab hand gloves",
    price: 20,
    originalPrice: 35,
    image: Gloves,
  },
  {
    name: "Stethoscope",
    price: 20,
    originalPrice: 35,
    image: scope,
  },
  {
    name: "Inhaler pressure drop",
    price: 35,
    originalPrice: 0,
    image: Asthma,
  },
  {
    name: "Multi vitamin",
    price: 20,
    originalPrice: 0,
    image: bottles,
  },
];

const StoreCollection = () => {
  return (
    <section className="bg-[#EBE9E0] text-[#503017] w-full sm:px-4 py-8 md:px-12">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col  items-center gap-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#4C2B17] mb-10">
          Explore Our store Collection
        </h2>
        <div className="grid grid-cols-1  md:w-full p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-sm p-4 flex flex-col items-center"
            >
              <div className="bg-[#F2F2F2] rounded-2xl  text-[#503017] flex items-center flex-col  h-auto  w-full px-4 py-4 md:px-12">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-30 h-30  object-contain"
                />

                {product.cta ? (
                  <button className="bg-[#F2EFE4] text-sm text-[#4C2B17] px-6 py-1 rounded-full mb-2 flex items-center gap-2">
                    {product.logo && (
                      <img src={product.logo} alt="logo" className="w-4 h-4" />
                    )}
                    {product.cta}
                  </button>
                ) : (
                  // Invisible placeholder to maintain spacing
                  <div className="h-[30px] mb-2" />
                )}
              </div>
              <div  className="w-full px-2">
                <h3 className=" text-md font-medium">
                  {product.name}
                </h3>
                <div className="text-sm text-gray-700">
                  ${product.price.toFixed(2)} USD{" "}
                  {product.originalPrice > 0 && (
                    <span className="line-through text-gray-400 ml-2">
                      ${product.originalPrice.toFixed(2)} USD
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreCollection;
