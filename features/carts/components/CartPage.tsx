"use client";

import { useCart } from "@/components/providers/cartProvider";
import { useProducts } from "@/hooks/useData";
import EmptyCart from "@/features/carts/components/EmtyCart";
import ProductSuggest from "@/components/sections/ProductSuggest";
import CartItem from "./CartItem";

export default function CartPage() {
  const { state } = useCart();
  const { products, loading } = useProducts(8);

  const suggestedProducts = products.slice(0, 4);

  return (
    <main className="bg-[#EBEAE5] min-h-screen pb-20">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#212121]">Saving to celebrate</h2>
        <p className="text-[13px] text-[#212121] mt-2 leading-tight">
          Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
        </p>
        <div className="mt-1 text-[13px]">
          <button className="underline font-medium">Join us</button>
          <span className="mx-1 font-medium">or</span>
          <button className="underline font-medium">Sign-in</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {state.items.length === 0 ? (
          <EmptyCart />
        ) : (
         <CartItem/>
        )}

        <div className="mt-20 border-t border-gray-300 pt-10">
          <ProductSuggest loading={loading} suggestedProduct={suggestedProducts}/>
        </div>
      </div>
    </main>
  );
}