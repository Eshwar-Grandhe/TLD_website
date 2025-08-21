// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              TLD<span className="text-gray-400">Systems</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering business transformation through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/tldsystems/"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://github.com/tldsys"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/infrastructure"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/f5-adc" className="text-gray-300 hover:text-white transition-colors">
                  F5 ADC
                </Link>
              </li>
              <li>
                <Link
                  to="/cloud-transformation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cloud Transformation
                </Link>
              </li>
              <li>
                <Link
                  to="/cybersecurity"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  to="/staff-augmentation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Staff Augmentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <i className="fas fa-envelope mr-2"></i>
                dkesav@tldsys.com
              </li>
              <li className="text-gray-300">
                <i className="fas fa-phone mr-2"></i>
                +1 (626) 607-4857
              </li>
              <li className="text-gray-300">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Frisco, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 TLD Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
