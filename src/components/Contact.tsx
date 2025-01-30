import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm.tsx";
import { SocialLinks } from "./SocialLinks";
import { MapPin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen  py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="container max-w-7xl  mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 "
          >
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5
            text-white/70 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-5 h-5 " />
                </div>
                <div>
                  <p className="text-gray-400">Colombo, Sri Lanka.</p>
                  <p className="text-gray-400">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5
            text-white/70 hover:text-cyan-400 transition-colors">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  sandaru.cis1@gmail.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5
            text-white/70 hover:text-cyan-400 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  +94 75 200 6820
                </a>
                <SocialLinks />
              </div>
            </div>
            
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
