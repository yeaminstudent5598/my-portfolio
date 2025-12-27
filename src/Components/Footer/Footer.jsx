import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 border-t border-gray-800">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block text-sm text-gray-500 mb-1">Email</span>
                <a 
                  href="mailto:yeaminstudent5598@gmail.com" 
                  className="hover:text-emerald-400 transition-colors duration-300 break-all"
                >
                  yeaminstudent5598@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm text-gray-500 mb-1">Phone</span>
                <a 
                  href="tel:+8801641801705" 
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  +880 164 1801705
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm text-gray-500 mb-1">WhatsApp</span>
                <a 
                  href="https://wa.me/8801641801705" 
                  className="hover:text-emerald-400 transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  +880 164 1801705
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Follow Me
            </h3>
            <div className="flex gap-6">
              <a 
                href="https://twitter.com" 
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                target="_blank" 
                rel="noopener noreferrer"
                title="Twitter"
              >
                <FaTwitter size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yeamin-madbor-83b3302b8/" 
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a 
                href="https://github.com/yeaminstudent5598" 
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a 
                href="https://www.instagram.com/muhammad_yeamin_hossain_madbor/" 
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 <span className="text-emerald-400 font-semibold">Yeamin</span>. All rights reserved. | Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;