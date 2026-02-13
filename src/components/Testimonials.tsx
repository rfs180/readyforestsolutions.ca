import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../constants/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 bg-dark text-gold">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-typewriter text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-forest/50 p-8 rounded-lg border border-gold/20">
              <Quote className="w-8 h-8 text-gold mb-4" />
              <p className="font-typewriter text-lg mb-4">{testimonial.quote}</p>
              <div className="text-gold-light">
                <p className="font-typewriter font-semibold">{testimonial.author}</p>
                <p className="font-sans text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}