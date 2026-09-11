import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="section-dark text-slate-300 text-xs py-2 border-b border-white/5 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Locations */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-accent-mint" />
            <span><strong className="text-white">Garden City Mall:</strong> 2nd Floor, Next to KCB (Thika Rd)</span>
          </span>
          <span className="flex items-center space-x-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-accent-mint" />
            <span><strong className="text-white">Runda Mall:</strong> 2nd Floor (Kiambu Rd)</span>
          </span>
        </div>

        {/* Contact & Hours */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Mon–Sat: 8am–8pm | Sun: 10am–4pm</span>
          </span>
          <a
            href="mailto:info@deans.co.ke"
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-accent-mint" />
            <span>info@deans.co.ke</span>
          </a>
          <a
            href="tel:+254703222228"
            className="flex items-center space-x-1.5 text-accent-gold font-semibold hover:text-white transition-colors bg-accent-gold/10 px-2.5 py-0.5 rounded-full border border-accent-gold/25"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 Hotline: +254 703 222 228</span>
          </a>
        </div>
      </div>
    </div>
  );
};
