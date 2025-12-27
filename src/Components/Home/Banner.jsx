import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import DawnloadResume from './DawnloadResume';

const Banner = () => {
  const socialLinks = [
    { icon: <FaTwitter size={20} />, link: "https://x.com/HridoyKnow28180", label: "Twitter" },
    { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/yeamin-madbor-83b3302b8/", label: "LinkedIn" },
    { icon: <FaGithub size={20} />, link: "https://github.com/yeaminstudent5598", label: "GitHub" },
    { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/muhammad_yeamin_hossain_madbor/", label: "Instagram" },
  ];

  const stats = [
    { label: 'Projects Done', value: '15+', icon: <FaCheckCircle className="text-emerald-400" /> },
    { label: 'Experience', value: '1+ Year', icon: <FaRocket className="text-cyan-400" /> },
    { label: 'Tech Stack', value: 'MERN', icon: <FaCode className="text-blue-400" /> },
  ];

  return (
    <section className="relative min-h-screen bg-[#0b1120] text-white overflow-hidden pt-32 md:pt-36 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse delay-700"></div>
        {/* Dot Grid Effect */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 sm:h-3 w-2 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-emerald-400 uppercase">Available for opportunities</span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                Crafting <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                  Digital Mastery
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300">
                Yeamin Madbor <span className="text-emerald-500 font-normal">|</span> Full Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              Full Stack Developer and Project Manager specializing in building scalable web applications. I transform complex ideas into production-ready platforms using modern technologies and best practices.
            </p>

            {/* CTA & Resume */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 font-extrabold rounded-2xl flex items-center justify-center sm:justify-start gap-2 transition-all shadow-xl text-sm sm:text-base"
              >
                Explore Projects <FiArrowRight strokeWidth={3} />
              </motion.a>

              <div className="mt-0 sm:mt-0">
                <DawnloadResume />
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-5 pt-4 sm:pt-6 flex-wrap">
              <span className="text-xs sm:text-sm text-gray-400 font-semibold">Follow:</span>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map(({ icon, link, label }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#10b981' }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 sm:p-3 bg-gray-800/50 rounded-xl border border-white/5 text-gray-400 transition-all hover:border-emerald-500/50 text-sm sm:text-base"
                    title={label}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visuals */}
          <div className="relative flex justify-center mt-8 lg:mt-0">
            {/* Geometric Shapes Behind Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              {/* Glass Frame for Image */}
              <div className="relative p-2 sm:p-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[30px] sm:rounded-[40px] border border-white/20 shadow-2xl">
                <img
                  src="https://i.ibb.co.com/gFZkttXX/20231124-163457-jpg.jpg"
                  alt="Yeamin Madbor"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-[24px] sm:rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating "Developer" Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-3 sm:p-4 bg-gray-900 border border-emerald-500/30 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-xl"
                >
                  <div className="text-center">
                    <p className="text-[8px] sm:text-[10px] text-emerald-400 font-bold uppercase tracking-tighter">Full Stack</p>
                    <p className="text-xs sm:text-sm font-black text-white">Developer</p>
                  </div>
                </motion.div>
              </div>

              {/* Experience Tag */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-10 p-3 sm:p-5 bg-emerald-500 rounded-2xl sm:rounded-3xl shadow-2xl shadow-emerald-500/20 text-gray-900"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-black">1+</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase leading-none text-center">Years<br/>Experience</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;