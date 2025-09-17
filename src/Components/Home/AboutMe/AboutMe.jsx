// File: components/AboutMe.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = () => {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Firebase",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "Prisma",
  ];

  return (
    <div className="bg-gray-900 py-16 px-6 md:px-12">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl text-white font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        {/* Updated Professional Paragraph */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I’m <span className="text-blue-500 font-bold">Yeamin Madbor</span>! I’m a
          Full-Stack Web Developer specializing in{" "}
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="text-blue-400 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {tech}
              {index !== techStack.length - 1 ? ", " : "."}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          I build modern, scalable, and responsive web applications that turn ideas into reality. I’ve worked on
          real-world projects, creating interactive dashboards, web apps, and user-friendly interfaces.
        </motion.p>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          Outside of coding, I enjoy football, exploring new places with friends, and experimenting with new
          technologies. I’m always learning and excited to collaborate on meaningful projects.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Link to="/contact" className="btn btn-primary mt-4">
            Let’s Connect
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
