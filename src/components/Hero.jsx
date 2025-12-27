import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb } from 'react-icons/si';
import iago from './iago.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Full Stack Developer";
  const typingSpeed = 100;

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

    timeoutId = setTimeout(type, 800);

    return () => clearTimeout(timeoutId);
  }, [fullText]);

  return (
    <section className="min-h-screen flex flex-col relative bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Subtle blue gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.03),transparent_50%)]" />
        
        {/* Grid sutil */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Partículas flutuantes reduzidas */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-blue-400/15 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -80],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Texto */}
            <motion.div
              className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                className="text-blue-400 text-xs sm:text-sm uppercase tracking-widest font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Olá, eu sou
              </motion.p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 sm:px-0">
                Iago José Soave Pereira
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                {displayedText}
                <motion.span
                  className="inline-block ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                >
                  |
                </motion.span>
              </div>

              <motion.p
                className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Tenho 20 anos e sou de Sorocaba, SP. Formado em Análise e Desenvolvimento de Sistemas. 
                Desenvolvedor Full Stack especializado em criar soluções web completas e escaláveis, do frontend ao backend.
              </motion.p>

              {/* Skills */}
              <motion.div
                className="flex flex-wrap gap-2 justify-center lg:justify-start px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {[
                  { name: 'React.js', icon: FaReact },
                  { name: 'Node.js', icon: FaNodeJs },
                  { name: 'TypeScript', icon: SiTypescript },
                  { name: 'Python', icon: FaPython },
                  { name: 'PostgreSQL', icon: SiPostgresql },
                  { name: 'MongoDB', icon: SiMongodb },
                  { name: 'Docker', icon: FaDocker }
                ].map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/50 border border-gray-800 text-gray-300 text-[10px] sm:text-xs font-medium uppercase tracking-wider hover:bg-gray-800/50 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 flex items-center gap-1.5 sm:gap-2"
                  >
                    <Icon className="text-sm sm:text-base" />
                    <span className="hidden xs:inline sm:inline">{name}</span>
                    <span className="inline xs:hidden sm:hidden">{name.split('.')[0]}</span>
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.a
                  href="#projetos"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Projetos
                </motion.a>
                
                <motion.a
                  href="#contato"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 border border-white text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contato
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Imagem */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect simplificado */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 to-blue-600/10 rounded-full blur-2xl" />
                
                {/* Anel decorativo */}
                <motion.div 
                  className="absolute -inset-2 border-2 border-blue-500/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <img
                  src={iago}
                  alt="Iago Soave"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full relative z-10 border-4 border-gray-900 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;