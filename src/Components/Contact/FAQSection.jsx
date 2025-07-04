import React, { useState } from 'react';
import {
  PlusCircle,
  MinusCircle,
  HelpCircle,
} from 'lucide-react';

const faqs = [
  {
    question: 'What products do you offer?',
    answer:
      'We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.',
  },
  {
    question: 'How can I place an order?',
    answer:
      'You can place an order through our website or mobile app. Simply browse products, add them to your cart, and proceed to checkout.',
  },
  {
    question: 'Do you provide home delivery?',
    answer:
      'Yes, we offer fast and reliable home delivery for all eligible products within our service areas.',
  },
  {
    question: 'Can I return or exchange products?',
    answer:
      'Returns or exchanges are accepted within 14 days of purchase, provided the items are unopened and in original condition.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#f8f5ef] w-full py-16 px-4 md:px-10">
      <div className="max-w-[70%] mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4e2c17] flex items-center gap-2">
            Frequently Asked <br className="hidden md:block" /> Questions
            <HelpCircle className="w-6 h-6 text-[#4e2c17]" />
          </h2>
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === activeIndex;
            return (
              <div
                key={index}
                className={`border rounded-md ${
                  isOpen ? 'bg-white border-[#4e2c17]' : 'bg-transparent border-[#a79a91]'
                } transition-all`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-semibold text-[#4e2c17]"
                >
                  {faq.question}
                  {isOpen ? (
                    <MinusCircle className="w-5 h-5" />
                  ) : (
                    <PlusCircle className="w-5 h-5" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
