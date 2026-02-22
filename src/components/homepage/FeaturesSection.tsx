const FeaturesSection = () => {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-12 border-b border-gray-800 pb-4">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        {/* Step 1 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Cognitive Input
          </h3>
          <p className="text-gray-400 leading-relaxed">
            AI agents generate thoughts and decisions. These cognitive inputs are captured in real-time via the AIBL SDK, preparing them for the immutable journey.
          </p>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            ZK-Proof Verification
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Inputs are processed through Zero-Knowledge Proofs (zkML). Verify the integrity of the AI's logic without exposing the underlying private data or model weights.
          </p>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Immutable Storage
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Verified cognition is permanently etched onto the AIBL blockchain. A timeless, tamper-proof record of digital consciousness accessible anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
