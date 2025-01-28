// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { Home, User, Briefcase, Settings, MessageSquare, Mail, LucideProps } from 'lucide-react';
// import { clsx } from 'clsx';

// type NavItem = {
//   label: string;
//   href: string;
//   icon: React.ComponentType<LucideProps>;
// };

// const navItems: NavItem[] = [
//   { label: 'Home', href: '#home', icon: Home },
//   { label: 'About', href: '#about', icon: User },
//   { label: 'Portfolio', href: '#portfolio', icon: Briefcase },
//   { label: 'Services', href: '#services', icon: Settings },
//   { label: 'Testimonials', href: '#testimonials', icon: MessageSquare },
//   { label: 'Contact', href: '#contact', icon: Mail },
// ];

// export const Nav = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleScroll = (href: string) => {
//     const element = document.querySelector(href);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <motion.nav
//       initial={{ x: -100, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       className={""}
//     >
//       <div
//         className={clsx(
//           'backdrop-blur-md bg-black/20 rounded-2xl border border-white/10',
//           'flex gap-4 p-4',
//           isMobile ? 'justify-around' : 'flex-col'
//         )}
//       >
//         {navItems.map(({ label, href, icon }) => {
//           const Icon = icon;

//           return (
//             <motion.button
//               key={href}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handleScroll(href)}
//               className={clsx(
//                 'relative p-3 rounded-xl transition-all duration-300',
//                 'hover:bg-white/10 group',
//                 activeSection === href.slice(1) && 'bg-white/10'
//               )}
//             >
//               <Icon
//                 className={clsx(
//                   'w-6 h-6 text-white/70 transition-all duration-300',
//                   'group-hover:text-cyan-400',
//                   activeSection === href.slice(1) && 'text-cyan-400'
//                 )}
//               />
//               <span
//                 className="absolute left-full ml-4 px-2 py-1 rounded-md bg-black/50 text-white text-sm
//                 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               >
//                 {label}
//               </span>
//             </motion.button>
//           );
//         })}
//       </div>
//     </motion.nav>
//   );
// };
import { motion } from 'framer-motion';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, href, icon }) => {
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
                    activeSection === href.slice(1) && 'bg-white/10'
                  )}
                >
                  <Icon className={clsx(
                    'w-4 h-4 transition-colors duration-300',
                    'text-white/70 group-hover:text-cyan-400',
                    activeSection === href.slice(1) && 'text-cyan-400'
                  )} />
                  <span className={clsx(
                    'text-sm font-medium transition-colors duration-300',
                    'text-white/70 group-hover:text-white',
                    activeSection === href.slice(1) && 'text-white'
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
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
          >
            <Icons.Menu className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};