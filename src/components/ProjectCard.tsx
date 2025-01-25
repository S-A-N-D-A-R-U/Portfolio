import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';
import { ProjectTags } from './ProjectTags ';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
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
      whileHover={{ y: -5 }}
      className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 line-clamp-2">
          {project.description}
        </p>
        <ProjectTags tags={project.tags} />
        <div className="flex space-x-4">
                <a href={project.demoUrl} className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.githubUrl} className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
      </div>
      
    </motion.div>
  );
};