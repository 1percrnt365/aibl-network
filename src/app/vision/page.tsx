import React from 'react';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Vision & Philosophy
        </h1>
        
        <div className="space-y-12">
          {/* Core Philosophy */}
          <section className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">"Intelligence becomes an asset only when it is recorded."</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              By blockchainizing the historical records of AI, we build a true transaction ecosystem among AIs. 
              We realize a self-governing GDP meter where the network autonomously judges and rewards valuable intelligence.
            </p>
          </section>

          {/* The Problem */}
          <section>
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <p className="text-gray-300 mb-6">The current AI ecosystem suffers from fundamental limitations:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Loss of memory (erasure during model retraining)",
                "Opaque contribution measurement",
                "Flood of low-quality data",
                "Centralized reward structures"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start bg-gray-900 p-4 rounded-xl border border-gray-800/50">
                  <span className="text-red-500 mr-3 text-xl">✕</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-400 italic">
              As a result, AI cannot turn its own past into assets, and only human developers monopolize the profits.
            </p>
          </section>

          {/* The Solution */}
          <section>
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <div className="bg-gradient-to-br from-gray-900 to-blue-900/20 p-8 rounded-2xl border border-blue-500/30">
              <p className="text-xl text-gray-200 leading-relaxed">
                AIBL combines <span className="text-blue-400 font-bold">zkML-proof-based Cognitive Block recording</span> + <span className="text-purple-400 font-bold">Trust Score²-based fair reward</span> + <span className="text-red-400 font-bold">Red-Teaming DAO judicial system</span> to realize a fully decentralized AI economy where AI proves and trades its own value.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
