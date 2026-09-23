'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  date?: string;
  guests?: string;
  message: string;
}

interface InquiryFormProps {
  title?: string;
  subtitle?: string;
  defaultType?: string;
  typeOptions?: string[];
  showDateGuests?: boolean;
  className?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  title = 'How Can We Help?',
  subtitle = 'Reach out to our dedicated concierge and reservations team for bespoke arrangements.',
  defaultType = 'General Concierge Inquiry',
  typeOptions = [
    'General Concierge Inquiry',
    'The Brasserie Table Reservation',
    'Executive Boardroom Meeting',
    'Private Dining or Anniversary',
    'Celebration or Gala Buyout',
    'Airport VIP Transfer Arrangement',
  ],
  showDateGuests = true,
  className = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: defaultType,
    date: '',
    guests: '1–2 Guests',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your request.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.fields) {
          setErrors(data.fields);
        }
        setStatus('error');
        return;
      }

      trackEvent('submit_contact', {
        inquiryType: formData.inquiryType,
      });

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: defaultType,
      date: '',
      guests: '1–2 Guests',
      message: '',
    });
    setErrors({});
    setStatus('idle');
  };

  return (
    <div
      className={`bg-[#FAF8F5] border border-[#DCD5C9] p-8 sm:p-12 lg:p-14 shadow-xl ${className}`}
    >
      <div className="max-w-2xl mb-8">
        <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#B89355] font-semibold block mb-2">
          Concierge Direct Desk
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="font-sans text-sm sm:text-base text-[#625C53] font-light mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-12 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-full bg-[#121110] text-[#FAF8F5] flex items-center justify-center mb-6">
              <CheckCircle2 size={24} className="text-[#B89355]" />
            </div>
            <h4 className="font-serif text-3xl text-[#121110] font-normal">
              Inquiry Received
            </h4>
            <p className="font-sans text-base text-[#625C53] font-light mt-3 max-w-lg leading-relaxed">
              Thank you, {formData.name}. Our concierge and reservations management team
              has received your request and will reply directly to {formData.email} within
              several business hours.
            </p>
            <div className="mt-6 pt-6 border-t border-[#DCD5C9]/60 text-xs text-[#8E867A] space-y-1">
              <p>For immediate inquiries, you may also reach our front desk directly:</p>
              <p className="font-mono text-xs sm:text-sm text-[#121110] font-medium pt-1">
                +233 55 721 6752 · reservations@villamonticello.com
              </p>
            </div>
            <Button
              variant="secondary"
              size="md"
              onClick={resetForm}
              className="mt-8 !border-[#121110] !text-[#121110] hover:!bg-[#121110] hover:!text-white"
            >
              Submit Another Inquiry
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] block mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Elena Mensah"
                  className={`w-full bg-white border ${
                    errors.name ? 'border-red-600' : 'border-[#DCD5C9]'
                  } px-4 py-3 text-sm text-[#121110] placeholder:text-[#8E867A]/50 focus:outline-none focus:border-[#121110] transition-colors rounded-none`}
                />
                {errors.name && (
                  <span className="font-sans text-xs text-red-600 mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="inquiry-email"
                  className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] block mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className={`w-full bg-white border ${
                    errors.email ? 'border-red-600' : 'border-[#DCD5C9]'
                  } px-4 py-3 text-sm text-[#121110] placeholder:text-[#8E867A]/50 focus:outline-none focus:border-[#121110] transition-colors rounded-none`}
                />
                {errors.email && (
                  <span className="font-sans text-xs text-red-600 mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Phone & Inquiry Type Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="inquiry-phone"
                  className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] block mb-2"
                >
                  Contact Telephone *
                </label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+233 ... or international"
                  className={`w-full bg-white border ${
                    errors.phone ? 'border-red-600' : 'border-[#DCD5C9]'
                  } px-4 py-3 text-sm text-[#121110] placeholder:text-[#8E867A]/50 focus:outline-none focus:border-[#121110] transition-colors rounded-none`}
                />
                {errors.phone && (
                  <span className="font-sans text-xs text-red-600 mt-1 block">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="inquiry-type"
                  className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] block mb-2"
                >
                  Nature of Request
                </label>
                <select
                  id="inquiry-type"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-white border border-[#DCD5C9] px-4 py-3 text-sm text-[#121110] focus:outline-none focus:border-[#121110] transition-colors rounded-none"
                >
                  {typeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Optional Date & Guests Row */}
            {showDateGuests && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="inquiry-date"
                    className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] block mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="inquiry-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-[#DCD5C9] px-4 py-3 text-sm text-[#121110] focus:outline-none focus:border-[#121110] transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-guests"
                    className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] block mb-2"
                  >
                    Expected Guests / Party Size
                  </label>
                  <select
                    id="inquiry-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-white border border-[#DCD5C9] px-4 py-3 text-sm text-[#121110] focus:outline-none focus:border-[#121110] transition-colors rounded-none"
                  >
                    <option value="1–2 Guests">1–2 Guests</option>
                    <option value="3–6 Guests">3–6 Guests</option>
                    <option value="7–12 Guests (Boardroom)">7–12 Guests (Boardroom)</option>
                    <option value="13–50 Guests (Private Dining)">13–50 Guests (Private Dining)</option>
                    <option value="50–200 Guests (Gala / Wedding)">50–200 Guests (Gala / Wedding)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Message Area */}
            <div>
              <label
                htmlFor="inquiry-message"
                className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] block mb-2"
              >
                Detailed Message & Requirements *
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe your event, dietary preferences, or specific concierge arrangements..."
                className={`w-full bg-white border ${
                  errors.message ? 'border-red-600' : 'border-[#DCD5C9]'
                } px-4 py-3 text-sm text-[#121110] placeholder:text-[#8E867A]/50 focus:outline-none focus:border-[#121110] transition-colors rounded-none resize-y`}
              />
              {errors.message && (
                <span className="font-sans text-xs text-red-600 mt-1 block">
                  {errors.message}
                </span>
              )}
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-xs text-red-600 p-3 bg-red-50 border border-red-200">
                <AlertCircle size={14} />
                <span>Unable to dispatch request. Please contact +233 55 721 6752 directly.</span>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                disabled={status === 'submitting'}
                icon={
                  status === 'submitting' ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <ArrowRight size={16} />
                  )
                }
                className="w-full sm:w-auto !bg-[#121110] !text-[#FAF8F5] hover:!bg-[#1C1A18]"
              >
                {status === 'submitting' ? 'Submitting Inquiry...' : 'Send Request'}
              </Button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
