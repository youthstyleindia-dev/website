import React, { useState } from 'react';
import { X, Bed, Users, Sparkles, Send } from 'lucide-react';

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
                      onChange={(e) => setGuests(parseInt(e.target.value))}
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
