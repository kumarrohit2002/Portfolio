import React from "react";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import PortfolioContextProvider from "../context/PortfolioContext";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";

export const metadata = {
  title: "Rohit K. | Premium Cinematic Portfolio",
  description: "A world-class digital experience built with Next.js, Three.js, and GSAP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#121414] text-white selection:bg-[#5454D4] selection:text-white">
        <SmoothScroll>
          <PortfolioContextProvider>
            <CustomCursor />
            {children}
            <Toaster />
          </PortfolioContextProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
