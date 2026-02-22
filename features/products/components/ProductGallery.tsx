"use client";

import { useState } from "react";
import Image from "next/image";
import { getMultipleImageUrlForProduct } from "@/lib/utils/helper";

export default function ProductGallery({ product }: { product: any }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = getMultipleImageUrlForProduct(product.images);
console.log('images',images)
  return (
    <div className="w-full">
      {/* MOBILE */}
      <div className="flex flex-col md:hidden gap-4">
        <div className="relative bg-[#F5F5F5] rounded-sm overflow-hidden aspect-square">
          <Image
            src={images[activeImage]}
            alt={product.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`relative w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden border-2 ${
                activeImage === i ? "border-blue-600" : "border-transparent"
              }`}
            >
              <Image src={img} alt="thumb" fill className="object-cover"  />
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        {images.slice(0, 4).map((img, i) => (
          <div
            key={i}
            className="relative aspect-square bg-[#F5F5F5] rounded-[2rem] overflow-hidden"
          >
            <Image src={img} sizes="100vw" alt={`${product.title} ${i}`} fill className="object-cover"  />
          </div>
        ))}
      </div>
    </div>
  );
}