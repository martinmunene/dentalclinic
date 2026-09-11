import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/254703222228?text=Hello%20Deans%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20dental%20appointments%20and%20services.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 flex items-center justify-center transition-transform hover:scale-110 group relative"
        aria-label="Chat with Deans Dental on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>

      {/* 24/7 Helpline Phone Button */}
      <a
        href="tel:+254703222228"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-primary text-white shadow-xl hover:bg-primary-dark flex items-center justify-center transition-transform hover:scale-110 group relative"
        aria-label="Call Emergency Dental Line"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none hidden sm:block">
          24/7 Dental Emergency
        </span>
      </a>
    </div>
  );
};
