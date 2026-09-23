'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react';
import { navigationItems, hotelInfo } from '@/data/hotel';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [accraTime, setAccraTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Ghana operates on GMT/UTC+0 year-round
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Accra',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setAccraTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: 'easeInOut' as const,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: 'easeInOut' as const,
      },
    },
  };

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 25 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu-overlay"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#121110] text-[#FAF8F5] px-6 sm:px-10 py-8 overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.12em] uppercase text-white">
                Villa Monticello
              </span>
              <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#B89355] mt-0.5">
                Accra, Ghana
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <motion.div
            variants={containerVariants}
            className="my-auto py-10 flex flex-col gap-6"
          >
            {navigationItems.map((item, index) => (
              <motion.div key={item.label} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans text-xs text-[#8E867A] tracking-widest font-mono">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[#8E867A] opacity-0 group-hover:opacity-100 group-hover:text-[#B89355] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </Link>
                {item.description && (
                  <p className="font-sans text-xs text-[#8E867A] pl-8 mt-1 font-light">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Information & CTA */}
          <div className="flex flex-col gap-6 border-t border-white/10 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#8E867A]">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#B89355] shrink-0" />
                <span>Airport Residential Area, Accra</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#B89355] shrink-0" />
                <span>Local Time: {accraTime ? `${accraTime} GMT` : 'Loading...'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#B89355] shrink-0" />
                <a
                  href={`tel:${hotelInfo.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {hotelInfo.contact.displayPhone}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full !bg-[#B89355] !text-[#121110] font-semibold"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
              >
                Book Your Stay →
              </Button>
              <Button
                variant="secondary"
                size="md"
                href={hotelInfo.bookingEngineUrl}
                isExternal
                className="w-full"
              >
                Direct Engine
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
