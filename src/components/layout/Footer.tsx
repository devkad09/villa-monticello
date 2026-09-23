'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { hotelInfo } from '@/data/hotel';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ArrowRight } from 'lucide-react';

export function Footer() {
  const [accraTime, setAccraTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Accra',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setAccraTime(timeStr);
      } catch {
        const d = new Date();
        setAccraTime(d.toTimeString().substring(0, 8));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#121110] text-[#FAF8F5] border-t border-white/10 overflow-hidden">
      {/* Upper Grand Editorial Statement & Primary Booking CTA Strip */}
      <div className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            {/* Grand Typography Wordmark */}
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#B89355] font-semibold block mb-4">
                Boutique Hotel · Accra, Ghana
              </span>
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[0.95]">
                VILLA<br />MONTICELLO
              </div>
              <p className="font-serif italic text-lg sm:text-xl text-[#8E867A] mt-4 font-light">
                Where exceptional is standard.
              </p>
            </div>

            {/* Prominent Closing Booking CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-3 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.24em] font-semibold px-8 py-4.5 transition-all duration-300 group shadow-2xl"
              >
                <span>Book Your Stay</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href={hotelInfo.bookingEngineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-white hover:bg-white/5 font-sans text-xs uppercase tracking-[0.2em] px-8 py-4.5 transition-all duration-300 group"
              >
                <span>Swiftbook Direct Engine</span>
                <ArrowUpRight
                  size={14}
                  className="text-[#B89355] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main 4-Column Directory */}
      <div className="py-16 sm:py-20 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Column 1: EXPLORE (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block">
                Explore
              </span>
              <ul className="space-y-3 font-sans text-xs text-[#8E867A]">
                <li>
                  <Link href="/suites" className="hover:text-white transition-colors block">
                    Stay · 16 Bespoke Suites
                  </Link>
                </li>
                <li>
                  <Link href="/dine" className="hover:text-white transition-colors block">
                    Dine · The Brasserie Restaurant
                  </Link>
                </li>
                <li>
                  <Link href="/#experience" className="hover:text-white transition-colors block">
                    Experience · Curated Accra
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white transition-colors block">
                    Events · Executive Gatherings
                  </Link>
                </li>
                <li>
                  <Link href="/offers" className="hover:text-white transition-colors block">
                    Offers · Exclusive Packages
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors block">
                    About · Our Story & Philosophy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: PLAN YOUR STAY (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block">
                Plan Your Stay
              </span>
              <ul className="space-y-3 font-sans text-xs text-[#8E867A]">
                <li>
                  <Link href="/book" className="text-white hover:text-[#B89355] transition-colors block font-medium">
                    Book Your Stay Gateway →
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="hover:text-white transition-colors block">
                    Location & Directions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors block">
                    Contact The Hotel
                  </Link>
                </li>
                <li>
                  <a
                    href={hotelInfo.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B89355] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>The Koncierge 24/7 (WhatsApp)</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a
                    href={hotelInfo.bookingEngineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Official Swiftbook Engine</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: FIND US (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block">
                Find Us
              </span>
              <div className="space-y-3 font-sans text-xs text-[#8E867A] font-light leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-[#B89355] shrink-0 mt-0.5" />
                  <span>
                    21 A Mankata Avenue Link<br />
                    Airport Residential Area<br />
                    Accra, Ghana (GA-085-4150)
                  </span>
                </div>

                <div className="pt-1 text-[#8E867A]">
                  5 Minutes from Kotoka International Airport (ACC)
                </div>

                {accraTime && (
                  <div className="flex items-center gap-2.5 pt-2 text-[#FAF8F5]/90">
                    <Clock size={15} className="text-[#B89355] shrink-0" />
                    <span className="font-mono text-[11px] tracking-wider">
                      Accra Time: {accraTime} GMT
                    </span>
                  </div>
                )}

                <div className="text-[11px] font-mono text-[#8E867A]/70 pt-1">
                  5.6037° N, -0.1870° W
                </div>
              </div>
            </div>

            {/* Column 4: CONNECT (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block">
                Connect
              </span>

              <div className="space-y-3 font-sans text-xs text-[#8E867A]">
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-[#B89355] shrink-0" />
                  <a href={`tel:${hotelInfo.contact.phone}`} className="hover:text-white transition-colors">
                    {hotelInfo.contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-[#B89355] shrink-0" />
                  <a href={`mailto:${hotelInfo.contact.reservationsEmail}`} className="hover:text-white transition-colors">
                    {hotelInfo.contact.reservationsEmail}
                  </a>
                </div>

                {/* Verified Social Media Channels */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-4">
                  <a
                    href={hotelInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Villa Monticello Instagram"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B89355] text-white hover:text-[#121110] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={hotelInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Villa Monticello Facebook"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B89355] text-white hover:text-[#121110] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.694 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                    </svg>
                  </a>
                  <a
                    href={hotelInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Villa Monticello LinkedIn"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B89355] text-white hover:text-[#121110] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Legal Notices & Back to Top */}
      <div className="py-8 text-xs font-sans text-[#8E867A]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p>© {new Date().getFullYear()} Villa Monticello Boutique Hotel. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Stay
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>

            <div>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
