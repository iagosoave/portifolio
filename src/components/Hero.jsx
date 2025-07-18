// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from './logo.png';
import back from './back.jpg';

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

    timeoutId = setTimeout(type, 500); // Pequeno delay antes de começar

    return () => clearTimeout(timeoutId);
  }, [fullText]);

  return (
    <section className="min-h-screen flex flex-col justify-between relative bg-black text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay opcional para melhorar legibilidade */}
      </div>

      {/* Header */}
      <motion.header
        className="flex justify-between items-center p-8 md:p-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={logo} alt="Logo" className="h-14 md:h-10" />
        </motion.div>

        <motion.nav
          className="hidden md:flex gap-8 text-sm uppercase tracking-wider"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#contato" className="hover:text-gray-400 transition-colors">Contato</a>
        </motion.nav>
      </motion.header>

      {/* Main Content - CENTRALIZADO */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 md:px-12 relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight max-w-6xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {displayedText}
          <motion.span 
            className="inline-block"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          >
            |
          </motion.span>
        </motion.h1>
      </div>

      {/* CTA - BOTÃO VOLTOU */}
      <motion.div
        className="flex justify-center pb-20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.a
          href="#projetos"
          className="px-8 py-3 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
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