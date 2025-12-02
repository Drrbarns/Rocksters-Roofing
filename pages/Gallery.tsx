import React from 'react';
import { Reveal } from '../components/Reveal';

// Generating random gallery images for the layout
const GALLERY_IMAGES = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  src: `https://picsum.photos/seed/rocksters${i}/800/800`,
  size: i % 4 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
}));

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-slate-900 py-16 text-center text-white">
        <Reveal direction="down">
            <h1 className="text-4xl font-display font-bold">Gallery</h1>
            <p className="text-slate-400 mt-2">Visualizing our craftsmanship</p>
        </Reveal>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={img.id} className={`${img.size}`}>
                <Reveal delay={index * 50} className="w-full h-full">
                    <div className="relative overflow-hidden rounded-lg group w-full h-full">
                        <img 
                            src={img.src} 
                            alt="Gallery" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white font-bold border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">View</span>
                        </div>
                    </div>
                </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;