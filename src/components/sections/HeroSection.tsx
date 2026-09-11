import React from 'react';
import { Calendar, Phone, ShieldCheck, MapPin, Sparkles, Award, Users } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onNavigate: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section className="relative overflow-hidden hero-lux pt-16 pb-24 lg:pt-24 lg:pb-32 text-white">
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-accent-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left animate-float-in">
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full glass-dark text-xs font-semibold text-accent-mint">
              <span className="w-2 h-2 rounded-full bg-accent-mint pulse-circle" />
              <span className="tracking-wide">Nairobi&apos;s Trusted Dental Specialists &bull; 25+ Years Legacy</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-[3.75rem] font-bold tracking-tight leading-[1.1] text-balance">
              Gentle, World-Class{' '}
              <span className="lux-text-gradient italic">Dental Care</span>
              <br className="hidden sm:block" /> For Your Entire Family
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Experience completely anxiety-free treatments at our two premier Nairobi clinics in{' '}
              <strong className="text-white font-semibold">Garden City Mall</strong> (Thika Rd) and{' '}
              <strong className="text-white font-semibold">Runda Mall</strong> (Kiambu Rd). Painless braces, laser whitening, implants &amp; kids dentistry.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-2xl primary-gradient text-white font-bold shadow-glow hover:shadow-glow-blue transition-all transform hover:-translate-y-0.5 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href="tel:+254703222228"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-2xl glass-dark text-white font-bold hover:bg-white/10 transition-colors text-base"
              >
                <Phone className="w-5 h-5 text-accent-mint" />
                <span>24/7 Call: 0703 222 228</span>
              </a>
            </div>

            {/* Stat Bar */}
            <div className="pt-8 mt-2 border-t border-white/10 grid grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div>
                <span className="block font-heading text-3xl sm:text-4xl font-bold text-white">25+</span>
                <span className="text-xs text-slate-400 font-medium">Years Clinical Practice</span>
              </div>
              <div>
                <span className="block font-heading text-3xl sm:text-4xl font-bold lux-text-gradient">20,000+</span>
                <span className="text-xs text-slate-400 font-medium">Smiles Restored</span>
              </div>
              <div>
                <span className="block font-heading text-3xl sm:text-4xl font-bold text-accent-mint">100%</span>
                <span className="text-xs text-slate-400 font-medium">Painless Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Clinic Image Card */}
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-lux ring-1 ring-white/15 bg-navy-800">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Dental Clinic Room"
                  className="w-full h-80 sm:h-[26rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
                  <span className="inline-block px-3 py-1 bg-accent-teal/90 backdrop-blur-md rounded-full text-[11px] font-bold uppercase tracking-wider text-white">
                    Hospital-Grade Sterilization
                  </span>
                  <p className="font-heading text-xl font-semibold text-white">Ultra-Modern Dental Suites</p>
                  <p className="text-xs text-slate-300">
                    Garden City Mall &amp; Runda Mall &bull; Safe, comfortable and private.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-dark p-3.5 rounded-2xl shadow-lux flex items-center space-x-3 max-w-xs animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-accent-teal/20 text-accent-mint flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-xs">
                  <strong className="block font-bold text-white">Direct Insurance Billing</strong>
                  <span className="text-slate-300">Jubilee, AAR, Britam, CIC &amp; 12+ more</span>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 sm:-right-6 glass-dark p-3.5 rounded-2xl shadow-lux flex items-center space-x-3 animate-pulse-slow">
                <div className="w-10 h-10 rounded-xl bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="block font-bold text-white">2 Mall Locations</strong>
                  <span className="text-slate-300">Garden City &amp; Runda Mall</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Feature Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-dark p-6 rounded-2xl hover:bg-white/[0.08] transition-colors flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-accent-teal/15 text-accent-mint flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base mb-1">Painless Modern Tech</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ultrasonic tartar scalers, Philips Zoom lasers, and digital intraoral 3D bite scanners.
              </p>
            </div>
          </div>

          <div className="glass-dark p-6 rounded-2xl hover:bg-white/[0.08] transition-colors flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 text-accent-sky flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base mb-1">KMPDC Board Certified</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All lead surgeons and pediatric specialists hold verified Kenyan and international qualifications.
              </p>
            </div>
          </div>

          <div className="glass-dark p-6 rounded-2xl hover:bg-white/[0.08] transition-colors flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-accent-gold/15 text-accent-gold flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base mb-1">Flexible Installments</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Affordable monthly payment plans from KSh 7,500 for orthodontic braces and clear aligners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
