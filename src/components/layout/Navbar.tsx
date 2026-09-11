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
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-navy-900/90 backdrop-blur-xl shadow-lux border-white/10 py-3'
          : 'section-dark border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-left focus:outline-none group"
          aria-label="Deans Dental Clinic Nairobi — Home"
        >
          <img
            src="/assets/images/logo.png"
            alt="Deans Dental Clinic Nairobi"
            className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
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
                    ? 'text-white bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
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
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold border border-accent-teal/40 text-accent-mint hover:bg-accent-teal/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold primary-gradient text-white shadow-glow hover:shadow-glow-blue transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden xs:inline">Book Appointment</span>
            <span className="xs:hidden">Book</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
