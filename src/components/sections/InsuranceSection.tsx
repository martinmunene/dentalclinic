import React, { useState } from 'react';
import { Search, Shield, Phone, CheckCircle } from 'lucide-react';
import { insuranceData } from '../../data/insuranceData';
import { InsuranceProvider } from '../../types';

interface InsuranceSectionProps {
  onOpenVerifier: () => void;
  onOpenBooking?: () => void;
}

export const InsuranceSection: React.FC<InsuranceSectionProps> = ({
  onOpenVerifier,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredInsurers = insuranceData.filter((ins: InsuranceProvider) =>
    ins.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ins.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-white border-b border-slate-200" id="insurance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Direct Cashless Billing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Accepted Health Insurance Providers in Kenya
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Skip the paperwork hassle. We submit and settle claims directly with leading Kenyan medical underwriters and corporate employee schemes.
          </p>

          {/* Search Filter Box */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search provider (e.g. Jubilee, AAR, Britam, CIC, Equity, KCB)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm text-sm text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Insurance Providers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredInsurers.map((ins: InsuranceProvider) => (
            <div
              key={ins.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-primary-light text-primary flex items-center justify-center mb-3 shadow-sm border border-slate-200/60 group-hover:border-primary/20 transition-colors">
                <Shield className="w-6 h-6" />
              </div>

              <h4 className="font-bold text-navy-900 text-sm mb-1 group-hover:text-primary transition-colors">
                {ins.name}
              </h4>

              <span
                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  ins.status === 'Direct Billing'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-sky-100 text-sky-800'
                }`}
              >
                {ins.status}
              </span>

              {ins.description && (
                <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                  {ins.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredInsurers.length === 0 && (
          <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200">
            <Shield className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">
              Provider not found in quick search?
            </p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We work with nearly all Kenyan underwriter networks. Call our billing team to confirm your scheme.
            </p>
          </div>
        )}

        {/* Insurance Help Callout */}
        <div className="mt-12 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-2">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-sky-300 tracking-wide">
                Instant Verification Tool
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Don’t see your insurance or unsure of your dental balance?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Our reception team verifies patient dental benefits electronically in under 3 minutes before your appointment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={onOpenVerifier}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors text-sm shadow-md"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Verify Benefits Online</span>
              </button>

              <a
                href="tel:+254703222228"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Call Billing Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
