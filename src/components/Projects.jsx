// components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Importar vídeos
import video1 from './black.mp4';
import video2 from './soave.mp4';
import video3 from './cris.mp4';
import video4 from './occa.mp4';

// Importar thumbnails
import thumb1 from './black.png';
import thumb2 from './soave.png';
import thumb3 from './cris.png';
import thumb4 from './occa.png';

const Projects = () => {
  const projects = [
    {
      name: "BLACKSHADE",
      category: "AGÊNCIA PUBLICITÁRIA",
      year: "2025",
      url: "https://blackshade.vercel.app/",
      video: video1,
      thumbnail: thumb1
    },
    {
      name: "ADVOCACIA SOAVE",
      category: "ADVOCACIA",
      year: "2025",
      url: "https://www.soaveadvocacia.com.br/",
      video: video2,
      thumbnail: thumb2
    },
    {
      name: "MÉTODO ATO - CRISTOFER LEONE",
      category: "PÁGINA DE VENDAS",
      year: "2025",
      url: "https://metodoato.com/",
      video: video3,
      thumbnail: thumb3
    },
    {
      name: "OCCA LIFE",
      category: "E-COMMERCE",
      year: "2025",
      url: "https://occalife.com.br/",
      video: video4,
      thumbnail: thumb4
    }
  ];

  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex items-end justify-between mb-16 border-b border-gray-200 pb-8">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Projetos:
          </motion.h2>
          <motion.div
            className="text-lg md:text-xl text-gray-600 hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ({projects.length})
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;