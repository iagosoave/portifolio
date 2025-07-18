// components/ProjectCard.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoIsVisible, setVideoIsVisible] = useState(false);
  
  // Usar um InView separado para o vídeo com threshold maior
  const videoInView = useInView(ref, { 
    amount: 0.9, // O card precisa estar 50% visível
    margin: "0px" 
  });

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Controlar quando o vídeo deve aparecer
  useEffect(() => {
    if (isMobile && videoInView) {
      // No mobile, mostra o vídeo quando o card estiver bem visível
      setVideoIsVisible(true);
    } else if (isMobile && !videoInView) {
      // No mobile, esconde o vídeo quando sair de view
      setVideoIsVisible(false);
    } else if (!isMobile && isHovered) {
      // No desktop, mostra o vídeo apenas no hover
      setVideoIsVisible(true);
    } else if (!isMobile && !isHovered) {
      // No desktop, esconde o vídeo quando não há hover
      setVideoIsVisible(false);
    }
  }, [isMobile, videoInView, isHovered]);

  // Auto-play video quando visível
  useEffect(() => {
    if (videoRef.current) {
      if (videoIsVisible) {
        videoRef.current.play().catch(err => console.log("Erro ao reproduzir:", err));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Resetar o vídeo
      }
    }
  }, [videoIsVisible]);

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group block w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container responsivo - aspect ratio no mobile, altura fixa no desktop */}
      <div className="relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex items-end">
        
        {/* Imagem de capa - visível quando vídeo não está visível */}
        {project.thumbnail && (
          <div 
            className={`absolute inset-0 z-10 transition-opacity duration-700 ${
              videoIsVisible ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <img 
              src={project.thumbnail} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}

        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src={project.video}
            className="w-full h-full object-cover scale-100"
            loop
            muted
            playsInline
            preload="metadata"
            style={{ pointerEvents: 'none' }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content - mantendo o estilo original */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full p-6 sm:p-8 md:p-12">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-white"
            transition={{ duration: 0.3 }}
          >
            {project.name}
          </motion.h3>

          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm uppercase tracking-wider text-white/60 transition-colors">
            <span className="whitespace-nowrap">{project.category}</span>
            <span className="hidden sm:inline">•</span>
            <span>{project.year}</span>
            <motion.span
              className="hidden md:inline-block ml-2 text-white"
              initial={{ x: 0, opacity: 0.6 }}
              whileHover={{ x: 5, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;