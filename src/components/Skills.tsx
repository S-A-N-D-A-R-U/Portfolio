import { SkillsGrid } from './SkillsGrid';
import { skillsData } from '../constant/const';
import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen   py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="container max-w-7xl mx-auto  relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto  mb-12">
          A curated collection of technologies and tools I use to bring ideas to life
          </p>
        </motion.h2>
        <SkillsGrid skills={skillsData} />
      </div>
    </section>
  );
};