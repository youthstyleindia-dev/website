# VR Holiday Homes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a premium, cinematic, ultra-modern Goa-based luxury rental hospitality website using Vite, React, and Tailwind CSS V4.

**Architecture:** A Single-Page Application (SPA) where visitors can browse properties, filter by category, view rich details via a slide-over panel, check experiences, interact with an AI Virtual Concierge, and submit booking inquiries that redirect to WhatsApp.

**Tech Stack:** React 19, Tailwind CSS V4, Lucide React (icons).

---

### Task 1: Scaffolding and Tailwind CSS V4 Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/index.css`

- [ ] **Step 1: Check create-vite help options to see templates and flags**
  Run: `npx -y create-vite@latest --help`
  Expected: List of options for `create-vite` CLI template flags.

- [ ] **Step 2: Scaffold Vite React App in current directory**
  Run: `npx -y create-vite@latest ./ --template react`
  Expected: Scaffolds basic react template files in the directory.

- [ ] **Step 3: Install tailwindcss v4 and lucide-react**
  Run: `npm install tailwindcss @tailwindcss/vite lucide-react`
  Expected: Installs dependencies successfully.

- [ ] **Step 4: Update vite.config.js to include tailwindcss plugin**
  Configure `vite.config.js` with the `@tailwindcss/vite` plugin:
  ```javascript
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [react(), tailwindcss()],
  })
  ```

- [ ] **Step 5: Configure src/index.css for Tailwind V4 & Brand Fonts**
  Import Tailwind, import Google Fonts (Playfair Display and Open Sans), and configure custom CSS custom variables:
  ```css
  @import "tailwindcss";

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

  @theme {
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Open Sans', sans-serif;
    
    --color-brand-blue: #1C3C80;
    --color-brand-black: #2B1B17;
    --color-brand-brown: #C19A6B;
    --color-brand-sand: #F9F6F0;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-brand-sand);
    color: var(--color-brand-black);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }

  /* Custom utility for glassmorphism */
  .glass-dark {
    background: rgba(43, 27, 23, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(193, 154, 107, 0.15);
  }

  .glass-light {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(193, 154, 107, 0.15);
  }
  ```

- [ ] **Step 6: Update index.html for Premium SEO and Font Classes**
  ```html
  <!doctype html>
  <html lang="en" class="scroll-smooth">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>VR Holiday Homes | Premium Stays & Luxury Villas in Candolim, Goa</title>
      <meta name="description" content="24 years of trusted hospitality and premium stay experiences in North Goa. Explore our collection of luxury villas, family suites, and beachfront homes in Candolim." />
      <meta name="keywords" content="luxury villas in goa, best stay in goa, private villa goa, candolim luxury rentals, vr holiday homes" />
    </head>
    <body class="antialiased">
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
  </html>
  ```

- [ ] **Step 7: Run dev server to verify build config**
  Run: `npm run dev` or launch compilation check. Verify the scaffolding is correct.

---

### Task 2: Core Data Structure Setup

**Files:**
- Create: `src/data/properties.js`
- Create: `src/data/experiences.js`

- [ ] **Step 1: Write property showcase mock data**
  Write `src/data/properties.js` with comprehensive list of Candolim properties (Villas, Suites, Beachside, Workations) including descriptive descriptions, amenity lists, starting rates, high-quality free stock imagery URLs, and bedroom specifications:
  ```javascript
  export const properties = [
    {
      id: 'villa-azul',
      name: 'Villa Azul - Luxury Pool Retreat',
      type: 'villa',
      location: 'Candolim, North Goa',
      pricePerNight: 28000,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
      ],
      bedrooms: 4,
      guests: 10,
      amenities: ['Private Pool', 'Personal Chef', 'Wi-Fi', '24/7 Security', 'Lush Garden', 'Housekeeping'],
      tagline: 'An elegant tropical villa with private pool, minutes from Candolim Beach.',
      description: 'Nestled in a private enclave in Candolim, Villa Azul offers a sanctuary of refined elegance. With four master suites, a pristine private pool, and dedicated staff, it provides a luxury Goan holiday that blends modern comforts with tropical serenity. Sip your morning tea in the sprawling landscaped gardens or enjoy high-tea by the poolside.'
    },
    {
      id: 'sunset-cove',
      name: 'Sunset Cove - Beachfront Suite',
      type: 'beachside',
      location: 'Candolim Beach, Goa',
      pricePerNight: 16500,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
      ],
      bedrooms: 2,
      guests: 4,
      amenities: ['Sea View', 'Direct Beach Access', 'High-speed Wi-Fi', 'Fully Furnished Kitchen', 'Balcony'],
      tagline: 'Wake up to the sounds of waves crashing in this premium ocean-front suite.',
      description: 'Sunset Cove is a direct beachfront property located right on the sands of Candolim. This suite features large sliding glass doors opening onto an expansive private balcony overlooking the Arabian Sea. Perfect for couples or small families seeking coastal charm, comfort, and direct access to sunset strolls.'
    },
    {
      id: 'palm-groves',
      name: 'Palm Groves - Family Heritage Estate',
      type: 'family',
      location: 'Candolim Centro, Goa',
      pricePerNight: 22000,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
      ],
      bedrooms: 3,
      guests: 8,
      amenities: ['Kids Pool Area', 'Indoor Games Room', 'Full Kitchen', 'Pet-Friendly', 'Barbecue Station', '100% Power Backup'],
      tagline: 'A Portuguese-inspired family home with modern luxury and cozy privacy.',
      description: 'Steeped in rich Indo-Portuguese charm, Palm Groves is a beautifully restored heritage home configured for multi-generational families. Features large verandahs, a private swimming pool with a shallow kids area, and a lush lawn. Perfect for families looking to create lifelong memories in Goa.'
    },
    {
      id: 'vista-verde',
      name: 'Vista Verde - Premium Workation Haven',
      type: 'workation',
      location: 'Candolim Hills, Goa',
      pricePerNight: 12000,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
      ],
      bedrooms: 1,
      guests: 2,
      amenities: ['Dual-ISP Fibrenet Wi-Fi', 'Ergonomic Desk & Chair', 'Power Backup', 'Coffee Bar', 'Weekly Deep Clean'],
      tagline: 'Quiet, green, high-speed connectivity for digital nomads and executives.',
      description: 'Vista Verde combines productivity with relaxation. Surrounded by greenery on Candolim Hill, it features dual high-speed fiber internet lines, a fully ergonomic desk setup, and a serene balcony overlooking the valley. Stay productive by day and enjoy Candolim nightlife by evening.'
    },
    {
      id: 'casa-de-luxe',
      name: 'Casa De Luxe - Royal Suite',
      type: 'suite',
      location: 'Candolim, North Goa',
      pricePerNight: 35000,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
      ],
      bedrooms: 5,
      guests: 12,
      amenities: ['Infinity Pool', 'Private Bar', 'Jacuzzi', 'Home Theater', 'Valet Parking', 'Concierge Service'],
      tagline: 'An ultra-luxury 5-bedroom villa with panoramic vistas and premium services.',
      description: 'Casa De Luxe defines modern Goan high-living. With a spectacular private infinity pool overlooking the skyline, indoor jacuzzi, premium private cocktail bar, and full butler service, this royal villa is ideal for high-end celebrations and travelers demanding top-tier luxury.'
    }
  ];
  ```

- [ ] **Step 2: Write Goa experience mock data**
  Write `src/data/experiences.js` for showing the Goan boutique lifestyle:
  ```javascript
  export const experiences = [
    {
      id: 'sunsets',
      title: 'Golden Candolim Sunsets',
      tagline: 'BREATHLESS MOMENTS',
      description: 'End your day where the golden sky melts into the Arabian Sea. Candlelit beachfront settings, warm ocean breezes, and memories that last a lifetime.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'pools',
      title: 'Private Pool Stretches',
      tagline: 'TROPICAL INDULGENCE',
      description: 'Cool down in absolute privacy. Our villas house pristine, temperature-regulated private pools flanked by lush palms and sun-loungers.',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cafes',
      title: 'Local Café Culture',
      tagline: 'COASTAL UTILITY',
      description: 'Start your mornings with fresh artisanal croissants, locally roasted Goan coffee beans, and the slow, peaceful lifestyle of Candolim village.',
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80'
    }
  ];
  ```

---

### Task 3: Navbar and Hero Section Components

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/HeroSection.jsx`

- [ ] **Step 1: Write sticky transparent-to-solid Navbar component**
  ```jsx
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
            <span className={`text-2xl font-bold tracking-widest uppercase transition-colors duration-300 ${
              isScrolled ? 'text-brand-black' : 'text-white'
            }`}>
              VR HOLIDAY HOMES
            </span>
            <span className={`text-[10px] tracking-[0.25em] font-sans font-semibold uppercase ${
              isScrolled ? 'text-brand-brown' : 'text-brand-brown'
            }`}>
              Est. 2002 • Legacy of Trust
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-sans font-medium text-sm tracking-widest uppercase">
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
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+919876543210" 
              className={`flex items-center space-x-2 text-sm font-sans font-semibold tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-brand-black hover:text-brand-blue' : 'text-white hover:text-brand-brown'
              }`}
            >
              <Phone className="w-4 h-4 text-brand-brown" />
              <span>Call Host</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-brand-blue hover:bg-brand-blue/95 text-white font-sans text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-300 shadow-md flex items-center space-x-2 hover:scale-105"
            >
              <CheckSquare className="w-4 h-4" />
              <span>Book Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-brand-black' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-sand border-b border-brand-brown/15 shadow-lg absolute top-full left-0 w-full px-6 py-8 flex flex-col space-y-6 font-sans text-sm tracking-widest uppercase font-semibold">
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
                className="flex items-center space-x-3 text-brand-black hover:text-brand-blue transition-colors font-sans"
              >
                <Phone className="w-5 h-5 text-brand-brown" />
                <span>Call +91 98765 43210</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="bg-brand-blue text-white w-full py-3.5 rounded-sm tracking-widest uppercase text-xs font-semibold text-center shadow-md flex items-center justify-center space-x-2"
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
  ```

- [ ] **Step 2: Write cinematic full-screen HeroSection with background image/video and gradients**
  ```jsx
  import React from 'react';
  import { ArrowDown, MessageSquareCode } from 'lucide-react';

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
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_10s_infinite_alternate]"
          />
          {/* Elegant Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="text-brand-brown text-xs md:text-sm font-sans tracking-[0.4em] uppercase font-bold mb-4 animate-[fadeIn_1.5s_ease-out]">
            North Goa's Premier Luxury Stays
          </span>
          <h1 className="text-white text-4xl md:text-7xl font-semibold tracking-wide leading-tight mb-6 animate-[fadeIn_2s_ease-out]">
            Experience Luxury Living in Goa
          </h1>
          <p className="text-brand-sand/85 text-base md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
            24 years of trusted hospitality, bespoke villa stays, and unforgettable beachside memories in Candolim.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
            <button
              onClick={onOpenBooking}
              className="bg-brand-blue hover:bg-brand-blue/95 border-b-2 border-brand-blue/60 text-white font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-xl w-60 sm:w-auto hover:scale-105"
            >
              Book Your Stay
            </button>
            <button
              onClick={handleScrollDown}
              className="border border-white/30 hover:border-brand-brown hover:text-brand-brown text-white font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm bg-white/5 backdrop-blur-sm transition-all duration-300 w-60 sm:w-auto hover:scale-105"
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
  ```

---

### Task 4: Trust & Legacy and Why Choose Us Sections

**Files:**
- Create: `src/components/TrustSection.jsx`
- Create: `src/components/WhyChooseUs.jsx`

- [ ] **Step 1: Write TrustSection storytelling layout and counters**
  ```jsx
  import React from 'react';
  import { ShieldCheck, Award, Heart, AwardIcon } from 'lucide-react';

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
              For over two decades, VR Holiday Homes has redefined boutique vacation living in North Goa. What started as a single cozy home has expanded into an exclusive portfolio of beachside apartments, heritage family estates, and luxury private villas in Candolim.
            </p>
            <p className="text-brand-black/70 font-sans text-sm md:text-base leading-relaxed font-light">
              Our hospitality is rooted in "Connectivity, Availability, and Accessibility" — ensuring every guest has round-the-clock local support, high-speed amenities for modern life, and direct access to Goan sun-soaked shores.
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
  ```

- [ ] **Step 2: Write WhyChooseUs grid section**
  ```jsx
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
  ```

---

### Task 5: Property Showcase, Filtering, and Slide-over Details

**Files:**
- Create: `src/components/PropertyShowcase.jsx`
- Create: `src/components/PropertyDetailModal.jsx`

- [ ] **Step 1: Write dynamic PropertyShowcase filtering grid**
  ```jsx
  import React, { useState } from 'react';
  import { properties } from '../data/properties';
  import { Sparkles, Users, Bed, ChevronRight } from 'lucide-react';

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
                  className="w-full bg-brand-sand border border-brand-brown/30 hover:bg-brand-blue hover:text-white hover:border-brand-blue text-brand-black font-sans text-xs font-bold tracking-widest uppercase py-3.5 transition-all duration-300 flex items-center justify-center space-x-2 rounded-sm"
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
  ```

- [ ] **Step 2: Write slide-over PropertyDetailModal sheet component**
  ```jsx
  import React, { useState } from 'react';
  import { X, Bed, Users, IndianRupee, ShieldAlert, Sparkles, Send } from 'lucide-react';

  export default function PropertyDetailModal({ property, onClose, onBookingSubmit }) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    if (!property) return null;

    const handleSubmit = (e) => {
      e.preventDefault();
      onBookingSubmit({
        propertyName: property.name,
        checkIn,
        checkOut,
        guests,
        name,
        phone
      });
    };

    return (
      <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
        {/* Backdrop overlay */}
        <div 
          onClick={onClose}
          className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm transition-opacity" 
        />

        {/* Sliding Panel */}
        <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-2xl bg-brand-sand border-l border-brand-brown/20 shadow-2xl flex flex-col h-full transform transition-all duration-500 animate-[slideLeft_0.4s_ease-out]">
            
            {/* Header */}
            <div className="sticky top-0 bg-brand-sand border-b border-brand-brown/15 p-6 flex justify-between items-center z-10">
              <div>
                <span className="text-[10px] font-sans tracking-[0.3em] font-semibold text-brand-brown uppercase mb-1 block">
                  {property.location}
                </span>
                <h2 className="text-2xl font-medium tracking-wide text-brand-black">
                  {property.name}
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-brand-black/60 hover:text-brand-black bg-white rounded-full border border-brand-brown/15 shadow-sm transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 font-sans">
              
              {/* Main Photo Gallery */}
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 h-72 rounded-sm overflow-hidden bg-brand-black">
                  <img src={property.gallery[0]} alt="Primary Suite Room View" className="w-full h-full object-cover" />
                </div>
                <div className="h-40 rounded-sm overflow-hidden bg-brand-black">
                  <img src={property.gallery[1]} alt="Modern Bathroom" className="w-full h-full object-cover" />
                </div>
                <div className="h-40 rounded-sm overflow-hidden bg-brand-black">
                  <img src={property.gallery[2]} alt="Private Swimming Pool Deck" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Specs & Rates */}
              <div className="grid grid-cols-3 gap-4 border-y border-brand-brown/15 py-6">
                <div className="text-center">
                  <span className="block text-brand-black/55 text-[10px] tracking-wider uppercase font-semibold mb-1">Rates starting</span>
                  <p className="text-brand-blue text-lg font-bold">₹{property.pricePerNight.toLocaleString('en-IN')}</p>
                </div>
                <div className="text-center border-x border-brand-brown/15">
                  <span className="block text-brand-black/55 text-[10px] tracking-wider uppercase font-semibold mb-1">Bedrooms</span>
                  <p className="text-brand-black text-lg font-bold flex justify-center items-center gap-1">
                    <Bed className="w-4 h-4 text-brand-brown" /> {property.bedrooms}
                  </p>
                </div>
                <div className="text-center">
                  <span className="block text-brand-black/55 text-[10px] tracking-wider uppercase font-semibold mb-1">Guests Limit</span>
                  <p className="text-brand-black text-lg font-bold flex justify-center items-center gap-1">
                    <Users className="w-4 h-4 text-brand-brown" /> {property.guests}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium tracking-wide text-brand-black font-heading">The Stay Experience</h3>
                <p className="text-brand-black/75 text-sm leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium tracking-wide text-brand-black font-heading">Included Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-brand-black/75">
                      <div className="w-2 h-2 rounded-full bg-brand-brown" />
                      <span className="font-light">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form Block */}
              <div className="bg-white border border-brand-brown/15 p-6 rounded-sm space-y-6 shadow-sm">
                <div className="flex items-center space-x-3 text-brand-black">
                  <Sparkles className="w-5 h-5 text-brand-brown" />
                  <h4 className="font-medium tracking-wide">Direct Booking Inquiry</h4>
                </div>
                <p className="text-xs text-brand-black/60 leading-relaxed font-light">
                  Secure direct rates. Send an availability inquiry. We will contact you immediately via WhatsApp or call to finalize dates and payment.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Check In</label>
                      <input 
                        type="date" 
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-brand-sand border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3 font-sans text-xs outline-none focus:ring-1 focus:ring-brand-brown"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Check Out</label>
                      <input 
                        type="date" 
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-brand-sand border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3 font-sans text-xs outline-none focus:ring-1 focus:ring-brand-brown"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Guests</label>
                      <select 
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-brand-sand border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3 font-sans text-xs outline-none cursor-pointer"
                      >
                        {[...Array(property.guests)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1} Guest{i > 0 && 's'}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Contact Number</label>
                      <input 
                        type="tel" 
                        placeholder="WhatsApp preferred"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-brand-sand border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3 font-sans text-xs outline-none focus:ring-1 focus:ring-brand-brown"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-sand border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3 font-sans text-xs outline-none focus:ring-1 focus:ring-brand-brown"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-blue/95 border-b-2 border-brand-blue/60 text-white font-sans text-xs font-bold tracking-widest uppercase py-4 transition-all duration-300 flex items-center justify-center space-x-2 rounded-sm shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
  ```

---

### Task 6: Experience Section & Instagram Showcase

**Files:**
- Create: `src/components/ExperienceSection.jsx`
- Create: `src/components/InstagramSection.jsx`

- [ ] **Step 1: Write ExperienceSection lifestyle split-screener**
  ```jsx
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
  ```

- [ ] **Step 2: Write InstagramSection luxury feed pre-viewer**
  ```jsx
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
  ```

---

### Task 7: Testimonials, FAQ Accordion, and Global Booking Form

**Files:**
- Create: `src/components/Testimonials.jsx`
- Create: `src/components/FAQSection.jsx`
- Create: `src/components/BookingForm.jsx`

- [ ] **Step 1: Write Testimonials slide/carousel component**
  ```jsx
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
  ```

- [ ] **Step 2: Write FAQSection accordion component**
  ```jsx
  import React, { useState } from 'react';
  import { Plus, Minus } from 'lucide-react';

  export default function FAQSection() {
    const [openIdx, setOpenIdx] = useState(null);

    const faqs = [
      {
        q: 'What are the check-in and check-out timings?',
        a: 'Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-ins or late check-outs are subject to availability and may attract nominal charges. Contact host at booking time to confirm.'
      },
      {
        q: 'What is the pet policy at your properties?',
        a: 'We are proud to state that select properties (such as Palm Groves Estate) are fully pet-friendly! Please inform us when inquiring about booking so we can recommend the best property for your pet.'
      },
      {
        q: 'Do all properties include access to swimming pools?',
        a: 'Our Luxury Villas (like Villa Azul and Casa De Luxe) include private swimming pools exclusively for your group. Beachside suites have private balconies overlooking the sea. Check the listing details.'
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Standard direct bookings receive free cancellation up to 14 days before arrival. For cancellations within 14 days, a 50% charge applies. Holiday seasons (Dec 15 - Jan 10) have non-refundable policies.'
      },
      {
        q: 'Do you support long stay bookings or workations?',
        a: 'Yes! We offer dedicated long-term rates and properties optimized with high-speed dual-ISP internet backup, ergonomic desks, and generator backup systems specifically for remote work.'
      }
    ];

    const toggleFaq = (idx) => {
      setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
      <section id="faqs" className="bg-brand-sand py-24 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-4">
              Common Inquiries
            </span>
            <h2 className="text-brand-black text-3xl md:text-5xl font-medium tracking-wide mb-6">
              Frequently Asked Questions
            </h2>
            <div className="h-0.5 w-20 bg-brand-brown mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-brand-brown/15 rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex justify-between items-center transition-colors duration-300 hover:bg-brand-sand/50 cursor-pointer"
                  >
                    <span className="font-heading text-base md:text-lg font-medium text-brand-black tracking-wide pr-4">
                      {faq.q}
                    </span>
                    {isOpen ? <Minus className="w-5 h-5 text-brand-brown" /> : <Plus className="w-5 h-5 text-brand-brown" />}
                  </button>

                  <div className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-80 border-t border-brand-brown/10 p-6' : 'max-h-0'
                  }`}>
                    <p className="font-sans text-brand-black/75 text-sm md:text-base leading-relaxed font-light">
                      {faq.a}
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
  ```

- [ ] **Step 3: Write Global BookingForm section**
  ```jsx
  import React, { useState } from 'react';
  import { properties } from '../data/properties';
  import { Send, Sparkles } from 'lucide-react';

  export default function BookingForm({ onSubmit }) {
    const [propertyId, setPropertyId] = useState(properties[0].id);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const selected = properties.find(p => p.id === propertyId);
      onSubmit({
        propertyName: selected ? selected.name : 'VR Stay',
        checkIn,
        checkOut,
        guests,
        name,
        phone
      });
    };

    return (
      <section id="book" className="bg-brand-black py-24 px-6 text-white scroll-mt-20 relative">
        {/* Background Visual Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80" 
            alt="Goa Beach pool sunset" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black to-brand-black" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          
          <div className="text-center">
            <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-4">
              Secure Direct Rates
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-6">
              Your Perfect Goa Escape Starts Here
            </h2>
            <div className="h-0.5 w-20 bg-brand-brown mx-auto mb-6" />
            <p className="text-brand-sand/70 font-sans text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              No service fees, no middleman commissions. Submit an availability query below, and our host will message you on WhatsApp to lock in your dates.
            </p>
          </div>

          <form 
            onSubmit={handleFormSubmit}
            className="glass-dark p-8 md:p-10 rounded-sm border border-brand-brown/20 space-y-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              <div>
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-sand/70 mb-2">Select Stay</label>
                <select
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className="w-full bg-brand-black/60 border border-brand-brown/20 focus:border-brand-brown text-brand-sand rounded-sm p-3.5 text-xs outline-none cursor-pointer"
                >
                  {properties.map((prop) => (
                    <option key={prop.id} value={prop.id} className="bg-brand-black text-brand-sand">
                      {prop.name} (from ₹{prop.pricePerNight.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-sand/70 mb-2">Check In Date</label>
                <input 
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-brand-black/60 border border-brand-brown/20 focus:border-brand-brown text-brand-sand rounded-sm p-3.5 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-sand/70 mb-2">Check Out Date</label>
                <input 
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-brand-black/60 border border-brand-brown/20 focus:border-brand-brown text-brand-sand rounded-sm p-3.5 text-xs outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              <div>
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-sand/70 mb-2">Total Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-brand-black/60 border border-brand-brown/20 focus:border-brand-brown text-brand-sand rounded-sm p-3.5 text-xs outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                    <option key={num} value={num} className="bg-brand-black text-brand-sand">{num} Guest{num > 1 && 's'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-sand/70 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-black/60 border border-brand-brown/20 focus:border-brand-brown text-brand-sand rounded-sm p-3.5 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-sand/70 mb-2">Contact Number</label>
                <input 
                  type="tel" 
                  placeholder="WhatsApp number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-brand-black/60 border border-brand-brown/20 focus:border-brand-brown text-brand-sand rounded-sm p-3.5 text-xs outline-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-blue hover:bg-brand-blue/95 border-b-2 border-brand-blue/60 text-white font-sans text-xs font-bold tracking-widest uppercase py-4.5 transition-all duration-300 flex items-center justify-center space-x-2 rounded-sm shadow-xl cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Inquire & Reserve Stay</span>
            </button>
          </form>

        </div>
      </section>
    );
  }
  ```

---

### Task 8: Conversational Concierge Chatbot

**Files:**
- Create: `src/components/ChatbotAssistant.jsx`

- [ ] **Step 1: Write interactive virtual chatbot widget**
  Provide choice bubbles (rules, villas, talk to host) and trigger instant automated response flows:
  ```jsx
  import React, { useState, useEffect, useRef } from 'react';
  import { MessageSquare, X, Send, User } from 'lucide-react';

  export default function ChatbotAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
      { id: 1, sender: 'bot', text: "Hello! I am the VR Holiday Concierge. How can I assist you with your Goa trip today?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages, isOpen]);

    const handleSendMessage = (textToSend) => {
      const query = textToSend || inputValue;
      if (!query.trim()) return;

      const newUserMessage = { id: Date.now(), sender: 'user', text: query };
      setMessages((prev) => [...prev, newUserMessage]);
      setInputValue('');

      // Generate response
      setTimeout(() => {
        let responseText = "Thank you for reaching out. A guest manager will call or message you shortly. You can also reach us directly via WhatsApp at +91 98765 43210.";
        const lowercaseQuery = query.toLowerCase();

        if (lowercaseQuery.includes('villa') || lowercaseQuery.includes('stay') || lowercaseQuery.includes('book')) {
          responseText = "We have premium private pool villas, beachfront suites, and family estates in Candolim. Click 'Explore Villas' on our main page to view pricing and availability, or tell me how many guests you are traveling with.";
        } else if (lowercaseQuery.includes('pet') || lowercaseQuery.includes('dog')) {
          responseText = "Our Heritage Estate (Palm Groves) in Candolim is pet-friendly! Other suites have specific restrictions. Please let us know if you plan to travel with a pet during your inquiry.";
        } else if (lowercaseQuery.includes('internet') || lowercaseQuery.includes('wifi') || lowercaseQuery.includes('work')) {
          responseText = "Yes! All VR properties are equipped with high-speed fiber internet and generator backup systems, making them perfect for digital nomads and executive workations.";
        } else if (lowercaseQuery.includes('cancel') || lowercaseQuery.includes('refund')) {
          responseText = "We offer free cancellation up to 14 days prior to arrival for direct bookings. Holiday seasons (Dec 15 - Jan 10) have non-refundable policies.";
        }

        setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'bot', text: responseText }]);
      }, 700);
    };

    const handleBubbleClick = (option) => {
      handleSendMessage(option);
    };

    return (
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {/* Toggle Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-brand-blue hover:bg-brand-blue/95 hover:scale-105 transition-all duration-300 text-white p-4 rounded-full shadow-2xl border border-brand-brown/25 flex items-center space-x-2 cursor-pointer"
          >
            <MessageSquare className="w-6 h-6 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase pr-1 hidden sm:inline">Ask Concierge</span>
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="bg-white w-80 sm:w-96 h-[480px] rounded-sm shadow-2xl border border-brand-brown/20 flex flex-col overflow-hidden animate-[scaleUp_0.3s_ease-out]">
            {/* Header */}
            <div className="bg-brand-black text-white p-4 flex justify-between items-center border-b border-brand-brown/15">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center font-bold font-sans text-xs border border-brand-brown/25 text-white">
                  VR
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase">VR Concierge</h4>
                  <p className="text-[9px] text-brand-brown tracking-widest font-semibold uppercase">24 Years of Goa Trust</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-sand/65 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-sand/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[75%] rounded-sm p-3 text-xs leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-brand-blue text-white shadow-sm' 
                      : 'bg-white text-brand-black border border-brand-brown/15 shadow-sm font-light'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Quick replies bubbles */}
            <div className="px-4 py-2 border-t border-brand-brown/10 flex flex-wrap gap-2 bg-brand-sand/35">
              {['Explore Stays', 'Internet Speed', 'Pet Policy'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleBubbleClick(opt)}
                  className="bg-white border border-brand-brown/25 hover:border-brand-brown text-[10px] font-semibold text-brand-black/70 hover:text-brand-black rounded-full px-3 py-1 cursor-pointer transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Input form */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
              className="p-3 border-t border-brand-brown/15 flex items-center space-x-2 bg-white"
            >
              <input 
                type="text"
                placeholder="Ask about properties, wifi..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-brand-sand border border-brand-brown/20 focus:border-brand-brown rounded-sm px-3 py-2 text-xs outline-none"
              />
              <button 
                type="submit"
                className="bg-brand-blue hover:bg-brand-blue/95 text-white p-2 rounded-sm transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
  ```

---

### Task 9: Footer & Global Layout Integration

**Files:**
- Create: `src/components/Footer.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Write Footer component with contacts & map**
  ```jsx
  import React from 'react';
  import { MapPin, Phone, Mail, Instagram, ArrowUp } from 'lucide-react';

  export default function Footer() {
    const handleScrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="bg-brand-black text-brand-sand border-t border-brand-brown/20 pt-20 pb-10 px-6 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Legacy */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xl font-heading font-bold text-white tracking-widest uppercase">
              VR HOLIDAY HOMES
            </h3>
            <p className="text-xs text-brand-brown tracking-[0.2em] font-semibold uppercase">
              24 YEARS OF TRUSTED HOSPITALITY
            </p>
            <p className="text-brand-sand/65 text-xs font-light leading-relaxed max-w-sm">
              Providing premium luxury villas and boutique apartments across Candolim, North Goa since 2002. Redefining modern vacation stays with unpretentious comfort.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4 text-xs font-semibold tracking-wider uppercase">
            <h4 className="text-sm font-heading font-medium tracking-wide text-white mb-2">Navigation</h4>
            <div className="flex flex-col space-y-2.5">
              {['villas', 'experiences', 'why-us', 'testimonials', 'faqs'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="hover:text-brand-brown transition-colors w-max"
                >
                  {item.replace('-', ' ')}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts info */}
          <div className="md:col-span-5 space-y-4 text-xs leading-relaxed">
            <h4 className="text-sm font-heading font-medium tracking-wide text-white mb-2">Connect With Host</h4>
            <div className="space-y-3 font-light text-brand-sand/80">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-brown shrink-0" />
                <span>Candolim Beach Road, North Goa, 403515</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-brown shrink-0" />
                <a href="tel:+919876543210" className="hover:text-brand-brown transition-colors">+91 98765 43210 / +91 98765 99999</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-brown shrink-0" />
                <a href="mailto:book@vrholidayhomes.com" className="hover:text-brand-brown transition-colors">book@vrholidayhomes.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Scroll to top */}
        <div className="max-w-7xl mx-auto border-t border-brand-brown/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-brand-sand/55 font-semibold tracking-widest uppercase space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} VR Holiday Homes. Designed by Pomelli. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-brown transition-colors">Terms of Stay</a>
            <a href="#" className="hover:text-brand-brown transition-colors">Privacy Policy</a>
          </div>
          <button 
            onClick={handleScrollTop}
            className="flex items-center space-x-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    );
  }
  ```

- [ ] **Step 2: Assemble layout and state controls in src/App.jsx**
  Implement WhatsApp redirect handler, active modal state controls, floating quick CTA bar:
  ```jsx
  import React, { useState } from 'react';
  import Navbar from './components/Navbar';
  import HeroSection from './components/HeroSection';
  import TrustSection from './components/TrustSection';
  import PropertyShowcase from './components/PropertyShowcase';
  import PropertyDetailModal from './components/PropertyDetailModal';
  import ExperienceSection from './components/ExperienceSection';
  import WhyChooseUs from './components/WhyChooseUs';
  import Testimonials from './components/Testimonials';
  import InstagramSection from './components/InstagramSection';
  import BookingForm from './components/BookingForm';
  import FAQSection from './components/FAQSection';
  import ChatbotAssistant from './components/ChatbotAssistant';
  import Footer from './components/Footer';

  import { PhoneCall } from 'lucide-react';

  export default function App() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleOpenBooking = () => {
      const el = document.getElementById('book');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleBookingInquiry = (inquiry) => {
      // Create WhatsApp prefilled link and open it in a new window
      const text = `Hello VR Holiday Homes, I would like to inquire about booking stay details for:\n\n` +
        `• Property: ${inquiry.propertyName}\n` +
        `• Check In: ${inquiry.checkIn}\n` +
        `• Check Out: ${inquiry.checkOut}\n` +
        `• Guests: ${inquiry.guests}\n` +
        `• Contact Name: ${inquiry.name}\n` +
        `• Phone Number: ${inquiry.phone}`;
      
      const encoded = encodeURIComponent(text);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=919876543210&text=${encoded}`;
      
      window.open(whatsappUrl, '_blank');
    };

    return (
      <div className="relative min-h-screen">
        {/* Floating WhatsApp CTA */}
        <a 
          href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20VR%20Holiday%20Homes%2C%20I'd%20like%20to%20inquire%20about%20a%20stay!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300 text-white p-4 rounded-full shadow-2xl border border-white/20 flex items-center justify-center cursor-pointer"
          title="Inquire via WhatsApp"
        >
          <PhoneCall className="w-6 h-6 animate-pulse" />
        </a>

        <Navbar onOpenBooking={handleOpenBooking} />
        
        <main>
          <HeroSection onOpenBooking={handleOpenBooking} />
          
          <TrustSection />
          
          <PropertyShowcase onSelectProperty={setSelectedProperty} />
          
          <ExperienceSection />
          
          <WhyChooseUs />
          
          <Testimonials />
          
          <InstagramSection />
          
          <BookingForm onSubmit={handleBookingInquiry} />
          
          <FAQSection />
        </main>

        <Footer />

        <ChatbotAssistant />

        {selectedProperty && (
          <PropertyDetailModal 
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
            onBookingSubmit={(inquiry) => {
              setSelectedProperty(null);
              handleBookingInquiry(inquiry);
            }}
          />
        )}
      </div>
    );
  }
  ```

---

### Task 10: Verification Plan

**Files:**
- Create: `verify_app.js`

- [ ] **Step 1: Write local node check testing layout file**
  Write a script to confirm that the package compiles and the built index matches expected keywords:
  ```javascript
  import fs from 'fs';
  import path from 'path';

  console.log("Checking project integrity...");

  const filesToCheck = [
    'index.html',
    'src/main.jsx',
    'src/App.jsx',
    'src/index.css',
    'src/data/properties.js',
    'src/data/experiences.js',
    'src/components/Navbar.jsx',
    'src/components/HeroSection.jsx',
    'src/components/TrustSection.jsx',
    'src/components/PropertyShowcase.jsx',
    'src/components/PropertyDetailModal.jsx',
    'src/components/ExperienceSection.jsx',
    'src/components/WhyChooseUs.jsx',
    'src/components/Testimonials.jsx',
    'src/components/InstagramSection.jsx',
    'src/components/BookingForm.jsx',
    'src/components/FAQSection.jsx',
    'src/components/ChatbotAssistant.jsx',
    'src/components/Footer.jsx'
  ];

  let missingFiles = 0;
  filesToCheck.forEach(file => {
    if (!fs.existsSync(file)) {
      console.error(`Missing required file: ${file}`);
      missingFiles++;
    }
  });

  if (missingFiles > 0) {
    console.error(`Verification FAILED: ${missingFiles} files missing.`);
    process.exit(1);
  }

  // Check branding color definitions in index.css
  const cssContent = fs.readFileSync('src/index.css', 'utf-8');
  if (!cssContent.includes('#1C3C80') || !cssContent.includes('#2B1B17') || !cssContent.includes('#C19A6B')) {
    console.error("Verification FAILED: Primary branding color hex values are missing from css variables.");
    process.exit(1);
  }

  console.log("Verification PASSED: All files exist and branding colors configured correctly.");
  process.exit(0);
  ```

- [ ] **Step 2: Run verification script**
  Run: `node verify_app.js`
  Expected: Prints "Verification PASSED".
