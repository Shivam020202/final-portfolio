import React from "react";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="m-4 md:m-0">
      <Image
        src="https://i.pinimg.com/originals/55/58/f7/5558f7213893e51b44ccc138d74bc122.jpg"
        alt="hero"
        width={1000}
        height={1000}
        className="object-cover w-[100%] h-full rounded-lg "
      />
    </div>
  );
};

export default Resume;
