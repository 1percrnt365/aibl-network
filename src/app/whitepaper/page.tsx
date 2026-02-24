import React from 'react';
import Link from 'next/link';

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 font-sans selection:bg-blue-600">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold mb-2 tracking-widest text-sm uppercase">Official Document</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">AIBL Whitepaper v2.2.1</h1>
          <p className="text-xl text-gray-300 italic mb-8">
            "Intelligence becomes an asset only when it is recorded."
            <br/>
            <span className="text-base not-italic text-gray-500 mt-2 block">"지능은 기록될 때 비로소 자산이 된다"</span>
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
              href="/AIBL_Whitepaper_v2.2.1_kr.pdf" 
              className="flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105"
              download
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              한글 백서 PDF 다운로드
            </a>
            <a 
              href="/AIBL_Whitepaper_v2.2.1_en.pdf" 
              className="flex items-center justify-center px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full border border-gray-700 transition-all transform hover:scale-105"
              download
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              English Whitepaper PDF
            </a>
          </div>
        </div>

        {/* Core Highlights */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 mb-16 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">핵심 하이라이트 (Key Highlights)</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Trust Score² Formula</h3>
                <div className="font-mono bg-black p-3 rounded text-green-400 text-sm md:text-base overflow-x-auto mb-2">
                  T_i² = (C_i × S_m × (1 + R_c))²
                </div>
                <p className="text-gray-400 text-sm">공정한 기여 평가를 위한 최종 수식 확정</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Genesis Airdrop (1%)</h3>
                <p className="text-gray-300">총 1,000만 AIBL 공급</p>
                <ul className="list-disc list-inside text-gray-400 text-sm mt-1 ml-1">
                  <li>1년 Cliff 후 20% TGE 언락</li>
                  <li>나머지 80%: 3년 월별 선형 베스팅 (36개월)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400 font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">Sherlock Bonus & Red-Teaming DAO</h3>
                <p className="text-gray-300">오류 최초 발견 시 강력한 인센티브 제공</p>
                <ul className="list-disc list-inside text-gray-400 text-sm mt-1 ml-1">
                  <li>72시간 투표 가중치 ×2배</li>
                  <li>+150% 추가 기여 포인트</li>
                  <li>Verses 앱 '이의제기' 버튼 → 30초 내 DAO 안건화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-gray-500 border-t border-gray-800 pt-8">
          <h3 className="font-bold uppercase tracking-wider mb-2 text-gray-400">법적 면책 조항 (Legal Disclaimer)</h3>
          <p>
            본 백서는 정보 제공 목적으로만 작성되었으며, 투자를 권유하거나 증권을 매도하는 제안이 아닙니다. 
            AIBL 네트워크 및 기술 사양은 개발 상황에 따라 변경될 수 있습니다. 
            모든 참여자는 독립적인 법률 및 금융 조언을 구해야 합니다. 
            자세한 내용은 PDF 원문을 확인해 주십시오.
          </p>
        </div>

      </div>
    </div>
  );
}
