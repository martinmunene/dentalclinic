import React from 'react';
import { Check, Calendar, ShieldCheck } from 'lucide-react';
import { pricingData } from '../../data/pricingData';
import { PricingPackage } from '../../types';

interface PricingSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Transparent Pricing in KES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Clear, Honest Dental Treatment Estimates
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No hidden clinic fees or unexpected surcharges. Below are standard starting costs for our most requested treatments. Direct cashless billing across all major Kenyan medical insurers.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((pkg: PricingPackage) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative bg-white border ${
                pkg.featured
                  ? 'border-primary shadow-xl shadow-primary/10 ring-2 ring-primary'
                  : 'border-slate-200/80 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Popular Ribbon */}
              {pkg.popularRibbon && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-extrabold uppercase px-4 py-1 rounded-full shadow-md">
                  {pkg.popularRibbon}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-1">{pkg.title}</h3>
                <p className="text-xs text-slate-500 mb-6 min-h-[32px]">{pkg.description}</p>

                {/* Price Box */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6 text-center">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    {pkg.currency}
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-navy-900 block my-1">
                    {pkg.amount}
                  </span>
                  <span className="text-xs text-primary font-semibold block">
                    {pkg.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking(pkg.serviceKey)}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center space-x-2 ${
                  pkg.featured
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/25'
                    : 'border border-primary/20 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Procedure</span>
              </button>
            </div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-slate-700">
            <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
            <div className="text-xs sm:text-sm">
              <strong className="block text-navy-900 font-bold">Have Kenyan Medical Insurance?</strong>
              <span>You pay KSh 0 out of pocket on eligible covered dental limits. We process claims directly.</span>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Check Cover & Book
          </button>
        </div>
      </div>
    </section>
  );
};
