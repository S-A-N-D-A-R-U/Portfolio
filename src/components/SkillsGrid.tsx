import { motion } from 'framer-motion';
import { SkillCategory } from './SkillCategory';
import type { SkillLevel } from '../types';

interface SkillsGridProps {
  skills: Record<SkillLevel, Array<{ name: string; icon: string }>>;
}

export const SkillsGrid = ({ skills }: SkillsGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="grid   md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <SkillCategory
        title="Programming Languages"
        description="Core languages used for development and problem-solving."
        skills={skills.programmingLanguage}
        glowColor="from-cyan-500/20 to-blue-500/20"
      />
      <SkillCategory
        title="Frontend Development"
        description="Building interactive and responsive user interfaces."
        skills={skills.frontendDevelopment}
        glowColor="from-purple-500/20 to-pink-500/20"
      />
      <SkillCategory
        title="Backend Development"
        description="Server-side programming and database management."
        skills={skills.backendDevelopment}
        glowColor="from-orange-500/20 to-red-500/20"
      />
      <SkillCategory
        title="Cloud & Tools"
        description="Platforms and tools for efficient development and deployment."
        skills={skills.cloudAndTools}
        glowColor="from-orange-500/20 to-red-500/20"
      />
    </motion.div>
  );
};