import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { reviewsData } from '../../data/reviewsData';
import { Testimonial } from '../../types';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Patient Satisfaction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            What Nairobi Says About Deans Dental
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real experiences from patients treated at our Garden City Mall and Runda Mall clinics.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((rev: Testimonial) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary font-bold flex items-center justify-center text-xs shrink-0">
                  {rev.initials}
                </div>
                <div className="text-xs">
                  <strong className="block text-navy-900 font-bold">{rev.name}</strong>
                  <span className="text-slate-500 block">{rev.treatment}</span>
                  <span className="text-slate-400 block text-[11px]">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
