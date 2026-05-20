import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import PropertyShowcase from './components/PropertyShowcase';
import ExperienceSection from './components/ExperienceSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import PropertyDetailModal from './components/PropertyDetailModal';
import BookingForm from './components/BookingForm';
import ChatbotAssistant from './components/ChatbotAssistant';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingSubmit = (details) => {
    const { propertyName, checkIn, checkOut, guests, name, phone } = details;
    
    // Construct pre-filled WhatsApp message
    const message = `Hello VR Holiday Homes, I would like to inquire about booking:
- Property: ${propertyName}
- Check In: ${checkIn}
- Check Out: ${checkOut}
- Guests: ${guests}
- Contact Number: ${phone}
- My Name: ${name}

Please let me know if this stay is available.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset states
    setIsBookingOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="bg-brand-sand min-h-screen flex flex-col text-brand-black antialiased selection:bg-brand-brown selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />
        <TrustSection />
        <PropertyShowcase onSelectProperty={(prop) => setSelectedProperty(prop)} />
        <ExperienceSection />
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Triggers */}
      <PropertyDetailModal 
        property={selectedProperty} 
        onClose={() => setSelectedProperty(null)}
        onBookingSubmit={handleBookingSubmit}
      />

      <BookingForm 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onBookingSubmit={handleBookingSubmit}
      />

      <ChatbotAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}
