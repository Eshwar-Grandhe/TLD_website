// src/components/Navigation.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-800">
                TLD<span className="text-gray-700">Systems</span>
              </Link>
            </div>

            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-blue-800 border-b-2 border-blue-800'
                    : 'text-gray-700 hover:text-blue-800'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-blue-800 border-b-2 border-blue-800'
                    : 'text-gray-700 hover:text-blue-800'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-blue-800 border-b-2 border-blue-800'
                    : 'text-gray-700 hover:text-blue-800'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 text-sm font-medium transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800 cursor-pointer"
              aria-label="Toggle menu"
              type="button"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/') ? 'text-blue-800 bg-blue-50' : 'text-gray-700 hover:text-blue-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/about')
                  ? 'text-blue-800 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-blue-800 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <br />
            <Link
              to="/contact"
              className="!rounded-button whitespace-nowrap cursor-pointer mt-3 w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
