import React from "react";
import Image from "next/image";

const Resume = () => {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1641186954896-5c1fd64d9b88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero"
        width={800}
        height={400}
        className="object-cover w-[100%] h-96 rounded-lg"
      />
    </div>
  );
};

export default Resume;
