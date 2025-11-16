import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className='flex flex-col items-center mb-12 xl:mb-48 px-4 sm:px-6 lg:px-8'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className='text-3xl sm:text-4xl font-bold mb-2 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className='text-lg sm:text-xl text-[#5F5F5F] opacity-70 mb-10 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center border border-[#8A6FE8] p-6 sm:p-8 rounded-2xl md:rounded-full w-full max-w-3xl'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=tsheltrimpemo2004@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 cursor-pointer relative group"
      >
        <img src="/mail.svg" alt="Email" width={24} height={24} />
        <p className="text-base sm:text-lg break-words">tsheltrimpemo2004@gmail.com</p>
        <span className="absolute left-0 bg-black right-0 h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>

      </a>

        {/* Phone */}
        <div className='flex items-center space-x-3'>
          <img src='/phone.svg' alt='Phone' width={24} height={24} />
          <p className='text-base sm:text-lg'>+975-17738371</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;