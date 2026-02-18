import React from 'react';
import { Sparkles, Quote } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-20 bg-forest">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-typewriter text-3xl md:text-4xl font-bold text-gold mb-8">
              Why Choose Ready Forest Solutions?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Sparkles className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-typewriter text-lg font-semibold text-gold mb-2">
                    Pristine Cleanup Guaranteed
                  </h3>
                  <p className="text-gold-light font-sans">
                    We leave no heavy machinery tracks on your property. Expert climbing and rigging means minimal impact on your lawn, fences, and landscaping. You'll struggle to tell we were even there when we're finished cleaning up.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-1 font-typewriter font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-typewriter text-lg font-semibold text-gold mb-2">
                    Certified Expertise
                  </h3>
                  <p className="text-gold-light font-sans">
                    Certified BC Faller with years of precision removal experience. We specialize in tight-quarter situations where most crews won't venture—narrow backyards, proximity to structures, and hazardous scenarios.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-1 font-typewriter font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-typewriter text-lg font-semibold text-gold mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gold-light font-sans">
                    No hidden fees. We provide firm quotes after assessment. Simple, honest pricing for peace of mind from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg border border-gold/20">
            <div className="flex justify-center mb-4">
              <Quote className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-gold-light font-sans italic text-center mb-6 leading-relaxed">
              "They did a great job... you wouldn't even know they were there when they finished cleaning up."
            </p>
            <p className="text-center font-typewriter text-gold font-semibold">
              - Don Burns
            </p>
            <div className="mt-6 pt-6 border-t border-gold/20">
              <p className="text-center text-gold-light font-sans text-sm">
                HomeStars Verified Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
