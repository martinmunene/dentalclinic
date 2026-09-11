import React, { useState } from 'react';
import { Clock, Smile, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { Service } from '../../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Procedures' },
    { id: 'cosmetic', label: 'Cosmetic & Whitening' },
    { id: 'orthodontics', label: 'Braces & Aligners' },
    { id: 'restorative', label: 'Restorative & Implants' },
    { id: 'general', label: 'General & Kids' },
    { id: 'surgical', label: 'Surgical Care' },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Comprehensive Dental Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Specialized Treatments Designed For Comfortable Care
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From routine checkups to complex orthodontic smile transformations, every procedure at Deans Dental is performed with precision, warmth, and zero anxiety.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: Service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badge Wrap */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-primary shadow-sm">
                    {service.categoryLabel}
                  </span>
                </div>
                {service.priceEstimate && (
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-navy-900/90 text-amber-300 backdrop-blur-sm shadow-sm">
                      {service.priceEstimate}
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta Pills */}
                  <div className="flex items-center space-x-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                      <Smile className="w-3.5 h-3.5" />
                      <span>100% Painless</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Perks Checklist */}
                  <ul className="space-y-1.5 pt-2 text-xs text-slate-600">
                    {service.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all group-hover:border-primary"
                  >
                    <span>Schedule Treatment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
