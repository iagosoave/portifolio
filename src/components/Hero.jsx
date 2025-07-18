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
          <img src={logo} alt="Logo" className="h-10 md:h-12" />
        </motion.div>

        {/* Menu mobile simplificado */}
        <motion.a
          href="#contato"
          className="text-sm md:text-base uppercase tracking-wider hover:text-gray-400 transition-colors"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contato
        </motion.a>
      </motion.header>

      {/* Main Content - Melhorado para mobile */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 -mt-16 md:mt-0">
        <motion.div
          className="w-full max-w-6xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block sm:inline">{displayedText.split(' ').slice(0, 1).join(' ')}</span>
            <span className="block sm:inline sm:ml-2">{displayedText.split(' ').slice(1, 3).join(' ')}</span>
            <span className="block sm:inline sm:ml-2">{displayedText.split(' ').slice(3).join(' ')}</span>
            <motion.span
              className="inline-block ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            >
              |
            </motion.span>
          </h1>
        </motion.div>

        {/* CTA - Posicionado melhor no mobile */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.a
            href="#projetos"
            className="inline-block px-6 py-3 md:px-8 md:py-3 border border-white text-white text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
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
      </div>

      {/* Indicador de scroll - Apenas no desktop */}
      <motion.div
        className="hidden md:flex justify-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;