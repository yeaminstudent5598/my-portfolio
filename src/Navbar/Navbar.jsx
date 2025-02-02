import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdCastForEducation, MdOutlineContactMail } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto fixed top-0 z-50 bg-gray-900 text-white opacity-90 flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-4">
        {/* Logo Section */}
        <Link to={'/'} className="flex items-center btn border-0 hover:bg-gray-900 p-0 rounded-full bg-gray-900 space-x-3">
          <img
            className="w-12 h-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            src="https://i.ibb.co/M5dhq51/DALLE2025-01-0410-08-36-Aprofessionalandmodernlogodesignfor-Yamisportfoliowebsite-Thelogorepresentsh.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        <Link to="/" className="hover:text-gray-400 flex gap-2 justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="h-5 w-5">
            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
          </svg>
          <span>Home</span></Link>
        <Link to="/education" className="hover:text-gray-400 flex justify-center items-center gap-2"><MdCastForEducation />Education</Link>
        <Link to="/skills" className="hover:text-gray-400 flex justify-center items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="h-5 w-5">
            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
          </svg>
          <span>Skills</span></Link>
        <Link to="/projects" className="hover:text-gray-400 flex justify-center items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="h-5 w-5">
            <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
          </svg>
          <span>Projects</span></Link>
        <Link to="/contact" className="hover:text-gray-400 flex justify-center items-center gap-2"><MdOutlineContactMail /><span>Contact</span></Link>

        {/* Animated "Hire Me" Button with Cool Animation */}
       <Link to={'/contact'}>
       <motion.button
          className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 rounded-full"
          initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -10 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            
            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.3)",
            transition: { duration: 0.3 }
          }}
          whileTap={{
            scale: 0.95,
            rotate: -5,
            transition: { duration: 0.1 }
          }}
        >
          Hire Me
        </motion.button></Link>

      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden dropdown relative">
        <button className="btn-circle border-white text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul className="dropdown-content absolute right-0 top-full menu p-2 shadow bg-gray-900 text-white rounded-box w-40">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
