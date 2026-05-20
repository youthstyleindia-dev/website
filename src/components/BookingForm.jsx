import React, { useState } from 'react';
import { X, Calendar, Users, Send, ShieldCheck } from 'lucide-react';
import { properties } from '../data/properties';

export default function BookingForm({ isOpen, onClose, onBookingSubmit }) {
  const [propertyName, setPropertyName] = useState('all');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit({
      propertyName: propertyName === 'all' ? 'Any Available Stay' : propertyName,
      checkIn,
      checkOut,
      guests,
      name,
      phone
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-6" role="dialog" aria-modal="true">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-brand-black/75 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative bg-brand-sand border border-brand-brown/20 max-w-lg w-full rounded-sm p-8 shadow-2xl z-10 transform transition-all duration-300 animate-[scaleUp_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-black/60 hover:text-brand-black bg-white rounded-full border border-brand-brown/15 shadow-sm transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <span className="text-brand-brown text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-2">
            Direct Reservation
          </span>
          <h3 className="text-2xl md:text-3xl font-medium tracking-wide text-brand-black">
            Book Your Stay
          </h3>
          <p className="text-brand-black/60 text-xs mt-2 font-sans font-light">
            Skip booking platform fees. Reach our hosts directly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
          
          {/* Select Property */}
          <div>
            <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Preferred Stay</label>
            <select 
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              className="w-full bg-white border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3.5 text-xs outline-none cursor-pointer"
            >
              <option value="all">Let us recommend best stay</option>
              {properties.map((p) => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Check In</label>
              <input 
                type="date" 
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-white border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3.5 text-xs outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Check Out</label>
              <input 
                type="date" 
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-white border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3.5 text-xs outline-none"
              />
            </div>
          </div>

          {/* Guests & Contact */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Guests</label>
              <select 
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full bg-white border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3.5 text-xs outline-none cursor-pointer"
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1} Guest{i > 0 && 's'}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">WhatsApp Contact</label>
              <input 
                type="tel" 
                placeholder="Include country code"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3.5 text-xs outline-none"
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-[10px] tracking-wider uppercase font-semibold text-brand-black/70 mb-2">Your Full Name</label>
            <input 
              type="text" 
              placeholder="Enter first and last name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3.5 text-xs outline-none"
            />
          </div>

          {/* Submit */}
          <button 
            type="submit"
            className="w-full bg-brand-blue hover:bg-brand-blue/95 border-b-2 border-brand-blue/60 text-white font-sans text-xs font-bold tracking-widest uppercase py-4 transition-all duration-300 flex items-center justify-center space-x-2 rounded-sm shadow-md cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send Direct Reservation Request</span>
          </button>
        </form>

        {/* Security badge */}
        <div className="flex items-center justify-center space-x-2 text-[10px] text-brand-black/55 mt-6 font-sans font-semibold">
          <ShieldCheck className="w-4 h-4 text-brand-brown" />
          <span>Secured direct booking with VR Holiday Homes Goa.</span>
        </div>

      </div>
    </div>
  );
}
