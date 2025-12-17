import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <NavLink to="/" className="text-3xl font-black tracking-tighter flex items-center gap-2 mb-6">
              <span className="bg-accent text-white w-10 h-10 flex items-center justify-center rounded-lg">R</span>
              Roskara
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences that move people. We combine strategic thinking with world-class design execution.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><NavLink to="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-white transition-colors">Services</NavLink></li>
              <li><NavLink to="/projects" className="text-gray-400 hover:text-white transition-colors">Work</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
             <ul className="space-y-4">
              <li className="text-gray-400">Web Design</li>
              <li className="text-gray-400">Development</li>
              <li className="text-gray-400">Brand Identity</li>
              <li className="text-gray-400">SEO & Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
             <ul className="space-y-4">
              <li className="text-gray-400">hello@roskara.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">123 Design Avenue,<br/>Creative City, NY 10012</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Roskara Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;