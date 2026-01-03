
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommunityWall from './components/CommunityWall';
import SubmitContent from './components/SubmitContent';
import Features from './components/Features';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';
import { INITIAL_COMMUNITY } from './constants';
import { CommunityItem } from './types';

const App: React.FC = () => {
  const [communityItems, setCommunityItems] = useState<CommunityItem[]>(INITIAL_COMMUNITY);

  const handleNewItem = (item: CommunityItem) => {
    setCommunityItems(prev => [item, ...prev]);
    // Scroll to the community section to see the new item
    const element = document.getElementById('community');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-coffee-950">
      <Navbar />

      <main>
        <Hero />
        
        {/* Story Section */}
        <section id="story" className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-accent/20 rounded-sm -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000" 
              alt="Pouring coffee" 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-coffee-200 hidden md:flex items-center justify-center p-6 z-20 shadow-xl">
              <p className="font-serif text-coffee-800 text-sm leading-relaxed text-center">
                "Our beans are sourced from family-run farms in the high-altitude regions of Ethiopia and Brazil."
              </p>
            </div>
          </div>
          <div>
            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">Est. 2012</span>
            <h2 className="font-serif text-5xl font-bold mb-8 leading-tight">Crafting the <span className="italic">Perfect Pour</span> through Generations.</h2>
            <div className="space-y-6 text-coffee-800 text-lg font-serif leading-relaxed">
              <p>
                At Origin & Roast, we believe coffee is more than a caffeine kick—it's a medium for conversation. Our journey began in a small garage with a vintage Probat roaster and a dream to bring uncompromised quality to our neighborhood.
              </p>
              <p>
                Today, we stand as a collective of baristas, roasters, and dreamers. We don't just serve drinks; we host a community where ideas are brewed and stories are shared daily.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-coffee-200 pt-8">
              <div>
                <p className="text-3xl font-bold font-serif text-coffee-950">12k+</p>
                <p className="text-[10px] uppercase font-bold text-coffee-400 tracking-widest">Patrons</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-serif text-coffee-950">15</p>
                <p className="text-[10px] uppercase font-bold text-coffee-400 tracking-widest">Origins</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-serif text-coffee-950">04</p>
                <p className="text-[10px] uppercase font-bold text-coffee-400 tracking-widest">Cities</p>
              </div>
            </div>
          </div>
        </section>

        <Features />

        <AiAssistant />

        <CommunityWall items={communityItems} />
        
        <SubmitContent onNewItem={handleNewItem} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
