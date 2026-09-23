'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigationItems, hotelInfo } from '@/data/hotel';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { QuickBookingDrawer } from '@/components/booking/QuickBookingDrawer';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInternalBookingOpen, setIsInternalBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      setIsInternalBookingOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#121110]/95 backdrop-blur-md py-4 border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        {/* Subtle top ambient scrim when transparent to ensure pristine contrast */}
        {!isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/80 via-[#121110]/30 to-transparent pointer-events-none -z-10" />
        )}

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Brand Wordmark (Left) */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none"
            aria-label="Villa Monticello Home"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.12em] uppercase text-[#FAF8F5] transition-opacity duration-300 group-hover:opacity-80">
              Villa Monticello
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[#B89355] font-medium transition-opacity duration-300">
              Accra · Ghana
            </span>
          </Link>

          {/* Desktop Navigation Links (Center) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#FAF8F5]/85 hover:text-white transition-colors duration-300 py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B89355] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle (Right) */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={handleOpenBooking}
              className="hidden sm:inline-flex !bg-[#B89355] !text-[#121110] hover:!bg-[#c9a66d] border-none font-semibold"
              aria-label="Book your stay"
            >
              Book Your Stay →
            </Button>

            {/* Mobile Minimalist Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white p-2 rounded-sm text-white"
            >
              <span className="w-6 h-[1.5px] bg-[#FAF8F5] transition-transform duration-300" />
              <span className="w-4 h-[1.5px] bg-[#B89355] self-end transition-transform duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Internal Booking Drawer when onOpenBooking is not provided */}
      {!onOpenBooking && (
        <QuickBookingDrawer
          isOpen={isInternalBookingOpen}
          onClose={() => setIsInternalBookingOpen(false)}
        />
      )}
    </>
  );
};
