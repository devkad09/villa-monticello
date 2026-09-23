'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowRight } from 'lucide-react';

export function PhilosophySection() {
  return (
    <Section spacing="spacious" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
      <Container size="narrow">
        <div className="text-center py-10 sm:py-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-[#B89355] font-semibold block mb-8">
            The Core Tenets
          </span>

          {/* Large Minimalist Statement */}
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#121110] font-light tracking-tight leading-[1.05] mb-12">
            INTIMACY.<br />
            CHARACTER.<br />
            SERVICE.
          </h2>

          <div className="max-w-2xl mx-auto space-y-6 font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed">
            <p>
              We believe true luxury is not measured in square acreage or marble lobbies, but in the precision
              of personal care. With only sixteen suites, our attention is never divided.
            </p>
            <p>
              Every guest is welcomed as an individual. Every suite has its own distinct character. We ensure
              that from arrival to departure, your stay is marked by genuine warmth, privacy, and attentive
              care in Accra.
            </p>
          </div>

          <div className="pt-12 mt-12 border-t border-[#DCD5C9]/60 flex justify-center">
            <Link
              href="/suites"
              className="inline-flex items-center gap-3 bg-[#121110] hover:bg-[#1C1A18] text-[#FAF8F5] font-sans text-xs uppercase tracking-[0.24em] font-medium px-8 py-4 transition-all duration-300 group shadow-lg"
            >
              <span>Explore The 16 Suites</span>
              <ArrowRight
                size={15}
                className="text-[#B89355] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
