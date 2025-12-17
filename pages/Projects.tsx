import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Selected Works
          </h1>
          <p className="text-lg text-gray-600">
            A curated selection of projects that showcase our commitment to design excellence and technical innovation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-black text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer fade-in"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowUpRight size={24} className="text-gray-900"/>
                   </div>
                </div>
              </div>
              <div>
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{project.category}</span>
                    <span className="text-xs text-gray-400 font-medium">2023</span>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                 <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;