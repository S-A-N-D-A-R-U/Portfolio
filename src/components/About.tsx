import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Layout,
  Database,
  Sparkles,
  GitBranch,
  Terminal,
  Music,
  Camera,
  Coffee,
} from "lucide-react";


const skills = [
  { name: "Frontend Development", icon: Layout },
  { name: "Backend Development", icon: Database },
  { name: "UI/UX Design", icon: Sparkles },
  { name: "Clean Code", icon: Code2 },
  { name: "Version Control", icon: GitBranch },
  { name: "DevOps", icon: Terminal },
  { name: "Music", icon: Music },
  { name: "camera", icon: Camera },
  { name: "Cofeee", icon: Coffee }
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
    <section
      id="about"
      className=" max-w-7xl mx-auto min-h-screen py-20 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get to{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Know Me
                </span>
              </h2>
              <div className="h-1 w-28 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
            </div>
            <p className="text-2xl pt-8 font-light">
              Hi, I'm <span className="font-bold">Naveen</span>, a web Developer
              crafting immersive web experiences.
            </p>
            <p className="text-white/70  text-lg leading-relaxed">
              With over 2 years of experience in web development, I specialize
              in building beautiful, functional, and user-centered digital
              experiences. I combine my passion for clean code with creative
              design solutions to create websites that not only look great but
              perform exceptionally.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring photography,
              creating electronic music, or searching for the perfect cup of
              coffee in the city.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
          <h3 className="text-xl font-semibold ">Things I Love</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
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
                      <span className="text-sm font-medium text-white/80">
                        {skill.name}
                      </span>
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
