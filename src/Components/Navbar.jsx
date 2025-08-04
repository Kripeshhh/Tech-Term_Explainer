import React from "react";
import logo from "./../images/samc.png";

const Navbar = ({ onNavClick }) => {
  return (
    <div className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-21 h-12 bg-black rounded-lg  overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => onNavClick(null)}
            className="relative text-amber-400 hover:text-amber-300 font-medium text-lg transition-colors group"
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => onNavClick("hi")}
            className="relative text-gray-300 hover:text-amber-400 font-medium text-lg transition-colors group"
          >
            Term Lists
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => onNavClick("bye")}
            className="relative text-gray-300 hover:text-amber-400 font-medium text-lg transition-colors group"
          >
            Trending Topics
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </button>
          <a
            href="https://shahidaakashmemorialcampus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
          >
            Visit SAMC
          </a>
        </nav>

        {/* Mobile menu button (hidden for now) */}
        <button className="md:hidden text-gray-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
