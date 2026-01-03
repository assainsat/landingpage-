
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-coffee-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-coffee-950">The <span className="text-accent italic">Art</span> of the Brew</h2>
          <p className="text-coffee-800 text-lg font-serif">
            We focus on the intersection of heritage techniques and modern precision. Every detail in our process is designed to honor the bean.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 border border-coffee-200 hover:border-accent transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-coffee-950 group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-coffee-700 font-serif leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
