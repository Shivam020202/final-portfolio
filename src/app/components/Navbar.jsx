"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Works", href: "#works" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto glass-panel rounded-full px-6 py-3 flex justify-between items-center relative">
        {/* Animated Bottom Line for Navbar (Static glow) */}
        <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

        <Link
          href="/"
          className="text-2xl font-bold tracking-widest text-white z-10"
        >
          <span className="text-chrome">SK</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center z-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium tracking-widest text-[#a1a1aa] hover:text-white transition-colors duration-300 uppercase hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full px-6 md:hidden">
          <div className="glass-panel rounded-xl p-6 flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-lg font-bold tracking-wider text-white uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
