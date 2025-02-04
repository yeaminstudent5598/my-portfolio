import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <h1 className="text-4xl text-white text-center p-10 font-bold">Experience</h1>

      <div className="relative max-w-2xl mx-auto p-[3px] rounded-2xl bg-gradient-to-r from-pink-500 via-cyan-500 to-pink-500 animate-border">
        {/* Running Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-4 border-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(90deg, #ff00aa, #00ffff, #ff00aa)",
            backgroundSize: "200% 200%",
            WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></motion.div>

        {/* Experience Card */}
        <div className="relative z-10 p-6 bg-gray-900 text-white rounded-2xl">
          <h3 className="text-xl font-semibold">WordPress Developer</h3>
          <p className="text-gray-400">Guptodhan.com</p>
          <p className="text-gray-400">February 20, 2024 – August 20, 2024 (6 Months)</p>
          <p className="mt-2 text-gray-300">
            Developed and customized WordPress themes, plugins, and optimized website performance at Guptodhan.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
