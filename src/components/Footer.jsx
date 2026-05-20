import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 px-6 border-t border-brand-brown/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-brand-brown/10">
        
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest uppercase text-white">
              VR HOLIDAY HOMES
            </span>
            <span className="text-[9px] tracking-[0.25em] font-sans font-semibold uppercase text-brand-brown mt-1">
              Est. 2002 • Legacy of Trust
            </span>
          </div>
          <p className="text-brand-sand/60 font-sans text-xs leading-relaxed font-light">
            Luxury private home and villa rentals in Candolim, Goa. Providing premium stays, unpretentious tropical comfort, and exceptional service for 24 years.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-xs font-sans tracking-[0.25em] font-bold text-brand-brown uppercase">
            Quick Navigation
          </h4>
          <div className="flex flex-col space-y-3 font-sans text-xs font-semibold tracking-wider text-brand-sand/75">
            {['villas', 'experiences', 'why-us', 'testimonials', 'faqs'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left hover:text-brand-brown transition-colors cursor-pointer"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Curated Sights */}
        <div className="space-y-6">
          <h4 className="text-xs font-sans tracking-[0.25em] font-bold text-brand-brown uppercase">
            Nearby Attractions
          </h4>
          <ul className="space-y-3 font-sans text-xs font-light text-brand-sand/75">
            <li className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-brand-brown" />
              <span>Candolim Beach (Walkable)</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-brand-brown" />
              <span>Historic Aguada Fort (10 mins)</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-brand-brown" />
              <span>Fine Dining Strip (Walkable)</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-xs font-sans tracking-[0.25em] font-bold text-brand-brown uppercase">
            Direct Office
          </h4>
          <ul className="space-y-4 font-sans text-xs font-light text-brand-sand/75">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-brand-brown mt-0.5" />
              <span>VR Holiday Homes, Near Candolim Beach, Candolim, North Goa 403515</span>
            </li>
            <li>
              <a href="tel:+919876543210" className="flex items-center space-x-3 hover:text-brand-brown transition-colors">
                <Phone className="w-4 h-4 text-brand-brown" />
                <span>+91 98765 43210</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@vrholidayhomes.com" className="flex items-center space-x-3 hover:text-brand-brown transition-colors">
                <Mail className="w-4 h-4 text-brand-brown" />
                <span>info@vrholidayhomes.com</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans text-brand-sand/45 tracking-wider uppercase font-semibold">
        <p>© {new Date().getFullYear()} VR Holiday Homes Goa. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Designed by Pomelli Studio <ExternalLink className="w-3 h-3 text-brand-brown" />
        </p>
      </div>
    </footer>
  );
}
