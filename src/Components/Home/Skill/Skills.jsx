import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaFire, FaFigma, FaCode, FaWordpress, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiDaisyui, SiFramer, SiNextdotjs, SiTypescript, SiRedux, SiPostgresql, SiPrisma } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = {
    "Frontend": [
      { name: 'React', level: 'Expert', icon: <FaReact className="text-blue-500 text-5xl" /> },
      { name: 'Next.js', level: 'Advanced', icon: <SiNextdotjs className="text-white text-5xl" /> },
      { name: 'TypeScript', level: 'Advanced', icon: <SiTypescript className="text-blue-400 text-5xl" /> },
      { name: 'JavaScript', level: 'Expert', icon: <SiJavascript className="text-yellow-500 text-5xl" /> },
      { name: 'HTML & CSS', level: 'Expert', icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
      { name: 'Tailwind CSS', level: 'Expert', icon: <SiTailwindcss className="text-blue-400 text-5xl" /> },
      { name: 'DaisyUI', level: 'Advanced', icon: <SiDaisyui className="text-pink-500 text-5xl" /> },
      { name: 'Redux Toolkit', level: 'Advanced', icon: <SiRedux className="text-purple-600 text-5xl" /> },
    ],
    "Backend": [
      { name: 'Node.js', level: 'Advanced', icon: <FaNodeJs className="text-green-500 text-5xl" /> },
      { name: 'Express', level: 'Advanced', icon: <SiExpress className="text-gray-700 text-5xl" /> },
      { name: 'MongoDB', level: 'Advanced', icon: <SiMongodb className="text-green-600 text-5xl" /> },
      { name: 'PostgreSQL', level: 'Intermediate', icon: <SiPostgresql className="text-blue-500 text-5xl" /> },
      { name: 'Prisma ORM', level: 'Intermediate', icon: <SiPrisma className="text-pink-400 text-5xl" /> },
      { name: 'Firebase', level: 'Advanced', icon: <FaFire className="text-orange-500 text-5xl" /> },
    ],
    "Design": [
      { name: 'Figma', level: 'Advanced', icon: <FaFigma className="text-purple-500 text-5xl" /> },
      { name: 'Pixso', level: 'Advanced', icon: <FaFigma className="text-green-500 text-5xl" /> },
      { name: 'Framer Motion', level: 'Advanced', icon: <SiFramer className="text-pink-500 text-5xl" /> },
    ],
    "Tools": [
      { name: 'Git & GitHub', level: 'Advanced', icon: <FaGitAlt className="text-red-500 text-5xl" /> },
      { name: 'VS Code', level: 'Expert', icon: <FaCode className="text-blue-600 text-5xl" /> },
      { name: 'WordPress', level: 'Advanced', icon: <FaWordpress className="text-blue-700 text-5xl" /> },
    ],
    "DevOps": [
      { name: 'Docker', level: 'Intermediate', icon: <FaDocker className="text-blue-400 text-5xl" /> },
    ]
  };

  return (
    <div className="bg-gray-900 pt-32 py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-white font-bold">My Skills</h2>
        <p className="text-gray-400 mt-2">Technologies I work with</p>
      </div>

      <div className="space-y-12">
        {Object.keys(skillCategories).map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold text-white mb-6">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories[category].map((skill, index) => (
                <motion.div
                  key={index}
                  className="box text-white text-center p-6 shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 flex items-center justify-center mx-auto rounded-full bg-gray-900 mb-4 shadow-inner">
                    {skill.icon}
                  </div>
                  <h4 className="text-2xl font-semibold text-white">{skill.name}</h4>
                  <p className="text-gray-400">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
