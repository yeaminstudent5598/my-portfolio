import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importing icons
import DawnloadResume from './DawnloadResume';

const Banner = () => {
  return (
    <motion.div 
      className="bg-gray-900 flex flex-col justify-center items-center mt-20 text-white py-16 px-6 md:px-12 flex flex-col md:flex-row "
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <motion.div
        className="w-full  md:w-1/2 mb-8 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Hello! I’m <br />
          <span className="text-blue-400">Yeamin Madbor</span>
        </h1>
        <motion.p
          className="text-gray-300 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Web Developer specializing in React, Firebase & Node.js.
        </motion.p>
        {/* Social Icons */}
        <motion.div className="flex gap-6 mt-4">
          {[{ icon: <FaTwitter size={24} />, link: "https://twitter.com" },
            { icon: <FaLinkedin size={24} />, link: "https://linkedin.com" },
            { icon: <FaGithub size={24} />, link: "https://github.com" },
            { icon: <FaInstagram size={24} />, link: "https://instagram.com" },
          ].map(({ icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              className="hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#60a5fa' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
       <DawnloadResume/>
      </motion.div>

      {/* Right Section with Image and RGB Lighting Border */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.img
            src="https://i.ibb.co.com/HzfxZGG/11zon-cropped-1.png"
            alt="Profile"
            className="w-3/5 rounded-full  border-4 border-blue-400"
            style={{
              filter: "brightness(1.2)", // Brightens the image for effect
            }}
           
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
