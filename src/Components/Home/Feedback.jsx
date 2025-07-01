import React, { useState } from 'react';

const testimonials = [
  {
    name: 'James Wilson',
    role: 'Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      "I'm so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything I needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful.",
  },
  {
    name: 'Henry Adams',
    role: 'CEO',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote:
      'A truly seamless shopping experience. Everything from browsing to checkout was smooth and intuitive. Highly recommend!',
  },
  {
    name: 'Ethan Harris',
    role: 'Business manager',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote:
      'One of the best platforms I’ve used. The team behind it knows what they’re doing and support is fantastic!',
  },
  {
    name: 'Lily Baker',
    role: 'Product manager',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote:
      'Fast delivery, quality products, and great support. Can’t ask for more. I’ll definitely return for future needs.',
  },
];

export default function Feedback() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="bg-[#f9f8f3] py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold text-[#4a2c18] mb-10">Our happy clients</h2>

      <div className="bg-white max-w-3xl mx-auto p-6 rounded-lg shadow text-sm text-gray-600 mb-10">
        <div className="text-5xl text-gray-300 mb-4">&ldquo;</div>
        <p className="leading-relaxed">{active.quote}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {testimonials.map((user, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 px-4 py-2 border rounded-lg transition hover:shadow-md ${
              index === activeIndex ? 'border-gray-400 bg-white' : 'border-transparent'
            }`}
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-semibold">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
