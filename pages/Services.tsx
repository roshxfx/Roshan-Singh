import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <div className="mb-16">
          <h4 className="text-accent font-bold uppercase tracking-wider mb-2">Our Expertise</h4>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900">
            Creative services designed <br/> to elevate your brand.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                  activeService.id === service.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <service.icon size={20} className={activeService.id === service.id ? 'text-accent' : 'text-gray-400 group-hover:text-gray-600'} />
                  <span className="font-bold text-lg">{service.title}</span>
                </div>
                {activeService.id === service.id && <ArrowRight size={18} className="text-accent" />}
              </button>
            ))}
          </div>

          {/* Right Column: Details Content */}
          <div className="lg:col-span-8">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 h-full flex flex-col transition-all duration-500 fade-in key={activeService.id}">
              <div className="mb-8 rounded-2xl overflow-hidden h-64 md:h-80 w-full relative">
                 <img 
                   src={activeService.image} 
                   alt={activeService.title} 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/20"></div>
                 <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
                    <activeService.icon className="text-accent inline-block mr-2" size={20}/>
                    <span className="font-bold text-gray-900">{activeService.title}</span>
                 </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{activeService.title}</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-200">
                 <NavLink 
                   to="/contact" 
                   className="inline-flex items-center text-lg font-bold text-gray-900 hover:text-accent transition-colors"
                 >
                   Discuss {activeService.title} Project <ArrowRight className="ml-2" size={20} />
                 </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-black text-white py-24 mt-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="p-6">
                 <div className="text-6xl font-black text-gray-800 mb-4">01</div>
                 <h3 className="text-2xl font-bold mb-3">Discovery</h3>
                 <p className="text-gray-400">We dive deep into your brand's core to understand your goals and audience.</p>
               </div>
               <div className="p-6">
                 <div className="text-6xl font-black text-gray-800 mb-4">02</div>
                 <h3 className="text-2xl font-bold mb-3">Creation</h3>
                 <p className="text-gray-400">Iterative design and development process with regular feedback loops.</p>
               </div>
               <div className="p-6">
                 <div className="text-6xl font-black text-gray-800 mb-4">03</div>
                 <h3 className="text-2xl font-bold mb-3">Launch</h3>
                 <p className="text-gray-400">Testing, optimization, and final deployment to the world.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Services;