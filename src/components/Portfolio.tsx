import { ProjectGrid } from './ProjectGrid';
import { projects } from '../constant/const';
import { motion } from "framer-motion";


export const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen max-w-7xl mx-auto py-20 px-4">
      <div className="container mx-auto">
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Explore some of my recent work, from web applications to creative experiments
          </p>
        </motion.h2>
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
};