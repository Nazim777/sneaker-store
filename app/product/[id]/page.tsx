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