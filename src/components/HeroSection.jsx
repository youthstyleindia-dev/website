import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  const handleScrollDown = () => {
    const villas = document.getElementById('villas');
    if (villas) villas.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Visual: Luxury Villa Video / Ambient Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" 
          alt="Goa Beachside Luxury Villa Background" 
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Elegant Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col items-center">
        <span className="text-brand-brown text-xs md:text-sm font-sans tracking-[0.4em] uppercase font-bold mb-4 animate-[fadeIn_1.2s_ease-out]">
          North Goa's Premier Luxury Stays
        </span>
        <h1 className="text-white text-4xl md:text-7xl font-semibold tracking-wide leading-tight mb-6 animate-[fadeIn_1.8s_ease-out]">
          Experience Luxury Living in Goa
        </h1>
        <p className="text-brand-sand/85 text-base md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
          24 years of trusted hospitality, premium stay experiences, and unforgettable beachfront memories.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
          <button
            onClick={onOpenBooking}
            className="bg-brand-blue hover:bg-brand-blue/95 border-b-2 border-brand-blue/60 text-white font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-xl w-60 sm:w-auto hover:scale-105 cursor-pointer"
          >
            Book Your Stay
          </button>
          <button
            onClick={handleScrollDown}
            className="border border-white/30 hover:border-brand-brown hover:text-brand-brown text-white font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm bg-white/5 backdrop-blur-sm transition-all duration-300 w-60 sm:w-auto hover:scale-105 cursor-pointer"
          >
            Explore Villas
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer text-white/50 hover:text-brand-brown transition-colors duration-300"
      >
        <span className="text-[9px] tracking-[0.3em] font-sans uppercase font-bold mb-2">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </header>
  );
}
