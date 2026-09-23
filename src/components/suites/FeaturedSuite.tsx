'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BedDouble, Maximize2, Sparkles } from 'lucide-react';
import { getFeaturedSuite } from '@/data/suites';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const FeaturedSuite: React.FC = () => {
  const suite = getFeaturedSuite();

  return (
    <Section
      id="featured-suite"
      spacing="spacious"
      className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 relative overflow-hidden"
    >
      <Container>
        {/* Dominating Large Suite Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/15 group"
        >
          <Link href={`/suites/${suite.slug}`} aria-label={`Explore ${suite.name} Suite`}>
            <Image
              src={suite.images[0]}
              alt={`${suite.name} - ${suite.category}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1400px"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-black/20 pointer-events-none" />

          {/* Discreet Tag Top Right */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-[#121110]/80 backdrop-blur-md px-4 py-2 border border-white/10 text-white flex items-center gap-2">
            <Sparkles size={12} className="text-[#B89355]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355]">
              Featured Residence
            </span>
          </div>

          {/* Number on bottom corner of image */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white/40 font-mono text-3xl sm:text-5xl font-light">
            01
          </div>
        </motion.div>

        {/* Suite Information (Cardless, Generous Whitespace, Dominant Typography) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Suite Identity (Left) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#B89355] tracking-widest">
                01 / 16
              </span>
              <span className="w-6 h-[1px] bg-[#B89355]" />
              <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#8E867A] font-semibold">
                {suite.category}
              </span>
            </div>

            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#121110] font-normal leading-[1.06] tracking-tight">
              {suite.name}
            </h3>

            <div className="flex items-center gap-6 mt-4 text-xs font-sans uppercase tracking-[0.18em] text-[#8E867A]">
              {suite.size && (
                <span className="flex items-center gap-2">
                  <Maximize2 size={13} className="text-[#B89355]" />
                  {suite.size}
                </span>
              )}
              {suite.bed && (
                <span className="flex items-center gap-2">
                  <BedDouble size={14} className="text-[#B89355]" />
                  {suite.bed}
                </span>
              )}
              {suite.view && (
                <span className="hidden sm:inline text-[#B89355]">
                  · {suite.view}
                </span>
              )}
            </div>
          </div>

          {/* Suite Story & CTA (Right) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-1">
            <p className="font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed">
              {suite.description}
            </p>

            <div className="mt-8 flex items-center gap-6">
              <Button
                variant="primary"
                size="md"
                href={`/suites/${suite.slug}`}
                icon={<ArrowRight size={15} />}
                className="!bg-[#121110] !text-[#FAF8F5] hover:!bg-[#1C1A18]"
              >
                Explore Suite
              </Button>

              <Link
                href="/suites"
                className="font-sans text-xs uppercase tracking-[0.2em] text-[#8E867A] hover:text-[#121110] transition-colors underline underline-offset-8 decoration-1 decoration-[#8E867A]/40 hover:decoration-[#121110]"
              >
                View All 16 Suites
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
