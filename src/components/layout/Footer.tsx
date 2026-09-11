import React from 'react';
import { Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/images/logo.png"
                alt="Deans Dental Clinic"
                className="h-10 w-auto brightness-200"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                Deans Dental
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nairobi’s premier dental center delivering compassionate, world-class dental treatments across Garden City Mall and Runda Mall. Over 25 years of restoring happy, healthy smiles.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>KMPDC Board Certified Practice</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Our Heritage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  All Dental Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Smile Makeover Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">
                  Transparent Pricing & Insurance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('clinics')} className="hover:text-white transition-colors">
                  Clinics & Locations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Nairobi Clinics */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Our Nairobi Clinics
            </h4>
            <div className="space-y-4 text-sm">
              <div className="space-y-1">
                <p className="font-semibold text-white flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Garden City Mall Clinic</span>
                </p>
                <p className="text-slate-400 text-xs pl-5">
                  2nd Floor (Next to KCB Bank), Thika Road, Nairobi
                </p>
                <p className="pl-5 text-xs text-sky-400">
                  <a href="tel:+254703222228">+254 703 222 228</a>
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-navy-800">
                <p className="font-semibold text-white flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Runda Mall Clinic</span>
                </p>
                <p className="text-slate-400 text-xs pl-5">
                  2nd Floor, Kiambu Road, Nairobi
                </p>
                <p className="pl-5 text-xs text-sky-400">
                  <a href="tel:+254703222227">+254 703 222 227</a>
                </p>
              </div>

              <div className="pt-2 border-t border-navy-800 flex items-center space-x-2 text-xs">
                <Mail className="w-4 h-4 text-sky-400" />
                <a href="mailto:info@deans.co.ke" className="hover:text-white">info@deans.co.ke</a>
              </div>
            </div>
          </div>

          {/* Col 4: Working Hours & Emergency */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Working Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex justify-between items-center py-1 border-b border-navy-800">
                <span>Mon – Sat:</span>
                <strong className="text-white">8:00 AM – 8:00 PM</strong>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-navy-800">
                <span>Sunday:</span>
                <strong className="text-white">10:00 AM – 4:00 PM</strong>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-navy-800">
                <span>Public Holidays:</span>
                <span className="text-slate-400">By Appointment</span>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-semibold text-xs uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>24/7 Dental Emergency</span>
              </div>
              <p className="text-xs text-slate-300">
                Suffering acute toothache or trauma? Call our helpline immediately.
              </p>
              <a
                href="tel:+254703222228"
                className="block text-center py-2 px-3 bg-amber-500 hover:bg-amber-600 text-navy-900 font-bold rounded-lg text-xs transition-colors"
              >
                +254 703 222 228
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Deans Dental Clinic Nairobi. All rights reserved. KMPDC Registered Practice.
          </p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>Crafted for healthy smiles</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </span>
            <span>•</span>
            <button onClick={onOpenBooking} className="text-primary-light hover:underline">
              Online Booking
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
