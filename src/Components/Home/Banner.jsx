// File: components/Banner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import DawnloadResume from './DawnloadResume';

const Banner = () => {
  const socialLinks = [
    { icon: <FaTwitter size={24} />, link: "https://x.com/HridoyKnow28180" },
    { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/yeamin-madbor-83b3302b8/" },
    { icon: <FaGithub size={24} />, link: "https://github.com/yeaminstudent5598" },
  ];

  // Updated skills for professional display
  const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Firebase', 'PostgreSQL', 'Tailwind CSS'];

  return (
    <motion.div
      className="relative bg-gray-900 overflow-hidden pt-20 pb-16 px-6 md:px-12 flex flex-col md:flex-row items-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 animate-gradientBG"
        style={{ filter: 'blur(80px)' }}
      />

      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Hello! I’m <br />
          <span className="text-blue-400">Yeamin Madbor</span>
        </h1>

        {/* Animated Tech Stack */}
        <motion.p className="text-gray-300 mb-6 text-lg flex flex-wrap justify-center md:justify-start gap-2">
          Full-Stack Web Developer specializing in{' '}
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="text-blue-400 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5, duration: 0.5 }}
            >
              {tech}
              {index !== techStack.length - 1 ? ',' : ''}
            </motion.span>
          ))}
        </motion.p>

        {/* Social Icons */}
        <motion.div className="flex gap-6 justify-center md:justify-start mt-4">
          {socialLinks.map(({ icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white"
              whileHover={{ scale: 1.3, color: '#60a5fa' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
              {/* Glow Ring */}
              <motion.span
                className="absolute inset-0 rounded-full border border-blue-400 opacity-50"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Resume Button */}
        <div className="mt-6">
          <DawnloadResume />
        </div>
      </motion.div>

      {/* Right Section with Image + RGB Halo */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* RGB Halo */}
        <motion.div
          className="absolute w-72 h-72 rounded-full top-1/2 -translate-y-1/2 border-8 border-gradient-rainbow"
          style={{ zIndex: -1 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        />

        {/* Profile Image */}
        <motion.img
          src="https://i.ibb.co.com/gFZkttXX/20231124-163457-jpg.jpg"
          alt="Profile"
          className="rounded-3xl shadow-2xl z-10 w-64 md:w-72"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
