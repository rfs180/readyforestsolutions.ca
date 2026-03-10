import React from 'react';
import StickyHeader from './components/StickyHeader';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import EmergencyStorm from './components/EmergencyStorm'; // ← NEW
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <Hero />
      <TrustBar />
      <EmergencyStorm />  {/* ← NEW */}
      <Services />
      <WhyUs />
      <Process />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
