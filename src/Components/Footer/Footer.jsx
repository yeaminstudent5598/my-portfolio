import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Icons for social media

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold text-blue-400">Quick Links</h3>
          <ul>
            <li>
              <a href="#experience" className="hover:text-blue-400">Experience</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold text-blue-400">Contact</h3>
          <p className="text-gray-300">Feel free to reach out to me through the following channels:</p>
          <ul>
            <li>Email: <a href="mailto:yeaminstudent5598@gmail.com" className="hover:text-blue-400">yeaminstudent5598@gmail.com</a></li>
            <li>Phone: <a href="tel:+8801641801705" className="hover:text-blue-400">+8801641801705</a></li>
            <li>WhatsApp: <a href="https://wa.me/+8801641801705" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">+8801641801705</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold text-blue-400">Follow Me</h3>
          <div className="flex gap-6">
            <a href="https://twitter.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={28} />
            </a>
            <a href="https://www.linkedin.com/in/yeamin-madbor-83b3302b8/" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/yeaminstudent5598" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} />
            </a>
            <a href="https://instagram.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">&copy; 2025 Yeamin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
