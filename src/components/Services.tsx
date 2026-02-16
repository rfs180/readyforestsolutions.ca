import React from 'react';
import { services } from '../constants/services';

export default function Services() {
  return (
    <section className="py-20 bg-forest">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-typewriter text-3xl md:text-4xl font-bold text-center mb-4 text-gold">Core Services</h2>
        <p className="text-center text-gold-light mb-16 max-w-2xl mx-auto font-sans text-lg">Outcome-focused solutions for every tree situation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gold/20">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-typewriter text-xl font-semibold mb-2 text-gold">{service.title}</h3>
                <p className="text-gold-light font-sans">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}