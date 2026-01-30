"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  const projects = [
    {
      title: "GRB TESTS",
      category: "EdTech Platform",
      image:
        "https://res.cloudinary.com/dsgolax64/image/upload/v1750422186/image_12_y7npm0.png",
      status: "LIVE",
      link: "https://www.grbtests.com",
    },
    {
      title: "YOGIK MOVEMENT",
      category: "Wellness & Ecommerce",
      image:
        "https://res.cloudinary.com/dsgolax64/image/upload/v1765360520/3a35bb10-61e2-4fcb-91e0-a49add982681.png",
      status: "LIVE",
      link: "https://www.yogikmovement.com",
    },
    {
      title: "RECRUITMENT DASHBOARD",
      category: "Enterprise System",
      image:
        "https://res.cloudinary.com/dsgolax64/image/upload/v1765360778/0f99ccde-5553-4da8-a8d0-702a252b62fe.png",
      status: "COMPLETED",
      link: null,
    },
    {
      title: "MEN OF CULTURE",
      category: "Lifestyle Portal",
      image:
        "https://i.pinimg.com/736x/53/ed/c9/53edc9305e6d70c2e9333ff5746eeedd.jpg",
      status: "IN DEV",
      link: null,
    },
  ];

  return (
    <section id="works" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              SELECTED WORKS
            </h2>
            <div className="h-[2px] w-12 bg-purple-500"></div>
          </div>
          <p className="text-sm text-gray-400 font-mono tracking-widest text-right max-w-md">
            / ARCHIVE_2023-2025 <br />
            DEPLOYED_PROJECTS_&_CONCEPTS
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative">
              {/* Card Container with LED Border Logic */}
              <div className="led-wrapper p-[1px] rounded-xl hover:p-[2px] transition-all duration-300">
                <div className="led-content bg-[#0a0a0a] p-4 rounded-xl flex flex-col h-full">
                  {/* Image Frame */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6 border border-white/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Status Tag */}
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur px-2 py-1 border border-white/10 rounded text-[10px] tracking-widest uppercase">
                      <span
                        className={
                          project.status === "LIVE"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }
                      >
                        ● {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-chrome transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 tracking-wider uppercase">
                        {project.category}
                      </p>
                    </div>
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transform -rotate-45 group-hover:rotate-0 transition-transform"
                        >
                          <path
                            d="M1 6H11M11 6L6 1M11 6L6 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-600 cursor-not-allowed">
                        <span className="text-xs">🔒</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-8">
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold text-white mb-1">3+</h4>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Years Experience
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold text-white mb-1">15+</h4>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Projects Shipped
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Satisfaction
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold text-white mb-1">A+</h4>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Code Quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
