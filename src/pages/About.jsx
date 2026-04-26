import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center my-24 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section Label */}
      <motion.p
        className="text-gray-400 tracking-widest text-sm"
        variants={itemVariants}
      >
        — ABOUT ME
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mt-3 text-black"
        variants={itemVariants}
      >
        A quick look at <br className="hidden sm:block" /> who I am.
      </motion.h2>

      <motion.p
        className="text-center text-[#5F5F5F] opacity-70 max-w-2xl mt-4 text-base md:text-lg"
        variants={itemVariants}
      >
        Get to know the curiosity, craft, and coffee behind the code.
      </motion.p>

      {/* Main grid */}
      <motion.div
        className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 w-full max-w-6xl items-center"
        variants={itemVariants}
      >
        {/* Image column */}
        <motion.div
          className="lg:col-span-2 flex justify-center relative"
          variants={itemVariants}
        >
          {/* Decorative gradient blob */}
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] opacity-20 blur-3xl -z-10"></div>
          <div className="absolute -bottom-8 -right-4 w-40 h-40 rounded-full bg-[conic-gradient(at_center,_#B388EB,_#8A6FE8,_#7C5FE9)] opacity-20 blur-3xl -z-10"></div>

          <div className="relative p-[2px] rounded-3xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-xl">
            <motion.img
              src="/about.jpeg"
              alt="Tsheltrim Pemo"
              className="rounded-3xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] object-cover block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-lg rounded-full px-4 py-2 flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-[#8A6FE8]" />
            <span className="text-xs sm:text-sm font-medium">Based in Bhutan</span>
          </motion.div>
        </motion.div>

        {/* Content column */}
        <motion.div
          className="lg:col-span-3 space-y-8"
          variants={containerVariants}
        >
          {/* Experience & Education cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            {/* Experience */}
            <motion.div
              className="relative p-[1.5px] rounded-2xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)]"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-white rounded-2xl p-5 h-full flex flex-col items-start">
                <div className="w-11 h-11 rounded-full bg-[#8A6FE8]/10 flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5 text-[#8A6FE8]" />
                </div>
                <h3 className="font-bold text-lg">Experience</h3>
                <p className="text-sm text-[#5F5F5F] mt-1">2+ years</p>
                <p className="text-sm text-[#5F5F5F] opacity-70">NoMindBhutan</p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="relative p-[1.5px] rounded-2xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)]"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-white rounded-2xl p-5 h-full flex flex-col items-start">
                <div className="w-11 h-11 rounded-full bg-[#8A6FE8]/10 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5 text-[#8A6FE8]" />
                </div>
                <h3 className="font-bold text-lg">Education</h3>
                <p className="text-sm text-[#5F5F5F] mt-1">B.Sc. in CS</p>
                <p className="text-sm text-[#5F5F5F] opacity-70">Spec. AI &amp; Data Science</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="space-y-4 text-[15px] sm:text-base leading-relaxed text-gray-700"
            variants={itemVariants}
          >
            <p>
              I’m currently pursuing a Bachelor’s degree in Computer Science with a
              specialization in <span className="font-semibold text-[#8A6FE8]">Artificial Intelligence and Data Science</span> at
              Gyalpozhing College of Information Technology, Bhutan.
            </p>
            <p>
              I love building intelligent systems that solve real, local problems —
              blending data, code, and curiosity into technology that feels meaningful.
              When I’m not shipping projects, I’m usually deep in a new ML paper,
              tweaking a UI detail, or sketching the next idea.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
