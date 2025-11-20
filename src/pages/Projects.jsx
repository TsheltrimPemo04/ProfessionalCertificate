import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const [expanded, setExpanded] = React.useState({});

  const projectData = [
  {
    title: "Agay - AI Land Record Assistant",
    img: "/project1.jpeg",
    summary:
      "An AI land record assistant using RAG to make historical land records accessible, accurate, and secure for both government agencies and the general public.",
    date: "01/02/2025",
    github: "https://github.com/NoMindDev/agay",
    demo: "https://drive.google.com/file/d/1Tx5cbMuj9UiEsvz_Q0swo09iKuprr0zo/view",
    status: "Completed",
    tech: ["Typescript", "Tailwind", "RAG", "LlamaIndex"],
  },
  {
    title: "ZeeBar Resort",
    img: "/project3.jpeg",
    summary:
      "A complete resort website with room booking system, gallery, Admin dashboard, booking API integration, and a modern UI that enhances user experience.",
    date: "01/12/2024",
    github: "https://github.com/Ugyen00/ZeebarResort",
    demo: "https://www.zeebarresort.bt/",
    status: "Completed",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    title: "BATIF",
    img: "/project2.jpeg",
    summary:
      "An event website for Bhutan Agrifood and Trade Investment Forum (BAIFT) featuring schedules, speaker info, event timeline, and responsive design.",
    date: "15/11/2024",
    github: "https://github.com/yourusername/project3",
    demo: "https://batif.vercel.app/",
    status: "Completed",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "SpeakPro",
    img: "/project4.jpeg",
    summary:
      "SpeakPro is your AI-powered coach for interviews and presentations. Upload your CV or slides, practice in real-time with an intelligent interviewer or audience, and get instant feedback to boost confidence and performance.",
    date: "10/08/2025",
    github: "https://github.com/TsheltrimPemo04/SpeakPro",
    demo:"",
    status: "Under Development",
    tech: ["typescript", "Tailwind", "Framer Motion", "Supabase"],
  },
  {
    title: "YourBhutan",
    img: "/project5.jpeg",
    summary:
      "YourBhutan is a platform that connects Bhutanese homestay owners with tourists, allowing travelers to browse and book homestays in advance before their trip.",
    date: "01/03/2025",
    github: "https://github.com/TsheltrimPemo04/YourBhutan",
    demo:"",
    status: "Completed",
    tech: ["React", "Tailwind", "Framer Motion", "Supabase"],
  },
  {
    title: "Obstacle Avoid Game",
    img: "/project6.jpeg",
    summary:
      "Obstacle Avoid Game is an engaging mobile game where players navigate a character through a series of obstacles, testing their reflexes and coordination skills.",
    date: "01/05/2025",
    github: "https://github.com/TsheltrimPemo04/ObstacleAvoidGame",
    demo:"",
    status: "Completed",
    tech: ["Jave", "Android Studio"],
  },
];

  return (
    <div className="flex flex-col items-center my-20 px-4 md:px-16">
      <motion.p className="text-gray-400 tracking-widest text-sm"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
>
        — MY Projects
      </motion.p>

      <motion.h2 className="text-4xl md:text-5xl font-bold text-center mt-3 text-black"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
>
        A glimpse into what <br/>I’ve built over the years.
      </motion.h2>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projectData.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col"
            variants={fadeInUp}
            custom={i}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}

          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              {/* Status + Date Row */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-medium bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  {project.status}
                </span>

                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.date}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold">{project.title}</h2>

              {/* Summary with Read More */}
              <div className="mt-2 text-gray-600 text-sm leading-relaxed">
                {expanded[i]
                  ? project.summary
                  : project.summary.slice(0, 85) + "..."
                }

                {project.summary.length > 85 && (
                  <button
                    onClick={() =>
                      setExpanded(prev => ({ ...prev, [i]: !prev[i] }))
                    }
                    className="ml-1 text-[#8A6FE8] font-medium hover:underline"
                  >
                    {expanded[i] ? "Read less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

            {/* Buttons */}
            <div className="mt-5 flex justify-center space-x-3">
              
              {/* GitHub Button */}
              <div className="p-[1px] shadow-md rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-block">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-white rounded-full cursor-pointer">
                    GitHub
                  </button>
                </a>
              </div>

              {/* Conditionally Render Demo Button */}
              {project.demo && project.demo !== "#" && (
                <div className="p-[1px] shadow-md rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-block">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 sm:px-6 py-2 text-sm text-white sm:text-base rounded-full cursor-pointer">
                      Demo
                    </button>
                  </a>
                </div>
              )}
            </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;