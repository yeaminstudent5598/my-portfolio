import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = () => {
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
                <motion.p
                    className="text-gray-600 text-white text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Hi, I’m <span className="text-blue-500 font-bold">Yami</span>! I’m a passionate and creative{" "}
                    <span className="text-blue-500">web developer</span> specializing in{" "}
                    <span className="font-medium">React</span>, <span className="font-medium">Firebase</span>, and{" "}
                    <span className="font-medium">Node.js</span>. With a strong focus on crafting clean, user-friendly
                    designs and scalable web applications, I strive to turn ideas into reality through code.
                </motion.p>
                <motion.p
                    className="text-gray-600 text-white text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    When I’m not coding, I love playing football, exploring new places with friends, and relaxing at home
                    with my favorite books and movies. I’m constantly learning and excited to collaborate on meaningful
                    projects.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link to={"/contact"} className="btn btn-primary mt-4">
                        Let’s Connect
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
