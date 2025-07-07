import React, { useState } from "react";
import { FaBullseye, FaRegThumbsUp, FaEye } from "react-icons/fa";
import Medi from "../About/AboutImages/Medi.png";

const items = [
  {
    id: "mission",
    label: "Mission",
    icon: <FaBullseye className="text-xl" />,
    description:
      "Our mission is to redefine how people access and understand healthcare.",
  },
  {
    id: "commitments",
    label: "Commitments",
    icon: <FaRegThumbsUp className="text-xl" />,
    description:
      "We're committed to supporting your health journey by offering valuable educational resources, wellness insights, and expert advice to help you make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7e6b98d122?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vision",
    label: "Vision",
    icon: <FaEye className="text-xl" />,
    description:
      "Our vision is a world where wellness and knowledge go hand in hand.",
  },
];

export default function TeamExpectation() {
  const [selected, setSelected] = useState("commitments");
  const currentItem = items.find((item) => item.id === selected);

  return (
    <section className="bg-[#f5f2eb] px-4 py-12 md:py-20 ">
      <div className="max-w-5xl mx-auto gap-8 flex flex-col">
        <div className="w-4/8">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#3b2f23] mb-6">
            What to Expect When You Join Our Team
          </h2>
        </div>

        <div className="flex md:text-left  h-[320px] md:items-start">
          
            <ul className="space-y-4 w-1/3 h-full  flex flex-col ">
              {items.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`flex items-center gap-2 cursor-pointer text-4xl font-medium transition-colors ${
                    selected === item.id ? "text-[#4f2f18]" : "text-[#8b7c6e]"
                  }`}
                >
                  {item.icon} <span>{item.label}</span>
                </li>
              ))}
            </ul>
          
          <div className="w-1/3">
            {currentItem.image && (
              <img
                src={Medi}
                alt={currentItem.label}
                className="rounded-lg w-full max-w-[389px] mb-4"
              />
            )}
          </div>
          <div className="w-1/3 h-full flex ">
            <p className="text-[#5a4a3c] px-2 md:text-lg max-w-md flex justify-end flex-col">
              {currentItem.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
