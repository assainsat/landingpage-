
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setLoading(true);
    // This call now works after adding the method to GeminiService
    const content = await gemini.generateMarketingCopy(topic);
    setResult(content);
    setLoading(false);
  };

  return (
    <section id="intelligence" className="py-24 relative overflow-hidden bg-coffee-100/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-coffee-200 relative shadow-2xl">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full blur-[60px] opacity-20"></div>
          
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold mb-2 text-coffee-950">Origin & Roast Assistant</h2>
            <p className="text-coffee-600 font-serif">Generate artisanal copy for your coffee stories or community submissions.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Ethiopia Sidamo, Morning Sun, Espresso Craft"
              className="flex-1 bg-coffee-50 border border-coffee-200 rounded-2xl px-6 py-4 text-coffee-950 focus:outline-none focus:border-accent transition-colors"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="bg-accent hover:bg-coffee-950 hover:text-white text-coffee-950 px-8 py-4 rounded-2xl font-bold transition-all disabled:opacity-50"
            >
              {loading ? 'Thinking...' : 'Inspire Me'}
            </button>
          </div>

          {result && (
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-coffee-900 italic leading-relaxed text-lg font-serif">
                "{result}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
