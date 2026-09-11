import React from 'react';
import { Calendar, Phone, ShieldCheck, MapPin, Sparkles, Award, Users } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onNavigate: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section className="relative overflow-hidden hero-gradient pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white border border-primary/20 shadow-sm text-xs font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-circle" />
              <span>Nairobi's Trusted Dental Specialists • 25+ Years Legacy</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
              Gentle, World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">Dental Care</span> For Your Entire Family
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience completely anxiety-free dental treatments at our two premier Nairobi clinics in <strong>Garden City Mall</strong> (Thika Rd) and <strong>Runda Mall</strong> (Kiambu Rd). Painless braces, laser teeth whitening, implants & kids dentistry.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href="tel:+254703222228"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-2xl bg-white text-navy-900 font-bold border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors text-base"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>24/7 Call: 0703 222 228</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-navy-900">25+</span>
                <span className="text-xs text-slate-500 font-medium">Years Clinical Practice</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary">20,000+</span>
                <span className="text-xs text-slate-500 font-medium">Smiles Restored</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</span>
                <span className="text-xs text-slate-500 font-medium">Painless Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Highlights Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Clinic Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Dental Clinic Room"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="inline-block px-3 py-1 bg-emerald-500/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                    Hospital-Grade Sterilization
                  </span>
                  <p className="text-lg font-bold">Ultra-Modern Dental Suites</p>
                  <p className="text-xs text-slate-200">
                    Garden City Mall & Runda Mall • Safe, comfortable and private.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Insurance Direct Billing */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 max-w-xs animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-xs">
                  <strong className="block font-bold text-navy-900">Direct Insurance Billing</strong>
                  <span className="text-slate-500">Jubilee, AAR, Britam, CIC & 12+ more</span>
                </div>
              </div>

              {/* Floating Badge 2: Mall Locations */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-pulse-slow">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="block font-bold text-navy-900">2 Mall Locations</strong>
                  <span className="text-slate-500">Garden City & Runda Mall</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Feature Cards Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 text-base mb-1">Painless Modern Tech</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ultrasonic tartar scalers, Philips Zoom lasers, and digital intraoral 3D bite scanners.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 text-base mb-1">KMPDC Board Certified</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                All lead surgeons and pediatric specialists hold verified Kenyan and international qualifications.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 text-base mb-1">Flexible Installments</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Affordable monthly payment plans from KSh 7,500 for orthodontic braces and clear aligners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
