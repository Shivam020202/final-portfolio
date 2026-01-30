import { Syncopate, Rajdhani } from "next/font/google"; // Sleek, futuristic fonts
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

// For that wide, premium metallic header look (Thin/Regular weights)
const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

// For tech-inspired, readable body text
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "SHIVAM KUMAR | Portfolio",
  description: "Premium Digital Experiences & UI/UX Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syncopate.variable} ${rajdhani.variable}`}>
      <body className="antialiased bg-[#050505] text-gray-300 selection:bg-purple-500/30 selection:text-purple-200">
        <Analytics />
        <Navbar />
        <main className="flex-grow w-full mx-auto flex flex-col items-center overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
