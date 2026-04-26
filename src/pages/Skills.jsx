import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Brain,
  Wrench,
  Database,
  MessagesSquare,
  Users,
  Clock,
  BookOpen,
  Lightbulb,
} from 'lucide-react';

// Proficiency mapping
const LEVELS = {
  Basic: 40,
  Intermediate: 65,
  Experienced: 90,
};

// Devicon CDN base
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      { tech: 'React.js', level: 'Experienced', icon: `${DEVICON}/react/react-original.svg` },
      { tech: 'Next.js', level: 'Intermediate', icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { tech: 'TypeScript', level: 'Basic', icon: `${DEVICON}/typescript/typescript-original.svg` },
      { tech: 'JavaScript', level: 'Intermediate', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { tech: 'HTML5', level: 'Experienced', icon: `${DEVICON}/html5/html5-original.svg` },
      { tech: 'CSS3', level: 'Experienced', icon: `${DEVICON}/css3/css3-original.svg` },
      { tech: 'Tailwind CSS', level: 'Experienced', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    title: 'AI & Data',
    icon: Brain,
    skills: [
      { tech: 'Python', level: 'Experienced', icon: `${DEVICON}/python/python-original.svg` },
      { tech: 'TensorFlow', level: 'Intermediate', icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { tech: 'PyTorch', level: 'Intermediate', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { tech: 'RAG', level: 'Intermediate', lucide: Database },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: [
      { tech: 'Figma', level: 'Experienced', icon: `${DEVICON}/figma/figma-original.svg` },
      { tech: 'Git & GitHub', level: 'Experienced', icon: `${DEVICON}/github/github-original.svg` },
      { tech: 'Supabase', level: 'Intermediate', icon: `${DEVICON}/supabase/supabase-original.svg` },
    ],
  },
];

const softSkills = [
  {
    name: 'Communication',
    icon: MessagesSquare,
    tagline: 'Clear, thoughtful, and kind across teams.',
  },
  {
    name: 'Teamwork',
    icon: Users,
    tagline: 'Stronger together — I contribute generously.',
  },
  {
    name: 'Time Management',
    icon: Clock,
    tagline: 'Balancing school, work, and side projects.',
  },
  {
    name: 'Continuous Learning',
    icon: BookOpen,
    tagline: 'Always reading, building, and stretching.',
  },
  {
    name: 'Problem-Solving',
    icon: Lightbulb,
    tagline: 'Breaking big problems into solvable pieces.',
  },
];

const SkillRow = ({ skill, index, inView }) => {
  const percent = LEVELS[skill.level] || 50;
  const LucideIcon = skill.lucide;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07, ease: 'easeOut' }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
            {LucideIcon ? (
              <LucideIcon className="w-4 h-4 text-[#8A6FE8]" />
            ) : (
              <img
                src={skill.icon}
                alt={skill.tech}
                className="w-5 h-5 object-contain"
                loading="lazy"
              />
            )}
          </div>
          <p className="font-medium text-sm md:text-base text-gray-800">{skill.tech}</p>
        </div>
        <span className="text-xs text-[#5F5F5F] opacity-70">{skill.level}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 + index * 0.07, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const SkillCard = ({ group, cardIndex }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: cardIndex * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-200 group-hover:from-[#8A6FE8] group-hover:via-[#B388EB] group-hover:to-[#7C5FE9] transition-all duration-500 h-full">
        <div className="bg-white rounded-2xl p-6 md:p-7 h-full flex flex-col shadow-sm group-hover:shadow-xl transition-shadow duration-500">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
            <div className="w-11 h-11 rounded-full bg-[#8A6FE8]/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#8A6FE8]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              {group.title}
            </h3>
          </div>

          {/* Skill rows */}
          <div className="space-y-5 flex-grow">
            {group.skills.map((skill, i) => (
              <SkillRow key={skill.tech} skill={skill} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <motion.p
          className="text-gray-400 tracking-widest text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          — MY SKILLS
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mt-3 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The tools in <br className="hidden sm:block" /> my toolbox.
        </motion.h2>
        <motion.p
          className="text-[#5F5F5F] opacity-70 max-w-2xl mt-4 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A snapshot of the technologies I use day-to-day — and the ones I’m actively sharpening.
        </motion.p>
      </div>

      {/* Skill cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.title} group={group} cardIndex={i} />
        ))}
      </div>

      {/* Soft Skills section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.p
            className="text-gray-400 tracking-widest text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            — BEYOND THE CODE
          </motion.p>
          <motion.h3
            className="text-3xl md:text-4xl font-bold mt-3 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Soft skills that shape <br className="hidden sm:block" /> how I work.
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-200 group-hover:from-[#8A6FE8] group-hover:via-[#B388EB] group-hover:to-[#7C5FE9] transition-all duration-500 h-full">
                  <div className="bg-white rounded-2xl p-5 h-full flex flex-col items-center text-center shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                    <div className="w-12 h-12 rounded-full bg-[#8A6FE8]/10 flex items-center justify-center mb-3 group-hover:bg-[#8A6FE8]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#8A6FE8]" />
                    </div>
                    <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1.5">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-[#5F5F5F] opacity-70 leading-relaxed">
                      {skill.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
