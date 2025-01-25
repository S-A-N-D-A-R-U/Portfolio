import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { SkillsGrid } from './SkillsGrid';
import { skillsData } from '../constant/const';

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen   py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="container max-w-7xl mx-auto  relative">
        <SectionTitle>My Skills</SectionTitle>
        <p className="text-center text-white/70 mt-4 mb-12 max-w-2xl mx-auto">
          From foundational technologies to advanced frameworks, here's a comprehensive overview of my technical expertise
        </p>
        <SkillsGrid skills={skillsData} />
      </div>
    </section>
  );
};