// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from './logo.png';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Transformamos ideias em resultados.";
  const typingSpeed = 80;

  useEffect(() => {
    let currentText = '';
    let i = 0;
    let timeoutId;

    const type = () => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setDisplayedText(currentText);
        i++;
        timeoutId = setTimeout(type, typingSpeed);
      }
    };

    timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, [fullText]);

  return (
    <section className="min-h-screen flex flex-col relative bg-black text-white overflow-hidden">
      {/* Header - Ajustado para mobile */}
      <motion.header
        className="flex justify-between items-center p-6 md:p-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={logo} alt="Logo" className="h-10 md:h-14" />
        </motion.div>

        <motion.nav
          className="text-sm uppercase tracking-wider"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#contato" className="hover:text-gray-400 transition-colors">Contato</a>
        </motion.nav>
      </motion.header>

      {/* Main Content - Melhorado para mobile */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12">
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
         <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight max-w-6xl mx-auto">
            {displayedText}
            <motion.span
              className="inline"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            >
              |
            </motion.span>
          </h1>
        </motion.div>
      </div>

      {/* CTA - Ajustado para mobile */}
      <motion.div
        className="flex justify-center pb-16 md:pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.a
          href="#projetos"
          className="px-6 py-2.5 md:px-8 md:py-3 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Portfólio
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;