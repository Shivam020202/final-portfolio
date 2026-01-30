"use client";
import React, { useState } from "react";
import Image from "next/image";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("preview"); // 'preview' or 'skills'

  const skills = [
    { name: "NEXT.JS / REACT", val: 95 },
    { name: "TYPESCRIPT", val: 85 },
    { name: "TAILWIND / CSS", val: 98 },
    { name: "UI ARCHITECTURE", val: 90 },
    { name: "NODE.JS", val: 75 },
    { name: "FIGMA", val: 88 },
  ];

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-widest">
            CAPABILITIES
          </h2>
          <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Skills Data */}
          <div className="space-y-8">
            <h3 className="text-xl text-chrome font-bold tracking-widest mb-6">
              / TECHNICAL_STACK
            </h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-1 text-xs font-mono text-gray-400">
                    <span>{skill.name}</span>
                    <span>{skill.val}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#111] rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-white group-hover:bg-purple-400 transition-colors duration-500 rounded-full relative"
                      style={{ width: `${skill.val}%` }}
                    >
                      {/* Animated shimmer on bar */}
                      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <h3 className="text-xl text-chrome font-bold tracking-widest mb-4">
                / CERTIFICATIONS
              </h3>
              <ul className="space-y-3 text-sm text-gray-400 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                  Bachelor's in Computer Science (2019-2023)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  Frontend Development Specialist
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Agile Methodology Practitioner
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Resume Preview Card */}
          <div className="relative">
            <div className="led-wrapper p-[2px] rounded-lg">
              <div className="led-content bg-zinc-900 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded mb-6 border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
                  <Image
                    src="https://res.cloudinary.com/dsgolax64/image/upload/v1728892965/Frontend_dev_1_ck4caj.png"
                    alt="Resume Preview"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay for Fade Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-white font-mono text-xs">
                    PREVIEW ONLY
                  </div>
                </div>

                <a
                  href="https://drive.google.com/uc?id=1pzYV9ZLq4nAV4ENyig_fyVNpTHhhFuJq"
                  target="_blank"
                  className="w-full py-4 bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
