"use client";

import Link from "next/link";

import { useProducts } from "@/hooks/useData";
import { ProductCardSkeleton } from "../../features/products/components/ProudctCardSkeleton";
import ProductCard from "../ui/Card";

export default function NewDropsSection() {
  const { products, loading, error } = useProducts(8);

  return (
    <section className="bg-[#E7E7E3] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-4xl md:text-7xl font-black uppercase tracking-tight leading-tight">
              Don't miss out
              <br />
              New Drops
            </h2>
          </div>
          <Link
            href="/"
            className="hidden sm:inline-block bg-blue-600 text-white text-[11px] font-bold px-5 py-2.5 uppercase tracking-widest hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            SHOP NEW DROPS
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm mb-6 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            : products
                .slice(0, 4)
                .map((p, i) => (
                  <ProductCard key={p.id} product={p} badge="New" />
                ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white text-xs font-bold px-6 py-3 uppercase tracking-widest"
          >
            SHOP NEW DROPS
          </Link>
        </div>
      </div>
    </section>
  );
}
