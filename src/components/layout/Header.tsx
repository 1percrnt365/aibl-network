import Link from 'next/link';

const Header = () => {
  return (
    <nav className="relative flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-white/10 backdrop-blur-md w-full">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-2 z-10 hover:opacity-80 transition">
        <img 
          src="/AIBL.png" 
          alt="AIBL Logo" 
          className="h-10 w-auto object-contain" 
        />
        <span className="font-bold text-xl tracking-tight">AIBL Network</span>
      </Link>

      {/* Center: Navigation (Absolute Positioned) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex space-x-8 text-sm font-medium text-gray-400">
        <Link href="/vision" className="hover:text-white transition">Vision</Link>
        <Link href="/docs" className="hover:text-white transition">Docs</Link>
        <Link href="/tokenomics" className="hover:text-white transition">Tokenomics</Link>
      </div>

      {/* Right: CTA Button */}
      <div className="z-10">
        <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition">
          Genesis Node Apply
        </button>
      </div>
    </nav>
  );
};

export default Header;
