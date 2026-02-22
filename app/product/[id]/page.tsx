"use client";

import ProductDetailSkeleton from "@/features/products/components/ProductDetailSkeleton";
import React, { lazy, Suspense } from "react";
const ProductDetailsPage = lazy(
  () => import("@/features/products/components/ProductDetailsPage"),
);
const page = () => {
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetailsPage />
    </Suspense>
  );
};

export default page;




// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { useProduct, useProducts } from "@/hooks/useData";
// import { useCart } from "@/components/providers/cartProvider";
// import { SIZES } from "@/lib/constants/size";
// import { COLORS } from "@/lib/constants/colors";
// import { getMultipleImageUrlForProduct } from "@/lib/utils/helper";
// import ProductDetailSkeleton from "@/features/products/components/ProductDetailSkeleton";
// import ProductSuggest from "@/components/sections/ProductSuggest";

// export default function ProductDetailPage() {
//   const params = useParams();
//   const id = Number(params.id);
//   const { product, loading, error } = useProduct(id);
//   const { products, loading: productsLoading } = useProducts(8);
//   const { addItem } = useCart();

//   const [selectedSize, setSelectedSize] = useState("42");
//   const [selectedColor, setSelectedColor] = useState(0);
//   const [activeImage, setActiveImage] = useState(0);
//   const [added, setAdded] = useState(false);

//   const images = product ? getMultipleImageUrlForProduct(product.images) : [];

//   const handleAddToCart = () => {
//     if (!product) return;
//     addItem(product, selectedSize);
//     setAdded(true);
//     setTimeout(() => setAdded(false), 2000);
//   };

//   const similarProducts = products.filter((p) => p.id !== id).slice(0, 4);

//   return (
//     <main className="bg-[#E7E7E3] min-h-screen pt-12">
//       {/* Changed max-w to 7xl and removed the inner background to match Cart Page container */}
//       <div className="max-w-7xl mx-auto px-4 py-10">
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 text-sm">
//             {error}
//           </div>
//         )}

//         {loading ? (
//           <ProductDetailSkeleton />
//         ) : product ? (
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10">
            
//             {/* --- GALLERY SECTION --- */}
//             <div className="w-full">
//               {/* MOBILE DESIGN */}
//               <div className="flex flex-col md:hidden gap-4">
//                 <div className="relative bg-[#F5F5F5] rounded-sm overflow-hidden aspect-square">
//                   {images[activeImage] && (
//                     <Image
//                       src={images[activeImage]}
//                       alt={product.title}
//                       fill
//                       className="object-cover"
//                       unoptimized
//                     />
//                   )}
//                 </div>
//                 <div className="flex gap-2 overflow-x-auto pb-2">
//                   {images.map((img, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setActiveImage(i)}
//                       className={`relative w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden border-2 ${
//                         activeImage === i ? "border-blue-600" : "border-transparent"
//                       }`}
//                     >
//                       <Image src={img} alt="thumb" fill className="object-cover" unoptimized />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* DESKTOP DESIGN - 2x2 Grid */}
//               <div className="hidden md:grid grid-cols-2 gap-4">
//                 {images.slice(0, 4).map((img, i) => (
//                   <div key={i} className="relative aspect-square bg-[#F5F5F5] rounded-[2rem] overflow-hidden">
//                     <Image
//                       src={img}
//                       alt={`${product.title} ${i}`}
//                       fill
//                       className="object-cover"
//                       unoptimized
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* --- RIGHT: Product info --- */}
//             <div className="flex flex-col gap-6 lg:sticky lg:top-24">
//               <div>
//                 <span className="bg-[#4A69E2] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase mb-4 inline-block">
//                   New Release
//                 </span>
//                 <h1 className="text-3xl md:text-5xl font-[1000] uppercase tracking-tighter text-[#232321] leading-none">
//                   {product.title}
//                 </h1>
//                 <p className="text-2xl font-bold text-[#4A69E2] mt-4">
//                   ${product.price}.00
//                 </p>
//               </div>

//               {/* Colors */}
//               <div>
//                 <p className="text-xs font-bold uppercase text-gray-500 mb-2">Color</p>
//                 <div className="flex gap-2">
//                   {COLORS.map((color, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setSelectedColor(i)}
//                       className={`w-8 h-8 rounded-full transition-all ${
//                         selectedColor === i ? "ring-2 ring-offset-2 ring-black" : "ring-1 ring-gray-200"
//                       }`}
//                       style={{ backgroundColor: color }}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Sizes */}
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <p className="text-xs font-bold uppercase text-gray-500">Size</p>
//                   <button className="text-xs underline font-bold uppercase">Size Chart</button>
//                 </div>
//                 <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
//                   {SIZES.map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`h-11 text-sm font-bold rounded-xl border transition-all ${
//                         selectedSize === size
//                           ? "bg-[#232321] text-white border-[#232321]"
//                           : "bg-white border-transparent hover:border-black"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* CTA buttons */}
//               <div className="flex flex-col gap-3">
//                 <div className="flex gap-2">
//                   <button
//                     onClick={handleAddToCart}
//                     className={`flex-1 py-4 rounded-xl text-xs font-bold uppercase tracking-widest ${
//                       added ? "bg-green-600 text-white" : "bg-[#232321] text-white"
//                     }`}
//                   >
//                     {added ? "Added!" : "Add to Cart"}
//                   </button>
//                   <button className="p-4 border-2 border-[#232321] rounded-xl">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                     </svg>
//                   </button>
//                 </div>
//                 <button className="w-full py-4 bg-[#4A69E2] text-white rounded-xl text-xs font-bold uppercase">
//                   Buy It Now
//                 </button>
//               </div>

//               {/* About */}
//               <div className="border-t border-gray-200 pt-6">
//                 <h3 className="text-sm font-bold uppercase mb-3">About the Product</h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {product.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : null}

//         {/* This container now perfectly matches the width of the main content and Footer */}
//         <div className="mt-16 border-t border-gray-300 pt-10">
//           <ProductSuggest loading={productsLoading} suggestedProduct={similarProducts}/>
//         </div>
//       </div>
//     </main>
//   );
// }