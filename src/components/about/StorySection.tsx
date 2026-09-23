'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export function StorySection() {
  return (
    <Section id="story" spacing="spacious" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-5">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-3">
              Heritage & Purpose
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal leading-[1.14]">
              Our Story
            </h2>

            <div className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-[#DCD5C9]/60">
              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#121110]">
                  2011
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#8E867A] mt-1 block">
                  Established
                </span>
              </div>
              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#121110]">
                  16
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#8E867A] mt-1 block">
                  Bespoke Suites
                </span>
              </div>
              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#121110]">
                  5 Min
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#8E867A] mt-1 block">
                  To Kotoka Airport
                </span>
              </div>
              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#121110]">
                  14+
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#8E867A] mt-1 block">
                  WTA Accolades
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed">
            <p>
              Villa Monticello opened its doors in 2011 with a clear purpose: to create an intimate luxury
              boutique hotel in Accra that stands in deliberate contrast to the impersonal scale of
              conventional chain hotels.
            </p>

            <p>
              Located along a tranquil avenue in Accra’s Airport Residential Area, the property was envisioned
              as a private residence. Sixteen suites were conceived not from a single uniform blueprint, but as
              sixteen distinct expressions of art, culture, and design.
            </p>

            <p>
              From the presidential proportions of the Nelson Mandela and Kwame Nkrumah suites to the coastal
              calm of Elmina and the rich textures of Zambezi and Marrakesh, every space tells its own
              individual story.
            </p>

            <p>
              Over more than a decade of continuous service, Villa Monticello has welcomed heads of state,
              diplomats, business leaders, and travelers who value privacy, authentic warmth, and thoughtful personal care.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
