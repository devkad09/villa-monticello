'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { BackNavigation } from '@/components/navigation/BackNavigation';

export function LocationHero() {
  return (
    <section className="relative w-full h-[65vh] sm:h-[70vh] min-h-[480px] bg-[#121110] flex flex-col justify-between overflow-hidden">
      {/* Background Photography with subtle motion */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider8.jpg"
            alt="Accra Skyline & Villa Monticello Neighborhood"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        {/* Layered gentle gradient - photography remains rich and visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/40 via-[#121110]/20 to-[#121110]/80" />
      </div>

      {/* Top Breadcrumb */}
      <div className="relative z-10 pt-28 sm:pt-32">
        <Container>
          <BackNavigation to="home" />
        </Container>
      </div>

      {/* Hero Title Overlay */}
      <div className="relative z-10 pb-12 sm:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-3">
              Airport Residential Area
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05]">
              Welcome to Accra.
            </h1>

            <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
              Positioned in the capital’s most serene diplomatic enclave. Moments from Kotoka International
              Airport, yet enveloped in leafy residential seclusion.
            </p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
