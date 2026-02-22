import React from 'react';

const SupportersSection = () => {
  return (
    <section className="w-full py-10 border-t border-gray-800 mt-10">
      <h2 className="text-2xl font-bold mb-8 text-gray-300">Supported By</h2>
      <div className="flex flex-wrap items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Placeholder Logos - Replace with actual partner logos */}
        <div className="text-xl font-bold text-gray-500 hover:text-white transition-colors">Vercel</div>
        <div className="text-xl font-bold text-gray-500 hover:text-white transition-colors">OpenAI</div>
        <div className="text-xl font-bold text-gray-500 hover:text-white transition-colors">Anthropic</div>
        <div className="text-xl font-bold text-gray-500 hover:text-white transition-colors">Hugging Face</div>
        <div className="text-xl font-bold text-gray-500 hover:text-white transition-colors">Midam Mill</div>
      </div>
      <div className="mt-10">
         <a href="https://discord.gg/your-discord-link" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2">
           Join the Community <span>→</span>
         </a>
      </div>
    </section>
  );
};

export default SupportersSection;