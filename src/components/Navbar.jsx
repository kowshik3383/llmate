import React, { useState } from 'react';
import llmate from '../assets/llmate.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between  h-24 border-b-[0.1px] border-b-gray-500 px-4">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={llmate} alt="logo" className="h-12 w-12" />
          <h1 className="text-white text-lg font-sans">Data Gram</h1>
        </div>

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Center Section: Links (Hidden on small screens, visible on medium and up) */}
        <div className="hidden md:flex flex-grow justify-center space-x-12 text-yellow-200 items-center">
          <Link to="/ai" className="hover:text-white transition">AI Analyst - ADA</Link>
          <Link to="/studio" className="hover:text-white transition">AI Studio</Link>
          <Link to="/" className="hover:text-white transition">Blog</Link>
          <Link to="/" className="hover:text-white transition">Docs</Link>
          <Link to="/" className="hover:text-white transition">About Us</Link>
          <Link to="/" className="hover:text-white transition">Use Cases</Link>
        </div>

        {/* Right Section: Early Access Button (On larger screens) */}
        <div className="hidden md:flex">
          <Link
            to="/"
            className="bg-yellow-300 text-white rounded-lg px-5 py-1 shadow-lg hover:bg-yellow-400 transition h-9"
          >
            Early Access
          </Link>
        </div>

        {/* Mobile Menu (Visible when the hamburger menu is open) */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-0 h-full w-full bg-gray-800 z-10 flex flex-col items-start ml-8 pl-7 space-y-4 py-4">
            <Link to="/ai" className="text-yellow-200 hover:text-white transition">AI Analyst - ADA</Link>
            <Link to="/studio" className="text-yellow-200 hover:text-white transition">AI Studio</Link>
            <Link to="/" className="text-yellow-200 hover:text-white transition">Blog</Link>
            <Link to="/" className="text-yellow-200 hover:text-white transition">Docs</Link>
            <Link to="/" className="text-yellow-200 hover:text-white transition">About Us</Link>
            <Link to="/" className="text-yellow-200 hover:text-white transition">Use Cases</Link>

            {/* Early Access Button */}
            <Link
              to="/"
              className="bg-yellow-300 text-white rounded-lg px-5 py-1 shadow-lg hover:bg-yellow-400 transition h-9"
            >
              Early Access
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
