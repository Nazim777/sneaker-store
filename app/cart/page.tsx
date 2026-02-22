"use client";
import CartPageSkeleton from "@/features/carts/components/CartPageSkeleton";
import React, { lazy, Suspense } from "react";
const CartPage = lazy(() => import("@/features/carts/components/CartPage"));

const page = () => {
  return (
    <Suspense fallback={<CartPageSkeleton />}>
      <CartPage />
    </Suspense>
  );
};

export default page;