"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-4 pt-10 pb-4 md:pt-10 md:pb-10 bg-[#E7E7E3] min-h-[calc(100vh-200px)] flex flex-col items-center justify-start">
      <div className="max-w-7xl w-full flex flex-col h-full">
        <div className="mb-4 md:mb-8 mt-4">
          <h1 className="text-[clamp(3rem,18vw,10rem)] font-black leading-[0.8] tracking-tighter text-center uppercase ">
            <span className="text-[#1C1C1C]">DO IT</span>
            <span className="hidden md:inline"> </span>
            <br className="md:hidden" />
            <span className="text-[#4F70F0]">RIGHT</span>
          </h1>
        </div>

        {/* Hero Card */}
        <div className="relative  md:p-1 rounded-[2.5rem] md:rounded-3xl overflow-hidden shadow-2xl flex-1">
          <div className="relative h-[55vh] md:h-auto md:aspect-[21/9] lg:aspect-[1320/750] overflow-hidden bg-[#A1824A]">
            <Image
              src="/images/image-hero.png"
              alt="Nike Air Max"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Vertical Badge */}
            <div className="absolute left-0 top-1/4 -translate-y-1/2 w-8 md:w-16 py-6 md:py-10 bg-[#232321] backdrop-blur-sm rounded-r-xl flex items-center justify-center z-20">
              <span className="text-white text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase vertical-text rotate-180">
                Nike product of the year
              </span>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-12 z-20">
              <h2 className="text-3xl md:text-6xl lg:text-8xl font-black text-white uppercase  tracking-tighter leading-none mb-2">
                NIKE AIR MAX
              </h2>
              <p className="text-white text-[12px] md:text-lg font-medium leading-tight mb-4 md:mb-6 max-w-[180px] md:max-w-md opacity-90">
                Nike introducing the new air max for everyone's comfort
              </p>

              <Link
                href="/shop"
                className="inline-block bg-[#4F70F0] text-white text-[10px] md:text-sm font-bold px-6 py-3 md:px-10 md:py-4 rounded-xl uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95"
              >
                Shop Now
              </Link>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-6 right-4 md:bottom-10 md:right-10 flex flex-col gap-2 md:gap-4 z-20">
              <div className="relative w-16 h-14 md:w-32 md:h-24 rounded-lg md:rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl">
                <Image
                  src="/images/Rectangle_1.png"
                  alt="Thumbnail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-16 h-14 md:w-32 md:h-24 rounded-lg md:rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl">
                <Image
                  src="/images/Rectangle_2.png"
                  alt="Thumbnail 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
