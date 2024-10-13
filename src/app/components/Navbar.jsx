import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 max-w-2xl w-full md:px-0 px-4 bg-black ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-xl font-bold gradient-text ">
            Shivam&apos;s Portfolio
          </div>
        </Link>
        <Link href="/contact">
          <div className="text-white flex items-center ">
            <svg
              className="mr-2 -rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H8m0 0l4-4m-4 4l4 4m-4-4h8"
              />
            </svg>
            Contact Me
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
