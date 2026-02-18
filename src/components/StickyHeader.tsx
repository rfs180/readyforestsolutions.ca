import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-slate-700 border-b border-gold/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/attached_assets/RFSlogo.png" alt="RFS" className="w-8 h-8 object-contain" />
          <span className="font-typewriter text-gold font-bold text-sm hidden md:inline">Ready Forest Solutions</span>
        </div>
        <a
          href="tel:1-672-968-0643"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-typewriter font-semibold inline-flex items-center gap-2 transition-colors text-sm"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">1-672-968-0643</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </div>
  );
}
