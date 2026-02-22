import { useCart } from "@/components/providers/cartProvider";
import React from "react";

const OrderSummary = () => {
  const { state } = useCart();
  const delivery = 6.99;
  const salesTax = 0.0;
  const orderTotal = state.total + (state.total > 0 ? delivery : 0) + salesTax;
  return (
    <div className="w-full lg:w-[400px] bg-white lg:bg-transparent p-8 lg:p-0 rounded-[2rem] lg:rounded-none shadow-sm lg:shadow-none mt-4 lg:mt-0">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4 text-[15px] font-medium text-[#212121]">
        <div className="flex justify-between">
          <span className="uppercase">{state.items.length} ITEM</span>
          <span>${state.total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>${delivery.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Sales Tax</span>
          <span className="text-gray-400">-</span>
        </div>
        <div className="border-t border-gray-200 lg:border-gray-400 pt-4 flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full mt-8 bg-[#1A1A1A] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[13px] flex items-center justify-center gap-2 hover:bg-black transition-all">
        Checkout
      </button>

      <button className="w-full mt-5 text-left text-sm font-medium underline decoration-1 underline-offset-4 text-gray-700">
        User a promo code
      </button>
    </div>
  );
};

export default OrderSummary;
