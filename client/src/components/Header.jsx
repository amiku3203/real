import React, { useState } from 'react';
import { FaPhone, FaHandsHelping, FaClipboardList } from 'react-icons/fa'; // Added new icons
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky font-serif top-0 z-50 bg-gradient-to-r from-orange-600 to-blue-600 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            className="h-8 md:h-10"
            src="https://realtyassistant.in/assets/img/ra-logo.png"  // Adjust to your logo's path
            alt="Realty Assistant"
            title="Realty Assistant"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          
          {/* About Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-300 flex items-center gap-2">
              About
              <FaHandsHelping className="text-lg" /> {/* About icon */}
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md">
              <Link to="/what-we-do" className="  px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center gap-2">
                <FaClipboardList /> What We Do
              </Link>
              <Link to="/testimonials" className="  px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center gap-2">
                <FaHandsHelping /> Testimonials
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-gray-300">Media</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg">
             <Link to="/awards" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Awards and Recognition</Link>
            </div>
          </div>
          <Link to="/property" className="hover:text-gray-300">Properties</Link>
          <Link to="/blogs" className="hover:text-gray-300">Blog</Link>
          <Link to="/career" className="hover:text-gray-300">Career</Link>
          <Link to="/contact" className="hover:text-gray-300"> Contact-Us </Link>
        </nav>

        {/* Contact Info */}
        <div className="text-white flex items-center space-x-2">
          <FaPhone />
          <a href="tel:+917283008300" className="hover:text-gray-300">+91-72 8300 8300</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white" aria-label="Toggle Menu">
          {isMobileMenuOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <nav className="container mx-auto px-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-800">Home</Link>
            <Link to="/about" className="block py-2 text-gray-800">About</Link>
            <Link to="/testimonials" className="block py-2 text-gray-800">Testimonials</Link>
            <Link to="/media" className="block py-2 text-gray-800">Media</Link>
            <Link to="/news" className="block py-2 text-gray-800">News</Link>
            <Link to="/awards" className="block py-2 text-gray-800">Awards and Recognition</Link>
            <Link to="/properties" className="block py-2 text-gray-800">Properties</Link>
            <Link to="/blog" className="block py-2 text-gray-800">Blog</Link>
            <Link to="/career" className="block py-2 text-gray-800">Career</Link>
            <Link to="/refer" className="block py-2 text-gray-800">Referral Program</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
