"use client";

import Image from "next/image";
import Link from "next/link";
import { reviews } from "@/lib/constants/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs font-bold ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-[#E7E7E3] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-4xl md:text-7xl font-black uppercase tracking-tight">
            Reviews
          </h2>
          <Link
            href="/"
            className="bg-blue-600 text-white text-xs font-bold px-5 py-2.5 uppercase tracking-widest hover:bg-blue-700 transition-colors"
          >
            SEE ALL
          </Link>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`bg-white rounded-xl overflow-hidden flex flex-col`}
            >
              {/* Review header */}
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="font-bold text-sm">Good Quality</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {review.text}
                  </p>
                  <Stars rating={review.rating} />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Product image */}
              <div className="relative flex-1 min-h-[325px]">
                <Image
                  src={review.productImg}
                  alt="Review product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
