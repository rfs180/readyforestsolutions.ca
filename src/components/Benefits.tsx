import React from 'react';
import { benefits } from '../constants/benefits';

export default function Benefits() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-typewriter text-3xl md:text-4xl font-bold text-center mb-8 text-gold">
          Why Choose Ready Forest Solutions?
        </h2>
        <p className="text-gold-light text-center max-w-3xl mx-auto mb-16 font-sans">
          At Ready Forest Solutions, we are dedicated to delivering exceptional tree care with a commitment to safety, efficiency, and environmental stewardship. Our team of certified Proffessionals combines years of hands-on experience with state-of-the-art equipment to ensure every project enhances the natural beauty and health of your landscape. We pride ourselves on our reliable service, attention to detail, and our passion for keeping your property safe and thriving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-dark/50 border border-gold/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest text-gold mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="font-typewriter text-xl font-semibold mb-2 text-gold">{benefit.title}</h3>
              <p className="text-gold-light font-sans">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}