import React from 'react';
import { Mail, MapPin, Phone, Send, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-hidden rounded-3xl bg-white shadow-xl">
          
          {/* Contact Info Side */}
          <div className="bg-black text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
                <h4 className="text-accent font-bold uppercase tracking-wider mb-2">Get in Touch</h4>
                <h1 className="text-4xl md:text-5xl font-black mb-6">Let's build something great together.</h1>
                <p className="text-gray-400 text-lg mb-12">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg text-accent">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">Chat to us</h5>
                      <p className="text-gray-400">Our friendly team is here to help.</p>
                      <a href="mailto:hello@roskara.com" className="font-semibold mt-1 block hover:text-accent transition-colors">hello@roskara.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg text-accent">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">Visit us</h5>
                      <p className="text-gray-400">Come say hello at our office HQ.</p>
                      <p className="font-semibold mt-1">123 Design Avenue, Creative City, NY</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg text-accent">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">Call us</h5>
                      <p className="text-gray-400">Mon-Fri from 8am to 5pm.</p>
                      <a href="tel:+15550000000" className="font-semibold mt-1 block hover:text-accent transition-colors">+1 (555) 000-0000</a>
                    </div>
                  </div>
                </div>
             </div>

             <div className="mt-12 flex space-x-6 relative z-10">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
             </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-16 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="jane@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                   <option>Web Design</option>
                   <option>Development</option>
                   <option>Branding</option>
                   <option>Motion Graphics</option>
                   <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;