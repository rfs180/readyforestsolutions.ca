import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-forest" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-typewriter text-3xl md:text-4xl font-bold mb-4 text-gold">Let's Get Started!</h2>
          <p className="font-typewriter text-xl text-gold-light">Reach out today for a consultation or free estimate.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-gold">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-typewriter font-semibold text-lg text-gold">Phone</h3>
                <p className="text-gold-light">1+ (672) 968-0643</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-gold">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-typewriter font-semibold text-lg text-gold">Email</h3>
                <p className="text-gold-light">jeff@readyforestsolutions.ca</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-gold">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-typewriter font-semibold text-lg text-gold">Location</h3>
                <p className="text-gold-light">Edmonton, Alberta</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block font-typewriter text-sm font-medium text-gold mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-gold-light"
              />
            </div>
            
            <div>
              <label className="block font-typewriter text-sm font-medium text-gold mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-gold-light"
              />
            </div>
            
            <div>
              <label className="block font-typewriter text-sm font-medium text-gold mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-gold-light"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-dark hover:bg-dark/80 text-gold py-3 rounded-lg font-semibold transition-colors font-typewriter border border-gold/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}