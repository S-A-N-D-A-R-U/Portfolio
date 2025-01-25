import { motion } from 'framer-motion';
import SkillCard from './SkillCard';


interface SkillCategoryProps {
  title: string;
  description: string;
  skills: Array<{ name: string; icon: string }>;
  glowColor: string;
}

export const SkillCategory = ({ title, description, skills, glowColor }: SkillCategoryProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-5`} />
      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-6">{description}</p>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};