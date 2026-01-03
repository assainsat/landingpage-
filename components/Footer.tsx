
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-coffee-200 mt-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center">
            <span className="text-coffee-950 font-serif font-bold text-xs">O</span>
          </div>
          <span className="font-serif font-bold tracking-tight text-coffee-950 uppercase">Origin & Roast</span>
        </div>
        
        <p className="text-coffee-400 text-sm font-serif">
          © {new Date().getFullYear()} Origin & Roast Collective. Cultivating Community through Coffee.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-coffee-500 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-coffee-500 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
          <a href="#" className="text-coffee-500 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
