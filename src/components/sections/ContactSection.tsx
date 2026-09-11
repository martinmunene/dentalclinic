import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'Garden City Mall',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Contact Deans Dental Care Desk
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have a question regarding treatments, insurance schemes, or need an urgent emergency slot? Reach out below and we will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Send Us an Inquiry</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Our front desk will review your message and reply within 30 minutes during operating hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-navy-900 text-lg">Thank You, {formData.name}!</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Your inquiry regarding <strong>{formData.branch}</strong> has been received. Our patient care representative will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', branch: 'Garden City Mall', message: '' });
                  }}
                  className="mt-2 text-xs font-bold text-primary hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Kamau"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +254 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Target Clinic Branch
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-white font-medium"
                    >
                      <option value="Garden City Mall">Garden City Mall (Thika Road)</option>
                      <option value="Runda Mall">Runda Mall (Kiambu Road)</option>
                      <option value="General Question">General / Billing Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    How Can We Help You?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the dental treatment or consultation you require..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-md shadow-primary/20 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Reception</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Garden City Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Main Flagship Clinic
              </span>
              <h4 className="text-lg font-bold text-navy-900">Garden City Mall</h4>
              <p className="text-xs text-slate-600 flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>2nd Floor, Next to KCB Bank, Thika Road (Exit 7), Nairobi</span>
              </p>
              <p className="text-xs text-slate-600 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+254703222228" className="font-bold text-navy-900 hover:text-primary">
                  +254 703 222 228
                </a>
              </p>
            </div>

            {/* Runda Mall Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-sky">
                Executive Boutique Clinic
              </span>
              <h4 className="text-lg font-bold text-navy-900">Runda Mall</h4>
              <p className="text-xs text-slate-600 flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent-sky shrink-0 mt-0.5" />
                <span>2nd Floor, Runda Mall, Kiambu Road, Nairobi</span>
              </p>
              <p className="text-xs text-slate-600 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent-sky shrink-0" />
                <a href="tel:+254703222227" className="font-bold text-navy-900 hover:text-primary">
                  +254 703 222 227
                </a>
              </p>
            </div>

            {/* Emergency Line Card */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-xs uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                <span>24/7 Dental Emergency Call Center</span>
              </div>
              <p className="text-xs text-slate-700">
                Severe tooth pain or dental accident? Immediate emergency attention is available around the clock.
              </p>
              <a
                href="tel:+254703222228"
                className="inline-block font-extrabold text-navy-900 text-lg hover:text-primary"
              >
                +254 703 222 228
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
