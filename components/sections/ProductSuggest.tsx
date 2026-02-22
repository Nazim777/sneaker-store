import React, { useState } from "react";
import { ProductCardSkeleton } from "../../features/products/components/ProudctCardSkeleton";
import ProductCard from "../ui/Card";
import { Product } from "@/features/products/types";

interface ProductSuggestProps {
  loading: boolean;
  suggestedProduct: Product[];
}

const ProductSuggest = ({ loading, suggestedProduct }: ProductSuggestProps) => {
  const [activePage, setActivePage] = useState(0);
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight">
          You may also like
        </h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : suggestedProduct.map((p, i) => (
              <ProductCard key={p.id} product={p} badge="New" />
            ))}
      </div>
      <div className="mt-10 flex justify-center items-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              activePage === i
                ? "w-16 bg-[#4A69E2]" // Active: Longer blue bar
                : "w-8 bg-gray-300" // Inactive: Shorter gray bar
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggest;
