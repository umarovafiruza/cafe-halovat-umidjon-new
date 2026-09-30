import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { CartProvider } from "../context/CartContext";

export const metadata: Metadata = {
  title: "Cafe Halovat — Shinam Kafe & Mazali Taomlar",
  description: "Cafe Halovat — Halovatli lahzalar, unutilmas ta'mlar, mazali fast food, issiq taomlar va tezkor yetkazib berish xizmati.",
  keywords: "cafe halovat, kafe toshkent, fast food, taomlar yetkazish, halovat cafe, mazali taomlar",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className="antialiased bg-cafe-50 text-cafe-950 font-sans min-h-screen">
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
