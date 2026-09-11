import React from 'react';
import { MapPin, Clock, Car, Phone, Navigation, ExternalLink, Calendar } from 'lucide-react';
import { branchesData } from '../../data/branchesData';
import { Branch } from '../../types';

interface BranchesSectionProps {
  onOpenBooking: (serviceName?: string, branchName?: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-slate-50" id="clinics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Prime Nairobi Locations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Modern Clinics in Nairobi’s Leading Malls
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Strategically located along Thika Road and Kiambu Road with abundant covered parking, seamless accessibility, and comfortable executive treatment suites.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branchesData.map((branch: Branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="pb-6 border-b border-slate-100">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    {branch.pill}
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900">{branch.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center space-x-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{branch.address}</span>
                  </p>
                </div>

                {/* Details List */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-navy-900">Exact Floor Location:</strong>
                      <span className="text-slate-600">{branch.floor}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-primary flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-navy-900">Operating Hours:</strong>
                      <span className="text-slate-600">{branch.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-primary flex items-center justify-center shrink-0">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-navy-900">Parking Facility:</strong>
                      <span className="text-slate-600">{branch.parking}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-navy-900">Direct Telephone Line:</strong>
                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="text-primary font-bold hover:underline"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-primary flex items-center justify-center shrink-0">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-navy-900">Convenient Proximity:</strong>
                      <span className="text-slate-600">{branch.proximity}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => onOpenBooking(undefined, branch.name)}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark shadow-md shadow-primary/20 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book at {branch.name.includes('Garden') ? 'Garden City' : 'Runda'}</span>
                </button>

                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>Google Driving Map</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
