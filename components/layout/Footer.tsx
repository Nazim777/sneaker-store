"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#E7E7E3] px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Newsletter Section — Blue Section */}
        <div className="bg-[#4A69E2] px-6 pt-10 pb-20 md:px-16 md:pt-16 md:pb-28 rounded-t-[2.5rem] md:rounded-t-[3rem]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 w-full max-w-xl text-left">
              <h2 className="text-3xl md:text-5xl font-[900] uppercase leading-[0.9] text-white tracking-tight">
                Join our KicksPlus <br className="hidden md:block" /> Club & get 15% off
              </h2>
              <p className="text-white/90 text-sm md:text-lg mt-4 font-medium">
                Sign up for free! Join the community.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="flex-1 px-2 py-2 sm:px-4 sm:py-3 rounded-lg text-sm text-white bg-transparent border border-white/40 outline-none placeholder:text-white/60 focus:border-white transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#232321] text-white px-2 py-2 sm:px-8 sm:py-3 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-black transition-all"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            <div className="w-full md:w-auto flex justify-center md:block">
              <div className="relative">
                <span className="text-white text-7xl md:text-[9rem] font-[1000] tracking-tighter leading-none">
                  KICKS
                </span>
                <span className="absolute -top-1 -right-4 w-6 h-6 bg-[#FFA52F] border-[3px] border-[#4A69E2] rounded-full flex items-center justify-center text-[12px] text-white font-black">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section (Dark) */}
        <div className="bg-[#232321] text-white px-8 md:px-16 pt-16 pb-0 relative rounded-[2.5rem] md:rounded-[3rem] -mt-12 md:-mt-16 z-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10 relative z-20">
            {/* About Us */}
            <div>
              <h4 className="text-[#FFA52F] text-xl font-bold mb-4">About us</h4>
              <p className="text-sm md:text-base text-gray-300 leading-snug font-medium max-w-xs">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[#FFA52F] text-xl font-bold mb-4">Categories</h4>
              <ul className="flex flex-col gap-2">
                {["Runners", "Sneakers", "Basketball", "Outdoor", "Golf", "Hiking"].map((cat) => (
                  <li key={cat}>
                    <Link href="/" className="text-sm md:text-base font-medium text-gray-300 hover:text-white transition-colors">{cat}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#FFA52F] text-xl font-bold mb-4">Company</h4>
              <ul className="flex flex-col gap-2">
                {["About", "Contact", "Blogs"].map((item) => (
                  <li key={item}>
                    <Link href="/" className="text-sm md:text-base font-medium text-gray-300 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-[#FFA52F] text-xl font-bold mb-4">Follow us</h4>
              <div className="flex gap-5">
                {/* Facebook icon logic here... */}
                <a href="#" className="text-white hover:text-[#FFA52F] transition-colors"><FacebookIcon /></a>
                <a href="#" className="text-white hover:text-[#FFA52F] transition-colors"><InstagramIcon /></a>
                <a href="#" className="text-white hover:text-[#FFA52F] transition-colors"><TwitterIcon /></a>
                <a href="#" className="text-white hover:text-[#FFA52F] transition-colors"><TikTokIcon /></a>
              </div>
            </div>
          </div>

          {/* LARGE KICKS WORDMARK - UPDATED FOR WIDTH */}
          <div className="relative select-none pointer-events-none mt-10 w-full flex justify-center items-end">
            <h3 className="text-[25vw] md:text-[22vw] font-[1000] leading-[0.7] tracking-[-0.05em] text-white uppercase w-full text-center translate-y-[40%] opacity-100 scale-x-110">
              KICKS
            </h3>
          </div>
        </div>
      </div>

      <div className="py-6">
        <p className="text-xs text-gray-500 font-medium text-center">© All rights reserved</p>
      </div>
    </footer>
  );
}

// Simple Placeholder for the SVG icons you have
const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>;
const InstagramIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const TwitterIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const TikTokIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.3a2.824 2.824 0 00-1.49 2.51c-.02 1.42 1.11 2.73 2.53 2.79.97.07 1.93-.35 2.54-1.1.74-.81.89-1.97.89-3.05V0z" /></svg>;