
import React from 'react';
import { CommunityItem } from '../types';

interface Props {
  items: CommunityItem[];
}

const CommunityWall: React.FC<Props> = ({ items }) => {
  return (
    <section id="community" className="py-24 bg-coffee-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Stories from the Table</h2>
            <p className="text-coffee-800 text-lg font-serif italic">
              A curated collection of moments, thoughts, and innovations shared by our patrons.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-coffee-200 text-coffee-900 rounded-full text-xs font-bold uppercase tracking-wider">
              {items.length} Contributions
            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {items.map((item) => (
            <div key={item.id} className="break-inside-avoid bg-white p-8 border border-coffee-200 hover:border-accent transition-all duration-500 shadow-sm hover:shadow-xl group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-bold text-coffee-950">{item.author}</h4>
                  <span className="text-[10px] text-coffee-400 uppercase tracking-widest">
                    {item.timestamp.toLocaleDateString()} • {item.type}
                  </span>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  item.type === 'story' ? 'bg-accent' : 
                  item.type === 'photo' ? 'bg-blue-300' : 'bg-green-300'
                }`}></div>
              </div>
              
              {item.imageUrl && (
                <div className="mb-6 overflow-hidden rounded-sm">
                  <img 
                    src={item.imageUrl} 
                    alt="Community upload" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              )}
              
              <p className="font-serif text-lg leading-relaxed text-coffee-800 italic">
                "{item.content}"
              </p>
              
              <div className="mt-8 pt-6 border-t border-coffee-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-coffee-950 transition-colors">Appreciate</button>
                <button className="text-[10px] font-bold uppercase tracking-widest text-coffee-400">Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityWall;
