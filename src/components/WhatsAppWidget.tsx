'use client';

import React from 'react';

const WhatsAppWidget = () => {
  const phoneNumber = '919289707648';
  const message = encodeURIComponent('I want to register my trademark');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
        
        {/* Icon */}
        <div className="relative z-10">
          <i className="fab fa-whatsapp text-white text-3xl"></i>
        </div>

        {/* Tooltip (Optional, cleaner without it for simple widget, but good for UX) */}
        <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          <p className="text-sm font-semibold text-gray-800">Chat with us</p>
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
