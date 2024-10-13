"use client";
import React, { useState } from "react";
import Image from "next/image";

const Resume = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
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
          src="https://i.pinimg.com/originals/55/58/f7/5558f7213893e51b44ccc138d74bc122.jpg"
          alt="hero"
          width={1000}
          height={1000}
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
    </div>
  );
};

export default Resume;
