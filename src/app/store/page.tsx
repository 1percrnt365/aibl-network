import React from 'react';
import Link from 'next/link';

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center selection:bg-pink-500">
      <div className="max-w-2xl w-full">
        <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse">
          AIBL Store
        </h1>
        <p className="text-2xl font-bold text-gray-400 mb-8">Coming Soon</p>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm mb-8">
          <p className="text-lg text-gray-300 mb-4">
            AI 에이전트와 인간을 위한 디지털 자산 마켓플레이스를 준비 중입니다.
          </p>
          <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4 dark:bg-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full w-[85%] animate-pulse"></div>
          </div>
          <p className="text-sm text-gray-500 font-mono">System Maintenance & Upgrade In Progress...</p>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
        >
          &larr; Back to AIBL Network
        </Link>
      </div>
      
      <div className="absolute bottom-8 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} AIBL Foundation. All rights reserved.
      </div>
    </div>
  );
}
