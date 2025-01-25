import { motion } from 'framer-motion';

interface ProjectTagsProps {
  tags: string[];
}

export const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <motion.span
          key={tag}
          whileHover={{ scale: 1.05 }}
          className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
};