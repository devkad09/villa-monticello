'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BedDouble, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { suites } from '@/data/suites';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const SuiteExplorer: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeSuite = suites[selectedIndex] || suites[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? suites.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === suites.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section
      id="suite-explorer"
      spacing="spacious"
      className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#DCD5C9]/60">
          <div>
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-3">
              Interactive Explorer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal tracking-tight">
              Explore The Collection
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#8E867A]">
              Suite {String(selectedIndex + 1).padStart(2, '0')} of {suites.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous suite"
                className="w-10 h-10 rounded-full border border-[#DCD5C9] flex items-center justify-center text-[#121110] hover:border-[#121110] hover:bg-[#121110] hover:text-white transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next suite"
                className="w-10 h-10 rounded-full border border-[#DCD5C9] flex items-center justify-center text-[#121110] hover:border-[#121110] hover:bg-[#121110] hover:text-white transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Suite Index Tabs (Horizontally Scrollable) */}
        <div className="lg:hidden mt-8 mb-6 overflow-x-auto no-scrollbar -mx-6 px-6 flex items-center gap-2 pb-2">
          {suites.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setSelectedIndex(idx)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-sans uppercase tracking-[0.16em] transition-all duration-300 border ${
                selectedIndex === idx
                  ? 'border-[#121110] bg-[#121110] text-[#FAF8F5]'
                  : 'border-[#DCD5C9] text-[#8E867A] hover:border-[#121110] hover:text-[#121110]'
              }`}
            >
              <span>{String(idx + 1).padStart(2, '0')}. </span>
              {s.name}
            </button>
          ))}
        </div>

        {/* Desktop Split Explorer Layout */}
        <div className="mt-8 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Suite Index / Navigation (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col max-h-[620px] overflow-y-auto pr-4 scrollbar-thin">
            <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#8E867A] mb-4 block sticky top-0 bg-[#FAF8F5] py-1 z-10">
              Select Suite
            </span>
            <div className="flex flex-col">
              {suites.map((s, idx) => {
                const isActive = selectedIndex === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`group text-left py-3.5 px-3 border-b border-[#DCD5C9]/40 transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'border-l-2 border-l-[#B89355] bg-[#FAF8F5] pl-4'
                        : 'hover:pl-4 hover:border-l-2 hover:border-l-[#DCD5C9]'
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-xs tracking-wider transition-colors ${
                          isActive
                            ? 'text-[#B89355] font-semibold'
                            : 'text-[#8E867A] group-hover:text-[#121110]'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span
                          className={`font-serif text-lg md:text-xl transition-all block ${
                            isActive
                              ? 'text-[#121110] font-medium scale-[1.02] origin-left'
                              : 'text-[#625C53] group-hover:text-[#121110]'
                          }`}
                        >
                          {s.name}
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#8E867A] block">
                          {s.category}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <span className="w-5 h-[1.5px] bg-[#B89355] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Suite Display (Image + Information) */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSuite.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col"
              >
                {/* Large Interactive Suite Photography */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/15 group">
                  <Link
                    href={`/suites/${activeSuite.slug}`}
                    aria-label={`View ${activeSuite.name} Suite`}
                  >
                    <Image
                      src={activeSuite.images[0]}
                      alt={`${activeSuite.name} Suite at Villa Monticello`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-6 left-6 bg-[#121110]/80 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-white font-sans text-[10px] uppercase tracking-[0.2em] text-[#B89355]">
                    {activeSuite.category}
                  </div>

                  {/* Suite Number */}
                  <div className="absolute bottom-6 right-6 font-mono text-3xl sm:text-4xl text-white/30">
                    {String(selectedIndex + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Suite Details & Description */}
                <div className="mt-8 flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#DCD5C9]/60 pb-6">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block">
                        Suite {String(selectedIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal tracking-tight mt-1">
                        {activeSuite.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-6 text-xs font-sans uppercase tracking-[0.18em] text-[#8E867A]">
                      {activeSuite.size && (
                        <span className="flex items-center gap-1.5">
                          <Maximize2 size={13} className="text-[#B89355]" />
                          {activeSuite.size}
                        </span>
                      )}
                      {activeSuite.bed && (
                        <span className="flex items-center gap-1.5">
                          <BedDouble size={14} className="text-[#B89355]" />
                          {activeSuite.bed}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed mt-6">
                    {activeSuite.description}
                  </p>

                  {/* Key Highlights */}
                  {activeSuite.highlights && activeSuite.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {activeSuite.highlights.map((h) => (
                        <span
                          key={h}
                          className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#8E867A] bg-[#EDE8DF]/70 px-3 py-1.5 rounded-sm"
                        >
                          ✦ {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-[#DCD5C9]/60 flex flex-wrap items-center gap-4">
                    <Button
                      variant="primary"
                      size="md"
                      href={`/suites/${activeSuite.slug}`}
                      icon={<ArrowRight size={15} />}
                      className="!bg-[#121110] !text-[#FAF8F5] hover:!bg-[#1C1A18]"
                    >
                      Explore Suite
                    </Button>

                    <Button
                      variant="editorial"
                      href={`/suites/${activeSuite.slug}#booking`}
                    >
                      Reserve {activeSuite.name} →
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};
