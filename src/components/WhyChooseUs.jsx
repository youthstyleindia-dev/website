import React from 'react';
import { Shield, MapPin, Sparkles, Zap, Headphones, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: '24 Years Trusted Legacy',
      desc: 'Over two decades of verified bookings, legal compliance, and transparent contracts. Your sanctuary is secure.'
    },
    {
      icon: MapPin,
      title: 'Prime Candolim Locations',
      desc: 'All our properties are walking distance to Candolim Beach, fine dining, or set in peaceful, exclusive hill enclaves.'
    },
    {
      icon: Sparkles,
      title: 'Bespoke Clean Luxury',
      desc: 'Rigorous hospitality-grade sanitation, professional linens, premium toiletries, and curated Goan aesthetics.'
    },
    {
      icon: Zap,
      title: 'No Middlemen Booking',
      desc: 'Book directly through our website to secure best rates without platform commissions, fees, or hidden surcharges.'
    },
    {
      icon: Headphones,
      title: 'Round-the-clock Concierge',
      desc: 'From rental cars and private chefs to flight bookings and doctor-on-call. Our hosts are physically present in Goa.'
    },
    {
      icon: HeartHandshake,
      title: 'Connectivity & Speed',
      desc: 'Equipped with multiple ISP fiber backbones and full-estate power backups ensuring non-stop digital workations.'
    }
  ];

  return (
    <section id="why-us" className="bg-brand-black py-24 px-6 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-4">
          The VR Experience
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-6">
          Why Discerning Travelers Choose Us
        </h2>
        <div className="h-0.5 w-20 bg-brand-brown mx-auto mb-6" />
        <p className="text-brand-sand/70 font-sans text-base max-w-2xl mx-auto font-light leading-relaxed">
          Combining the absolute privacy of private homes with the legacy, security, and prompt support of premium boutique hospitality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const IconComp = feature.icon;
          return (
            <div 
              key={idx}
              className="glass-dark p-8 rounded-sm hover:border-brand-brown/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-brand-brown mb-6 transition-transform duration-300 group-hover:scale-110">
                <IconComp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-3 text-brand-sand">
                {feature.title}
              </h3>
              <p className="text-brand-sand/65 font-sans text-sm leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
