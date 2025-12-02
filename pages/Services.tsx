import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from '../components/Reveal';

const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-rockster-blue py-20 text-center text-white">
        <Reveal direction="down">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h1>
        </Reveal>
        <Reveal delay={200} direction="down">
          <p className="text-slate-300">Comprehensive roofing and building solutions</p>
        </Reveal>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 100} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 h-full hover:-translate-y-2">
                <div className="w-14 h-14 bg-rockster-concrete rounded-full flex items-center justify-center text-rockster-blue mb-6 group-hover:bg-rockster-accent group-hover:text-white transition-colors duration-500 transform group-hover:rotate-6">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;