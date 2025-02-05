import { motion } from 'framer-motion';
const DawnloadResume = () => {
    return (
        <div>
            <a href="MyResume.pdf" download="MyResume.pdf">
       <motion.button
          className="btn mt-8 btn-outline border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full"
          whileHover={{ scale: 1.15, boxShadow: "0px 0px 15px #60a5fa" }}
          transition={{
    duration: 0.6,
    delay: 0.2, // Fixed delay
    type: "spring",
    stiffness: 250,
  }}
        >
          Download Resume
        </motion.button>
       </a>
        </div>
    );
};

export default DawnloadResume;