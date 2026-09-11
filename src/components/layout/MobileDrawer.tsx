import React from 'react';
import { X, Phone, Calendar, MapPin, Mail } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenBooking: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentTab,
  onNavigate,
  onOpenBooking,
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Dental Services' },
    { id: 'gallery', label: 'Smile Gallery' },
    { id: 'pricing', label: 'Pricing & Insurance' },
    { id: 'clinics', label: 'Our Clinics' },
    { id: 'faq', label: 'Frequently Asked Questions' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <img
            src="/assets/images/logo.png"
            alt="Deans Dental Clinic Nairobi"
            className="h-11 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-primary-light text-primary font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-primary"></span>}
              </button>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-100 space-y-3 px-2 text-sm text-slate-600">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span><strong>Garden City:</strong> 2nd Floor, Next to KCB (Thika Rd)</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span><strong>Runda Mall:</strong> 2nd Floor, Kiambu Rd</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:info@deans.co.ke" className="hover:text-primary">info@deans.co.ke</a>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary-dark transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment Online</span>
          </button>

          <a
            href="tel:+254703222228"
            className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border border-primary/20 text-primary font-semibold hover:bg-primary-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>24/7 Hotline: +254 703 222 228</span>
          </a>
        </div>
      </aside>
    </>
  );
};
