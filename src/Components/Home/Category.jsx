import React from "react";
import tab from "../images/tab.png";
import heart from '../images/heart.png'
import heartbeat from '../images/heartbeat.png'
import kit from '../images/kit.png'
import leaf from '../images/leaf.png'
import simple from '../images/simple.png'
import senatizer from '../images/senatizer.png'
import shopping from '../images/bag-shopping.png'

const Category = () => {
  return (
    <section className="bg-[#EBE9E0] text-[#503017] w-full h-full px-4 py-4 md:px-12 relative md:flex md:justify-center">
      <div className=" w-full lg:w-[80vw] px-4 py-4 lg:px-12 relative md:flex justify-center">
        <div className="flex items-center flex-col h-screen justify-around">
          <div className="">
            <p className="text-4xl font-bold font-poppins">Shop by Category</p>
          </div>

          <div className="flex gap-3">

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="p-3 w-full sm:w-[48%] md:w-[30%] lg:w-[160px] h-[215px] flex flex-col justify-center items-center rounded-xl shadow-2xl gap-3">
                <img src={tab} alt="tab-icon" className="w-[115px] h-[115px]" />
                <div className="flex flex-col items-center">
                  <h5 className="font-bold text-xl">Medicine</h5>
                  <p>32 items</p>
                </div>
              </div>

              <div className="p-3 w-full sm:w-[48%] md:w-[30%] lg:w-[160px] h-[215px] flex flex-col justify-center items-center rounded-xl shadow-2xl gap-3">
                <img src={heart} alt="Heart icon" className="w-[115px] h-[115px]" />
                <div className="flex flex-col items-center">
                  <h5 className="font-bold text-xl">Health Care</h5>
                  <p>20 items</p>
                </div>
              </div>

              <div className="p-3 w-full sm:w-[48%] md:w-[30%] lg:w-[160px] h-[215px] flex flex-col justify-center items-center rounded-xl shadow-2xl gap-3">
                <img src={leaf} alt="leaf-icon" className="w-[115px] h-[115px]" />
                <div className="flex flex-col items-center">
                  <h5 className="font-bold text-xl">Beauty Care</h5>
                  <p>30 items</p>
                </div>
              </div>

              <div className="p-3 w-full sm:w-[48%] md:w-[30%] lg:w-[160px] h-[215px] flex flex-col justify-center items-center rounded-xl shadow-2xl gap-3">
                <img src={heartbeat} alt="heartbeat-icon" className="w-[115px] h-[115px]" />
                <div className="flex flex-col items-center">
                  <h5 className="font-bold text-xl">Fitness</h5>
                  <p>35 items</p>
                </div>
              </div>

              <div className="p-3 w-full sm:w-[48%] md:w-[30%] lg:w-[160px] h-[215px] flex flex-col justify-center items-center rounded-xl shadow-2xl gap-3">
                <img src={simple} alt="simple-icon" className="w-[115px] h-[115px]" />
                <div className="flex flex-col items-center">
                  <h5 className="font-bold text-base">Lab Equipment</h5>
                  <p>25 items</p>
                </div>
              </div>

              <div className="p-3 w-full sm:w-[48%] md:w-[30%] lg:w-[160px] h-[215px] flex flex-col justify-center items-center rounded-xl shadow-2xl gap-3">
                <img src={kit} alt="kit-icon" className="w-[115px] h-[115px]" />
                <div className="flex flex-col items-center">
                  <h5 className="font-bold text-xl">Madkits</h5>
                  <p>25 items</p>
                </div>
              </div>
              {/* Repeat for other cards */}
            </div>
          </div>

          <div className="">

            <div className=" w-[380px] h-[230px] bg-amber-300 flex">
              <div className="flex flex-col justify-around m-2">
                <div className="">
                  <button>Sanitizer</button>
                </div>
                <div className="">
                  <p className="text-3xl">Hand Sanitizer Collection</p>
                  <button>
                    <img src={shopping} alt=" bag" />
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="">
                <img src= {senatizer} alt="" />
              </div>

            </div>

          </div>



        </div>
      </div>
    </section>
  );
};

export default Category;
