 import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-8 px-6 sm:px-12">
      <div className="container mx-auto text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Logo and Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">Reality Assistant</h4>
            <p className="text-gray-300 mb-2">123 Real Estate Street</p>
            <p className="text-gray-300 mb-2">City, Country, 12345</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>

          {/* Section 2: Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">Follow Us</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <FaFacebookF size={24} /> {/* React Icon for Facebook */}
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <FaTwitter size={24} /> {/* React Icon for Twitter */}
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <FaInstagram size={24} /> {/* React Icon for Instagram */}
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <FaLinkedinIn size={24} /> {/* React Icon for LinkedIn */}
              </a>
            </div>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to get the latest updates and offers.</p>
            <form className="flex flex-wrap">
              <input
                type="email"
                className="p-2 rounded-l-lg border border-gray-300 w-2/3 sm:w-3/4 mb-4 sm:mb-0"
                placeholder="Your email"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white p-2 rounded-r-lg hover:bg-orange-600 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-gray-300 text-sm">
          <p>&copy; 2024 Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
