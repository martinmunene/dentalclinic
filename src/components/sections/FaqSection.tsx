import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { faqsData } from '../../data/faqsData';
import { FaqItem } from '../../types';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? '' : id);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Frequently Asked Dental Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear answers to help you feel completely comfortable and informed before your appointment.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq: FaqItem) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-navy-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-primary text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Callout */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Have a question that is not addressed here?
          </p>
          <a
            href="tel:+254703222228"
            className="inline-flex items-center space-x-2 text-primary font-bold text-xs sm:text-sm hover:underline"
          >
            <Phone className="w-4 h-4" />
            <span>Speak directly with a specialist: +254 703 222 228</span>
          </a>
        </div>
      </div>
    </section>
  );
};
