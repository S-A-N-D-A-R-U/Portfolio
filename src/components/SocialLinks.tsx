import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/yourusername',
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ name, icon: Icon, url }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5
            text-white/70 hover:text-cyan-400 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};