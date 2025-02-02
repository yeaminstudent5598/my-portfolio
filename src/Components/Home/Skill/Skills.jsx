import React from 'react';
import { 
    FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaFire, 
    FaFigma, FaCode, FaWordpress 
} from 'react-icons/fa';
import { 
    SiJavascript, SiMongodb, SiExpress, 
    SiTailwindcss, SiDaisyui, SiFramer 
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'React', level: 'Expert', icon: <FaReact className="text-blue-500 text-5xl mb-4" /> },
        { name: 'Firebase', level: 'Advanced', icon: <FaFire className="text-orange-500 text-5xl mb-4" /> },
        { name: 'Node.js', level: 'Advanced', icon: <FaNodeJs className="text-green-500 text-5xl mb-4" /> },
        { name: 'JavaScript', level: 'Expert', icon: <SiJavascript className="text-yellow-500 text-5xl mb-4" /> },
        { name: 'HTML & CSS', level: 'Expert', icon: <FaHtml5 className="text-orange-600 text-5xl mb-4" /> },
        { name: 'Git & GitHub', level: 'Advanced', icon: <FaGitAlt className="text-red-500 text-5xl mb-4" /> },
        { name: 'MongoDB', level: 'Advanced', icon: <SiMongodb className="text-green-600 text-5xl mb-4" /> },
        { name: 'Express', level: 'Advanced', icon: <SiExpress className="text-gray-700 text-5xl mb-4" /> },
        { name: 'Tailwind CSS', level: 'Expert', icon: <SiTailwindcss className="text-blue-400 text-5xl mb-4" /> },
        { name: 'DaisyUI', level: 'Advanced', icon: <SiDaisyui className="text-pink-500 text-5xl mb-4" /> },
        { name: 'Figma', level: 'Advanced', icon: <FaFigma className="text-purple-500 text-5xl mb-4" /> },
        { name: 'VS Code', level: 'Expert', icon: <FaCode className="text-blue-600 text-5xl mb-4" /> },
        { name: 'Framer Motion', level: 'Advanced', icon: <SiFramer className="text-pink-500 text-5xl mb-4" /> },
        { name: 'Pixso', level: 'Advanced', icon: <FaFigma className="text-green-500 text-5xl mb-4" /> },
        { name: 'WordPress', level: 'Advanced', icon: <FaWordpress className="text-blue-700 text-5xl mb-4" /> },
    ];

    return (
        <div className="bg-gray-900 pt-32 py-16 px-6 md:px-12">
            <div className="text-center">
                <h2 className="text-4xl text-white font-bold mb-8">My Skills</h2>
                <div className="grid place-items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="box text-white shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="card-body p-4 border-2 border-transparent transition-all duration-300 ease-in-out">
                                    <div className="flex justify-center">{skill.icon}</div>
                                    <h3 className="text-2xl font-semibold mt-4 mb-2">{skill.name}</h3>
                                    <p className="text-gray-400">{skill.level}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
