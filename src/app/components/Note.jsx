"use client";
import React from "react";
import Link from "next/link";

const Note = () => {
  return (
    <section className="py-12 px-4 border-t border-white/5 bg-[#050505]">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center animate-spin-slow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-500"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-mono text-gray-500 tracking-widest">
            // SYSTEM_NOTE
          </p>
          <p className="text-gray-400 font-light text-sm italic max-w-lg mx-auto">
            "This architecture is living. It evolves with every commit. Built on
            the Next.js framework. Styled with Tailwind."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-[10px] tracking-widest uppercase">
          <Link
            href="https://github.com/Shivam020202/final-portfolio"
            className="px-4 py-2 border border-white/10 hover:border-white/50 text-gray-500 hover:text-white transition-all"
          >
            View Source
          </Link>
          <Link
            href="/404"
            className="px-4 py-2 border border-white/10 hover:border-red-500/50 text-gray-500 hover:text-red-400 transition-all"
          >
            /404_Test
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Note;
