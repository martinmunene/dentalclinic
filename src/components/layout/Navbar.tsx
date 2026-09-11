import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string, anchor?: string) => void;
  onOpenBooking: (initialService?: string, initialBranch?: string) => void;
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenBooking,
  onOpenMobileMenu,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Smile Gallery' },
    { id: 'pricing', label: 'Pricing & Insurance' },
    { id: 'clinics', label: 'Clinics' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 text-left focus:outline-none group"
        >
          <img
            src="/assets/images/logo.png"
            alt="Deans Dental Clinic"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl font-bold text-primary tracking-tight leading-none">
              Deans Dental
            </span>
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-slate-500">
              Clinic Nairobi
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-primary bg-primary-light font-bold'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href="tel:+254703222228"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold border border-primary/20 text-primary hover:bg-primary-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white shadow-sm hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-primary/20"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden xs:inline">Book Appointment</span>
            <span className="xs:hidden">Book</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
