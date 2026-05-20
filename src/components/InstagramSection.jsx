import React from 'react';
import { Instagram, Eye } from 'lucide-react';

export default function InstagramSection() {
  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', caption: 'Chasing sunsets on Candolim Beach...' },
    { id: 2, image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80', caption: 'Private pool mornings at Villa Azul.' },
    { id: 3, image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=400&q=80', caption: 'Slow café breakfasts.' },
    { id: 4, image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80', caption: 'Architectural details.' }
  ];

  return (
    <section className="bg-brand-black py-24 px-6 border-b border-brand-brown/10 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-4">
          Follow Our Journey
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-6">
          Moments from Candolim
        </h2>
        <div className="h-0.5 w-20 bg-brand-brown mx-auto mb-6" />
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center space-x-2 text-brand-brown hover:text-white font-sans text-xs tracking-widest uppercase font-bold transition-colors"
        >
          <Instagram className="w-4 h-4" />
          <span>@vrholidayhomes</span>
        </a>
      </div>

      {/* Grid List */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <a 
            key={post.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden rounded-sm group bg-brand-black border border-brand-brown/15 cursor-pointer block"
          >
            <img 
              src={post.image} 
              alt={post.caption} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-brand-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
              <Eye className="w-5 h-5 text-brand-brown mb-2" />
              <p className="text-white font-sans text-[11px] font-light leading-relaxed truncate">
                {post.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
