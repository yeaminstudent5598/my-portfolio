import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import DawnloadResume from './DawnloadResume';

const Banner = () => {
  const socialLinks = [
    { icon: <FaTwitter size={16} />, link: "https://x.com/yeaminstudent55", label: "Twitter" },
    { icon: <FaLinkedin size={16} />, link: "https://www.linkedin.com/in/yeamin-madbor-83b3302b8/", label: "LinkedIn" },
    { icon: <FaGithub size={16} />, link: "https://github.com/yeaminstudent5598", label: "GitHub" },
    { icon: <FaInstagram size={16} />, link: "https://www.instagram.com/muhammad_yeamin_hossain_madbor/", label: "Instagram" },
  ];

  const stats = [
    { label: 'Projects', value: '15+' },
    { label: 'Experience', value: '2+ Yrs' }, // Updated here
    { label: 'Tech Stack', value: 'MERN' },
  ];

  return (
    <section className="relative min-h-screen bg-gray-950 text-white overflow-hidden pt-28 pb-16 px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-1/4 w-80 h-80 bg-emerald-500/8 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-140px)]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-emerald-500/30 backdrop-blur-md w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                CRAFTING
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                  DIGITAL MASTERY
                </span>
              </h1>
              <p className="text-lg font-semibold text-gray-200 pt-1">
                Yeamin Madbor <span className="text-emerald-400">|</span> Full Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Full Stack Developer and Project Manager specializing in building scalable web applications. I transform complex ideas into production-ready platforms using modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/30 text-sm w-fit"
              >
                Explore Projects <FiArrowRight size={16} strokeWidth={3} />
              </motion.a>

              <DawnloadResume />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-black text-white">{stat.value}</span>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-6 flex-wrap">
              <span className="text-xs text-gray-400 font-semibold">Follow:</span>
              <div className="flex gap-2">
                {socialLinks.map(({ icon, link, label }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-gray-800/40 rounded-lg border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                    title={label}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative pb-36 flex lg:justify-end justify-center items-center order-first lg:order-last h-full"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-80 h-96 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Image Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative z-20"
            >
              {/* Glass Frame */}
              <div className="relative p-1.5 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl rounded-3xl border border-white/80 shadow-2xl overflow-hidden">
                <div className="relative rounded-[26px] overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
                  <img
                    src="https://i.ibb.co.com/LyZzG6p/yeamin-1.png"
                    alt="Yeamin Madbor"
                    className="w-64 h-auto "
                  />
                </div>
              </div>

              {/* Full Stack Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-3 -right-3 z-30"
              >
                <div className="px-3 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/40 border border-emerald-400/60 backdrop-blur-xl">
                  <div className="text-center">
                    <p className="text-[8px] font-bold uppercase tracking-tight text-white">Full Stack</p>
                    <p className="text-xs font-black text-white">Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
                className="absolute -bottom-3 -left-3 z-30"
              >
                <div className="px-3.5 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl shadow-lg shadow-cyan-500/40 border border-cyan-400/60">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-black text-white">2+</span> {/* Updated here */}
                    <span className="text-[8px] font-bold uppercase leading-tight text-white">Yrs Exp</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;