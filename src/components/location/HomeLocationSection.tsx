'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowRight } from 'lucide-react';

export function HomeLocationSection() {
  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Villa+Monticello+Boutique+Hotel+Accra';

  return (
    <Section
      id="location"
      spacing="spacious"
      className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Location Story & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-3">
              The Enclave
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal leading-[1.12]">
              Airport Residential Area. <br className="hidden sm:inline" />
              Accra’s most serene quarter.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#625C53] font-light leading-relaxed mt-6">
              Villa Monticello is secluded along Mankata Avenue Link in Accra’s tranquil Airport
              Residential Area. Positioned just five minutes from Kotoka International Airport, our
              residence combines peaceful residential greenery with seamless proximity to the city’s
              executive institutions, embassies, and cultural landmarks.
            </p>

            {/* Travel Distances */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#DCD5C9]/60">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#121110]">
                  5 Mins
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A] mt-1 block">
                  Kotoka Airport
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#121110]">
                  8 Mins
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A] mt-1 block">
                  Embassy District
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#121110]">
                  12 Mins
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A] mt-1 block">
                  Osu & Downtown
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/location"
                className="inline-flex items-center gap-2 bg-[#121110] text-[#FAF8F5] font-sans text-xs uppercase tracking-[0.18em] px-6 py-3.5 hover:bg-[#1C1A18] transition-colors group"
              >
                <span>Explore The Location</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 text-[#B89355]"
                />
              </Link>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#121110] hover:text-[#B89355] py-3.5 transition-colors"
              >
                <span>Get Directions →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Visual & Address Plaque */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/15 group">
              <Image
                src="https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg"
                alt="Villa Monticello in Airport Residential Area Accra"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent pointer-events-none" />

              {/* Address Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block">
                    Villa Monticello Boutique Hotel
                  </span>
                  <p className="font-serif text-lg sm:text-xl mt-1">
                    21 A Mankata Avenue Link
                  </p>
                  <p className="font-sans text-xs text-white/80 mt-0.5">
                    Airport Residential Area, Accra
                  </p>
                </div>

                <div className="sm:text-right">
                  <span className="font-mono text-xs text-white/70 block">
                    5.6037° N, -0.1870° W
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#B89355] block mt-0.5">
                    GA-085-4150
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
