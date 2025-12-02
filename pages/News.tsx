import React from 'react';
import { NEWS } from '../constants';
import { Calendar } from 'lucide-react';

const News = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 py-16 text-center text-white">
        <h1 className="text-4xl font-display font-bold">Latest News</h1>
        <p className="text-slate-400 mt-2">Updates from Rocksters and the Industry</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS.map(item => (
            <article key={item.id} className="flex flex-col h-full bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                  <span className="text-rockster-accent font-bold px-2 py-0.5 bg-sky-50 rounded ml-auto">{item.category}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{item.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="mt-auto text-rockster-accent font-bold text-sm uppercase tracking-wider hover:text-rockster-blue transition-colors text-left">
                  Read Full Story
                </button>
              </div>
            </article>
          ))}
          
          {/* Mock extra articles for layout demo */}
          {[1, 2, 3].map(i => (
             <article key={`mock-${i}`} className="flex flex-col h-full bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow opacity-60">
              <div className="h-56 bg-slate-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 bg-slate-200 w-1/3 mb-4 rounded"></div>
                <div className="h-6 bg-slate-200 w-full mb-2 rounded"></div>
                <div className="h-6 bg-slate-200 w-2/3 mb-4 rounded"></div>
                <div className="h-16 bg-slate-200 w-full rounded"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;