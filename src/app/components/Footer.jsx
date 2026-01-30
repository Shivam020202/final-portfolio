"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-chrome font-bold tracking-widest text-lg">SK</div>

        <p className="text-xs text-gray-600 font-mono tracking-wider">
          © {new Date().getFullYear()} SHIVAM KUMAR. ALL SYSTEMS OPERATIONAL.
        </p>

        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
