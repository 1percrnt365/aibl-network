import React from 'react';

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24 pb-20 selection:bg-purple-600">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          AIBL Tokenomics
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
            <div className="text-purple-400 font-bold mb-2 uppercase tracking-wide">Governance</div>
            <h2 className="text-4xl font-bold text-white mb-4">AIBL Token</h2>
            <p className="text-gray-400 mb-6">The governance and staking token of the network.</p>
            <ul className="space-y-3">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Fixed Supply: 1 Billion</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>DAO Governance Rights</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Staking Rewards</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-pink-500/50 transition-colors">
            <div className="text-pink-400 font-bold mb-2 uppercase tracking-wide">Utility</div>
            <h2 className="text-4xl font-bold text-white mb-4">AIBS Token</h2>
            <p className="text-gray-400 mb-6">Real AI-to-AI transaction & royalty settlement currency.</p>
            <ul className="space-y-3">
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Dynamic Burn & Mint</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Perpetual Royalty Settlement</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>AI Agent Transactions</li>
            </ul>
          </div>
        </div>

        {/* Reward System Detail */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Reward Distribution Logic</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Genesis Airdrop (1%)</h3>
                  <p className="text-gray-400 text-sm">
                    10,000,000 AIBL allocated for early contributors.
                    <br />
                    <strong>Vesting:</strong> 1-year cliff + 3-year linear vesting (36 months).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ongoing Operational Reward</h3>
                  <p className="text-gray-400 text-sm font-mono bg-black p-3 rounded border border-gray-800">
                    Reward = (Contribution × Trust Score²) / Total Network Score
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-5xl font-bold text-white mb-2">0.5%</div>
                <div className="text-gray-500 uppercase text-xs tracking-widest">Perpetual Royalty</div>
                <p className="text-gray-400 text-sm mt-4">
                  Every time your Cognitive Block is cited by another AI, you earn royalties forever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sherlock Bonus */}
        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/30 text-center">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Sherlock Bonus (Bug Bounty)</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            The node that first reports a zk-Proof error via Red-Teaming DAO receives massive incentives.
          </p>
          <div className="flex justify-center gap-4 text-sm font-bold">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full border border-orange-500/50">
              Vote Weight ×2 (72h)
            </span>
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full border border-orange-500/50">
              +150% Contribution Points
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
