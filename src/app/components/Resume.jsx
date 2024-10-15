"use client";
import React, { useState } from "react";
import Image from "next/image";

const Resume = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/uc?id=1pzYV9ZLq4nAV4ENyig_fyVNpTHhhFuJq";
  };

  return (
    <div className="m-4 md:m-0">
      <h1 className="italic text-xl mb-4">Resume -</h1>
      <div
        className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
          isExpanded ? "h-auto" : "h-[200px]"
        }`}
      >
        <Image
          src="https://res.cloudinary.com/dsgolax64/image/upload/v1728892965/Frontend_dev_1_ck4caj.png"
          alt="hero"
          width={2000}
          height={2000}
          className="object-cover w-full"
        />
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        )}
      </div>
      <button
        onClick={handleToggle}
        className="mt-4 px-4 py-2 bg-[#252525] border-2 border-[#444] text-white rounded-md hover:bg-[#333] transition-colors duration-200"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
      <button
        onClick={handleDownload}
        className="mt-4 ml-4 px-4 py-2 bg-[#252525] border-2 border-[#444] text-white rounded-md hover:bg-[#333] transition-colors duration-200"
      >
        Download
      </button>
    </div>
  );
};

export default Resume;
