import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Nav } from './Nav';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Nav></Nav>
      <div className="container  flex md:flex-col mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6 md:ml-9 ]"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Crafting Tomorrow's Digital Experiences Today
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm John Doe, a futuristic web developer delivering cutting-edge solutions
            </motion.p>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium 
                  flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all"
              >
                Let's Collaborate
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto mr-20 w-5/12"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="relative z-10 w-full max-w-sm h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full border-2 border-white/10 scale-110" />
            <div className="absolute inset-0 rounded-full border border-white/5 scale-125" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};