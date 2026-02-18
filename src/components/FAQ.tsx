import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'How much does tree removal cost?',
    answer: 'Tree removal costs typically range from $400 to $900 depending on the size, species, location, and complexity of the removal. Tight-quarter removals may cost more due to the specialized expertise required. We provide free, transparent quotes with no hidden fees after assessing your specific situation.',
  },
  {
    question: 'Do I need a permit to remove a tree on my private property?',
    answer: 'No permit is required for tree removal on private residential property in Edmonton and St. Albert. However, some neighborhoods may have local bylaws regarding elm trees or heritage trees. We stay updated on all local regulations and will advise you if any special considerations apply to your situation.',
  },
  {
    question: 'What\'s the difference between stump grinding and stump removal?',
    answer: 'Stump removal extracts the entire root system below ground level, which is more intensive and costly. Stump grinding grinds the stump down to ground level (or below) and chips it into mulch, which is typically more affordable and leaves your yard ready for landscaping. Both options leave your property clean—we recommend grinding for most residential situations.',
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-typewriter text-3xl md:text-4xl font-bold text-center mb-16 text-gold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gold/20 rounded-lg overflow-hidden bg-slate-700/30">
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors text-left"
              >
                <h3 className="font-typewriter text-lg font-semibold text-gold pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${
                    expanded === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expanded === index && (
                <div className="px-6 py-4 bg-slate-700/20 border-t border-gold/20">
                  <p className="text-gold-light font-sans leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
