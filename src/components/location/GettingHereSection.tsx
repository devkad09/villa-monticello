'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Plane, Car, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function GettingHereSection() {
  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Villa+Monticello+Boutique+Hotel+Accra';

  return (
    <Section spacing="default" className="bg-[#FAF8F5]">
      <Container>
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#B89355] font-semibold block mb-2">
            Arrival Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal leading-[1.12]">
            Getting Here
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#625C53] font-light mt-3 leading-relaxed">
            Located in Accra’s central Airport Residential Area, Villa Monticello provides effortless access
            from the terminal gates to our tranquil courtyard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Arrival 1: Airport Transfers */}
          <div className="p-8 bg-white border border-[#DCD5C9]/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#121110] text-[#B89355] flex items-center justify-center mb-6">
                <Plane size={18} />
              </div>
              <h3 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                From Kotoka (ACC)
              </h3>
              <p className="font-sans text-xs text-[#625C53] font-light leading-relaxed">
                Just 5 minutes from Kotoka International Airport. Our private chauffeur greets you directly
                at the terminal arrival hall with luggage assistance.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#DCD5C9]/50 text-xs text-[#B89355] font-medium font-sans">
              Complimentary on select suites
            </div>
          </div>

          {/* Arrival 2: Private Car */}
          <div className="p-8 bg-white border border-[#DCD5C9]/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#121110] text-[#B89355] flex items-center justify-center mb-6">
                <Car size={18} />
              </div>
              <h3 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                By Private Car
              </h3>
              <p className="font-sans text-xs text-[#625C53] font-light leading-relaxed">
                Accessible via Mankata Avenue from Liberation Road. Secure on-site executive parking and
                24/7 security guard presence at the private estate gate.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#DCD5C9]/50 text-xs text-[#8E867A] font-sans">
              Secure On-Site Parking
            </div>
          </div>

          {/* Arrival 3: Ride & Chauffeur Services */}
          <div className="p-8 bg-white border border-[#DCD5C9]/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#121110] text-[#B89355] flex items-center justify-center mb-6">
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                Ride Service & Taxis
              </h3>
              <p className="font-sans text-xs text-[#625C53] font-light leading-relaxed">
                Ride-hailing applications (Uber, Bolt) directly identify Villa Monticello. For unhurried travel,
                our Koncierge team can coordinate private daily chauffeur hire.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#DCD5C9]/50 text-xs text-[#8E867A] font-sans">
              24/7 Gate Verification
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="p-8 bg-[#121110] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block mb-1">
              Ready for Arrival
            </span>
            <h4 className="font-serif text-2xl text-white font-normal">
              Need Us to Arrange Your Airport Transfer?
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.2em] font-medium px-6 py-3.5 transition-colors"
            >
              <span>Contact The Koncierge</span>
              <ArrowRight size={14} />
            </Link>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-white font-sans text-xs uppercase tracking-[0.2em] px-6 py-3.5 transition-colors"
            >
              <span>Get Directions</span>
              <ExternalLink size={13} className="text-[#B89355]" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
