import React from 'react';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturesSection from '@/components/homepage/FeaturesSection';
import SupportersSection from '@/components/homepage/SupportersSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans overflow-x-hidden relative selection:bg-purple-500/30">
      {/* Fedimint style dark background */}
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        
        <main className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-24 py-20">
          <HeroSection />
          <FeaturesSection />
          <SupportersSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
