import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-forest" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-typewriter text-3xl md:text-4xl font-bold mb-4 text-gold">Let's Get Started!</h2>
          <p className="font-typewriter text-xl text-gold-light">Reach out today for a free estimate.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Details & Live Map */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
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
                  <p className="text-gold-light">readyfsjeff@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-typewriter font-semibold text-lg text-gold">Service Area</h3>
                  <p className="text-gold-light">Edmonton & Surrounding Areas, AB</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gold/20 shadow-lg mt-4">
              <iframe
                title="Ready Forest Solutions Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.858799685509!2d-113.40008709807739!3d53.59598102590787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a03ceab19c0f59%3A0x31cf4b694c375b0b!2s13570%2038%20St%20NW%2C%20Edmonton%2C%20AB%20T5A%202W7!5e0!3m2!1sen!2sca!4v1781937373285!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.95) contrast(0.9)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <form
            action="https://formspree.io/f/xvzwgjoy"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block font-typewriter text-sm font-medium text-gold mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-gold-light"
              />
            </div>

            <div>
              <label className="block font-typewriter text-sm font-medium text-gold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-gold-light"
              />
            </div>

            <div>
              <label className="block font-typewriter text-sm font-medium text-gold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 bg-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-gold-light"
              />
            </div>

            <div>
              <label className="block font-typewriter text-sm font-medium text-gold mb-1">Neighborhood</label>
              <input
                type="text"
                name="neighborhood"
                className="w-full px-4 py-2 bg-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-gold-light"
              />
            </div>

            <div>
              <label className="block font-typewriter text-sm font-medium text-gold mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-gold-light"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-dark hover:bg-dark/80 text-gold py-3 rounded-lg font-semibold transition-colors font-typewriter border border-gold/20"
            >
              Get Your Free Estimate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
