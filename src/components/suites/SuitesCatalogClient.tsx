'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Maximize2, BedDouble, CalendarCheck } from 'lucide-react';
import { Suite, SuiteCategory } from '@/types/suite';
import { hotelInfo } from '@/data/hotel';
import { Navbar } from '@/components/navigation/Navbar';
import { QuickBookingDrawer } from '@/components/booking/QuickBookingDrawer';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

import { BackNavigation } from '@/components/navigation/BackNavigation';

interface SuitesCatalogClientProps {
  initialSuites: Suite[];
}

export const SuitesCatalogClient: React.FC<SuitesCatalogClientProps> = ({
  initialSuites,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const categories = [
    { label: 'All', value: 'All', count: initialSuites.length },
    {
      label: 'Presidential Suite',
      value: 'Presidential Suite',
      count: initialSuites.filter((s) => s.category === 'Presidential Suite').length,
    },
    {
      label: 'Executive Plus',
      value: 'Executive Plus',
      count: initialSuites.filter((s) => s.category === 'Executive Plus').length,
    },
    {
      label: 'Executive Suite',
      value: 'Executive Suite',
      count: initialSuites.filter((s) => s.category === 'Executive Suite').length,
    },
    {
      label: 'Junior Suite',
      value: 'Junior Suite',
      count: initialSuites.filter((s) => s.category === 'Junior Suite').length,
    },
  ];

  const filteredSuites =
    selectedCategory === 'All'
      ? initialSuites
      : initialSuites.filter((s) => s.category === selectedCategory);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Editorial Collection Hero */}
        <section className="relative w-full pt-32 sm:pt-36 pb-12 sm:pb-16 border-b border-[#DCD5C9]/60 bg-[#FAF8F5]">
          <Container>
            <BackNavigation to="home" variant="dark" className="mb-6 sm:mb-8" />

            <div className="max-w-4xl">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-3">
                The Complete Collection
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#121110] font-light leading-[1.05] tracking-tight">
                16 suites. <br />
                <span className="italic font-normal">16 different stories.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#625C53] font-light mt-5 max-w-2xl leading-relaxed">
                Every suite at Villa Monticello was individually conceived with its own
                architectural identity, bespoke furnishings, and distinct mood. Browse the
                collection below or filter by category to select your ideal suite in Accra.
              </p>
            </div>

            {/* Category Filter Bar */}
            <div className="mt-10 sm:mt-12 flex items-center gap-2 sm:gap-3 border-t border-[#DCD5C9]/60 pt-6 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`font-sans text-xs uppercase tracking-[0.14em] px-4 py-2.5 transition-all duration-300 border whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                    selectedCategory === cat.value
                      ? 'bg-[#121110] text-[#FAF8F5] border-[#121110] font-medium shadow-sm'
                      : 'bg-transparent text-[#8E867A] border-[#DCD5C9] hover:border-[#121110] hover:text-[#121110]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono ${
                      selectedCategory === cat.value ? 'text-[#B89355]' : 'text-[#8E867A]'
                    }`}
                  >
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Suites Editorial Grid (Cardless, Generous Whitespace) */}
        <Section spacing="default" className="bg-[#FAF8F5]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-20">
              <AnimatePresence mode="sync">
                {filteredSuites.map((s, idx) => (
                  <motion.article
                    key={s.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="group flex flex-col"
                  >
                    {/* Dominant Image Container - Explicit Block Element */}
                    <Link
                      href={`/suites/${s.slug}`}
                      className="relative w-full aspect-[16/10] overflow-hidden bg-[#1C1A18] shadow-lg cursor-pointer block"
                    >
                      <Image
                        src={s.images[0]}
                        alt={`${s.name} Suite`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                      <div className="absolute top-4 left-4 bg-[#121110]/85 backdrop-blur-sm px-3 py-1 font-sans text-[10px] uppercase tracking-wider text-[#B89355] border border-white/10">
                        {s.category}
                      </div>

                      <div className="absolute bottom-4 left-4 text-white/60 font-mono text-2xl font-light">
                        {String(s.number).padStart(2, '0')}
                      </div>
                    </Link>

                    {/* Suite Info Below Image */}
                    <div className="mt-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <Link href={`/suites/${s.slug}`}>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#121110] font-normal group-hover:text-[#B89355] transition-colors cursor-pointer">
                              {s.name}
                            </h2>
                          </Link>
                        </div>

                        <div className="flex items-center gap-5 mt-2 text-xs font-sans uppercase tracking-[0.14em] text-[#8E867A]">
                          {s.size && (
                            <span className="flex items-center gap-1.5">
                              <Maximize2 size={12} className="text-[#B89355]" />
                              {s.size}
                            </span>
                          )}
                          {s.bed && (
                            <span className="flex items-center gap-1.5">
                              <BedDouble size={13} className="text-[#B89355]" />
                              {s.bed}
                            </span>
                          )}
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-[#625C53] font-light leading-relaxed mt-3">
                          {s.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#DCD5C9]/60 flex items-center justify-between">
                        <Link
                          href={`/suites/${s.slug}`}
                          className="font-sans text-xs uppercase tracking-[0.16em] text-[#121110] font-medium flex items-center gap-2 group-hover:text-[#B89355] transition-colors"
                        >
                          Explore Suite
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>

                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#8E867A] hover:text-[#121110] transition-colors cursor-pointer"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>

              {filteredSuites.length === 0 && (
                <div className="col-span-full py-16 text-center">
                  <p className="font-serif text-2xl text-[#121110]">No suites found in this category.</p>
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="mt-4 font-sans text-xs uppercase tracking-[0.16em] text-[#B89355] underline underline-offset-4 cursor-pointer"
                  >
                    Show All 16 Suites
                  </button>
                </div>
              )}
            </div>
          </Container>
        </Section>

        {/* Global Collection Reservation Banner */}
        <Section spacing="default" className="bg-[#121110] text-[#FAF8F5]">
          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] block mb-3">
                Villa Monticello Reservations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Where exceptional is standard.
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/80 font-light mt-4 leading-relaxed">
                Connect with our reservations team directly for bespoke itineraries, private
                boardroom bookings, and personalized VIP Kotoka International Airport transfers.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setIsBookingOpen(true)}
                  className="!bg-white !text-[#121110]"
                >
                  Book Your Stay
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={hotelInfo.bookingEngineUrl}
                  isExternal
                >
                  Check Availability →
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <QuickBookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};
