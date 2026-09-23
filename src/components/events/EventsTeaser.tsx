'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, Building2 } from 'lucide-react';
import { eventSpaces } from '@/data/events';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const EventsTeaser: React.FC = () => {
  return (
    <Section
      id="events"
      spacing="spacious"
      className="bg-[#121110] text-[#FAF8F5] relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/50 group">
              <Image
                src="https://villamonticello.com/wp-content/uploads/2026/02/last-emperor1.jpg"
                alt="Executive Boardroom and Meetings at Villa Monticello"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block">
                  The Executive Boardroom
                </span>
                <span className="font-serif text-2xl mt-1 block">
                  Encrypted AV · Seating for 12 Leaders
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Space Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-3">
                Gatherings & Occasions
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light leading-[1.08] tracking-tight">
                Spaces for moments that matter.
              </h2>

              <p className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed mt-5">
                From high-stakes board meetings in our acoustically shielded executive
                salon to candlelit anniversary dinners for 50 and full estate buyouts for
                200 guests under Accra’s evening sky. Supported by dedicated sommelier
                pairings and culinary choreography from The Brasserie.
              </p>

              {/* Spaces Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-xs">
                <div>
                  <span className="font-serif text-xl sm:text-2xl text-white block">
                    12 Guests
                  </span>
                  <span className="font-sans uppercase tracking-[0.16em] text-[#8E867A] text-[10px] mt-0.5 block">
                    The Board Room
                  </span>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl text-white block">
                    50 Guests
                  </span>
                  <span className="font-sans uppercase tracking-[0.16em] text-[#8E867A] text-[10px] mt-0.5 block">
                    Private Dining
                  </span>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl text-white block">
                    200 Guests
                  </span>
                  <span className="font-sans uppercase tracking-[0.16em] text-[#8E867A] text-[10px] mt-0.5 block">
                    Full Estate Buyout
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href="/events"
                  icon={<ArrowRight size={15} />}
                  className="!bg-white !text-[#121110] hover:!bg-[#FAF8F5]"
                >
                  Plan Your Event
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  href="/events#inquiry"
                >
                  Direct Event Inquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
