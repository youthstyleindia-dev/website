import React from 'react';
import { experiences } from '../data/experiences';

export default function ExperienceSection() {
  return (
    <section id="experiences" className="bg-brand-sand py-24 px-6 border-t border-b border-brand-brown/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-4">
          Lifestyle Experience
        </span>
        <h2 className="text-brand-black text-3xl md:text-5xl font-medium tracking-wide mb-6">
          Live the Modern Goa Dream
        </h2>
        <div className="h-0.5 w-20 bg-brand-brown mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={exp.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 h-[450px] rounded-sm overflow-hidden bg-brand-black border border-brand-brown/15 shadow-md relative group">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold">
                  {exp.tagline}
                </span>
                <h3 className="text-brand-black text-2xl md:text-4xl font-medium tracking-wide">
                  {exp.title}
                </h3>
                <div className="h-[1px] w-12 bg-brand-brown" />
                <p className="text-brand-black/75 font-sans text-sm md:text-base leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
