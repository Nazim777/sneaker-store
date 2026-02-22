"use client";

import { useState } from "react";
import { SIZES } from "@/lib/constants/size";
import { COLORS } from "@/lib/constants/colors";
import { useCart } from "@/components/providers/cartProvider";

export default function ProductInfo({ product }: { product: any }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("42");
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 ">
      <div>
        <span className="bg-[#4A69E2] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase mb-4 inline-block">
          New Release
        </span>
        <h1 className="text-3xl md:text-5xl font-[1000] uppercase tracking-tighter text-[#232321] leading-none">
          {product.title}
        </h1>
        <p className="text-2xl font-bold text-[#4A69E2] mt-4">${product.price}.00</p>
      </div>

      {/* Colors */}
      <div>
        <p className="text-xs font-bold uppercase text-gray-500 mb-2">Color</p>
        <div className="flex gap-2">
          {COLORS.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              className={`w-8 h-8 rounded-full transition-all ${
                selectedColor === i ? "ring-2 ring-offset-2 ring-black" : "ring-1 ring-gray-200"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold uppercase text-gray-500">Size</p>
          <button className="text-xs underline font-bold uppercase">Size Chart</button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
          {SIZES.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`h-11 text-sm font-bold rounded-xl border transition-all ${
                selectedSize === size
                  ? "bg-[#232321] text-white border-[#232321]"
                  : "bg-white border-transparent hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-4 rounded-xl text-xs font-bold uppercase tracking-widest ${
              added ? "bg-green-600 text-white" : "bg-[#232321] text-white"
            }`}
          >
            {added ? "Added!" : "Add to Cart"}
          </button>
          <button className="p-4 border-2 border-[#232321] rounded-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <button className="w-full py-4 bg-[#4A69E2] text-white rounded-xl text-xs font-bold uppercase">
          Buy It Now
        </button>
      </div>
    </div>
  );
}