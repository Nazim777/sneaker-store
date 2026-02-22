import React from "react";

import Image from "next/image";
import { useCart } from "@/components/providers/cartProvider";
import { getImageUrlForProduct } from "@/lib/utils/helper";
import OrderSummary from "./OrderSummary";
const CartItem = () => {
   const { state, removeItem } = useCart();
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* LEFT: Your Bag Card */}
      <div className="flex-1 bg-white p-6 md:p-10 rounded-[2rem] md:rounded-2xl shadow-sm w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Your Bag</h1>
        <p className="text-[13px] md:text-sm text-gray-500 mb-8">
          Items in your bag not reserved - check out now to make them yours.
        </p>

        <div className="space-y-10">
          {state.items.map((item) => {
            const imgUrl = getImageUrlForProduct(item.product.images);
            return (
              /* CHANGED: flex-row instead of flex-col to keep side-by-side on mobile */
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex flex-row gap-4 md:gap-6"
              >
                {/* Product image - Adjusted width for mobile side-by-side */}
                <div className="relative w-32 h-32 md:w-48 md:h-48 bg-[#F5F5F3] rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={imgUrl}
                    alt={item.product.title}
                    fill
                    className="object-contain p-2 md:p-4"
                    unoptimized
                  />
                </div>

                {/* Info Section */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-sm md:text-lg leading-tight uppercase tracking-tight truncate sm:whitespace-normal">
                        {item.product.title}
                      </h3>
                      <p className="text-[11px] md:text-sm text-gray-600 mt-1">
                        Men's Road Running Shoes
                      </p>
                      <p className="text-[11px] md:text-sm text-gray-600">
                        Enamel Blue/ University White
                      </p>

                      <div className="flex gap-4 md:gap-6 mt-2 md:mt-4 text-[11px] md:text-sm font-medium">
                        <div className="flex items-center gap-1 cursor-pointer">
                          <span>Size {item.size}</span>
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <span>Quantity {item.quantity}</span>
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Mobile Price - Positioned right under selectors */}
                      <div className="sm:hidden mt-2">
                        <span className="font-bold text-[#4263EB] text-base">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Desktop Price */}
                    <span className="hidden sm:block font-bold text-[#4263EB] text-xl">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-4 sm:mt-0">
                    <button className="hover:text-blue-600">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id, item.size)}
                      className="hover:text-red-500"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Order Summary Card */}
     <OrderSummary/>
    </div>
  );
};

export default CartItem;
