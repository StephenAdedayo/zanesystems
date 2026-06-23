import { useState } from 'react';

export default function Hamburger({setIsMenuOpen, menuOpen}) {

  return (
    <button
      onClick={() => setIsMenuOpen(!menuOpen)}
      className="flex h-8.5 flex-col items-center cursor-pointer justify-center space-y-1.5 focus:outline-none"
      aria-label="Toggle Menu"
    >
      {/* Top Line */}
      <span
        className={`h-0.5 w-6 bg-white transition-all duration-200 ease-in-out ${
          menuOpen ? 'translate-y-2 rotate-45' : ''
        }`}
      />
      
      {/* Middle Line (Fades out) */}
      <span
        className={`h-0.5 w-6 bg-white transition-all duration-200 ease-in-out ${
          menuOpen ? 'opacity-0' : ''
        }`}
      />
      
      {/* Bottom Line */}
      <span
        className={`h-0.5 w-6 bg-white transition-all duration-200 ease-in-out ${
          menuOpen ? '-translate-y-2 -rotate-45' : ''
        }`}
      />
    </button>
  );
}