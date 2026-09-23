'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Compass, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface HeroContentProps {
  onOpenBooking: () => void;
  onExplore: () => void;
  currentSlideIndex?: number;
  onSelectSlide?: (index: number) => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onOpenBooking,
  onExplore,
}) => {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between pt-32 pb-8 sm:pb-12 md:pb-14">
      {/* Top Subtle Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="flex items-center gap-3"
      >
        <span className="w-8 h-[1px] bg-[#B89355]" />
        <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-medium">
          Boutique Hotel · Accra, Ghana
        </span>
      </motion.div>

      {/* Center/Lower Area: Brand, Headline, Copy, CTAs */}
      <div className="my-auto max-w-4xl py-6 md:py-10">
        {/* Brand Name Monogram / Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: 'easeOut' }}
        >
          <span className="block font-sans text-xs sm:text-sm uppercase tracking-[0.32em] text-[#FAF8F5]/80 mb-3 sm:mb-4">
            Villa Monticello
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF8F5] leading-[1.04] tracking-tight">
            Where exceptional <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#FAF8F5]">is standard.</span>
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: 'easeOut' }}
          className="font-sans text-sm sm:text-base md:text-lg text-[#FAF8F5]/90 font-light leading-relaxed max-w-2xl mt-5 sm:mt-7 drop-shadow-sm"
        >
          An intimate sixteen-suite boutique hotel in Accra’s Airport Residential Area,
          five minutes from Kotoka International Airport. Authentic Ghanaian hospitality
          tailored to your stay.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.65, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-8 sm:mt-10"
        >
          {/* Primary CTA */}
          <MagneticButton strength={8}>
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBooking}
              icon={<CalendarCheck size={16} />}
              className="w-full sm:w-auto shadow-xl shadow-black/40 !bg-[#B89355] !text-[#121110] hover:!bg-[#c9a66d]"
              aria-label="Book your stay at Villa Monticello"
            >
              Book Your Stay
            </Button>
          </MagneticButton>

          {/* Secondary CTA */}
          <Button
            variant="secondary"
            size="lg"
            onClick={onExplore}
            icon={<Compass size={16} />}
            className="w-full sm:w-auto text-[#FAF8F5] border-[#FAF8F5]/30 hover:border-[#FAF8F5] hover:bg-white/10"
            aria-label="Explore the hotel"
          >
            Explore The Hotel
          </Button>
        </motion.div>
      </div>

      {/* Bottom Metadata: Location & Restrained Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        className="w-full pt-6 border-t border-white/15 flex items-end justify-between gap-6 text-[#FAF8F5]/80"
      >
        {/* Left: Location Specifier */}
        <div className="flex flex-col">
          <span className="font-serif text-lg sm:text-xl text-white font-normal">
            Accra, Ghana
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] mt-0.5">
            Airport Residential Area · 5 Mins From Kotoka
          </span>
        </div>

        {/* Right: Scroll Indicator */}
        <button
          onClick={onExplore}
          aria-label="Scroll to explore the hotel"
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <span className="hidden sm:inline">Scroll</span>
          <div className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center group-hover:border-white transition-colors bg-black/20">
            <ArrowDown
              size={14}
              className="group-hover:translate-y-0.5 transition-transform duration-300"
            />
          </div>
        </button>
      </motion.div>
    </div>
  );
};

