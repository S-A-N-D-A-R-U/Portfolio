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
      className="grid md:grid-cols-3 gap-8"
    >
      <SkillCategory
        title="Advanced"
        description="Mastery with deep expertise"
        skills={skills.advanced}
        glowColor="from-cyan-500/20 to-blue-500/20"
      />
      <SkillCategory
        title="Intermediate"
        description="Solid practical experience"
        skills={skills.intermediate}
        glowColor="from-purple-500/20 to-pink-500/20"
      />
      <SkillCategory
        title="Beginner"
        description="Growing knowledge base"
        skills={skills.beginner}
        glowColor="from-orange-500/20 to-red-500/20"
      />
    </motion.div>
  );
};