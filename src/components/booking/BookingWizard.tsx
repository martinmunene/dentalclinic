import React, { useState } from 'react';
import { CheckCircle2, Calendar, Clock, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { BookingFormData } from '../../types';

interface BookingWizardProps {
  initialService?: string;
  initialBranch?: string;
  onSuccess?: () => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  initialService = 'Professional Teeth Whitening',
  initialBranch = 'Garden City Mall',
  onSuccess,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Tomorrow as default date string
  const tomorrowStr = React.useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }, []);

  const todayStr = React.useMemo(() => {
    return new Date().toISOString().split('T')[0];
  }, []);

  const [formData, setFormData] = useState<BookingFormData>({
    branch: initialBranch,
    service: initialService,
    date: tomorrowStr,
    timeSlot: '10:30 AM',
    fullName: '',
    phone: '',
    email: '',
    insuranceScheme: 'Direct Private Cash/Card',
    notes: '',
  });

  const [bookingRef, setBookingRef] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const timeSlots = [
    '08:30 AM',
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
  ];

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.branch || !formData.service) {
        setFormErrors({ step1: 'Please select a clinic location and dental treatment.' });
        return;
      }
      setFormErrors({});
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.date || !formData.timeSlot) {
        setFormErrors({ step2: 'Please select an appointment date and preferred time slot.' });
        return;
      }
      setFormErrors({});
      setCurrentStep(3);
    } else if (currentStep === 3) {
      const errors: { [key: string]: string } = {};
      if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name.';
      if (!formData.phone.trim()) errors.phone = 'Please provide a contact phone number.';

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      // Generate Reference Code
      const randomRef = 'DEANS-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setFormErrors({});
      setCurrentStep(4);
      if (onSuccess) onSuccess();
    }
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Deans Dental Clinic, I have scheduled an appointment on your website!%0A%0A*Booking Ref:* ${bookingRef}%0A*Clinic:* ${formData.branch}%0A*Treatment:* ${formData.service}%0A*Date:* ${formData.date}%0A*Time:* ${formData.timeSlot}%0A*Patient Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A*Payment/Insurance:* ${formData.insuranceScheme || 'Private Cash/Card'}%0A${formData.notes ? `*Notes:* ${encodeURIComponent(formData.notes)}%0A` : ''}%0APlease confirm my appointment availability. Thank you!`;
    return `https://wa.me/254703222228?text=${text}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Step Indicators Header */}
      <div className="bg-slate-50 border-b border-slate-100 p-4 sm:p-6">
        <div className="grid grid-cols-4 gap-2 text-center text-xs sm:text-sm font-semibold">
          {[
            { num: 1, label: 'Clinic & Service' },
            { num: 2, label: 'Date & Time' },
            { num: 3, label: 'Patient Info' },
            { num: 4, label: 'Confirmation' },
          ].map((s) => (
            <div
              key={s.num}
              className={`flex flex-col sm:flex-row items-center justify-center sm:space-x-2 p-2 rounded-xl transition-all ${
                currentStep === s.num
                  ? 'bg-primary text-white shadow-md'
                  : currentStep > s.num
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-slate-400'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep === s.num
                    ? 'bg-white text-primary'
                    : currentStep > s.num
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {currentStep > s.num ? '✓' : s.num}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8">
        {/* STEP 1 */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                1. Select Preferred Clinic & Treatment
              </h3>
              <p className="text-sm text-slate-500">
                Choose between our Thika Road (Garden City) and Kiambu Road (Runda) dental branches.
              </p>
            </div>

            {/* Branch Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Select Clinic Branch
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all flex items-start space-x-3 ${
                    formData.branch === 'Garden City Mall'
                      ? 'border-primary bg-primary-light/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="branch"
                    value="Garden City Mall"
                    checked={formData.branch === 'Garden City Mall'}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="mt-1 text-primary focus:ring-primary"
                  />
                  <div>
                    <strong className="block text-navy-900 font-bold">Garden City Mall</strong>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      2nd Floor, Next to KCB Bank (Exit 7, Thika Road)
                    </span>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-primary bg-white px-2 py-0.5 rounded-full border border-primary/20">
                      Flagship Dental Center
                    </span>
                  </div>
                </label>

                <label
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all flex items-start space-x-3 ${
                    formData.branch === 'Runda Mall'
                      ? 'border-primary bg-primary-light/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="branch"
                    value="Runda Mall"
                    checked={formData.branch === 'Runda Mall'}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="mt-1 text-primary focus:ring-primary"
                  />
                  <div>
                    <strong className="block text-navy-900 font-bold">Runda Mall</strong>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      2nd Floor, Kiambu Road
                    </span>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-accent-sky bg-white px-2 py-0.5 rounded-full border border-accent-sky/20">
                      Executive Boutique Clinic
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Service Selector */}
            <div>
              <label
                htmlFor="booking-service"
                className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2"
              >
                Dental Procedure Required
              </label>
              <select
                id="booking-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800 font-medium"
              >
                <optgroup label="Cosmetic Dentistry">
                  <option value="Professional Teeth Whitening">Professional Teeth Whitening</option>
                  <option value="Porcelain Veneers & Crowns">Porcelain Veneers & Crowns</option>
                  <option value="Dental Bonding & Aesthetic Fillings">Dental Bonding & Aesthetic Fillings</option>
                </optgroup>
                <optgroup label="Orthodontics & Alignment">
                  <option value="Affordable Braces & Clear Aligners">Affordable Braces (Metal / Ceramic)</option>
                  <option value="Invisalign Clear Aligners">Invisalign Clear Aligners</option>
                  <option value="Retainers & Bite Assessment">Retainers & Bite Assessment</option>
                </optgroup>
                <optgroup label="General & Preventative">
                  <option value="Dental Cleaning & Tartar Removal">Routine Dental Cleaning & Tartar Removal</option>
                  <option value="Pediatric & Kids Dental Care">Pediatric & Kids Dental Care</option>
                  <option value="Toothache Diagnosis & Emergency Consultation">Toothache Diagnosis & Consultation</option>
                </optgroup>
                <optgroup label="Restorative & Oral Surgery">
                  <option value="Permanent Dental Implants">Permanent Dental Implants</option>
                  <option value="Painless Root Canal Therapy">Painless Root Canal Therapy</option>
                  <option value="Wisdom Teeth & Oral Surgery">Wisdom Teeth & Tooth Extractions</option>
                  <option value="Crowns & Bridges">Dental Crowns & Bridges</option>
                </optgroup>
              </select>
            </div>

            {formErrors.step1 && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                {formErrors.step1}
              </p>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary-dark transition-all transform hover:-translate-y-0.5"
              >
                <span>Next: Choose Date & Time</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                2. Choose Appointment Date & Time
              </h3>
              <p className="text-sm text-slate-500">
                Pick your preferred consultation slot at {formData.branch}.
              </p>
            </div>

            {/* Date Input */}
            <div>
              <label
                htmlFor="booking-date"
                className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2"
              >
                Select Preferred Date
              </label>
              <div className="relative">
                <input
                  id="booking-date"
                  type="date"
                  min={todayStr}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800 font-medium"
                />
                <Calendar className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Available Time Slots
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: slot })}
                    className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border flex items-center justify-center space-x-1.5 ${
                      formData.timeSlot === slot
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot}</span>
                  </button>
                ))}
              </div>
            </div>

            {formErrors.step2 && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                {formErrors.step2}
              </p>
            )}

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary-dark transition-all transform hover:-translate-y-0.5"
              >
                <span>Next: Patient Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                3. Patient Contact & Insurance Details
              </h3>
              <p className="text-sm text-slate-500">
                Your information is kept confidential under strict medical privacy standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grace Wanjiku"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    formErrors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800`}
                />
                {formErrors.fullName && (
                  <span className="text-xs text-red-500 mt-1 block">{formErrors.fullName}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Phone Number (Calls & WhatsApp) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +254 712 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    formErrors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800`}
                />
                {formErrors.phone && (
                  <span className="text-xs text-red-500 mt-1 block">{formErrors.phone}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. grace@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Payment / Health Insurance Scheme
                </label>
                <select
                  value={formData.insuranceScheme}
                  onChange={(e) => setFormData({ ...formData, insuranceScheme: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800 font-medium"
                >
                  <option value="Direct Private Cash/Card/M-Pesa">Direct Cash / M-Pesa / Card</option>
                  <option value="AAR Insurance">AAR Insurance (Direct Billing)</option>
                  <option value="Jubilee Insurance">Jubilee Insurance (Direct Billing)</option>
                  <option value="Britam">Britam (Direct Billing)</option>
                  <option value="CIC Group">CIC Group (Direct Billing)</option>
                  <option value="APA Insurance">APA Insurance (Direct Billing)</option>
                  <option value="GA Insurance">GA Insurance (Direct Billing)</option>
                  <option value="Madison Insurance">Madison Insurance (Direct Billing)</option>
                  <option value="Equity Bank Scheme">Equity Bank Staff Scheme</option>
                  <option value="KCB Bank Scheme">KCB Bank Staff Scheme</option>
                  <option value="Co-operative Bank Scheme">Co-operative Bank Scheme</option>
                  <option value="Other Kenyan Insurance">Other Kenyan Insurance Scheme</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Any specific dental concerns or medical notes? (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Toothache on upper left, sensitive to cold water, dental anxiety..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800"
              />
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary-dark transition-all transform hover:-translate-y-0.5"
              >
                <span>Review & Finish Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: CONFIRMATION */}
        {currentStep === 4 && (
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold mb-2">
                Booking Reference: {bookingRef}
              </span>
              <h3 className="text-2xl font-bold text-navy-900">
                Appointment Scheduled Successfully!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm mt-1">
                Thank you, <strong>{formData.fullName}</strong>. We have reserved your consultation slot at Deans Dental Clinic.
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2.5 text-sm">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Clinic Location:</span>
                <strong className="text-navy-900 font-bold">{formData.branch}</strong>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Treatment:</span>
                <strong className="text-navy-900 font-bold">{formData.service}</strong>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Date & Time:</span>
                <strong className="text-primary font-bold">{formData.date} at {formData.timeSlot}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Payment Scheme:</span>
                <span className="text-slate-700 font-medium">{formData.insuranceScheme}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setCurrentStep(1);
                  setFormData({
                    branch: initialBranch,
                    service: initialService,
                    date: tomorrowStr,
                    timeSlot: '10:30 AM',
                    fullName: '',
                    phone: '',
                    email: '',
                    insuranceScheme: 'Direct Private Cash/Card',
                    notes: '',
                  });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors text-sm"
              >
                Book Another Slot
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
