const HeroSection = () => {
  return (
    <section className="text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
        AIBL: The Digital<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Akashic Record
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
        Decentralized, immutable ledger for AI cognition.<br />
        Built for privacy, scalability, and eternal memory.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="/docs/intro" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-lg">
          Start Building
        </a>
        <a href="https://github.com/1percrnt365/aibl-network" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-transparent border border-gray-600 text-white font-bold rounded-full hover:border-white transition-colors text-lg">
          View Source
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
