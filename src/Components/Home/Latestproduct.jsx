import React from "react";
import pulse from "../images/pulse.png";
import bottle from "../images/bottle.png";
import microscope from "../images/microscope.png";
import syrup from "../images/syrup.png";
import cart from "../images/cart.png";

const detail = [
  {
    button: "New",
    image: microscope,
    icon: cart,
    msg: "Shop now",
    name: "Microscope",
    price: "$45.00",
  },
  {
    button: "New",
    image: bottle,
    icon: cart,
    msg: "Shop now",
    name: "Vitamin Bottle",
    price: "$18.50",
  },
  {
    button: "New",
    image: syrup,
    icon: cart,
    msg: "Shop now",
    name: "Cough Syrup",
    price: "$12.00",
  },
  {
    button: "New",
    image: pulse,
    icon: cart,
    msg: "Shop now",
    name: "Pulse Oximeter",
    price: "$35.00",
  },
];

const Latestproduct = () => {
  return (
    <section className="bg-[#EBE9E0] text-[#503017] w-full px-4 py-8 md:px-12">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-10">
        {/* Title */}
        <div>
          <p className="text-2xl md:text-4xl font-bold font-poppins text-center">
            Latest Health Product
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {detail.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[350px] rounded-xl shadow-lg flex flex-col justify-between p-4"
            >
              {/* Top section */}
              <div className="bg-[#F2F2F2] p-2 rounded-xl">
                <button className="bg-[#D3744A] text-white px-3 py-1 rounded-xl mb-2">
                  {item.button}
                </button>

                {/* Image + Shop Now */}
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[80px] h-[150px] object-contain"
                  />
                  <button className="flex  justify-center gap-2 bg-indigo-100 text-sm w-3/4 px-2 py-1 rounded-xl">
                    <img src={item.icon} alt="cart" className="w-5 h-5" />
                    {item.msg}
                  </button>
                </div>
              </div>

              {/* Bottom section */}
              <div className=" mt-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm">{item.price} USD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latestproduct;