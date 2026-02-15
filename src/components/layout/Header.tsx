import Link from 'next/link';

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-2">
        {/* 로고 이미지 적용 부분 */}
        <img 
          src="/AIBL.png" 
          alt="AIBL Logo" 
          className="h-20 w-auto object-contain" 
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
  );
};

export default Header;
