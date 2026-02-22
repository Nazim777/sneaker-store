"use client";

import { useParams } from "next/navigation";
import { useProduct, useProducts } from "@/hooks/useData";
import ProductDetailSkeleton from "@/features/products/components/ProductDetailSkeleton";
import dynamic from "next/dynamic";

import ProductGallery  from  "./ProductGallery";
const ProductInfo = dynamic(() => import("./ProductInfo"));
const ProductAbout = dynamic(() => import("./ProductAbout"));
const ProductSuggest = dynamic(
  () => import("@/components/sections/ProductSuggest"),
);

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);
  const { product, loading, error } = useProduct(productId);
  const { products, loading: productsLoading } = useProducts(8);

  const similarProducts = products
    .filter((p) => p.id !== productId)
    .slice(0, 4);

  return (
    <main className="bg-[#E7E7E3] min-h-screen pt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {loading ? (
          <ProductDetailSkeleton />
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 text-sm">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10">
            <ProductGallery product={product} />

            <div className="flex flex-col lg:flex-col-reverse gap-2">
              <ProductInfo product={product} />
              <div className="lg:order-first">
                <ProductAbout description={product?.description} />
              </div>
            </div>
          </div>
        )}
        <ProductSuggest
          loading={productsLoading}
          suggestedProduct={similarProducts}
        />
      </div>
    </main>
  );
}
