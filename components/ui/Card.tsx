"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/features/products/types";
import { getImageUrlForProduct } from "@/lib/utils/helper";

function ProductCard({ product, badge }: { product: Product; badge?: string }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative bg-[#F0F0EE] aspect-square overflow-hidden">
        {badge && (
          <span className="absolute top-2 left-2 z-10 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
            {badge}
          </span>
        )}
        <Image
          src={getImageUrlForProduct(product.images)}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-400"
          unoptimized
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/image-hero.png";
          }}
        />
      </div>
      {/* Info */}
      <div className="p-3">
        <h3 className="text-xs font-black uppercase tracking-wide leading-snug line-clamp-2">
          {product.title}
        </h3>
        <div className="mt-3">
          <Link
            href={`/product/${product.id}`}
            className="block w-full text-center text-[10px] font-bold tracking-wider uppercase bg-black text-white py-2 hover:bg-blue-600 transition-colors"
          >
            VIEW PRODUCT — ${product.price}
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
