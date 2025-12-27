import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const DawnloadResume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/MyResume.pdf'; // Make sure MyResume.pdf is in public folder
        link.download = 'Yeamin_Madbor_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.button
            onClick={handleDownload}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl"
            whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 250,
            }}
        >
            <FiDownload size={20} strokeWidth={3} />
            Download Resume
        </motion.button>
    );
};

export default DawnloadResume;