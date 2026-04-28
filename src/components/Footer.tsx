import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, MessageSquare } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    neighborhood: '',
    problem: '',
    photo: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, photo: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('neighborhood', formData.neighborhood);
    formDataObj.append('problem', formData.problem);
    if (formData.photo) formDataObj.append('photo', formData.photo);

    try {
      const response = await fetch('https://formspree.io/f/xvzwgjoy', {
        method: 'POST',
        body: formDataObj,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'quote_submitted', {
            form_location: 'footer_contact_form'
          });
        }
        setFormData({ name: '', email: '', phone: '', neighborhood: '', problem: '', photo: null });
        alert('Estimate request sent!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <footer className="bg-dark text-gold-light">
      <section className="max-w-7xl mx-auto px-4 py-20 border-b border-gold/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-typewriter text-4xl md:text-5xl font-bold text-gold mb-6">
              Don't wait for the next windstorm.
            </h2>
            <p className="text-xl text-gold-light mb-6 font-typewriter">
              Text a photo of your tree to <a href="tel:1-672-968-0643" className="text-orange-500 hover:text-orange-400 font-bold">1-672-968-0643</a> for an instant estimate.
            </p>
            <div className="flex items-center gap-4">
              <MessageSquare className="w-8 h-8 text-orange-500" />
              <span className="font-typewriter text-gold">Available 24/7 for emergencies</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-700 p-8 rounded-lg" id="contact-form">
            <h3 className="font-typewriter text-2xl font-bold text-gold mb-6">Quick Contact Form</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark text-gold-light placeholder-gold-light/50 border border-gold/20 rounded-lg font-sans focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark text-gold-light placeholder-gold-light/50 border border-gold/20 rounded-lg font-sans focus:outline-none focus:border-orange-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark text-gold-light placeholder-gold-light/50 border border-gold/20 rounded-lg font-sans focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                name="neighborhood"
                placeholder="Neighborhood (Edmonton/St. Albert)"
                value={formData.neighborhood}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark text-gold-light placeholder-gold-light/50 border border-gold/20 rounded-lg font-sans focus:outline-none focus:border-orange-500"
              />
              <textarea
                name="problem"
                placeholder="Describe your tree problem"
                value={formData.problem}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-dark text-gold-light placeholder-gold-light/50 border border-gold/20 rounded-lg font-sans focus:outline-none focus:border-orange-500 resize-none"
              />
              <div>
                <label className="text-gold-light text-sm font-sans mb-2 block">Upload a Photo (Optional)</label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 bg-dark text-gold-light border border-gold/20 rounded-lg font-sans file:mr-4 file:py-2 file:px-4 file:rounded-lg file:bg-orange-500 file:text-white file:border-0 cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-typewriter font-semibold transition-colors"
              >
                Get Your Free Estimate
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-gold mb-4">
              <img src="/attached_assets/RFSlogo.png" alt="Ready Forest Solutions" className="w-12 h-12 object-contain" />
              <span className="font-typewriter text-xl font-bold">Ready Forest</span>
            </div>
            <p className="font-sans text-sm">Professional tree services serving Edmonton & St. Albert.</p>
          </div>
          <div>
            <h3 className="font-typewriter text-gold font-semibold mb-4">Services</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li>Tree Removal</li>
              <li>Hazard Assessment</li>
              <li>Elm Pruning</li>
              <li>Stump Grinding</li>
            </ul>
          </div>
          <div>
            <h3 className="font-typewriter text-gold font-semibold mb-4">Emergency</h3>
            <div className="font-sans text-sm">
              <p>Available 24/7</p>
              <p className="text-orange-500 font-semibold">1-672-968-0643</p>
            </div>
          </div>
          <div>
            <h3 className="font-typewriter text-gold font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="border-t border-gold/20 pt-8 text-sm text-center font-typewriter text-gold-light/50">
          <p>© 2024 Ready Forest Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
