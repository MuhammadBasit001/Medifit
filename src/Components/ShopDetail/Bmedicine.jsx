import React, { useState } from "react";
import medipill from '../ShopDetail/Shopimages/medipills.png'
import yellowpill from '../ShopDetail/Shopimages/yellowpills.png'

const BMedicine = ({
  product = {
    name: "B12 Medicine",
    price: 19,
    oldPrice: 25,
    description:
      "B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, animia, or ristricted diet, like vegetarains and vegans",
    benefits: [
      "Boosts energy levels.",
      "Supports healthy brain function.",
      "Promotes red blood cell production.",
      "Aids in maintaining nerve health.",
    ],
    mainImage: {yellowpill}, // Replace with real path
    secondaryImage:{medipill} , // Replace with real path
  },
  onAddToCart = (item) => {
    alert(`Added ${item.quantity} of ${item.name} to cart.`);
  },
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity < 1) return;

    const cartItem = {
      ...product,
      quantity,
      totalPrice: quantity * product.price,
    };

    onAddToCart(cartItem);
  };

  return (
    <section className="max-w-full  bg-[#EBE9E0]">
    <div className="flex flex-col bg-[#EBE9E0] text-[#503017] lg:flex-row gap-8 p-6 max-w-6xl mx-auto items-start">
      {/* Image Section */}
      <div className="flex flex-col gap-4  w-full lg:w-1/3">
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <img
            src={yellowpill}
            alt="Main product"
            className="w-full h-auto object-cover"
          />
        </div>
        <img
          src={medipill}
          alt="Secondary"
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="w-full lg:w-2/3 p-6 space-y-5">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-green-600">
            ${product.price.toFixed(2)} USD
          </span>
          <span className="text-lg line-through text-gray-400">
            ${product.oldPrice.toFixed(2)} USD
          </span>
        </div>

        {/* Quantity + Add to Cart */}
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="border border-gray-300 rounded px-3 py-1 w-20"
          />
          <button
            onClick={handleAddToCart}
            className="bg-[#503017] hover:bg-brown-800 text-white px-4 py-2 rounded shadow"
          >
            Add to cart
          </button>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Product Description</h2>
          <p className="text-gray-600 mt-1">{product.description}</p>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Key Benefits:</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BMedicine;
