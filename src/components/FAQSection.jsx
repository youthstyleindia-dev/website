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
