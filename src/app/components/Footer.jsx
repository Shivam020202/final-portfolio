import React from "react";

const Footer = () => {
  return (
    <div className=" w-full flex-col  bg-gradient-to-t from-[#0b1f14] to-[#161616] md:bg-opacity-50 mt-5  max-w-2xl flex  md:rounded-tl-lg md:rounded-tr-lg md:p-4 p-2">
      {/* <h1 className="font-bold mb-5">Shivam Kumar</h1> */}
      <p className=" px-auto justify-center flex  w-full p-2 rounded-lg md:mt-4 mt-2 text-sm text-gray-500">
        Copyright worthy ? 2024 | Shivam
      </p>
    </div>
  );
};

export default Footer;
