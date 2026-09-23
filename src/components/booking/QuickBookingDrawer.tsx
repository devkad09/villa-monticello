'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, BedDouble, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { hotelConfig, hotelInfo } from '@/data/hotel';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';

interface QuickBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickBookingDrawer: React.FC<QuickBookingDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [suiteCategory, setSuiteCategory] = useState('all');

  const drawerRef = useRef<HTMLElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Default checkIn to today, checkOut to 2 days later
    const today = new Date();
    const future = new Date(today);
    future.setDate(future.getDate() + 2);

    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(future.toISOString().split('T')[0]);
  }, []);

  // Track triggering element to restore focus when drawer closes
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';

      // Auto-focus first focusable element inside drawer
      const timer = setTimeout(() => {
        if (drawerRef.current) {
          const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            focusable[0].focus();
          }
        }
      }, 50);

      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      if (triggerElementRef.current && typeof triggerElementRef.current.focus === 'function') {
        triggerElementRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key & Focus Trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap navigation
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleBookingRedirect = () => {
    trackEvent('click_check_availability', {
      sourceLocation: 'quick_booking_drawer',
      checkIn,
      checkOut,
      guests: parseInt(guests, 10),
      suiteSlug: suiteCategory !== 'all' ? suiteCategory : undefined,
    });

    // Open official swiftbook booking engine directly
    window.open(hotelInfo.bookingEngineUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <motion.aside
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-drawer-title"
            className="relative w-full max-w-lg h-full bg-[#1A1816] text-[#FAF8F5] border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 p-6 sm:p-10"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block">
                    Direct Reservation
                  </span>
                  <h2
                    id="booking-drawer-title"
                    className="font-serif text-2xl sm:text-3xl text-white mt-1 font-normal"
                  >
                    Reserve Your Stay
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close reservation drawer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Booking Form Fields */}
              <div className="space-y-6">
                {/* Dates Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="drawer-checkin"
                      className="flex items-center gap-2 text-xs font-sans text-white/80 mb-2 uppercase tracking-wider"
                    >
                      <Calendar size={13} className="text-[#B89355]" />
                      <span>Check-In</span>
                    </label>
                    <input
                      id="drawer-checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#121110] border border-white/15 px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B89355] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="drawer-checkout"
                      className="flex items-center gap-2 text-xs font-sans text-white/80 mb-2 uppercase tracking-wider"
                    >
                      <Calendar size={13} className="text-[#B89355]" />
                      <span>Check-Out</span>
                    </label>
                    <input
                      id="drawer-checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#121110] border border-white/15 px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B89355] transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Guests & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="drawer-guests"
                      className="flex items-center gap-2 text-xs font-sans text-white/80 mb-2 uppercase tracking-wider"
                    >
                      <Users size={13} className="text-[#B89355]" />
                      <span>Guests</span>
                    </label>
                    <select
                      id="drawer-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#121110] border border-white/15 px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B89355] transition-colors rounded-none cursor-pointer"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="drawer-category"
                      className="flex items-center gap-2 text-xs font-sans text-white/80 mb-2 uppercase tracking-wider"
                    >
                      <BedDouble size={13} className="text-[#B89355]" />
                      <span>Suite Preference</span>
                    </label>
                    <select
                      id="drawer-category"
                      value={suiteCategory}
                      onChange={(e) => setSuiteCategory(e.target.value)}
                      className="w-full bg-[#121110] border border-white/15 px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B89355] transition-colors rounded-none cursor-pointer"
                    >
                      <option value="all">Any Available Suite</option>
                      <option value="presidential">Presidential Suite (Nelson Mandela / Kwame Nkrumah)</option>
                      <option value="executive-plus">Executive Plus Suite (Zambezi / Lake Como)</option>
                      <option value="executive">Executive Suite (Provence / Marrakesh / Safari)</option>
                      <option value="junior">Junior Suite (Manhattan / Elmina / Casablanca)</option>
                    </select>
                  </div>
                </div>

                {/* Direct Booking Guarantees */}
                <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-[#8E867A]">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#B89355] block font-medium">
                    Direct Booking Privileges
                  </span>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#B89355] shrink-0" />
                    <span>Best guaranteed rate & flexible cancellation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#B89355] shrink-0" />
                    <span>Complimentary Kotoka VIP transfer on select suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#B89355] shrink-0" />
                    <span>Full gourmet breakfast at The Brasserie included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-white/10 space-y-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleBookingRedirect}
                icon={<ArrowRight size={16} />}
                className="w-full py-4 text-xs font-semibold !bg-[#B89355] !text-[#121110] hover:!bg-[#c9a66d]"
              >
                CHECK AVAILABILITY →
              </Button>

              <div className="flex items-center justify-between text-xs text-[#8E867A] pt-2">
                <span className="flex items-center gap-1.5">
                  <Phone size={13} className="text-[#B89355]" />
                  Prefer phone?
                </span>
                <a
                  href={`tel:${hotelInfo.contact.phone}`}
                  className="text-white hover:text-[#B89355] transition-colors font-mono"
                >
                  {hotelInfo.contact.displayPhone}
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
