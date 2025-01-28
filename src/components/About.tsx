import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layout, Database, Sparkles, GitBranch, Terminal } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Layout },
  { name: 'Backend Development', icon: Database },
  { name: 'UI/UX Design', icon: Sparkles },
  { name: 'Clean Code', icon: Code2 },
  { name: 'Version Control', icon: GitBranch },
  { name: 'DevOps', icon: Terminal },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section id="about" className="min-h-screen max-w-7xl mx-auto pt-56 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              I'm a passionate web developer with a keen eye for creating elegant solutions to complex problems. 
              With expertise in both frontend and backend development, I craft seamless digital experiences 
              that combine beautiful design with robust functionality.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              My journey in web development started 5 years ago, and since then, I've worked with various 
              technologies and frameworks to deliver cutting-edge solutions for clients across different industries.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 transition-all"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500 group-hover:to-purple-500 transition-all">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white/80">{skill.name}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};