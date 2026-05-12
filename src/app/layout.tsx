import React from "react";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import PortfolioContextProvider from "../context/PortfolioContext";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import SchemaMarkup from "../components/SchemaMarkup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL('https://kumarrohit.co'),
  title: {
    default: "Rohit Kumar | Full Stack Developer & Next.js Expert",
    template: "%s | Rohit Kumar",
  },
  description: "Advanced Full Stack Developer specialized in MERN Stack, Next.js, and Node.js. Architecting high-performance web applications and scalable SaaS products.",
  keywords: [
    "Rohit Kumar Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Node.js Backend Developer",
    "React.js Developer",
    "Full Stack JavaScript Engineer",
    "API Integration Specialist",
    "Workflow Automation Developer",
    "Real-Time App Developer",
    "Secure Backend Developer",
    "SaaS Application Developer",
    "Freelance Full Stack Developer India",
  ],
  authors: [{ name: "Rohit Kumar" }],
  creator: "Rohit Kumar",
  publisher: "Rohit Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rohit Kumar | Full Stack Developer",
    description: "Premium digital experiences and scalable web solutions architected with Next.js & MERN.",
    url: "https://kumarrohit.co", // Replace with actual domain if known
    siteName: "Rohit Kumar Portfolio",
    images: [
      {
        url: "/img/og-image.png", // User should provide this
        width: 1200,
        height: 630,
        alt: "Rohit Kumar - Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kumar | Full Stack Developer",
    description: "Building the future of the web with Next.js and Node.js.",
    creator: "@kumarrohit2002",
    images: ["/img/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#121414] text-white selection:bg-[#5454D4] selection:text-white">
        <SchemaMarkup />
        <SmoothScroll>
          <PortfolioContextProvider>
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </PortfolioContextProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
