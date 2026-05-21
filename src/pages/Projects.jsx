import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Github, ExternalLink, Sparkles, ArrowUpRight, Figma } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const projectData = [
  {
    title: 'Agay - AI Land Record Assistant',
    img: '/project1.jpeg',
    summary:
      'An AI land record assistant using RAG to make historical land records accessible, accurate, and secure for both government agencies and the general public.',
    date: '01/02/2025',
    github: 'https://github.com/NoMindDev/agay',
    demo: 'https://drive.google.com/file/d/1Tx5cbMuj9UiEsvz_Q0swo09iKuprr0zo/view',
    figma: 'https://www.figma.com/design/buYJBX7VOg0tdAIT8gDbcc/Agay?node-id=0-1&t=ayYCJDAsrSfpUFP6-1',
    status: 'Completed',
    tech: ['Typescript', 'Tailwind', 'RAG', 'LlamaIndex'],
  },
  {
    title: 'Smart Sort',
    img: '/project3.jpg',
    summary:
      'Smart Sort App is an AI-powered waste management application that automatically identifies and sorts waste into the correct disposal categories for smarter and cleaner recycling.',
    date: '01/12/2024',
    figma:"https://www.figma.com/design/rQai0PdPgqUqEQeNx8bR5h/Smart-Sort?node-id=0-1&p=f&t=8QddqrBHc7KUey3k-0",
    status: 'Completed',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Timeless Tales',
    img: '/project2.jpg',
    summary:
      'Many users feel anxious, insecure, and discouraged from posting on traditional social platforms because of likes, comments, shares, and public visibility. Timeless Tales creates a safer and more private space where users can share stories, images, and moments without fear of being judged, compared, or evaluated.',
    date: '15/11/2024',
    figma:"https://www.figma.com/design/b4gP74qs6ETKFXBBWcTPFT/Timeless-Tales?t=8QddqrBHc7KUey3k-0",
    status: 'Completed',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
];

const filters = ['All', 'Completed', 'In Progress'];

const statusStyles = {
  Completed: 'bg-green-50 text-green-700 border-green-200',
  'In Progress': 'bg-amber-50 text-amber-700 border-amber-200',
};

/* ---------- Featured Project ---------- */
const FeaturedProject = ({ project }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    custom={0}
    className="w-full max-w-6xl mb-16"
  >
    <div className="flex items-center gap-2 mb-5 justify-center lg:justify-start">
      <Sparkles className="w-4 h-4 text-[#8A6FE8]" />
      <span className="text-xs uppercase tracking-widest text-[#8A6FE8] font-semibold">
        Featured project
      </span>
    </div>

    <div className="p-[1.5px] rounded-3xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-lg">
      <div className="bg-white rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative overflow-hidden min-h-[260px] lg:min-h-[360px]">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusStyles[project.status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center text-xs text-gray-500 mb-3">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {project.date}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[1.5px] rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-flex"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-sm font-medium hover:bg-transparent hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </span>
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-900 text-sm font-medium hover:border-[#8A6FE8] hover:text-[#8A6FE8] transition-colors"
              >
                <Figma className="w-4 h-4" />
                Figma
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ---------- Project Card ---------- */
const ProjectCard = ({ project, index, expanded, setExpanded }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
    whileHover={{ y: -6 }}
    className="group"
  >
    <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-200 group-hover:from-[#8A6FE8] group-hover:via-[#B388EB] group-hover:to-[#7C5FE9] transition-all duration-500 h-full">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span
            className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-sm ${
              statusStyles[project.status] || 'bg-gray-50 text-gray-700 border-gray-200'
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <div className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              {project.date}
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#8A6FE8] transition-colors">
            {project.title}
          </h3>

          <div className="mt-2 text-gray-600 text-sm leading-relaxed">
            {expanded
              ? project.summary
              : project.summary.length > 85
              ? project.summary.slice(0, 85) + '...'
              : project.summary}
            {project.summary.length > 85 && (
              <button
                onClick={setExpanded}
                className="ml-1 text-[#8A6FE8] font-medium hover:underline"
              >
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex-grow"></div>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Code
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] hover:opacity-90 transition-opacity"
              >
                Demo
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-gray-900 text-xs font-medium hover:border-[#8A6FE8] hover:text-[#8A6FE8] transition-colors"
              >
                <Figma className="w-3.5 h-3.5" />
                Figma
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ---------- Page ---------- */
const Projects = () => {
  const [expanded, setExpanded] = React.useState({});
  const [activeFilter, setActiveFilter] = React.useState('All');

  const featured = projectData.find((p) => p.featured);
  const rest = projectData.filter((p) => !p.featured);

  const filtered =
    activeFilter === 'All'
      ? rest
      : rest.filter((p) => p.status === activeFilter);

  return (
    <div className="flex flex-col items-center my-20 px-4 md:px-10 lg:px-16">
      {/* Header */}
      <motion.p
        className="text-gray-400 tracking-widest text-sm"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        — MY PROJECTS
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mt-3 text-black"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={1}
      >
        A glimpse into what <br className="hidden sm:block" /> I’ve built over the years.
      </motion.h2>

      <motion.p
        className="text-center text-[#5F5F5F] opacity-70 max-w-2xl mt-4 text-base md:text-lg"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={2}
      >
        A mix of shipped products, experiments, and ongoing work — from AI assistants to full-stack platforms.
      </motion.p>

      {/* Featured */}
      <div className="mt-14 w-full flex justify-center">
        {featured && <FeaturedProject project={featured} />}
      </div>

      {/* Filter chips */}
      <motion.div
        className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filters.map((f) => {
          const count =
            f === 'All'
              ? rest.length
              : rest.filter((p) => p.status === f).length;
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                isActive
                  ? 'text-white border-transparent bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-md'
                  : 'text-gray-700 border-gray-200 hover:border-[#8A6FE8] hover:text-[#8A6FE8]'
              }`}
            >
              {f}
              <span
                className={`ml-2 text-xs ${
                  isActive ? 'opacity-90' : 'opacity-60'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              expanded={!!expanded[project.title]}
              setExpanded={() =>
                setExpanded((prev) => ({
                  ...prev,
                  [project.title]: !prev[project.title],
                }))
              }
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No projects in this category yet.</p>
      )}
    </div>
  );
};

export default Projects;
