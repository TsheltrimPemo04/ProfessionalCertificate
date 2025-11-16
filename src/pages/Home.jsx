import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <motion.div
      className="flex flex-col mt-24 items-center px-4 sm:px-8 md:px-16 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Profile Image */}
      <motion.img
        src="/profile.png"
        width={150}
        height={150}
        className="rounded-full shadow-xl"
        alt="Profile"
        variants={itemVariants}
        whileHover={{ rotate: 2, scale: 1.05 }}
      />

      {/* Name */}
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-extrabold text-center"
        variants={itemVariants}
      >
        Hi, I'm Tsheltrim Pemo
      </motion.h1>

      {/* Animated Role */}
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] text-transparent bg-clip-text"
        variants={itemVariants}
      >
        <Typewriter
          words={['AI and Frontend Developer']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </motion.p>

      {/* Location */}
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center -mt-2"
        variants={itemVariants}
      >
        based in Bhutan
      </motion.p>

      {/* Bio */}
      <motion.p
        className="text-center max-w-3xl font-light text-gray-700 text-sm sm:text-base md:text-lg"
        variants={itemVariants}
      >
        AI & Data Science enthusiast building intelligent systems that solve real-world problems. I blend data, code, and curiosity to craft meaningful technology.
      </motion.p>

      {/* Socials */}
      <motion.div className="flex space-x-4" variants={itemVariants}>
        <motion.a
          href="https://www.linkedin.com/in/tsheltrim-pemo-a93208259/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
        </motion.a>
        <motion.a
          href="https://github.com/TsheltrimPemo04"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src="/github.svg" alt="GitHub" width={40} height={40} />
        </motion.a>
      </motion.div>

      {/* CV Button with shimmer on hover */}
      <motion.div
        className="mt-2 relative group"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        <div className="p-[1px] rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-block shadow-md hover:shadow-xl transition relative z-10">
          <a
            href="/tsheltrim_cv.pdf"
            download="Tsheltrim_Pemo_CV.pdf"
            className="text-sm sm:text-base px-6 py-2 bg-white rounded-full hover:bg-transparent hover:text-white transition-all duration-300 w-full h-full z-10 relative overflow-hidden block text-center"
          >
            <span className="z-20 relative">Download Resume</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md animate-pulse"></span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}; 

export default Home;