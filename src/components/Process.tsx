import React from 'react';
import { Camera, FileText, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    number: '1',
    title: 'Quick Photo/Site Visit',
    description: 'Text us a photo for a ballpark estimate',
  },
  {
    icon: FileText,
    number: '2',
    title: 'Transparent Quote',
    description: 'Firm pricing, no hidden disposal fees',
  },
  {
    icon: Sparkles,
    number: '3',
    title: 'Clean Site Guarantee',
    description: 'The tree is gone and your yard is spotless',
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-typewriter text-3xl md:text-4xl font-bold text-center mb-4 text-gold">
          The Anti-Friction Process
        </h2>
        <p className="text-center text-gold-light mb-16 max-w-2xl mx-auto font-sans">
          From your first photo to a spotless yard—we make it simple.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 font-typewriter text-2xl font-bold">
                  {step.number}
                </div>
                <step.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-typewriter text-xl font-semibold text-gold mb-3">
                  {step.title}
                </h3>
                <p className="text-gold-light font-sans text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-16 w-12 h-1 bg-orange-500/30 transform"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
