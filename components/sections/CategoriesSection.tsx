"use client";

import { useState } from "react";
import Image from "next/image";
import { useCategories } from "@/hooks/useData";
import { getImageUrlForCategory } from "@/lib/utils/helper";

export default function CategoriesSection() {
  const { categories, loading, error } = useCategories();
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 2;
  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="bg-[#232321] text-white pt-16">
      {/* Top Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8 flex items-center justify-between">
        <h2 className="text-4xl md:text-7xl font-[1000] uppercase tracking-tighter">
          Categories
        </h2>

        {/* Navigation arrows - Active only on Desktop */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (window.innerWidth >= 768) prev();
            }}
            disabled={currentIndex === 0}
            className="w-10 h-10 bg-[#70706E] text-white/50 rounded-md flex items-center justify-center disabled:opacity-20 transition-all cursor-default md:cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              if (window.innerWidth >= 768) next();
            }}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 bg-[#FAFAFA] text-black rounded-md flex items-center justify-center disabled:opacity-20 transition-all cursor-default md:cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {error && (
        <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 text-sm mb-6 rounded">
          {error}
        </div>
      )}

      {/* Main Container */}

      <div className="w-full flex justify-end">
        <div className="w-full md:max-w-[calc(100%-2rem)] lg:max-w-[calc(1440px-3rem)] bg-[#ECEEF0] rounded-tl-[3rem] md:rounded-tl-[6rem] overflow-hidden">
          {loading ? (
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-2xl aspect-[4/3] skeleton"
                />
              ))}
            </div>
          ) : (
            <div
              className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? "none"
                    : `translateX(-${currentIndex * 50}%)`,
              }}
            >
              {categories.map((cat, index) => (
                <div
                  key={cat.id}
                  className={`flex-shrink-0 w-full md:w-1/2 relative aspect-[1/1] md:aspect-[1/0.95] group cursor-pointer border-b md:border-b-0 md:border-r border-[#D1D1D1] last:border-0
                  ${index % 2 === 0 ? "bg-[#ECEEF0]" : "bg-[#F6F6F6]"}
                  ${index >= 2 ? "hidden md:block" : "block"} `}
                >
                  {/* Product Image */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16 mb-24">
                    <div className="relative w-full h-full">
                      <Image
                        src={getImageUrlForCategory(cat.image)}
                        alt={cat.name}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/images/image-hero.png";
                        }}
                      />
                    </div>
                  </div>

                  {/* Label & Arrow */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end justify-between">
                    <h3 className="text-3xl md:text-4xl font-[1000] uppercase leading-[0.8] tracking-tighter text-[#232321]">
                      {cat.name} <br /> Shoes
                    </h3>

                    <button className="w-10 h-10 md:w-12 md:h-12 bg-[#232321] text-white flex items-center justify-center rounded-lg hover:bg-black transition-colors">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
