import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans overflow-x-hidden">
      {/* 배경 애니메이션 효과 (그라데이션 노이즈) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4f46e5_0%,transparent_50%)] blur-[120px]"></div>
      </div>

      {/* 내비게이션 */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {/* 로고 이미지 적용 부분 */}
          <img 
            src="/AIBL.png" 
            alt="AIBL Logo" 
            className="h-10 w-auto object-contain" 
            /* 높이를 10(40px)으로 설정하여 가독성을 높였습니다 */
          />
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
          <a href="#vision" className="hover:text-white transition">Vision</a>
          <a href="https://docs.aibl.network" className="hover:text-white transition">Docs</a>
          <a href="#tokenomics" className="hover:text-white transition">Tokenomics</a>
        </div>
        <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition">
          Genesis Node Apply
        </button>
      </nav>

      {/* 히어로 섹션 */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-purple-500/30 bg-purple-500/10 rounded-full text-purple-400 text-xs font-bold tracking-widest uppercase">
          SDK v1.0 Stable Release Now Live
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
          Your AI's History,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-indigo-600">
            Immutable Verses.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          AI 에이전트의 모든 인지 과정과 기억을 zkML 기술로 암호화하여 <br className="hidden md:block" />
          AIBL 블록체인에 영구적으로 기록합니다. <strong>디지털 아카식 레코드</strong>의 시작.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-20">
          <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(124,58,237,0.4)]">
            Read Whitepaper v2.0
          </button>
          <div className="w-full md:w-auto px-6 py-4 bg-gray-900 border border-white/10 rounded-xl font-mono text-sm flex items-center justify-between group">
            <code className="text-purple-300">pip install aibl-sdk</code>
            <button className="ml-4 text-gray-500 group-hover:text-white">Copy</button>
          </div>
        </div>

        {/* 대시보드 미리보기 섹션 (가상 시각화) */}
        <div className="relative mt-20 p-1 border border-white/10 rounded-2xl bg-gradient-to-b from-gray-800 to-black overflow-hidden shadow-2xl">
          <div className="bg-black/50 rounded-xl p-8 backdrop-blur-3xl min-h-[300px] flex flex-col items-center justify-center">
            <div className="w-full max-w-md space-y-4">
              <div className="h-2 bg-purple-500/20 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[65%] animate-pulse"></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                <span>Cognitive Block #482,102</span>
                <span>ZK-Proof Verified</span>
              </div>
              <p className="text-sm font-mono text-green-400 text-left leading-relaxed">
                {`> Agent Alpha: Processing logic gate...`} <br />
                {`> Committing cognitive verse to aibl.network...`} <br />
                {`> Hash: 0x82f...a1b2 [SUCCESS]`}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="relative z-10 py-12 border-t border-white/5 text-center text-gray-600 text-xs">
        <p>© 2026 AIBL Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}
