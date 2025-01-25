import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Home, User, Briefcase, Settings, MessageSquare, Mail, LucideProps } from 'lucide-react';
import { clsx } from 'clsx';

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<LucideProps>;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Portfolio', href: '#portfolio', icon: Briefcase },
  { label: 'Services', href: '#services', icon: Settings },
  { label: 'Testimonials', href: '#testimonials', icon: MessageSquare },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={""}
    >
      <div
        className={clsx(
          'backdrop-blur-md bg-black/20 rounded-2xl border border-white/10',
          'flex gap-4 p-4',
          isMobile ? 'justify-around' : 'flex-col'
        )}
      >
        {navItems.map(({ label, href, icon }) => {
          const Icon = icon;

          return (
            <motion.button
              key={href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(href)}
              className={clsx(
                'relative p-3 rounded-xl transition-all duration-300',
                'hover:bg-white/10 group',
                activeSection === href.slice(1) && 'bg-white/10'
              )}
            >
              <Icon
                className={clsx(
                  'w-6 h-6 text-white/70 transition-all duration-300',
                  'group-hover:text-cyan-400',
                  activeSection === href.slice(1) && 'text-cyan-400'
                )}
              />
              <span
                className="absolute left-full ml-4 px-2 py-1 rounded-md bg-black/50 text-white text-sm
                whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};
