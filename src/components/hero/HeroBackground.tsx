'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroBackgroundProps {
  currentSlideIndex?: number;
  onSelectSlide?: (index: number) => void;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = () => {
  const { scrollY } = useScroll();
  // Subtle restrained parallax on scroll (12% rate)
  const yParallax = useTransform(scrollY, [0, 800], [0, 100]);

  // Primary authentic exterior & courtyard sanctuary image
  const heroImage =
    'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg';

  return (
    <motion.div
      style={{ y: yParallax }}
      className="absolute inset-0 w-full h-[115%] -top-[7.5%] overflow-hidden pointer-events-none select-none z-0"
    >
      <div className="relative w-full h-full">
        <Image
          src={heroImage}
          alt="Villa Monticello Luxury Boutique Hotel Courtyard & Pool in Accra"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
      </div>

      {/* Subtle, restrained scrims for photographic brilliance & text legibility */}
      {/* 1. Subtle top gradient: ensures transparent navbar and brand logo legibility */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#121110]/60 via-[#121110]/20 to-transparent" />

      {/* 2. Left-hand lateral veil: ensures headline and copy are readable without darkening the courtyard pool */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-3/5 bg-gradient-to-r from-[#121110]/75 via-[#121110]/35 to-transparent" />

      {/* 3. Bottom gradient: grounds the metadata and scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#121110]/90 via-[#121110]/40 to-transparent" />
    </motion.div>
  );
};

