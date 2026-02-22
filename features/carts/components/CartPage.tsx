"use client";
import { useCart } from "@/components/providers/cartProvider";
import { useProducts } from "@/hooks/useData";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import EmptyCart from "@/features/carts/components/EmtyCart";
import dynamic from "next/dynamic";
const ProductSuggest = dynamic(
  () => import("@/components/sections/ProductSuggest"),
);

export default function CartPage() {
  const { state } = useCart();
  const { products, loading } = useProducts(8);

  const delivery = 6.99;
  const salesTax = 0.0;
  const suggestedProducts = products.slice(0, 4);

  return (
    <main className="bg-[#E7E7E3] min-h-screen mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#212121]">
          Saving to celebrate
        </h2>
        <p className="text-[13px] text-[#212121] mt-2 leading-tight">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while supplies last. No code needed.
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
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-10 bg-white">
              <CartItem state={state} />
            </div>

            <OrderSummary
              state={state}
              delivery={delivery}
              salesTax={salesTax}
            />
          </div>
        )}

        <div className="mt-2 border-gray-300 pt-2">
          <ProductSuggest
            loading={loading}
            suggestedProduct={suggestedProducts}
          />
        </div>
      </div>
    </main>
  );
}
