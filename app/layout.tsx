import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/providers/cartProvider";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "KICKS — Sneaker Store",
  description:
    "The biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
