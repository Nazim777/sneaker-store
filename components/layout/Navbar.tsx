"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/providers/cartProvider";

export default function Navbar() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative top-8 mx-auto w-[95%] max-w-7xl bg-[#FAFAFA] border border-gray-200 rounded-2xl shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center">
        <button
          className="md:hidden flex flex-col gap-1 p-1 mr-4"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-5 h-0.5 bg-black block" />
          <span className="w-5 h-0.5 bg-black block" />
          <span className="w-5 h-0.5 bg-black block" />
        </button>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold text-black hover:text-blue-600 transition-colors flex items-center gap-1">
            New Drops 🔥
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </Link>
          <Link href="/" className="text-sm font-semibold text-black hover:text-blue-600 transition-colors flex items-center gap-1">
            Men
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </Link>
          <Link href="/" className="text-sm font-semibold text-black hover:text-blue-600 transition-colors flex items-center gap-1">
            Women
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </Link>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-display text-4xl font-black tracking-tight uppercase">
          KICKS
        </Link>

        <div className="flex items-center gap-4 ml-auto">
          <button aria-label="Search" className="hidden md:flex hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button aria-label="Account" className="hidden md:flex hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </button>
          <Link href="/cart" aria-label="Cart">
            <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
              {itemCount}
            </span>
          </Link>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-sm font-semibold" onClick={() => setMobileOpen(false)}>New Drops 🔥</Link>
          <Link href="/" className="text-sm font-semibold" onClick={() => setMobileOpen(false)}>Men</Link>
          <Link href="/" className="text-sm font-semibold" onClick={() => setMobileOpen(false)}>Women</Link>
          <hr />
          <Link href="/cart" className="text-sm font-semibold" onClick={() => setMobileOpen(false)}>Cart ({itemCount})</Link>
        </div>
      )}
    </header>
  );
}
