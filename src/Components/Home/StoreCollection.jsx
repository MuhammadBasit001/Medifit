import React from "react";

const products = [
  {
    name: "B12 medicine",
    price: 19,
    originalPrice: 25,
    image: "/images/b12.png",
    cta: "Shop now",
  },
  {
    name: "Tonometer",
    price: 19,
    originalPrice: 0,
    image: "/images/tonometer.png",
  },
  {
    name: "ECG cardiograph",
    price: 20,
    originalPrice: 35,
    image: "/images/ecg.png",
  },
  {
    name: "Blood glucose meter",
    price: 15,
    originalPrice: 0,
    image: "/images/glucose-meter.png",
  },
  {
    name: "Lab hand gloves",
    price: 20,
    originalPrice: 35,
    image: "/images/gloves.png",
  },
  {
    name: "Stethoscope",
    price: 20,
    originalPrice: 35,
    image: "/images/stethoscope.png",
  },
  {
    name: "Inhaler pressure drop",
    price: 35,
    originalPrice: 0,
    image: "/images/inhaler.png",
  },
  {
    name: "Multi vitamin",
    price: 20,
    originalPrice: 0,
    image: "/images/multivitamin.png",
  },
];

const StoreCollection = () => {
  return (
    <section className="bg-[#EBE9E0] text-[#503017] w-full px-4 py-8 md:px-12">
    <div className="w-full max-w-[1200px] mx-auto flex flex-col  items-center gap-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#4C2B17] mb-10">
        Explore Our store Collection
      </h2>
      <div className="grid grid-cols-1  md:w-full p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-contain mb-4"
            />
            {product.cta && (
              <button className="bg-[#F2EFE4] text-sm text-[#4C2B17] px-4 py-1 rounded-full mb-2">
                {product.cta}
              </button>
            )}
            <h3 className="text-center text-md font-medium">{product.name}</h3>
            <div className="text-sm text-gray-700">
              ${product.price.toFixed(2)} USD{" "}
              {product.originalPrice > 0 && (
                <span className="line-through text-gray-400 ml-2">
                  ${product.originalPrice.toFixed(2)} USD
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default StoreCollection;
