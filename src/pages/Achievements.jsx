import React from "react";
import { motion } from "framer-motion";

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

const Achievements = () => {
    const [expanded, setExpanded] = React.useState({});
     
  const awards = [
    {
      title: "GCIT and TashiCell Hackathon Winner 2022",
      subtitle: "award winner",
      img: "/award1.JPG",
      link: "https://drive.google.com/file/d/1xsRUbk5IJv-rJ8BKk0pcmAbsPxrf4dMt/view"
    },
    {
      title: "Girls in ICT Project Showcase Winner 2024",
      subtitle: "award winner",
      img: "/award2.jpeg",
      link: "https://drive.google.com/file/d/1F_83QQOwGa_gw0xSwy2TSpsnOW39XsFQ/view"
    },
    {
      title: "Best Project Showcase 2025",
      subtitle: "award winner",
      img: "/award3.JPG",
      link: "https://drive.google.com/file/d/1Zb6AAVCHKLVUmpU9HL4YB4Ruw0x5g5Mz/view"
    },
    {
      title: "Legal Aid Hackathon Runnersup 2024",
      subtitle: "award winner",
      img: "/award4.jpeg",
      link: "https://drive.google.com/file/d/1Z3uLkKElgx_VEx_sn6LbLwiDqPyqyBNw/view"
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white py-20 flex flex-col items-center px-5 md:px-20">

      {/* Section Title */}
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
        Achievements speak about me <br /> more than I do.
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={i + 2}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.045 }}
            className="relative group rounded-xl"
          >
            <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden z-10 flex flex-col h-full">

              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text + Button Block */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-black">
                  {award.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">
                  {award.subtitle}
                </p>

                <div className="flex-grow"></div>

                {/* Button */}
                <motion.a
                  href={award.link}
                  target="_blank"
                  whileHover={{ y: -2 }}
                  className="mt-4 inline-block text-sm font-medium text-white bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] px-4 py-2 rounded-full text-center"
                >
                  View Credential
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;