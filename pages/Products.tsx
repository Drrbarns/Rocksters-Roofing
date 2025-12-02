import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Reveal } from '../components/Reveal';

const CATEGORIES = ["All", "Roofing Sheets", "Trusses", "Ceiling Joists", "Plasterboards", "Accessories"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 py-16 text-center text-white">
        <Reveal direction="down">
          <h1 className="text-4xl font-display font-bold">Our Products</h1>
        </Reveal>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Filter Tabs */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all transform active:scale-95 ${
                  activeCategory === cat 
                  ? 'bg-rockster-accent text-white shadow-lg scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 100}>
              <div className="bg-white rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-rockster-blue uppercase tracking-wide shadow-md">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{product.description}</p>
                  <button className="w-full py-3 border-2 border-slate-900 text-slate-900 font-bold text-sm rounded hover:bg-slate-900 hover:text-white transition-colors duration-300 uppercase tracking-widest">
                    View Details
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;