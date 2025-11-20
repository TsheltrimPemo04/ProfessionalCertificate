import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut',
    },
  }),
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10">
      <AnimatedSection delay={0.1}>
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h1>
          <p className="text-lg md:text-xl text-[#5F5F5F] opacity-65">Explore My Technical Skills</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="flex flex-col lg:flex-row border items-center border-[#8A6FE8] rounded-2xl py-10 lg:py-12 gap-12 justify-between px-4 sm:px-6 lg:px-12">
          {/* Frontend Section */}
          <AnimatedSection delay={0.3}>
            <div className="w-full lg:w-1/3">
              <h1 className="text-2xl text-[#5F5F5F] font-extrabold pb-4">Frontend</h1>
              <div className="flex flex-col sm:flex-row sm:space-x-10">
                <div className="space-y-6">
                  {[
                    { tech: "React.js", level: "Experienced" },
                    { tech: "TypeScript", level: "Basic" },
                    { tech: "Next.js", level: "Intermediate" },
                    { tech: "JavaScript", level: "Intermediate" },
                  ].map((item, i) => (
                    <AnimatedSection key={i} delay={0.4 + i * 0.1}>
                      <div className="flex items-start space-x-2">
                        <img src="/tick.svg" width={25} height={25} alt="tick" />
                        <div>
                          <p className="font-bold text-lg">{item.tech}</p>
                          <p className="text-[#5F5F5F]">{item.level}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <div className="space-y-6 mt-6 sm:mt-0">
                  {[
                    { tech: "HTML", level: "Experienced" },
                    { tech: "CSS", level: "Experienced" },
                    { tech: "Tailwind CSS", level: "Experienced" },
                  ].map((item, i) => (
                    <AnimatedSection key={i} delay={0.8 + i * 0.1}>
                      <div className="flex items-start space-x-2">
                        <img src="/tick.svg" width={25} height={25} alt="tick" />
                        <div>
                          <p className="font-bold text-lg">{item.tech}</p>
                          <p className="text-[#5F5F5F]">{item.level}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* AI Section */}
          <AnimatedSection delay={1.2}>
            <div className="w-full lg:w-1/3">
              <h1 className="text-2xl text-[#5F5F5F] font-extrabold pb-4">AI</h1>
              <div className="space-y-6">
                {[
                  { tech: "Python", level: "Experienced" },
                  { tech: "TensorFlow", level: "Intermediate" },
                  { tech: "PyTorch", level: "Intermediate" },
                  { tech: "RAG", level: "Intermediate" },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={1.3 + i * 0.1}>
                    <div className="flex items-start space-x-2">
                      <img src="/tick.svg" width={25} height={25} alt="tick" />
                      <div>
                        <p className="font-bold text-lg">{item.tech}</p>
                        <p className="text-[#5F5F5F]">{item.level}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Design + Others Section */}
          <AnimatedSection delay={1.8}>
            <div className="w-full lg:w-1/3">
              <h1 className="text-2xl text-[#5F5F5F] font-extrabold pb-4">Design</h1>
              <AnimatedSection delay={1.9}>
                <div className="flex items-start space-x-2 mb-6">
                  <img src="/tick.svg" width={25} height={25} alt="tick" />
                  <div>
                    <p className="font-bold text-lg">Figma</p>
                    <p className="text-[#5F5F5F]">Experienced</p>
                  </div>
                </div>
              </AnimatedSection>

              <h1 className="text-2xl text-[#5F5F5F] font-extrabold pb-4 pt-4">Others</h1>
              {[
                { tech: "GitHub/GitLab", level: "Experienced" },
                { tech: "Supabase", level: "Intermediate" },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={2.0 + i * 0.1}>
                  <div className="flex items-start space-x-2 pb-6">
                    <img src="/tick.svg" width={25} height={25} alt="tick" />
                    <div>
                      <p className="font-bold text-lg">{item.tech}</p>
                      <p className="text-[#5F5F5F]">{item.level}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Skills;