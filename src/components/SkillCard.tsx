import { motion } from 'framer-motion';


interface SkillCardProps {
    skill: {
      name: string;
      icon: string;
    };
  }

const SkillCard = ({ skill }: SkillCardProps) => {

  
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 
          hover:bg-cyan-500/5 transition-colors group"
      >
        <div className="flex flex-col items-center text-center gap-2">
          <div className="p-2 rounded-lg 
            group-hover:from-cyan-500 group-hover:to-purple-500 transition-colors">
              <img src={skill.icon} alt={skill.name} className="w-9 h-9 object-contain" />
          </div>
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
      </motion.div>
    );
  };

export default SkillCard
