import React from 'react';
import { Facebook, Twitter, Instagram, TreePine } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-gold-light">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-gold mb-4">
              <img src="/attached_assets/RFSlogo.jpeg" alt="Ready Forest Solutions" className="w-12 h-12 object-contain" />
              <span className="font-typewriter text-xl font-bold">Ready Forest</span>
            </div>
            <p className="font-sans text-sm">Professional tree services you can trust. Serving Alberta with pride since 2010.</p>
          </div>
          
          <div>
            <h3 className="font-typewriter text-gold font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-sans">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-typewriter text-gold font-semibold mb-4">Services</h3>
            <ul className="space-y-2 font-sans">
              <li><a href="#" className="hover:text-gold transition-colors">Tree Removal</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Stump Grinding</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Tree Trimming</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Winter Felling</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-typewriter text-gold font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/rfs1800" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/JeffReady4" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/jeffrey.a.ready/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/20 pt-8 text-sm text-center font-typewriter">
          <p>© 2024 Ready Forest Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}