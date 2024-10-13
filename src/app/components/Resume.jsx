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
      "https://drive.usercontent.google.com/download?id=1ywGWOLWVoSBUAS4jUgMuot36GlhWfTVE&export=download&authuser=0&confirm=t&uuid=c4b97b86-facf-4337-a8b4-48239cec0795&at=AN_67v2mkjwWa8Fi-JQkEWkCgGX-:1728792936980";
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
