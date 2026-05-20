import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      name: 'Aishwarya Sen',
      role: 'Delhi • Family Stay',
      rating: 5,
      review: 'We spent a week at the Heritage Estate. The property is spectacular, retaining traditional charm while packing super-fast internet and standard luxury service. The staff took incredible care of our grandparents. Will definitely return next season!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80'
    },
    {
      name: 'Rohan Mehta',
      role: 'Mumbai • Villa Guest',
      rating: 5,
      review: 'Villa Azul blew us away. Clean, quiet, private, and literally a five-minute stroll from Candolim beach. Booking direct saved us almost ₹15,000 in agency fees compared to Airbnb. VR team was available at 2 AM when we needed local support.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80'
    },
    {
      name: 'Samantha Wright',
      role: 'London • Digital Nomad',
      rating: 5,
      review: 'As an executive working remotely, stable power and fast Wi-Fi are crucial. Vista Verde was a haven. The dual ISP connection was flawless. Waking up to green hills and heading down to beach cafes was the dream workation.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80'
    }
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const cur = reviews[activeIdx];

  return (
    <section id="testimonials" className="bg-brand-black text-white py-24 px-6 border-b border-brand-brown/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold mb-4">
          Guest Chronicles
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-wide text-center mb-16">
          Stories of Unparalleled Comfort
        </h2>

        {/* Testimonial Panel */}
        <div className="glass-dark w-full p-8 md:p-12 rounded-sm relative flex flex-col items-center text-center space-y-6">
          
          <Quote className="w-8 h-8 text-brand-brown opacity-60 mb-2" />

          <p className="text-brand-sand/90 font-sans text-base md:text-lg leading-relaxed font-light italic max-w-2xl">
            "{cur.review}"
          </p>

          <div className="flex items-center space-x-1">
            {[...Array(cur.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-brand-brown text-brand-brown" />
            ))}
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-4 pt-4">
            <img 
              src={cur.image} 
              alt={cur.name} 
              className="w-12 h-12 rounded-full object-cover border border-brand-brown/25"
            />
            <div className="text-left">
              <h4 className="font-sans font-bold text-sm tracking-wide text-white">{cur.name}</h4>
              <p className="font-sans text-xs text-brand-sand/55 font-semibold tracking-wider uppercase">{cur.role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-6 pt-6">
            <button 
              onClick={handlePrev}
              className="p-2 border border-brand-brown/25 hover:border-brand-brown rounded-full text-brand-brown hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-sans text-brand-sand/40 font-bold">
              {activeIdx + 1} / {reviews.length}
            </span>
            <button 
              onClick={handleNext}
              className="p-2 border border-brand-brown/25 hover:border-brand-brown rounded-full text-brand-brown hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
