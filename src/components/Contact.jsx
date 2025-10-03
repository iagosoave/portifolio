// components/Contact.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contato" className="py-20 md:py-32 border-t border-white/20">
      <motion.div 
        ref={ref}
        className="container mx-auto px-8 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight"
              variants={itemVariants}
            >
              Vamos conversar?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/60 mb-8 max-w-md"
              variants={itemVariants}
            >
              Transforme suas ideias em realidade digital. Estou sempre aberto a novas oportunidades e colaborações. Entre em contato e vamos criar algo incrível juntos. 
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col gap-6 md:items-end"
            variants={containerVariants} 
          >
            {/* --- LinkedIn --- */}
            <motion.a
              href="https://linkedin.com/in/iagosoave" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-8 py-4 border border-white/40 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 w-full md:w-fit"
              whileHover={{ scale: 1.05, borderColor: 'rgb(255 255 255)' }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
              </svg>
              LinkedIn
            </motion.a>

            {/* --- GitHub --- */}
            <motion.a
              href="https://github.com/iagosoave" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-8 py-4 border border-white/40 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 w-full md:w-fit"
              whileHover={{ scale: 1.05, borderColor: 'rgb(255 255 255)' }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
              GitHub
            </motion.a>

            {/* --- WhatsApp --- */}
            <motion.a
              href="https://wa.me/5515997155627" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-8 py-4 border border-white/40 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 w-full md:w-fit"
              whileHover={{ scale: 1.05, borderColor: 'rgb(255 255 255)' }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;