// app/layout.js or pages/_app.js, depending on your Next.js version
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "Shivam Kumar",
  description: "It is a personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="font-space-mono items-center antialiased flex flex-col min-h-screen">
        <Analytics />
        <Navbar />
        <main className="flex-grow w-full mx-auto flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
