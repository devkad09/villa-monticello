'use client';

import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { Container } from '@/components/layout/Container';

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore }) => {
  return (
    <section
      id="hero"
      aria-label="Welcome to Villa Monticello"
      className="relative w-full h-[92svh] sm:h-[95svh] lg:h-[100svh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#121110]"
    >
      {/* Immersive Authentic Visual Layer */}
      <HeroBackground />

      {/* Hero Content Layer */}
      <Container size="wide" className="h-full flex flex-col justify-between">
        <HeroContent
          onOpenBooking={onOpenBooking}
          onExplore={onExplore}
        />
      </Container>
    </section>
  );
};

