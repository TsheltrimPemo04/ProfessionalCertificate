import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { Download, Play, ChevronDown, MapPin, X } from 'lucide-react';

// YouTube video ID — change this if you re-upload the video
const VIDEO_RESUME_ID = 'Cxmuy4F48Uc';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '4', label: 'Awards Won' },
];

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  // Close on Escape, and lock page scroll while modal is open
  React.useEffect(() => {
    if (!isVideoOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isVideoOpen]);

  return (
    <div className="relative w-full">
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 mt-20 lg:mt-28 px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Left: text content */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
        >
          {/* Greeting */}
          <motion.p
            className="text-base sm:text-lg text-gray-600"
            variants={itemVariants}
          >
            Hi there, I’m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-1 text-gray-900"
            variants={itemVariants}
          >
            Tsheltrim Pemo
          </motion.h1>

          {/* Animated role */}
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] text-transparent bg-clip-text mt-3 min-h-[1.2em]"
            variants={itemVariants}
          >
            <Typewriter
              words={[
                'AI Developer',
                'Frontend Engineer',
                'Problem Solver',
                'Lifelong Learner',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={85}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.p>

          {/* Location */}
          <motion.div
            className="flex items-center gap-2 mt-4 text-sm sm:text-base text-gray-600"
            variants={itemVariants}
          >
            <MapPin className="w-4 h-4 text-[#8A6FE8]" />
            <span>Based in Thimphu, Bhutan</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="max-w-xl font-light text-gray-700 text-sm sm:text-base md:text-lg mt-6 leading-relaxed"
            variants={itemVariants}
          >
            AI &amp; Data Science enthusiast building intelligent systems that solve
            real-world problems. I blend data, code, and curiosity to craft
            meaningful technology.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex items-center gap-6 sm:gap-8 mt-8"
            variants={itemVariants}
          >
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && (
                  <div className="h-10 w-px bg-gray-200" aria-hidden></div>
                )}
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 w-full sm:w-auto"
            variants={itemVariants}
          >
            {/* Primary: Download CV */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-[1.5px] rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-flex shadow-md hover:shadow-xl transition-shadow"
            >
              <a
                href="/tsheltrim_cv.pdf"
                download="Tsheltrim_Pemo_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white rounded-full text-sm sm:text-base font-medium text-gray-900 hover:bg-transparent hover:text-white transition-colors duration-300 w-full"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Secondary: Watch Video Resume — opens an in-page modal player */}
            <motion.button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 hover:border-[#8A6FE8] hover:text-[#8A6FE8] text-sm sm:text-base font-medium text-gray-900 transition-colors group cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current group-hover:text-[#8A6FE8]" />
              Watch Video Resume
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex items-center gap-3 mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="https://www.linkedin.com/in/tsheltrim-pemo-a93208259/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-11 h-11 rounded-full border border-gray-200 hover:border-[#8A6FE8] flex items-center justify-center transition-colors bg-white"
              aria-label="LinkedIn"
            >
              <img src="/linkedin.svg" alt="LinkedIn" width={22} height={22} />
            </motion.a>
            <motion.a
              href="https://github.com/TsheltrimPemo04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-11 h-11 rounded-full border border-gray-200 hover:border-[#8A6FE8] flex items-center justify-center transition-colors bg-white"
              aria-label="GitHub"
            >
              <img src="/github.svg" alt="GitHub" width={22} height={22} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: profile image */}
        <motion.div
          className="flex-shrink-0 relative flex items-center justify-center"
          variants={itemVariants}
        >
          {/* Rotating gradient ring */}
          <motion.div
            className="absolute inset-[-14px] rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] opacity-70"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
            style={{
              maskImage:
                'radial-gradient(circle, transparent 64%, black 66%)',
              WebkitMaskImage:
                'radial-gradient(circle, transparent 64%, black 66%)',
            }}
          />

          {/* Image */}
          <motion.div
            className="relative p-[3px] rounded-full bg-white shadow-2xl"
            whileHover={{ rotate: 2, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img
              src="/profile.jpeg"
              alt="Tsheltrim Pemo"
              className="rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
            />
          </motion.div>

          {/* Floating tag */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-lg rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span className="bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] bg-clip-text text-transparent font-semibold">
              AI &amp; Frontend Developer
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden md:flex mt-20 flex-col items-center gap-2 text-xs text-gray-400 hover:text-[#8A6FE8] transition-colors w-fit mx-auto"
      >
        <span className="tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>

      {/* Video Resume Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Video Resume"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video"
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-gray-900 hover:bg-[#8A6FE8] hover:text-white shadow-lg flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Player */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${VIDEO_RESUME_ID}?autoplay=1&rel=0`}
                  title="Tsheltrim Pemo — Video Resume"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
