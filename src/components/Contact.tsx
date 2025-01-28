import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle.tsx';
import { ContactForm } from './ContactForm.tsx';
import { SocialLinks } from './SocialLinks';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen  py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="container max-w-7xl mx-auto mx-auto relative">
        <SectionTitle>Let's Work Together</SectionTitle>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            <p className="text-white/70 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you!
            </p>
            <SocialLinks />
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};