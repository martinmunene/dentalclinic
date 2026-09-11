import React, { useState, useEffect } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';

import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { BeforeAfterSlider } from './components/sections/BeforeAfterSlider';
import { PricingSection } from './components/sections/PricingSection';
import { InsuranceSection } from './components/sections/InsuranceSection';
import { BranchesSection } from './components/sections/BranchesSection';
import { DoctorsSection } from './components/sections/DoctorsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { BlogSection } from './components/sections/BlogSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { AboutSection } from './components/sections/AboutSection';
import { BookingWizard } from './components/booking/BookingWizard';

import { BookingModal } from './components/booking/BookingModal';
import { BlogModal } from './components/modals/BlogModal';
import { InsuranceVerifierModal } from './components/modals/InsuranceVerifierModal';
import { BlogPost } from './types';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [bookingBranch, setBookingBranch] = useState<string | undefined>(undefined);

  const [isVerifierModalOpen, setIsVerifierModalOpen] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Handle URL hash on initial load (e.g. #services, #pricing)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['about', 'services', 'gallery', 'pricing', 'clinics', 'faq', 'contact'].includes(hash)) {
      setCurrentTab(hash);
    }
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState(null, '', tab === 'home' ? '/' : `#${tab}`);
    } catch {
      // ignore
    }
  };

  const handleOpenBooking = (serviceName?: string, branchName?: string) => {
    setBookingService(serviceName);
    setBookingBranch(branchName);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-primary-light selection:text-primary">
      {/* Top Notification Bar */}
      <TopBar />

      {/* Main Sticky Header */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <HeroSection
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
            />
            <ServicesSection onOpenBooking={handleOpenBooking} />
            <BeforeAfterSlider onOpenBooking={() => handleOpenBooking()} />
            <PricingSection onOpenBooking={handleOpenBooking} />
            <InsuranceSection
              onOpenVerifier={() => setIsVerifierModalOpen(true)}
              onOpenBooking={() => handleOpenBooking()}
            />
            <BranchesSection onOpenBooking={handleOpenBooking} />
            <DoctorsSection onOpenBooking={() => handleOpenBooking()} />
            <TestimonialsSection />
            <BlogSection onSelectArticle={(post) => setSelectedArticle(post)} />
            <FaqSection />
            <ContactSection />
          </>
        )}

        {currentTab === 'about' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
              <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Our Heritage & Specialists
              </span>
              <h1 className="text-4xl font-extrabold text-navy-900">About Deans Dental Care</h1>
              <p className="text-slate-600 max-w-xl mx-auto text-sm mt-2">
                Restoring confident smiles across Nairobi for over 25 years with medical excellence.
              </p>
            </div>
            <AboutSection onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentTab === 'services' && (
          <div className="py-8">
            <ServicesSection onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {currentTab === 'gallery' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
              <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Real Clinical Results
              </span>
              <h1 className="text-4xl font-extrabold text-navy-900">Smile Transformation Gallery</h1>
              <p className="text-slate-600 max-w-xl mx-auto text-sm mt-2">
                Slide to compare real smile before & after clinical makeovers.
              </p>
            </div>
            <BeforeAfterSlider onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentTab === 'pricing' && (
          <div className="py-8">
            <PricingSection onOpenBooking={handleOpenBooking} />
            <InsuranceSection
              onOpenVerifier={() => setIsVerifierModalOpen(true)}
              onOpenBooking={() => handleOpenBooking()}
            />
          </div>
        )}

        {currentTab === 'clinics' && (
          <div className="py-8">
            <BranchesSection onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {currentTab === 'faq' && (
          <div className="py-8">
            <FaqSection />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="py-8">
            <ContactSection />
          </div>
        )}

        {currentTab === 'book' && (
          <div className="py-12 bg-slate-50 min-h-[80vh]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  Fast Online Scheduling
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
                  Book Your Dental Visit
                </h1>
                <p className="text-slate-600 text-sm mt-2">
                  Select your preferred clinic, specialist procedure, and pick a convenient time slot.
                </p>
              </div>

              <BookingWizard
                initialService={bookingService}
                initialBranch={bookingBranch}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Emergency & WhatsApp Actions */}
      <FloatingActions />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={bookingService}
        initialBranch={bookingBranch}
      />

      <InsuranceVerifierModal
        isOpen={isVerifierModalOpen}
        onClose={() => setIsVerifierModalOpen(false)}
        onOpenBooking={() => {
          setIsVerifierModalOpen(false);
          handleOpenBooking();
        }}
      />

      <BlogModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenBooking={() => {
          setSelectedArticle(null);
          handleOpenBooking();
        }}
      />
    </div>
  );
};
export default App;
