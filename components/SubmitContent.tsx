
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';
import { CommunityItem } from '../types';

interface Props {
  onNewItem: (item: CommunityItem) => void;
}

const SubmitContent: React.FC<Props> = ({ onNewItem }) => {
  const [author, setAuthor] = useState('');
  const [type, setType] = useState<'story' | 'photo' | 'idea'>('story');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;

    setIsSubmitting(true);
    setFeedback("Our curators are reviewing your blend...");

    const curationResult = await gemini.curateContent(author, type, text);

    if (curationResult.approved) {
      const newItem: CommunityItem = {
        id: Math.random().toString(36).substr(2, 9),
        author,
        type,
        content: curationResult.curatedText || text,
        timestamp: new Date(),
        // Mock image for photo type if text includes a hint, or just generic
        imageUrl: type === 'photo' ? 'https://images.unsplash.com/photo-1497933321188-ee2506ef231d?auto=format&fit=crop&q=80&w=800' : undefined
      };

      setTimeout(() => {
        onNewItem(newItem);
        setFeedback(curationResult.feedback || "Your contribution has been pinned to the wall!");
        setIsSubmitting(false);
        // Reset form
        setAuthor('');
        setText('');
        setTimeout(() => setFeedback(null), 5000);
      }, 1500);
    } else {
      setFeedback(curationResult.feedback || "Submission did not align with our community guidelines.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="submit" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-coffee-950 p-10 md:p-16 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Share Your Brew</h2>
              <p className="text-coffee-300 font-serif italic text-lg">
                Contribution fuels our collective. Leave a story, an idea, or a glimpse of your day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-accent mb-3">Your Name</label>
                  <input 
                    type="text" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Julian S."
                    className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-4 text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-accent mb-3">Type of Roast</label>
                  <select 
                    value={type}
                    onChange={(e) => setType(e.target.value as any)}
                    className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-4 text-white focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="story" className="bg-coffee-950">A Table Story</option>
                    <option value="photo" className="bg-coffee-950">Visual Coffee</option>
                    <option value="idea" className="bg-coffee-950">Roaster's Idea</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-accent mb-3">
                  {type === 'story' ? 'The Narrative' : type === 'idea' ? 'The Concept' : 'The Caption'}
                </label>
                <textarea 
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={type === 'story' ? "What happened today at Origin & Roast?" : "Describe your vision..."}
                  className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-4 text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/20 resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                <p className="text-coffee-400 text-xs font-serif italic">
                  * All submissions are curated by our team for community harmony.
                </p>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-5 bg-accent text-coffee-950 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Curating...' : 'Submit to Wall'}
                </button>
              </div>
            </form>

            {feedback && (
              <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                <p className="text-accent font-serif italic text-center text-lg">{feedback}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitContent;
