import React, { useState } from 'react';
import { properties } from '../data/properties';
import { Users, Bed, ChevronRight } from 'lucide-react';

export default function PropertyShowcase({ onSelectProperty }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stays' },
    { id: 'villa', label: 'Private Villas' },
    { id: 'beachside', label: 'Beachside Stays' },
    { id: 'family', label: 'Family Stays' },
    { id: 'suite', label: 'Luxury Suites' },
    { id: 'workation', label: 'Workations' }
  ];

  const filteredProperties = activeFilter === 'all'
    ? properties
    : properties.filter(prop => prop.type === activeFilter);

  return (
    <section id="villas" className="bg-brand-sand py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-4">
          Curated Stays
        </span>
        <h2 className="text-brand-black text-3xl md:text-5xl font-medium tracking-wide mb-6">
          Find Your Perfect Goa Escape
        </h2>
        <div className="h-0.5 w-20 bg-brand-brown mx-auto mb-8" />
        
        {/* Filters Bar */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto font-sans text-xs tracking-widest uppercase font-bold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-brand-blue text-white border-brand-blue shadow-md scale-105'
                  : 'bg-white text-brand-black border-brand-brown/15 hover:border-brand-brown hover:bg-brand-sand'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((prop) => (
          <div 
            key={prop.id}
            className="bg-white rounded-sm overflow-hidden border border-brand-brown/15 hover:shadow-xl transition-all duration-500 flex flex-col group"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden bg-brand-black">
              <img 
                src={prop.image} 
                alt={prop.name} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute top-4 left-4 bg-brand-black/75 backdrop-blur-md px-3 py-1 text-white font-sans text-[10px] tracking-widest uppercase font-bold border border-brand-brown/30 rounded-sm">
                {prop.type.replace('-', ' ')}
              </div>
              <div className="absolute bottom-4 right-4 bg-brand-sand px-3 py-1.5 text-brand-black font-sans text-xs tracking-wider font-bold rounded-sm border border-brand-brown/15">
                ₹{prop.pricePerNight.toLocaleString('en-IN')} <span className="text-[10px] font-normal text-brand-black/60">/ night</span>
              </div>
            </div>

            {/* Text Section */}
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-sans tracking-[0.25em] font-semibold text-brand-brown uppercase mb-2">
                {prop.location}
              </span>
              <h3 className="text-xl font-medium tracking-wide mb-3 text-brand-black transition-colors duration-300 group-hover:text-brand-blue">
                {prop.name}
              </h3>
              <p className="text-brand-black/65 font-sans text-xs md:text-sm leading-relaxed mb-6 font-light flex-grow">
                {prop.tagline}
              </p>

              {/* Specs */}
              <div className="flex items-center space-x-6 border-t border-brand-brown/10 pt-4 mb-6 font-sans text-xs text-brand-black/70 font-semibold">
                <div className="flex items-center space-x-2">
                  <Bed className="w-4 h-4 text-brand-brown" />
                  <span>{prop.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-brand-brown" />
                  <span>Up to {prop.guests} Guests</span>
                </div>
              </div>

              <button
                onClick={() => onSelectProperty(prop)}
                className="w-full bg-brand-sand border border-brand-brown/30 hover:bg-brand-blue hover:text-white hover:border-brand-blue text-brand-black font-sans text-xs font-bold tracking-widest uppercase py-3.5 transition-all duration-300 flex items-center justify-center space-x-2 rounded-sm cursor-pointer"
              >
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
