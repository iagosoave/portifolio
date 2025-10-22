import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import iago from './iago.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Web Designer";
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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(17,24,39,0.8),rgba(0,0,0,1))]" />
        
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px]"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-purple-500/[0.07] rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px]"
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-blue-500/[0.07] rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-white/[0.02] rounded-full blur-3xl" />
          </motion.div>
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute w-[1px] h-[1px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [-20, -100],
                x: [0, Math.random() * 50 - 25],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-transparent via-transparent to-white/[0.02] blur-2xl" />
        </motion.div>

        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            
            <motion.div
              className="text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.p
                className="text-gray-400 text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1 sm:mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Olá, eu sou
              </motion.p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 sm:mb-4">
                Iago José Soave Pereira
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4 sm:mb-6 h-8 sm:h-10 md:h-12">
                {displayedText}
                <motion.span
                  className="inline"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                >
                  |
                </motion.span>
              </div>

              <motion.p
                className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Tenho 20 anos e sou de Sorocaba, SP. Estou no último semestre de Análise e Desenvolvimento de Sistemas. 
                Especializado em criar experiências digitais únicas com WordPress, Elementor, React.js, JavaScript, HTML e CSS. 
                Transformo ideias em interfaces elegantes e funcionais.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 justify-center lg:justify-start px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {['WordPress', 'Elementor', 'React.js', 'JavaScript', 'HTML/CSS'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-800 text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider hover:border-gray-600 hover:text-gray-300 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.a
                  href="#projetos"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 text-center"
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
                  className="px-4 sm:px-6 py-2.5 sm:py-3 border border-white text-white text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-center"
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

            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end mb-4 sm:mb-6 lg:mb-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-2xl" />
                
                <img
                  src={iago}
                  alt="Iago Soave"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full relative z-10 border border-white/10"
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