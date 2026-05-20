import React from 'react';
import { ShieldCheck, Award, Heart } from 'lucide-react';

export default function TrustSection() {
  const stats = [
    { id: 'years', icon: Award, value: '24+', label: 'Years of Excellence' },
    { id: 'guests', icon: Heart, value: '15,000+', label: 'Happy Guests Served' },
    { id: 'villas', icon: ShieldCheck, value: '50+', label: 'Curated Properties' }
  ];

  return (
    <section id="trust" className="bg-brand-sand border-b border-brand-brown/10 py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Storytelling Side */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold">
            Our Legacy Since 2002
          </span>
          <h2 className="text-brand-black text-3xl md:text-5xl font-medium tracking-wide leading-tight">
            A Generation of Trusted Hospitality in Goa
          </h2>
          <div className="h-0.5 w-20 bg-brand-brown" />
          <p className="text-brand-black/75 font-sans text-base md:text-lg leading-relaxed font-light">
            For over two decades, VR Holiday Homes has redefined boutique vacation living in North Goa. What started as a single cozy home has expanded into an exclusive portfolio of beachfront apartments, heritage estates, and luxury private villas in Candolim.
          </p>
          <p className="text-brand-black/70 font-sans text-sm md:text-base leading-relaxed font-light">
            Our hospitality is rooted in "Connectivity, Availability, and Accessibility" — ensuring every guest has round-the-clock local support, high-speed amenities for modern lifestyle, and direct access to Goan sun-soaked shores.
          </p>
        </div>

        {/* Stats Grid Side */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {stats.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="bg-white p-8 rounded-sm shadow-sm border border-brand-brown/10 flex items-center space-x-6 hover:shadow-md transition-all duration-300 hover:border-brand-brown/35 group"
              >
                <div className="p-4 bg-brand-sand rounded-sm text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-inner">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-brand-black text-3xl font-bold font-sans tracking-tight mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-brand-black/60 font-sans text-xs tracking-wider uppercase font-semibold">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
