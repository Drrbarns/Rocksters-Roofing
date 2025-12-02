import React from 'react';
import { PROJECTS } from '../constants';
import { Reveal } from '../components/Reveal';

const Projects = () => {
  return (
    <div className="bg-rockster-concrete min-h-screen">
      <div className="bg-slate-900 py-16 text-center text-white">
        <Reveal direction="down">
          <h1 className="text-4xl font-display font-bold">Our Projects</h1>
          <p className="text-slate-400 mt-2">Delivering excellence across Ghana</p>
        </Reveal>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 150} className={index % 3 === 0 ? 'md:col-span-2' : ''}>
              <div className={`bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className={`relative ${index % 3 === 0 ? 'h-96' : 'h-72'} overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-rockster-accent font-bold text-sm uppercase mb-1">{project.category}</span>
                    <h2 className="text-white text-2xl md:text-3xl font-display font-bold">{project.title}</h2>
                    <p className="text-slate-300 flex items-center gap-2 mt-2">
                      <span className="w-2 h-2 bg-rockster-accent rounded-full animate-pulse"></span>
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;