import HeroSection from "@/components/sections/HeroSection";

import dynamic from "next/dynamic";

const NewDropsSection = dynamic(
  () => import("@/components/sections/NewDropsSection"),
);

const CategoriesSection = dynamic(
  () => import("@/components/sections/CategoriesSection"),
);

import ReviewsSection from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <main className="bg-[#E7E7E3] min-h-screen">
      <HeroSection />
      <NewDropsSection />
      <CategoriesSection />
      <ReviewsSection />
    </main>
  );
}
