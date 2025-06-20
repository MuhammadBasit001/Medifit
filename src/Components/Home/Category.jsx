import React from "react";
import tab from "../images/tab.png";
import heart from "../images/heart.png";
import heartbeat from "../images/heartbeat.png";
import kit from "../images/kit.png";
import leaf from "../images/leaf.png";
import simple from "../images/simple.png";
import senatizer from "../images/senatizer.png";
import shopping from "../images/bag-shopping.png";
import eye from '../images/eye.png';
import facewash from '../images/shampoo.png'
import mask from '../images/mask.png'

const categories = [
  {
    title: "Medicine",
    items: 32,
    icon: tab,
  },
  {
    title: "Health Care",
    items: 20,
    icon: heart,
  },
  {
    title: "Beauty Care",
    items: 30,
    icon: leaf,
  },
  {
    title: "Fitness",
    items: 35,
    icon: heartbeat,
  },
  {
    title: "Lab Equipment",
    items: 25,
    icon: simple,
    textSize: "text-base", // optional customization
  },
  {
    title: "Madkits",
    items: 25,
    icon: kit,
  },
];

const products = [
  {
    name : "Sanitizer",
    detail: "Hand Sanitizer Collection",
    icon : shopping,
    button : "Shop Now",
    image : senatizer
  },
   {
    name : "Top Deal",
    detail: "Face Wash Sale Collection",
    icon : eye,
    button : "Discover Now",
    image : facewash
  },
   {
    name : "Face Mask",
    detail: "Facial mask deals save up to 50%",
    icon : eye,
    button : "Discover Now",
    image : mask
  }
]

const Category = () => {
  return (
    <section className="bg-[#EBE9E0] text-[#503017] w-full px-4 py-4 md:px-12">
  <div className="w-full lg:w-[80vw] px-4 py-4 lg:px-12 mx-auto">
    <div className="flex flex-col items-center gap-y-10">
      {/* Title */}
      <div>
        <p className="text-4xl font-bold font-poppins text-center">
          Shop by Category
        </p>
      </div>

      {/* Category Cards */}
      <div className="flex flex-wrap gap-4 justify-center  p-4 rounded-xl">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-3 w-full sm:w-[48%] md:w-[30%] lg:w-[160px] h-[215px] flex flex-col justify-center items-center rounded-xl shadow-2xl gap-3 bg-[#F2F2F2]"
          >
            <img
              src={category.icon}
              alt={`${category.title}-icon`}
              className="w-[115px] h-[115px]"
            />
            <div className="flex flex-col items-center">
              <h5 className={`font-bold ${category.textSize || "text-xl"}`}>
                {category.title}
              </h5>
              <p>{category.items} items</p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className=" w-full sm:w-[340px] h-auto sm:h-[230px] rounded-xl shadow-2xl bg-[#F2F2F2] flex sm:flex-row overflow-hidden"
          >
            <div className="flex flex-col justify-around p-4 sm:w-1/2 gap-4">
              <div className="bg-[#D3744A] text-white w-fit rounded-2xl px-4 py-1">
                <button>{product.name}</button>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl">{product.detail}</p>
                <button className="w-fit">
                  <span className="inline-flex items-center border-b-2 border-black">
                    <img
                      src={product.icon}
                      alt="icon"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{product.button}</span>
                  </span>
                </button>
              </div>
            </div>

            <div className="sm:w-1/2 flex justify-center items-center p-4">
              <img
                src={product.image}
                alt=""
                className="w-[143px] h-[175px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Category;
