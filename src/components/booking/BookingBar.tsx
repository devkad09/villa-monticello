'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Users, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';
import { hotelInfo } from '@/data/hotel';

interface BookingBarProps {
  isSticky?: boolean;
  className?: string;
  defaultSuite?: string;
}

export function BookingBar({ isSticky = false, className = '', defaultSuite }: BookingBarProps) {
  const router = useRouter();

  // Helper date defaults (tomorrow and 3 days later)
  const getTomorrowStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getCheckoutStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  };

  const [checkIn, setCheckIn] = useState<string>(() => getTomorrowStr());
  const [checkOut, setCheckOut] = useState<string>(() => getCheckoutStr());
  const [guests, setGuests] = useState<number>(2);
  const [error, setError] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDateChange = (type: 'in' | 'out', val: string) => {
    setError('');
    if (type === 'in') {
      setCheckIn(val);
      if (checkOut && val >= checkOut) {
        const nextDay = new Date(val);
        nextDay.setDate(nextDay.getDate() + 1);
        setCheckOut(nextDay.toISOString().split('T')[0]);
      }
    } else {
      if (checkIn && val <= checkIn) {
        setError('Check-out must be after check-in');
        return;
      }
      setCheckOut(val);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!checkIn || !checkOut) {
      setError('Please select check-in and check-out dates');
      return;
    }

    if (checkOut <= checkIn) {
      setError('Check-out must be after check-in');
      return;
    }

    trackEvent('start_booking', {
      checkIn,
      checkOut,
      guests,
      suiteSlug: defaultSuite,
      sourceLocation: isSticky ? 'sticky_booking_bar' : 'inline_booking_bar',
    });

    const params = new URLSearchParams();
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    if (guests) params.set('guests', guests.toString());
    if (defaultSuite) params.set('suite', defaultSuite);

    setIsMobileOpen(false);
    router.push(`/book?${params.toString()}`);
  };

  return (
    <>
      {/* Desktop Booking Bar */}
      <div
        className={`w-full transition-all duration-300 ${className} ${
          isSticky
            ? `fixed top-[72px] sm:top-[80px] left-0 right-0 z-30 bg-[#121110]/95 backdrop-blur-md border-b border-[#DCD5C9]/20 shadow-xl ${
                hasScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
              }`
            : 'bg-[#121110] text-white shadow-2xl border border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6"
          >
            {/* Left Header / Eyebrow */}
            <div className="hidden lg:flex flex-col justify-center min-w-[170px] border-r border-white/10 pr-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block">
                Direct Booking
              </span>
              <span className="font-serif text-base text-white tracking-wide block">
                Check Availability
              </span>
            </div>

            {/* Inputs Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6 flex-1 items-center">
              {/* Check-In */}
              <div className="flex flex-col">
                <label
                  htmlFor={`${isSticky ? 'sticky' : 'inline'}-booking-checkin`}
                  className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A] mb-1 flex items-center gap-1.5"
                >
                  <Calendar size={12} className="text-[#B89355]" />
                  <span>Check-In</span>
                </label>
                <input
                  id={`${isSticky ? 'sticky' : 'inline'}-booking-checkin`}
                  type="date"
                  value={checkIn}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => handleDateChange('in', e.target.value)}
                  className="bg-white/5 border border-white/15 px-3 py-2 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#B89355] transition-colors rounded-none w-full"
                />
              </div>

              {/* Check-Out */}
              <div className="flex flex-col">
                <label
                  htmlFor={`${isSticky ? 'sticky' : 'inline'}-booking-checkout`}
                  className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A] mb-1 flex items-center gap-1.5"
                >
                  <Calendar size={12} className="text-[#B89355]" />
                  <span>Check-Out</span>
                </label>
                <input
                  id={`${isSticky ? 'sticky' : 'inline'}-booking-checkout`}
                  type="date"
                  value={checkOut}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  onChange={(e) => handleDateChange('out', e.target.value)}
                  className="bg-white/5 border border-white/15 px-3 py-2 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#B89355] transition-colors rounded-none w-full"
                />
              </div>

              {/* Guests */}
              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <label
                  htmlFor={`${isSticky ? 'sticky' : 'inline'}-booking-guests`}
                  className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A] mb-1 flex items-center gap-1.5"
                >
                  <Users size={12} className="text-[#B89355]" />
                  <span>Guests</span>
                </label>
                <select
                  id={`${isSticky ? 'sticky' : 'inline'}-booking-guests`}
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="bg-[#121110] border border-white/15 px-3 py-2 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#B89355] transition-colors rounded-none w-full cursor-pointer"
                >
                  <option value={1} className="bg-[#121110] text-white">1 Guest</option>
                  <option value={2} className="bg-[#121110] text-white">2 Guests</option>
                  <option value={3} className="bg-[#121110] text-white">3 Guests</option>
                  <option value={4} className="bg-[#121110] text-white">4 Guests</option>
                </select>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="text-[11px] text-amber-400 font-sans px-2">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex items-center">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.22em] font-medium px-6 sm:px-8 py-3.5 transition-all duration-300 group shrink-0"
              >
                <span>Check Availability</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Fixed Bottom CTA Trigger */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#121110]/95 backdrop-blur-md border-t border-[#DCD5C9]/20 shadow-2xl">
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-[#B89355] text-[#121110] font-sans text-xs uppercase tracking-[0.22em] font-medium shadow-lg"
        >
          <span className="flex items-center gap-2">
            <Calendar size={15} />
            <span>Book Your Stay</span>
          </span>
          <span className="flex items-center gap-1 font-semibold text-[11px]">
            Check Dates →
          </span>
        </button>
      </div>

      {/* Mobile Full-Screen Booking Modal Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-[#121110]/80 backdrop-blur-sm flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="bg-[#121110] text-[#FAF8F5] border-t border-[#B89355]/30 p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#B89355] block">
                    Villa Monticello
                  </span>
                  <h3 className="font-serif text-2xl text-white">Book Your Stay</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label="Close booking modal"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="mobile-booking-checkin"
                    className="font-sans text-xs uppercase tracking-wider text-[#8E867A] block mb-2"
                  >
                    Check-In Date
                  </label>
                  <input
                    id="mobile-booking-checkin"
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleDateChange('in', e.target.value)}
                    className="w-full bg-white/5 border border-white/20 p-3.5 text-white font-sans text-sm rounded-none focus:outline-none focus:border-[#B89355]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile-booking-checkout"
                    className="font-sans text-xs uppercase tracking-wider text-[#8E867A] block mb-2"
                  >
                    Check-Out Date
                  </label>
                  <input
                    id="mobile-booking-checkout"
                    type="date"
                    value={checkOut}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleDateChange('out', e.target.value)}
                    className="w-full bg-white/5 border border-white/20 p-3.5 text-white font-sans text-sm rounded-none focus:outline-none focus:border-[#B89355]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile-booking-guests"
                    className="font-sans text-xs uppercase tracking-wider text-[#8E867A] block mb-2"
                  >
                    Number of Guests
                  </label>
                  <select
                    id="mobile-booking-guests"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="w-full bg-[#1C1A18] border border-white/20 p-3.5 text-white font-sans text-sm rounded-none focus:outline-none focus:border-[#B89355]"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>

                {error && (
                  <div className="text-xs text-amber-400 font-sans">{error}</div>
                )}

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="w-full bg-[#B89355] text-[#121110] font-sans text-xs uppercase tracking-[0.24em] font-semibold py-4 hover:bg-[#c9a66d] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Check Availability</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="text-center pt-2">
                  <a
                    href={hotelInfo.bookingEngineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-sans text-[#8E867A] hover:text-[#B89355] underline tracking-wider"
                  >
                    Open Official Swiftbook Reservation Engine Direct →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
