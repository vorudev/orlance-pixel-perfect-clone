import type { Metadata } from "next";
import React from 'react';
import { Geist, Geist_Mono,  } from "next/font/google";
import { CartProvider } from './contexts/CartContext';
import "./globals.css";
import type { Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orlance",
  description: "Orlance template pixel-perfect copy",
openGraph: {
  title: "Orlance",
  description: "Orlance template pixel-perfect copy",
  images: [ 
    {url:'/og.jpg',
        width: 1200,
      height: 630,
      alt: 'Orlance template pixel-perfect copy',
    }
  ]
}
};
export const viewport: Viewport = {
  themeColor: "#FBFBEF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
       <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
