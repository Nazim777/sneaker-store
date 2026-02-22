import Link from "next/link";


export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <svg className="w-20 h-20 text-gray-200 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <h2 className="font-display text-3xl font-black uppercase tracking-tight mb-2">
        Your bag is empty
      </h2>
      <p className="text-gray-500 text-sm mb-8 max-w-xs">
        Looks like you haven't added anything to your bag yet.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors"
      >
        Shop Now
      </Link>
    </div>
  );
}