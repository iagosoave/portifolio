// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      {/* Container com largura total */}
      <div className="relative overflow-hidden h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex items-end w-full">
        
        {/* Imagem de capa sempre visível */}
        {project.thumbnail && (
          <div className="absolute inset-0 z-10">
            <img 
              src={project.thumbnail} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-20 flex flex-col gap-3 w-full p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {/* Nome do projeto */}
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
            {project.name}
          </h3>

          {/* Informações do projeto */}
          <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider text-white/60">
            <span className="whitespace-normal xs:whitespace-nowrap">{project.category}</span>
            <span className="hidden xs:inline">•</span>
            <div className="flex items-center gap-2">
              <span>{project.year}</span>
              <span className="inline-block ml-1 xs:ml-2 text-white">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;