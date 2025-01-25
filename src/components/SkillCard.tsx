import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface SkillCardProps {
    skill: {
      name: string;
      icon: string;
    };
  }

const SkillCard = ({ skill }: SkillCardProps) => {
    const Icon = Icons[skill.icon as keyof typeof Icons];
  
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 
          hover:bg-cyan-500/5 transition-colors group"
      >
        <div className="flex flex-col items-center text-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20
            group-hover:from-cyan-500 group-hover:to-purple-500 transition-colors">
          </div>
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
      </motion.div>
    );
  };

export default SkillCard
