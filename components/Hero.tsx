
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" 
          alt="Coffee shop interior" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-coffee-950/40 backdrop-brightness-75"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-accent/20 border border-accent/30 text-accent font-medium text-xs uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
            Ethically Sourced. Locally Roasted.
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-white font-bold leading-tight mb-8 text-balance">
            Brewing <span className="italic font-light">Connections</span> One Cup at a Time.
          </h1>
          <p className="text-coffee-50 text-xl md:text-2xl mb-12 font-serif opacity-90 max-w-2xl leading-relaxed">
            Welcome to the collective. At Origin & Roast, every bean has a heritage and every patron has a story. Join our community of flavor explorers.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#submit" className="px-10 py-5 bg-accent text-coffee-950 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
              Share Your Story
            </a>
            <a href="#community" className="px-10 py-5 border-2 border-white text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-coffee-950 transition-all">
              See the Wall
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
