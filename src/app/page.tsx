import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturesSection from '@/components/homepage/FeaturesSection';
import TokenomicsSection from '@/components/homepage/TokenomicsSection';
import ContactSection from '@/components/homepage/ContactSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans overflow-x-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <img src="/AIBL.png" alt="Background Logo" className="w-[80%] max-w-[800px] object-contain rotate-[-10deg]" />
      </div>
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[150px] rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <TokenomicsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}