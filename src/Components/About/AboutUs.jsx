import React from "react";
import truck from "../About/AboutImages/truck.png";
import exchange from "../About/AboutImages/exchange.png";
import headphone from "../About/AboutImages/headphone.png";
import card from "../About/AboutImages/card.png";
import { div } from "framer-motion/client";

const Services = [
  {
    image: truck,
    service: "Free Shipping",
  },
  {
    image: exchange,
    service: "Easy refund"
  },
  {
    image: headphone,
    service: "Online Support"
  },
  {
    image: card,
    service: "Flexable payment"
  }
];
const AboutUs = () => {
  return (
    <section className="bg-[#EEEDE7] flex justify-center items-center w-screen ">
      <div className="w-[70%] flex  justify-center items-center flex-col">
        <div className="flex gap-4 flex-col my-5 md:flex-row items-center md:py-10 justify-between">
          <div className="font-bold text-5xl w-full text-center md:text-start md:w-3/12">
            <h3>About Us</h3>
          </div>
          <div className="text-2xl text-center sm:text-start  md:text-4xl font-bold w-9/12">
            <p>
              Our focus is on nurturing wellness and empowering health for all
              ages well being for people worldwide.
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap justify-center gap-8 my-6"> 
          {Services.map((item, index) => (
            <div key={index}
            className="flex flex-col justify-around md:my-6 items-center h-[116px]  w-[180px]">
              <div>
                <div>
                  <img src={item.image} alt="" />
                </div>
              </div>
              <div>
                <p className="text-xl">{item.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
