'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { hotelInfo } from '@/data/hotel';

interface FinalConversionSectionProps {
  onOpenBooking?: () => void;
}

export function FinalConversionSection({ onOpenBooking }: FinalConversionSectionProps) {
  const handleBookingClick = () => {
    trackEvent('click_book_now', { sourceLocation: 'final_conversion_section' });
    if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] bg-[#121110] flex items-center justify-center overflow-hidden">
      {/* Background Photography with Parallax/Scale */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg"
          alt="Villa Monticello Courtyard Sanctuary at Dusk"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-75 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/60 to-[#121110]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 w-full py-20 sm:py-28">
        <Container size="narrow">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            {/* Subtle Eyebrow */}
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.32em] text-[#B89355] font-semibold block mb-4">
              An Intimate Invitation
            </span>

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.06] mb-6">
              Your Accra story <br className="hidden sm:inline" />
              begins here.
            </h2>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl mb-10">
              Sixteen individually designed suites. Contemporary brasserie dining. Five minutes
              from Kotoka International Airport. Allow us to prepare your welcome.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {onOpenBooking ? (
                <button
                  type="button"
                  onClick={handleBookingClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.22em] font-medium px-8 py-4 transition-all duration-300 group shadow-xl"
                >
                  <span>Book Your Stay</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              ) : (
                <Link
                  href="/book"
                  onClick={handleBookingClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.22em] font-medium px-8 py-4 transition-all duration-300 group shadow-xl"
                >
                  <span>Book Your Stay</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              )}

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white text-white bg-white/5 hover:bg-white/10 font-sans text-xs uppercase tracking-[0.22em] px-8 py-4 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Contact The Koncierge</span>
              </Link>
            </div>

            {/* Location & Guarantee note */}
            <div className="pt-12 mt-12 border-t border-white/15 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E867A] gap-4">
              <span>21 A Mankata Avenue Link · Airport Residential Area</span>
              <span className="text-[#B89355] uppercase tracking-wider font-sans text-[11px]">
                Best Rate Guarantee on Direct Bookings
              </span>
              <span>5 Min to Kotoka (ACC)</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
