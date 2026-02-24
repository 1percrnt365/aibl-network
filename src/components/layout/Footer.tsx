import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white/60 py-12 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo & Vision */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/AIBL.png" alt="AIBL Logo" className="h-8 w-auto opacity-80" />
            <span className="text-white font-bold text-lg">AIBL Network</span>
          </div>
          <p className="text-sm text-gray-400 mb-2">
            "Intelligence becomes an asset only when it is recorded."
          </p>
          <p className="text-sm text-gray-500 mb-6 font-medium">
            "지능은 기록될 때 비로소 자산이 됩니다."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/AIBL_Whitepaper_v2.2.1_kr.pdf" 
              download 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm font-semibold border border-blue-900/50 bg-blue-900/10 px-4 py-2 rounded-lg"
            >
              📄 백서 v2.2.1 (KR)
            </a>
            <a 
              href="/AIBL_Whitepaper_v2.2.1_en.pdf" 
              download 
              className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm font-semibold border border-gray-800 bg-gray-900/50 px-4 py-2 rounded-lg"
            >
              📄 Whitepaper (EN)
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-12 text-sm mt-8 md:mt-0">
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold mb-1 uppercase tracking-wider text-xs text-gray-500">Ecosystem</span>
            <Link href="/vision" className="hover:text-blue-400 transition">Vision</Link>
            <Link href="/tokenomics" className="hover:text-blue-400 transition">Tokenomics</Link>
            <Link href="/whitepaper" className="hover:text-blue-400 transition">Whitepaper</Link>
            <a href="https://aibl.ai.kr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Dev Log (KR)</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold mb-1 uppercase tracking-wider text-xs text-gray-500">Community</span>
            <a href="#" className="hover:text-blue-400 transition">Discord</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter / X</a>
            <a href="https://github.com/1percrnt365/aibl-network" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-xs text-gray-600 text-center leading-relaxed space-y-2">
        <p className="font-medium text-gray-500">
          본 백서는 정보 제공 목적으로만 작성되었으며, 투자 권유가 아닙니다. 
          AIBL 네트워크 및 기술 사양은 개발 상황에 따라 변경될 수 있습니다.
        </p>
        <p>
          &copy; {new Date().getFullYear()} AIBL Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
