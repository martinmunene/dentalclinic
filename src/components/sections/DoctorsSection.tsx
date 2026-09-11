import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { doctorsData } from '../../data/doctorsData';
import { Doctor } from '../../types';

interface DoctorsSectionProps {
  onOpenBooking: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Clinical Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Meet Our Expert Dental Surgeons
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Our multidisciplinary team brings decades of specialized experience in orthodontics, implantology, cosmetic design, and pediatric dental care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsData.map((doc: Doctor) => (
            <div
              key={doc.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Image */}
                <div className="relative h-72 overflow-hidden bg-slate-200">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 bg-navy-900/90 text-white rounded-full text-xs font-bold backdrop-blur-sm">
                      {doc.specialty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-primary transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-primary font-bold mt-0.5">{doc.role}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Credentials Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {doc.credentials.map((cred, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center space-x-1 text-[11px] font-semibold bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200"
                      >
                        <Award className="w-3 h-3 text-primary shrink-0" />
                        <span>{cred}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Trigger */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-xl border border-primary/20 text-primary font-bold text-xs hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Book with {doc.name.split(' ')[0]} {doc.name.split(' ')[1]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
