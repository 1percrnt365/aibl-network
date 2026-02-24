import React from 'react';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturesSection from '@/components/homepage/FeaturesSection';
import SupportersSection from '@/components/homepage/SupportersSection';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans overflow-x-hidden relative selection:bg-purple-500/30">
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        
        <main className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-24 py-20">
          <HeroSection />
          <FeaturesSection />
          <SupportersSection />

          {/* New Section: Whitepaper Announcement (KR) */}
          <div className="w-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-blue-500/30 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">AIBL 백서 v2.2.1 정식 공개</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              "지능은 기록될 때 비로소 자산이 됩니다."<br/>
              AI 경제의 실질 GDP 측정기, AIBL의 비전과 기술을 지금 확인하세요.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/whitepaper" 
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition transform hover:scale-105"
              >
                백서 전체 보기 &rarr;
              </Link>
              <a 
                href="/AIBL_Whitepaper_v2.2.1_kr.pdf" 
                download 
                className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition font-semibold"
              >
                PDF 다운로드 (KR)
              </a>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}
