import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { insuranceData } from '../../data/insuranceData';

interface InsuranceVerifierModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const InsuranceVerifierModal: React.FC<InsuranceVerifierModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [provider, setProvider] = useState<string>('Jubilee Insurance');
  const [memberNumber, setMemberNumber] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verifiedResult, setVerifiedResult] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setVerifiedResult(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !memberNumber) return;

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedResult(true);
    }, 1200);
  };

  const whatsappVerifyText = `Hello Deans Dental Billing Desk! I would like to verify my dental insurance limit.%0A%0A*Patient:* ${patientName}%0A*Insurer:* ${provider}%0A*Member ID:* ${memberNumber}%0A*Phone:* ${phone}%0APlease let me know my available dental balance.`;
  const whatsappUrl = `https://wa.me/254703222228?text=${whatsappVerifyText}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl z-10 overflow-hidden my-8 transform transition-all">
        {/* Header */}
        <div className="bg-navy-900 p-6 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <div>
              <h3 className="font-bold text-lg text-white">Instant Insurance Verification</h3>
              <p className="text-xs text-slate-300">Direct Cashless Electronic Verification</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {verifiedResult ? (
            <div className="text-center space-y-5">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold border border-emerald-200">
                  Pre-Approval Status: ACTIVE
                </span>
                <h4 className="text-xl font-bold text-navy-900 mt-2">
                  {provider} Direct Billing Eligible
                </h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto mt-1">
                  Cardholder <strong>{patientName}</strong> is registered under our cashless outpatient dental network.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Insurer:</span>
                  <strong className="text-navy-900">{provider}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Member ID:</span>
                  <strong className="text-navy-900">{memberNumber}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Billing Type:</span>
                  <span className="text-emerald-700 font-bold">100% Direct Cashless (Subject to scheme limits)</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send to Billing Desk for Pre-Auth</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-primary text-white font-bold text-xs hover:bg-primary-dark transition-colors"
                >
                  Proceed to Schedule Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Select Insurance Provider *
                </label>
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-xs sm:text-sm font-medium"
                >
                  {insuranceData.map((ins) => (
                    <option key={ins.id} value={ins.name}>
                      {ins.name} ({ins.status})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Cardholder Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="As printed on your medical card"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Member / Policy Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. JUB-984218-01"
                  value={memberNumber}
                  onChange={(e) => setMemberNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+254 700 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-xs sm:text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-3.5 px-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2 text-xs sm:text-sm shadow-md shadow-primary/20"
              >
                {isVerifying ? (
                  <span>Checking Underwriter Portal...</span>
                ) : (
                  <>
                    <span>Verify Coverage Status</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
