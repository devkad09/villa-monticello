'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const SuitesIntro: React.FC = () => {
  return (
    <Section
      id="suites"
      spacing="spacious"
      className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 relative overflow-hidden"
    >
      <Container>
        {/* Top Header & Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Eyebrow + Large Editorial Heading */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-4"
            >
              The Suites
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, delay: 0.1, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#121110] leading-[1.08] tracking-tight"
            >
              16 suites. <br />
              <span className="italic font-normal">16 different stories.</span>
            </motion.h2>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-5 lg:pt-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
              className="font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed"
            >
              Unlike conventional luxury hotels where rooms follow a uniform blueprint,
              every single suite at Villa Monticello possesses an independent personality.
              From stately presidential residences honoring African statesmen to intimate
              coastal and metropolitan retreats, each space pairs absolute residential
              privacy with bespoke tactile comfort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="mt-6 pt-6 border-t border-[#DCD5C9]/60 flex items-center justify-between text-xs text-[#8E867A]"
            >
              <span className="uppercase tracking-[0.2em] font-sans">
                Airport Residential Area
              </span>
              <span className="font-serif italic text-sm text-[#121110]">
                Zero Repetition · Pure Craft
              </span>
            </motion.div>
          </div>
        </div>

        {/* Panoramic Architectural Visual Element with Subtle Soft Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 sm:mt-20 relative w-full aspect-[21/9] sm:aspect-[24/9] overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/10"
        >
          <Image
            src="https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg"
            alt="Villa Monticello Architectural Courtyard and Suites"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/70 via-transparent to-transparent pointer-events-none" />

          {/* Discreet Overlay Details */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white flex items-center gap-4">
            <span className="w-6 h-[1px] bg-[#B89355]" />
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#FAF8F5]/85">
              The Architecture of Personal Space
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
