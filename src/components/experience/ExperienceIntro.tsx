'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const ExperienceIntro: React.FC = () => {
  return (
    <Section
      id="experience"
      spacing="spacious"
      className="bg-[#121110] text-[#FAF8F5] relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Header */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-4"
            >
              The Experience
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, delay: 0.1, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight"
            >
              More than a stay. <br />
              <span className="italic font-normal text-[#B89355]">A sense of place.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
              className="font-sans text-base sm:text-lg text-[#FAF8F5]/80 font-light leading-relaxed mt-6 max-w-xl"
            >
              To stay at Villa Monticello is to experience Accra through an intimate lens.
              Beyond the quiet walls of your suite lies an acclaimed culinary brasserie,
              a 24/7 personal concierge service dedicated to seamless journeys, and spaces
              composed for moments that demand perfection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="mt-8 pt-8 border-t border-white/10 flex items-center gap-8 text-xs text-[#8E867A]"
            >
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-white font-normal">24 / 7</span>
                <span className="font-sans uppercase tracking-widest text-[10px] text-[#B89355] mt-0.5">
                  Personal Concierge
                </span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-white font-normal">Fine Dining</span>
                <span className="font-sans uppercase tracking-widest text-[10px] text-[#B89355] mt-0.5">
                  The Brasserie
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Atmospheric Imagery */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative aspect-[4/5] sm:aspect-[1/1] w-full overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/40"
            >
              <Image
                src="https://villamonticello.com/wp-content/uploads/2026/03/villa-koncierge.jpg"
                alt="The Koncierge and Luxury Guest Experience at Villa Monticello"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block">
                  Airport Residential Area · Accra
                </span>
                <span className="font-serif text-2xl sm:text-3xl mt-1 block">
                  Where Exceptional is Standard.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
