import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Trophy, Award, Calendar, ExternalLink, Medal } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: 'easeOut',
    },
  }),
};

const awards = [
  {
    title: 'GCIT and TashiCell Hackathon Winner',
    subtitle: 'Hackathon Winner',
    year: 2022,
    type: 'win',
    img: '/award1.JPG',
    link: 'https://drive.google.com/file/d/1xsRUbk5IJv-rJ8BKk0pcmAbsPxrf4dMt/view',
  },
  {
    title: 'Girls in ICT Project Showcase Winner',
    subtitle: 'Project Showcase Winner',
    year: 2024,
    type: 'win',
    img: '/award2.jpeg',
    link: 'https://drive.google.com/file/d/1F_83QQOwGa_gw0xSwy2TSpsnOW39XsFQ/view',
  },
  {
    title: 'Best Project Showcase',
    subtitle: 'Project Showcase Winner',
    year: 2025,
    type: 'win',
    img: '/award3.JPG',
    link: 'https://drive.google.com/file/d/1Zb6AAVCHKLVUmpU9HL4YB4Ruw0x5g5Mz/view',
  },
  {
    title: 'Legal Aid Hackathon Runners-up',
    subtitle: 'Hackathon Runner-up',
    year: 2024,
    type: 'runner',
    img: '/award4.jpeg',
    link: 'https://drive.google.com/file/d/1Z3uLkKElgx_VEx_sn6LbLwiDqPyqyBNw/view',
  },
];

// Count-up number
const AnimatedCounter = ({ value, duration = 1.4 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const controls = animate(count, value, { duration, ease: 'easeOut' });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, duration, count, rounded]);

  return <>{display}</>;
};

const totalAwards = awards.length;
const totalWins = awards.filter((a) => a.type === 'win').length;
const earliestYear = Math.min(...awards.map((a) => a.year));

const stats = [
  { label: 'Awards Won', value: totalAwards, suffix: '', icon: Trophy },
  { label: 'First Place', value: totalWins, suffix: '', icon: Medal },
  { label: 'Active Since', value: earliestYear, suffix: '', icon: Calendar, raw: true },
];

const Achievements = () => {
  return (
    <div className="w-full min-h-screen bg-white py-20 flex flex-col items-center px-5 md:px-16 lg:px-20">
      {/* Header */}
      <motion.p
        className="text-gray-400 tracking-widest text-sm"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true, amount: 0.2 }}
      >
        — MY ACHIEVEMENTS
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mt-3 text-black"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true, amount: 0.2 }}
      >
        Achievements speak about me <br className="hidden sm:block" /> more than I do.
      </motion.h2>

      <motion.p
        className="text-center text-[#5F5F5F] opacity-70 max-w-2xl mt-4 text-base md:text-lg"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true, amount: 0.2 }}
      >
        Moments where hard work, teamwork, and a little luck paid off.
      </motion.p>

      {/* Stat row */}
      <motion.div
        className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 w-full max-w-3xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={3}
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="relative group"
            >
              <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-200 group-hover:from-[#8A6FE8] group-hover:via-[#B388EB] group-hover:to-[#7C5FE9] transition-all duration-500 h-full">
                <div className="bg-white rounded-2xl p-4 sm:p-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#8A6FE8]/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#8A6FE8]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] bg-clip-text text-transparent">
                    {stat.raw ? stat.value : <AnimatedCounter value={stat.value} />}
                    {stat.suffix}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5F5F5F] opacity-70 mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 w-full max-w-6xl">
        {awards.map((award, i) => (
          <motion.div
            key={award.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={i + 2}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="relative group"
          >
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-200 group-hover:from-[#8A6FE8] group-hover:via-[#B388EB] group-hover:to-[#7C5FE9] transition-all duration-500 h-full">
              <div className="relative bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={award.img}
                    alt={award.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Year badge */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 border border-white shadow-sm">
                    <Calendar className="w-3 h-3" />
                    {award.year}
                  </span>

                  {/* Type badge */}
                  <span
                    className={`absolute top-3 right-3 inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-sm ${
                      award.type === 'win'
                        ? 'bg-yellow-50/90 text-yellow-800 border-yellow-200'
                        : 'bg-gray-50/90 text-gray-700 border-gray-200'
                    }`}
                  >
                    {award.type === 'win' ? (
                      <Trophy className="w-3 h-3" />
                    ) : (
                      <Award className="w-3 h-3" />
                    )}
                    {award.type === 'win' ? 'Winner' : 'Runner-up'}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug group-hover:text-[#8A6FE8] transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {award.subtitle}
                  </p>

                  <div className="flex-grow"></div>

                  {/* Button */}
                  <motion.a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] px-4 py-2 rounded-full text-center"
                  >
                    View Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
