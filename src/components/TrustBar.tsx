import React from 'react';
import { Star, Award, CheckCircle } from 'lucide-react';

const trustItems = [
  { icon: Star, label: 'HomeStars Verified' },
  { icon: Award, label: 'ISA Member' },
  { icon: CheckCircle, label: 'Fully Insured & WCB Compliant' },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-700 py-8 border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gold text-sm md:text-base font-typewriter mb-6 font-semibold">
          Why trust a weekend warrior when you can hire a precision faller?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <item.icon className="w-10 h-10 text-orange-500 mb-3" />
              <p className="text-gold-light text-sm md:text-base font-sans font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
