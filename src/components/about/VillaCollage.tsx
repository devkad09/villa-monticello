'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export function VillaCollage() {
  return (
    <Section spacing="spacious" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
            The Property
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal">
            The Villa
          </h2>
          <p className="font-sans text-sm text-[#8E867A] font-light mt-3 leading-relaxed">
            A harmonious interplay of West African cultural textures, quiet poolside gardens, and understated
            modernist architecture.
          </p>
        </div>

        {/* Editorial Collage Composition */}
        <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto">
          {/* Top Dominant Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/15 group"
          >
            <Image
              src="https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg"
              alt="Villa Monticello Architectural Courtyard & Grounds"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#B89355]">
                Courtyard Architecture & Poolside Sanctuary
              </span>
              <span className="font-mono text-[10px] text-white/70 uppercase tracking-widest hidden sm:inline">
                Airport Residential Area
              </span>
            </div>
          </motion.div>

          {/* Staggered Dual Images */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Image (Interiors & Craft) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="md:col-span-5 relative aspect-[4/5] overflow-hidden bg-[#1C1A18] shadow-xl group"
            >
              <Image
                src="https://villamonticello.com/wp-content/uploads/2026/02/kwame-nkrumah1.jpg"
                alt="Presidential Suite Interior Detail"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 text-white font-sans text-xs uppercase tracking-widest">
                Presidential Suite Interiors
              </div>
            </motion.div>

            {/* Right Image (The Brasserie Courtyard & Dining) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="md:col-span-7 relative aspect-[16/11] overflow-hidden bg-[#1C1A18] shadow-xl group"
            >
              <Image
                src="https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg"
                alt="The Brasserie Courtyard Dining"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 text-white font-sans text-xs uppercase tracking-widest">
                The Brasserie & Courtyard Alfresco
              </div>
            </motion.div>
          </div>

          {/* Central Editorial Signoff */}
          <div className="text-center pt-8">
            <span className="font-serif text-xl sm:text-2xl text-[#121110] tracking-wider uppercase block">
              Villa Monticello
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8E867A] block mt-1">
              Accra, Ghana
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
