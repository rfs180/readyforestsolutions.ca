import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-dark/70" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <img src="/attached_assets/RFSlogo.jpeg" alt="Ready Forest Solutions" className="w-24 h-24 object-contain mx-auto mb-6" />
          <h1 className="font-typewriter text-4xl md:text-6xl font-bold text-gold mb-6">
            Safe, Efficient, Eco-Friendly Tree Services in Alberta
          </h1>
          <p className="font-typewriter text-xl md:text-2xl text-gold-light mb-8">
            Professional tree removal, stump grinding, and trimming to protect your property and improve your landscape.
          </p>
          <button className="bg-forest hover:bg-forest-light text-gold px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors font-typewriter">
            Get a Free Estimate
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}