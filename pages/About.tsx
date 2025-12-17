import React from 'react';
import { TEAM } from '../constants';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Intro Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h4 className="text-accent font-bold uppercase tracking-wider mb-4">Our Story</h4>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Born from a passion for <br/>precision and beauty.
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {TEAM.bio}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <span className="font-medium text-gray-800">Data-Driven Design</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <span className="font-medium text-gray-800">Strategic Storytelling</span>
              </div>
               <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <span className="font-medium text-gray-800">Global Perspective</span>
              </div>
               <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <span className="font-medium text-gray-800">Agile Methodology</span>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
               <p className="italic text-gray-700 text-lg mb-4">"Roskara transformed our digital presence. Their attention to detail and strategic approach doubled our conversion rates in just three months."</p>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                     <img src="https://picsum.photos/id/65/200/200" alt="Client" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Sarah Jenkins</p>
                    <p className="text-xs text-gray-500">CEO, Fintech Co.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="relative fade-in delay-200">
             <div className="absolute top-10 left-10 w-full h-full bg-gray-100 rounded-3xl -z-10 transform rotate-3"></div>
             <img 
               src="https://picsum.photos/id/180/800/1000" 
               alt="Team Working" 
               className="rounded-3xl shadow-2xl w-full object-cover h-[600px]" 
             />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h4 className="text-accent font-bold uppercase tracking-wider mb-2">Our Core Values</h4>
              <h2 className="text-4xl font-bold">The code we live by.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: Zap, title: "Innovation", desc: "We refuse to settle for the status quo. By leveraging emerging technologies." },
                 { icon: Target, title: "Precision", desc: "Every pixel must earn its place. We believe true beauty lies in purpose and accuracy." },
                 { icon: Users, title: "Empathy", desc: "We design for humans first. Understanding user needs is the foundation of our work." },
                 { icon: ShieldCheck, title: "Integrity", desc: "We believe in transparent communication and honest partnerships with our clients." }
               ].map((item, index) => (
                 <div key={index} className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-colors group">
                    <item.icon className="text-accent mb-6 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team Leader */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-8 md:p-12 rounded-3xl">
           <div className="w-full md:w-1/3">
             <img src={TEAM.image} alt={TEAM.name} className="w-full h-auto rounded-2xl shadow-lg" />
           </div>
           <div className="w-full md:w-2/3">
             <h3 className="text-3xl font-bold text-gray-900 mb-2">{TEAM.name}</h3>
             <p className="text-accent font-medium mb-6">{TEAM.role}</p>
             <p className="text-gray-600 mb-6 text-lg">
               Alex leads the strategic vision at Roskara. With a background in both Industrial Design and Computer Science, he bridges the gap between physical aesthetics and digital constraints.
             </p>
             <img src="https://picsum.photos/id/88/150/60" alt="Signature" className="opacity-50" />
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;