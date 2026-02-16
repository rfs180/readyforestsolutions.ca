import React from 'react';
import { CheckCircle, Award, Shield, Star, Clock } from 'lucide-react';

const trustItems = [
  { icon: Award, label: 'Certified BC Faller' },
  { icon: Shield, label: '$2M Liability Insurance' },
  { icon: CheckCircle, label: 'WCB Alberta' },
  { icon: Star, label: 'HomeStars Verified' },
  { icon: Clock, label: '24/7 Emergency Response' },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-700 py-8 border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gold text-sm md:text-base font-typewriter mb-6 font-semibold">
          Why trust a weekend warrior when you can hire a precision faller?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <item.icon className="w-8 h-8 text-orange-500 mb-2" />
              <p className="text-gold-light text-xs md:text-sm font-sans">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
