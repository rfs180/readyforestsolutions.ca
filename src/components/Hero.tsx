import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/attached_assets/spruce.w.justin.mov" type="video/quicktime" />
      </video>
      <div className="absolute inset-0 bg-dark/70 z-10" />

      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <img src="/attached_assets/RFSlogo.png" alt="Ready Forest Solutions" className="w-24 h-24 object-contain mx-auto mb-6" />
          <h1 className="font-typewriter text-4xl md:text-6xl font-bold text-gold mb-6">
            Precision Tree Removal & Forest Management in Edmonton, Spruce Grove & St. Albert
          </h1>
          <p className="font-typewriter text-lg md:text-xl text-gold-light mb-8 max-w-2xl mx-auto">
            Certified BC Faller specializing in tight-space removals and dangerous trees. No heavy machinery on your lawn—just expert climbing and rigging.
          </p>
          <a href="#contact-form" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors font-typewriter">
            Get My Free Quote Today
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}