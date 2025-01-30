import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import HeroImage from '../assets/portfolio.png';




export const Hero = () => {


  const texts = ["MERN Stack Developer", "Frontend Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentText = texts[currentTextIndex];
    const speed = isDeleting ? 50 : 100; // Typing and deleting speed
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentText.length) {
        // Typing phase
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentText.length) {
        // Pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 1000); // Pause duration (1 second)
      } else if (isDeleting && displayedText.length > 0) {
        // Deleting phase
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        // Switch to the next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, currentTextIndex, texts]);

  return (
    <section id="home" className="relative min-h-screen max-w-7xl mx-auto flex items-center justify-center overflow-hidden">

      <div className="container mt-16 md:mt-0  flex justify-center md:flex-col  mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center ">
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6 md:ml-9 flex flex-col items-center justify-center md:items-start"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-white text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I am
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-6xl text-center md:text-left font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
             NAVEEN SANDARUWAN
            </motion.h1>
            
            <motion.div
            className="text-lg font-semibold lg:text-2xl h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
            <span className="blinking-cursor">|</span>
          </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-center md:text-left text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build modern, responsive, and futuristic web applications.
            </motion.p>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="/Sandaruwan_Bandara_CV .pdf" target='_blank' rel='noopener noreferrer'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium 
                  flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                
                <Download className="w-4 h-4" />
                Download Resume
              </motion.button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative max-w-md mx-auto "
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl animate-none" />
            <img
              src={HeroImage}
              alt="Profile"
              className="relative z-10 w-full max-w-sm h-full object-cover mx-auto rounded-full border-4 border-white/10 shadow-2xl"
            />
            <div className=" inset-0 hidden md:absolute rounded-full border-2 border-white/10 scale-110" />
            <div className=" inset-0 hidden md:absolute rounded-full border border-white/5 scale-125" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};