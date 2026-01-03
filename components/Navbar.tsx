
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-coffee-950/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 border-2 border-accent rounded-full flex items-center justify-center group-hover:bg-accent transition-all">
            <span className={`font-serif font-bold text-xl ${isScrolled ? 'text-white' : 'text-coffee-950'} group-hover:text-coffee-950`}>O</span>
          </div>
          <span className={`font-serif text-2xl font-semibold tracking-tight ${isScrolled ? 'text-white' : 'text-coffee-950'}`}>
            ORIGIN & ROAST
          </span>
        </div>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                  isScrolled ? 'text-coffee-100 hover:text-accent' : 'text-coffee-900 hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-coffee-950 font-bold transition-all text-sm uppercase tracking-widest">
          Find A Shop
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
