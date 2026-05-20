import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CheckSquare } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-brand-sand/90 backdrop-blur-md shadow-sm border-b border-brand-brown/10 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex flex-col"
        >
          <span className={`text-xl md:text-2xl font-bold tracking-widest uppercase transition-colors duration-300 ${
            isScrolled ? 'text-brand-black' : 'text-white'
          }`}>
            VR HOLIDAY HOMES
          </span>
          <span className="text-[9px] tracking-[0.25em] font-sans font-semibold uppercase text-brand-brown">
            Est. 2002 • Legacy of Trust
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-sans font-medium text-xs tracking-widest uppercase">
          {['villas', 'experiences', 'why-us', 'testimonials', 'faqs'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`transition-colors duration-300 cursor-pointer hover:text-brand-brown ${
                isScrolled ? 'text-brand-black' : 'text-white'
              }`}
            >
              {item.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Nav CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="tel:+919876543210" 
            className={`flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-brand-black hover:text-brand-blue' : 'text-white hover:text-brand-brown'
            }`}
          >
            <Phone className="w-4 h-4 text-brand-brown" />
            <span>Call Host</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="bg-brand-blue hover:bg-brand-blue/95 text-white font-sans text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-300 shadow-md flex items-center space-x-2 cursor-pointer hover:scale-105"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Book Stay</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 cursor-pointer ${
            isScrolled ? 'text-brand-black' : 'text-white'
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-sand border-b border-brand-brown/15 shadow-lg absolute top-full left-0 w-full px-6 py-8 flex flex-col space-y-6 font-sans text-xs tracking-widest uppercase font-bold">
          {['villas', 'experiences', 'why-us', 'testimonials', 'faqs'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-left text-brand-black hover:text-brand-brown transition-colors cursor-pointer"
            >
              {item.replace('-', ' ')}
            </button>
          ))}
          <hr className="border-brand-brown/10" />
          <div className="flex flex-col space-y-4 pt-2">
            <a 
              href="tel:+919876543210" 
              className="flex items-center space-x-3 text-brand-black hover:text-brand-blue transition-colors font-sans text-sm"
            >
              <Phone className="w-5 h-5 text-brand-brown" />
              <span>Call +91 98765 43210</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="bg-brand-blue text-white w-full py-3.5 rounded-sm tracking-widest uppercase text-xs font-bold text-center shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <CheckSquare className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
