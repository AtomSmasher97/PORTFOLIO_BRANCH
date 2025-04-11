import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="text-white text-xl font-bold tracking-wide">
          VENKATESWAR REDDY KOTHAPALLY
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white text-md font-medium">
          <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
          <li><a href="#services" className="hover:text-gray-300 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition">
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
