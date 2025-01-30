import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';
import { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: Icons.Home },
  { label: 'About', href: '#about', icon: Icons.User },
  { label: 'Skills', href: '#skills', icon: Icons.Code2 },
  { label: 'Portfolio', href: '#portfolio', icon: Icons.Briefcase },
  { label: 'Contact', href: '#contact', icon: Icons.Mail },
];

export const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      threshold: 0.6,
      rootMargin: '-20% 0px -35% 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(href.slice(1));
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-transparent backdrop-blur-md shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto max-w-7xl h-12 px-6 md:px-0">
          <div className="flex items-center justify-between ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=" font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
            >
              <img src="../src/assets/logo4.png" alt=""  className='h-14'/>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map(({ label, href, icon }) => {
                const isActive = activeSection === href.slice(1);
                const Icon = icon;
                return (
                  <motion.button
                    key={href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleScroll(href)}
                    className={clsx(
                      'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300',
                      'hover:bg-white/10 group',
                      isActive && 'bg-white/10'
                    )}
                  >
                    <Icon className={clsx(
                      'w-4 h-4 transition-colors duration-300',
                      isActive ? 'text-cyan-400' : 'text-white/70 group-hover:text-cyan-400'
                    )} />
                    <span className={clsx(
                      'text-sm font-medium transition-colors duration-300',
                      isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    )}>
                      {label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <Icons.X className="w-6 h-6 text-white" />
              ) : (
                <Icons.Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm h-48" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-64 bg-gray-900 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex flex-col p-4 mt-16">
                {navItems.map(({ label, href, icon }) => {
                  const isActive = activeSection === href.slice(1);
                  const Icon = icon;
                  return (
                    <motion.button
                      key={href}
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleScroll(href)}
                      className={clsx(
                        'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full',
                        'hover:bg-white/10 group text-left',
                        isActive && 'bg-white/10'
                      )}
                    >
                      <Icon className={clsx(
                        'w-5 h-5 transition-colors duration-300',
                        isActive ? 'text-cyan-400' : 'text-white/70 group-hover:text-cyan-400'
                      )} />
                      <span className={clsx(
                        'text-base font-medium transition-colors duration-300',
                        isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                      )}>
                        {label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};