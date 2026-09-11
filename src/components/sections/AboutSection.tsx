import React from 'react';
import { ShieldCheck, Award, Sparkles, HeartHandshake, Users, CheckCircle2 } from 'lucide-react';
import { DoctorsSection } from './DoctorsSection';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Banner for About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Deans Dental Modern Clinic Suite"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary text-white p-5 sm:p-6 rounded-3xl shadow-xl z-20 max-w-xs space-y-1">
              <span className="block text-3xl sm:text-4xl font-extrabold">25+ Years</span>
              <span className="text-xs text-primary-light font-medium block">
                Serving Nairobi families with clinical excellence and gentle care.
              </span>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider">
              Our Story & Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              A Quarter-Century of <span className="text-primary">Healthy, Radiant Smiles</span> in Nairobi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Deans Dental Care was founded with a singular commitment: to make modern, world-class dentistry accessible, anxiety-free, and comfortable for every family in Kenya.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Operating from two premier locations—<strong>Garden City Mall</strong> on Thika Road and <strong>Runda Mall</strong> on Kiambu Road—we combine the luxury and convenience of modern mall settings with hospital-grade clinical precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  20,000+ Treated Patients
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  KMPDC Board Certified
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Contactless 3D Scanners
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Direct Cashless Claims
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Philosophy Pillars */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Why Kenyan Families Choose Deans Dental
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Clinical excellence paired with a patient-first compassionate culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-navy-900">100% Gentle, Painless Care</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We remove the fear of dentists with computerized local anesthesia, soothing topical gels, and empathetic bedside communication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-navy-900">Hospital-Grade Sterilization</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Class-B autoclave equipment, sealed pouch instruments opened only in your presence, and stringent cross-infection controls.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-navy-900">Transparent & Ethical</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No surprises. We present full digital treatment options and direct insurance claims before any procedure begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section Embedded */}
      <DoctorsSection onOpenBooking={onOpenBooking} />
    </div>
  );
};
