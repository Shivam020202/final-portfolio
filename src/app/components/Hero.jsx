"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center pt-24 pb-12 px-4">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Col: Text & Intro */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-sm md:text-md font-medium tracking-[0.2em] text-[#00ff99] uppercase animate-pulse">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">
              SHIVAM <span className="text-chrome">KUMAR</span>
            </h1>
            <div className="h-[1px] w-24 bg-white/20 my-4 mx-auto lg:mx-0"></div>
            <h3 className="text-xl md:text-2xl font-light tracking-widest text-[#a1a1aa] font-[family-name:var(--font-syncopate)]">
              UI/UX Architect & Dev
            </h3>
          </div>

          <p className="text-lg text-[#71717a] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Crafting high-performance digital interfaces with a focus on motion,
            aesthetics, and user-centric architecture. Currently building at{" "}
            <span className="text-white">Branding Pioneers</span>.
          </p>

          {/* Tech Stack Mini-Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 opacity-80">
            {/* Tech Item */}
            <div className="border border-white/10 rounded p-2 text-center text-xs tracking-wider text-gray-400 hover:border-purple-500/50 transition-colors">
              NEXT.JS
            </div>
            <div className="border border-white/10 rounded p-2 text-center text-xs tracking-wider text-gray-400 hover:border-blue-500/50 transition-colors">
              REACT
            </div>
            <div className="border border-white/10 rounded p-2 text-center text-xs tracking-wider text-gray-400 hover:border-green-500/50 transition-colors">
              TAILWIND
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-4 justify-center lg:justify-start">
            <a
              href="#works"
              className="group relative px-8 py-3 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-all"
            >
              View Protocol
              <div className="absolute inset-0 border border-white group-hover:scale-105 transition-transform duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-3 bg-transparent text-white border border-white/20 font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-all"
            >
              Initialize Comms
            </a>
          </div>
        </div>

        {/* Right Col: Visual / Image / Data Panel */}
        <div className="lg:col-span-5 relative">
          {/* LED Wrapper for the Image Card */}
          <div className="led-wrapper p-[1px] rounded-2xl transform  transition-transform duration-500">
            <div className="led-content p-2 rounded-2xl bg-[#080808]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="https://i.pinimg.com/originals/50/62/47/506247ebcde7a1fcdb001109163115f3.jpg"
                  alt="Shivam Profile"
                  fill
                  className="object-cover"
                />
                {/* Overlay UI Elements */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 border border-white/10 rounded">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>STATUS</span>
                    <span className="text-green-400">● ACTIVE</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 my-2"></div>
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>LOC</span>
                    <span>INDIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements behind */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-white/5 rounded-2xl hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div> */}
    </section>
  );
};

export default Hero;
