import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';

export default function ChatbotAssistant({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Warm greetings! I am your VR Holiday Homes digital concierge. How may I assist you with your Goan getaway today?"
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    // Generate response after a short delay
    setTimeout(() => {
      let replyText = "";
      const lower = text.toLowerCase();

      if (lower.includes('pool') || lower.includes('swimming')) {
        replyText = "Our luxury private villas (Villa Azul and Casa De Luxe) feature private, beautifully maintained swimming pools. Palm Groves includes a family pool with a shallow kids area. Would you like me to open the booking page to reserve one?";
      } else if (lower.includes('beach') || lower.includes('ocean') || lower.includes('sea')) {
        replyText = "Sunset Cove is situated directly on the Candolim Beach front with stunning sea views and immediate sandy beach access. Villa Azul and Palm Groves are a brief 5-minute stroll to the beach.";
      } else if (lower.includes('pet') || lower.includes('dog') || lower.includes('animal')) {
        replyText = "We love pets! Palm Groves Heritage Estate is fully pet-friendly with secure, fenced lawns for your furry companions. Please let our host know about your pets when finalizing details.";
      } else if (lower.includes('wi-fi') || lower.includes('wifi') || lower.includes('internet') || lower.includes('workation')) {
        replyText = "All our properties feature high-speed fiber internet. Vista Verde is specifically configured for workations, packing a dual-ISP failover system, full backup generators, and ergonomic workstations.";
      } else if (lower.includes('cancel') || lower.includes('refund')) {
        replyText = "Standard reservations enjoy free cancellation up to 14 days before check-in. Holiday season bookings (Dec 15 - Jan 10) have non-refundable policies due to high demand.";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
        replyText = "Our suites start at ₹12,000/night (Vista Verde) up to ₹35,000/night for our signature 5-bedroom Casa De Luxe. Booking direct on our website secures you the best local rate without third-party platform commissions.";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('whatsapp') || lower.includes('call')) {
        replyText = "You can reach our hosting staff directly at +91 98765 43210. Alternatively, fill out our Book Stay form and we will ping you on WhatsApp within minutes!";
      } else if (lower.includes('book') || lower.includes('reserve') || lower.includes('stay')) {
        replyText = "I would be delighted to help you book! Click the 'Book My Stay' button below or select a villa detail slide-over.";
      } else {
        replyText = "I would love to help you plan your Goan retreat. For personalized pricing, tailored villa recommendations, or custom amenities (like private chefs), feel free to contact us directly or launch our reservation inquiry.";
      }

      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyText
      }]);
    }, 850);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const quickReplies = [
    "Recommend a Pool Villa",
    "Show Beachfront stays",
    "Workation amenities",
    "What is the Pet Policy?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-blue hover:bg-brand-blue/95 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-brand-brown/20 cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 animate-pulse" />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[360px] md:w-[380px] h-[500px] bg-brand-sand border border-brand-brown/25 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-[scaleUp_0.25s_ease-out]">
          {/* Header */}
          <div className="bg-brand-blue p-4 flex justify-between items-center text-white border-b border-brand-brown/15">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-brand-brown" />
              <div>
                <h4 className="text-sm font-bold tracking-wider uppercase">VR Concierge</h4>
                <p className="text-[10px] text-brand-sand/75 font-semibold">Online • Est. 2002</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex items-start space-x-2 ${
                  msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {/* Avatar Icon */}
                <div className={`p-1.5 rounded-full border ${
                  msg.sender === 'user' 
                    ? 'bg-brand-sand border-brand-brown/20 text-brand-black' 
                    : 'bg-brand-blue border-brand-blue text-white'
                }`}>
                  {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                {/* Message Bubble */}
                <div className={`p-3 max-w-[75%] rounded-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-brand-brown/10 text-brand-black border border-brand-brown/10'
                    : 'bg-white text-brand-black shadow-sm border border-brand-brown/15'
                }`}>
                  <p className="font-light">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-4 py-2 border-t border-brand-brown/10 flex flex-wrap gap-2 bg-white">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(reply)}
                className="bg-brand-sand hover:bg-brand-brown/15 text-brand-black border border-brand-brown/20 rounded-full px-3 py-1.5 text-[10px] font-semibold transition-all cursor-pointer"
              >
                {reply}
              </button>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white border border-brand-blue/30 rounded-full px-3 py-1.5 text-[10px] font-bold transition-all cursor-pointer"
            >
              ⚡ Book Now
            </button>
          </div>

          {/* Text Input Panel */}
          <div className="p-3 border-t border-brand-brown/15 flex items-center bg-white">
            <input
              type="text"
              placeholder="Ask anything about our villas..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-brand-sand border border-brand-brown/20 focus:border-brand-brown rounded-sm p-3 outline-none text-xs"
            />
            <button
              onClick={() => handleSendMessage()}
              className="ml-2 bg-brand-blue hover:bg-brand-blue/95 text-white p-3 rounded-sm transition-all cursor-pointer"
            >
              <Send className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
