import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiCpu } from "react-icons/fi";

const AboutMe = () => {
  const techStack = [
    "Next.js", "React.js", "TypeScript", "Node.js", "Python (FastAPI)", 
    "PostgreSQL", "Redis", "BullMQ", "Tailwind CSS", "Framer Motion"
  ];

  return (
    <section id="about" className="bg-[#0b1120] py-24 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Left Column: Vision & Philosophy */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
                Architecture & Leadership
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                I lead teams to build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                  Complex Ecosystems.
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Hi, I’m <span className="text-cyan-400 font-bold">Yeamin Madbor</span>. At <strong>Pixel & Code</strong>, 
                I don’t just write code; I orchestrate solutions. As a <strong>Project Manager & Full Stack Developer</strong>, 
                I manage multi-disciplinary teams—including Web, App, and UI/UX designers—to deliver scalable, high-performance platforms.
              </p>
            </motion.div>

            {/* Core Stats/Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-colors">
                <FiUsers className="text-emerald-400 text-2xl mb-4" />
                <h4 className="text-white font-bold mb-2">Team Leadership</h4>
                <p className="text-gray-500 text-sm">Managing developers and designers across multiple high-scale platforms.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-colors">
                <FiCpu className="text-cyan-400 text-2xl mb-4" />
                <h4 className="text-white font-bold mb-2">System Architect</h4>
                <p className="text-gray-500 text-sm">Specializing in complex schema design, AI pipelines, and scheduling logic.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Passion */}
          <motion.div 
            className="space-y-6 bg-gray-800/30 p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg">
              My core expertise lies in developing massive, unified platforms like <strong>Guptodhan</strong>, 
              which integrates Multi-Vendor E-commerce and Service Marketplaces, alongside building AI-powered SaaS products like <strong>OutreachAI</strong> using multi-agent pipelines.
            </p>

            <div className="flex flex-wrap gap-2 py-4">
              {techStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-lg">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400">
              Beyond the terminal, I’m a fan of analytical thinking—whether it’s on the football field or exploring 
              the lore of <strong>Anime</strong> like Naruto and Demon Slayer. I believe the best software comes 
              from a mix of structured logic and creative storytelling.
            </p>

            <div className="pt-6">
              <Link to="/contact" className="inline-flex items-center gap-2 text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                Let’s Collaborate <FiTarget />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;