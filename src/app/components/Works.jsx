import React from "react";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <div className="md:border-2 flex-col border-[#1c1c1c] md:bg-[#161616] md:bg-opacity-60 mt-10 mb-10 max-w-2xl flex  rounded-xl md:p-8 p-4">
      <h1 className="font-bold mb-10">Works -</h1>
      <h2 className="italic mb-4">Men of Culture Website</h2>

      <Image
        src="https://i.pinimg.com/736x/53/ed/c9/53edc9305e6d70c2e9333ff5746eeedd.jpg"
        width="1000"
        height="1000"
        alt="men of culture website preview"
        className="w-full rounded-lg object-cover  border-2 border-[#1c1c1c] h-auto"
      />
      <p className="bg-black border-2 border-[#1c1c1c] w-full p-2 rounded-lg mt-4 text-sm text-gray-500">
        Note - Yet to go live
      </p>

      <h2 className="italic mb-4  mt-6">GRB Tests Website</h2>

      <Image
        src="https://res.cloudinary.com/dsgolax64/image/upload/v1750422186/image_12_y7npm0.png"
        width="1000"
        height="1000"
        alt="men of culture website preview"
        className="w-full rounded-lg object-cover  border-2 border-[#1c1c1c] h-auto"
      />
      <p className="bg-black border-2 border-[#1c1c1c] w-full p-2 rounded-lg mt-4 text-sm text-gray-500">
        Note - Yet to go live -
        <Link
          className="text-blue-600 ml-2 hover:text-blue-400 hover:underline duration-300 transition-colors animate-bounce"
          href="www.grbtests.com"
        >
          www.grbtests.com
        </Link>
      </p>
    </div>
  );
};

export default Works;
