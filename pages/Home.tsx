import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Award, Users } from 'lucide-react';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in z-10">
            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">Available for Work</span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              Design Meaning That Moves Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">Audience.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              We build identity, motion design, and storytelling that helps your brand become unforgettable in a crowded market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink 
                to="/projects" 
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                See Our Work <ArrowRight className="ml-2" size={20} />
              </NavLink>
              <NavLink 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-gray-900 transition-all duration-300"
              >
                About Us
              </NavLink>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl fade-in delay-200 lg:block hidden">
            <img 
              src="https://picsum.photos/id/12/1000/1000" 
              alt="Creative Abstract" 
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="max-w-7xl mx-auto w-full mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-gray-900">100+</p>
            <p className="text-gray-500 text-sm mt-1">Projects Completed</p>
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1">
              <p className="text-4xl font-bold text-gray-900">5.0</p>
              <Star className="text-accent fill-accent" size={20} />
            </div>
            <p className="text-gray-500 text-sm mt-1">Client Rating</p>
          </div>
           <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-gray-900">20+</p>
            <p className="text-gray-500 text-sm mt-1">Design Awards</p>
          </div>
           <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-gray-900">10+</p>
            <p className="text-gray-500 text-sm mt-1">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Selected Works</h2>
              <h3 className="text-4xl font-bold text-gray-900">Featured Projects</h3>
            </div>
            <NavLink to="/projects" className="hidden md:flex items-center text-gray-900 font-semibold hover:text-accent transition-colors">
              View All Projects <ArrowRight size={20} className="ml-2" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <NavLink 
                key={project.id} 
                to="/projects"
                className="group block relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-accent uppercase mb-2">{project.category}</p>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">{project.title}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2">{project.description}</p>
                </div>
              </NavLink>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <NavLink to="/projects" className="inline-flex items-center text-gray-900 font-semibold hover:text-accent transition-colors">
              View All Projects <ArrowRight size={20} className="ml-2" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="https://picsum.photos/id/30/1600/900" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready to create something <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">extraordinary?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's collaborate to build a digital presence that reflects the quality of your brand.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300"
          >
            Start a Project <ArrowRight className="ml-2" size={24} />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;