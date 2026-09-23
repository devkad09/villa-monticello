'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { getFeaturedAwards } from '@/data/awards';

export function RecognitionSection() {
  const shouldReduceMotion = useReducedMotion();
  const featuredAwards = getFeaturedAwards();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section
      id="recognition"
      spacing="spacious"
      className="bg-[#121110] text-[#FAF8F5] border-b border-white/10 relative overflow-hidden"
    >
      {/* Subtle atmospheric backdrop element */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#B89355]/5 to-transparent pointer-events-none blur-3xl"
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20 pb-10 border-b border-white/10">
          <div className="max-w-xl">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-3">
              A record worth noting.
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.08]">
              RECOGNITION
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Villa Monticello has been recognised by leading hospitality and travel organisations across the years.
            </p>
          </div>
        </div>

        {/* Featured Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10"
        >
          {featuredAwards.map((award) => (
            <motion.article
              key={award.id}
              variants={itemVariants}
              className="bg-[#121110] p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#181614] transition-colors duration-500"
            >
              <div>
                {/* Year Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#B89355] font-medium">
                    {award.year}
                  </span>
                  {award.honor && (
                    <span className="font-sans text-[10px] uppercase tracking-wider text-white/40 font-light">
                      {award.honor}
                    </span>
                  )}
                </div>

                {/* Award Title (Main Visual Element) */}
                <h3 className="font-serif text-2xl sm:text-[26px] text-white font-normal leading-[1.2] mb-4 group-hover:text-[#FAF8F5] transition-colors">
                  {award.title}
                </h3>

                {/* Awarding Organization (Understated Typography) */}
                <div className="font-sans text-xs uppercase tracking-[0.2em] text-[#B89355]/85 font-medium mb-4">
                  {award.organization}
                </div>

                {/* Brief Citation/Description */}
                <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed line-clamp-3">
                  {award.description}
                </p>
              </div>

              {/* Source Verification Link */}
              <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-xs">
                {award.sourceUrl ? (
                  <a
                    href={award.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.18em] text-white/50 hover:text-[#B89355] transition-colors group/link"
                    aria-label={`Verify award: ${award.title} on ${award.organization} (opens in new tab)`}
                  >
                    <span>VIEW AWARD</span>
                    <ExternalLink size={12} className="transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/40">
                    VERIFIED HONOR
                  </span>
                )}

                <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">
                  {award.category.split(' ')[0]}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Recognition Link */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-sans text-xs sm:text-sm text-white/50 font-light">
            A comprehensive record of honors spanning over a decade of boutique hospitality.
          </p>

          <Link
            href="/awards"
            className="inline-flex items-center gap-2.5 text-[#B89355] hover:text-[#c9a66d] font-sans text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 group"
          >
            <span>VIEW ALL RECOGNITION</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
