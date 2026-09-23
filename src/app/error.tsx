'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, Phone, Mail } from 'lucide-react';
import { hotelInfo } from '@/data/hotel';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors safely for monitoring
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Captured client error:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-[#121110] text-[#FAF8F5] flex flex-col justify-center items-center px-6 py-24 text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-[#B89355] font-semibold block mb-4">
          Villa Monticello
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-[1.08] mb-6">
          A momentary pause in service.
        </h1>

        <p className="font-sans text-base text-white/80 font-light leading-relaxed mb-10 max-w-md">
          We encountered an unexpected technical interruption while loading this page. Our front desk and
          reservations concierge remain entirely at your service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.22em] font-semibold px-8 py-4 transition-all duration-300 shadow-xl"
          >
            <RotateCcw size={15} />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300"
          >
            <ArrowLeft size={15} className="text-[#B89355]" />
            <span>Back Home</span>
          </Link>
        </div>

        {/* Direct Concierge Contact Strip */}
        <div className="pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#8E867A]">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#B89355]" />
            <a href={`tel:${hotelInfo.contact.phone}`} className="hover:text-white transition-colors">
              Direct Desk: {hotelInfo.contact.displayPhone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#B89355]" />
            <a href={`mailto:${hotelInfo.contact.reservationsEmail}`} className="hover:text-white transition-colors">
              {hotelInfo.contact.reservationsEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
