"use client";
import React, { useState } from "react";

const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="container mx-auto px-6 lg:px-24 py-6 flex justify-between items-center sticky top-0 z-30 bg-[#222831]/95 backdrop-blur-sm">
        <div className="text-2xl font-extrabold text-white">Zahira.</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-12 text-md font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-gray-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition z-40"
        >
          {menuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-[#222831]/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-lg font-medium transition-all duration-300 z-30 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-5"
        }`}
      >
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={closeMenu}
            className="hover:text-[#4D45E4] transition"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}
