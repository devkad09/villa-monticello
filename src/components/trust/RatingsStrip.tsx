'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { ratingMetrics } from '@/data/awards';
import { RatingMetric } from '@/types/booking';

interface RatingsStripProps {
  metrics?: RatingMetric[];
  className?: string;
}

export function RatingsStrip({ metrics = ratingMetrics, className = '' }: RatingsStripProps) {
  return (
    <section className={`w-full bg-[#121110] text-[#FAF8F5] py-10 sm:py-14 border-y border-white/10 ${className}`}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 md:pt-0 md:pl-6 lg:pl-10' : ''}`}
            >
              <div className="flex items-baseline gap-1 font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-tight">
                <span>{item.score}</span>
                <span className="font-sans text-xs sm:text-sm text-[#B89355] font-normal">
                  {item.scale}
                </span>
              </div>
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-white/90 font-medium mt-2">
                {item.platform}
              </span>
              <span className="font-sans text-[11px] text-[#8E867A] font-light mt-1">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
