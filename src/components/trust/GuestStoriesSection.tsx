'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { reviewsData } from '@/data/reviews';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function GuestStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentReview = reviewsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <Section spacing="spacious" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
              Authentic Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal leading-[1.1]">
              Guest Stories
            </h2>
          </div>

          {/* Desktop Navigation Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="font-mono text-xs text-[#8E867A] tracking-widest mr-3">
              {String(activeIndex + 1).padStart(2, '0')} / {String(reviewsData.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous guest story"
              className="p-3 border border-[#DCD5C9] text-[#121110] hover:border-[#121110] hover:bg-[#121110] hover:text-[#FAF8F5] transition-all duration-300"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next guest story"
              className="p-3 border border-[#DCD5C9] text-[#121110] hover:border-[#121110] hover:bg-[#121110] hover:text-[#FAF8F5] transition-all duration-300"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Featured Review Display (Editorial Showcase) */}
        <div className="relative min-h-[320px] sm:min-h-[280px] flex flex-col justify-between p-8 sm:p-14 lg:p-16 bg-white border border-[#DCD5C9]/80 shadow-xl shadow-black/5">
          <Quote
            size={56}
            className="text-[#B89355]/20 absolute top-6 right-6 sm:top-10 sm:right-10 pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-[#B89355] mb-6">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#121110] font-light leading-[1.3] mb-8">
                “{currentReview.quote}”
              </blockquote>

              {/* Author & Verification Details */}
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 pt-6 border-t border-[#DCD5C9]/60 font-sans text-xs">
                <div>
                  <strong className="text-[#121110] font-medium text-sm block">
                    {currentReview.author}
                  </strong>
                  {currentReview.origin && (
                    <span className="text-[#8E867A]">{currentReview.origin}</span>
                  )}
                </div>

                {currentReview.stayType && (
                  <div className="text-[#8E867A]">
                    <span className="text-[#DCD5C9] mr-2">|</span>
                    <span>{currentReview.stayType}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 ml-auto text-[11px] text-[#B89355] font-medium uppercase tracking-wider">
                  <span>{currentReview.source}</span>
                  <span className="text-[#8E867A]">({currentReview.year})</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Bottom Navigation Controls */}
          <div className="sm:hidden flex items-center justify-between pt-8 mt-6 border-t border-[#DCD5C9]/40">
            <span className="font-mono text-xs text-[#8E867A] tracking-widest">
              {String(activeIndex + 1).padStart(2, '0')} / {String(reviewsData.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous guest story"
                className="p-2.5 border border-[#DCD5C9] text-[#121110] active:bg-[#121110] active:text-[#FAF8F5]"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next guest story"
                className="p-2.5 border border-[#DCD5C9] text-[#121110] active:bg-[#121110] active:text-[#FAF8F5]"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
