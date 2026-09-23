'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Utensils } from 'lucide-react';
import { brasserieData } from '@/data/dining';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const TheBrasserieSection: React.FC = () => {
  return (
    <Section
      id="dine"
      spacing="spacious"
      className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Large Dominating Food / Dining Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/10 group"
            >
              <Link href="/dine" aria-label="Explore The Brasserie Dining">
                <Image
                  src={brasserieData.images.hero}
                  alt="The Brasserie Restaurant at Villa Monticello"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-6 left-6 bg-[#121110]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 font-sans text-[10px] uppercase tracking-widest text-[#B89355]">
                Fine Dining · Accra
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative, Hours & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-3">
                Gastronomy
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121110] font-normal leading-[1.08] tracking-tight">
                {brasserieData.name}
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed mt-5">
                {brasserieData.description[0]}
              </p>

              {/* Verified Hours & Offerings Preview */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#DCD5C9]/60 text-xs text-[#121110]">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A] flex items-center gap-1.5 mb-1">
                    <Clock size={12} className="text-[#B89355]" />
                    Meal Periods
                  </span>
                  <span className="font-serif text-lg font-normal">
                    Breakfast, Lunch & Dinner
                  </span>
                  <span className="text-[#8E867A] text-[11px]">Daily from 06:30 – 22:30</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A] flex items-center gap-1.5 mb-1">
                    <Utensils size={12} className="text-[#B89355]" />
                    Dining Style
                  </span>
                  <span className="font-serif text-lg font-normal">
                    Modern French & Ghanaian
                  </span>
                  <span className="text-[#8E867A] text-[11px]">Cellar pairings & private tables</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href="/dine"
                  icon={<ArrowRight size={15} />}
                  className="!bg-[#121110] !text-[#FAF8F5] hover:!bg-[#1C1A18]"
                >
                  Explore Dining
                </Button>

                <Button
                  variant="editorial"
                  href="/dine#reserve"
                >
                  Reserve A Table →
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
