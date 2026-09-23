'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';
import { conciergeCategories } from '@/data/experiences';
import { hotelInfo } from '@/data/hotel';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

interface KonciergeSectionProps {
  onOpenInquiry?: () => void;
}

export const KonciergeSection: React.FC<KonciergeSectionProps> = ({
  onOpenInquiry,
}) => {
  const [expandedId, setExpandedId] = useState<string>(conciergeCategories[0].id);

  const toggleCategory = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <Section
      id="koncierge"
      spacing="spacious"
      className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-3">
            The Koncierge
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121110] font-normal leading-[1.08] tracking-tight">
            Accra, personally arranged.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed mt-4">
            Operating around the clock, The Koncierge is Villa Monticello’s signature
            personal lifestyle service. From VIP airport tarmac clearances to private art
            curation and hard-to-access culinary tables, our team makes Accra effortless.
          </p>
        </div>

        {/* Refined Expandable Interface */}
        <div className="border-t border-[#121110]/20 flex flex-col">
          {conciergeCategories.map((cat, idx) => {
            const isExpanded = expandedId === cat.id;

            return (
              <div
                key={cat.id}
                className="border-b border-[#121110]/15 py-6 sm:py-8 transition-colors"
              >
                {/* Accordion Trigger Row */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between text-left group focus-visible:outline-none"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-xs text-[#8E867A] tracking-widest">
                      0{idx + 1}
                    </span>
                    <h3
                      className={`font-serif text-2xl sm:text-3xl md:text-4xl transition-colors duration-300 ${
                        isExpanded
                          ? 'text-[#121110] font-normal'
                          : 'text-[#625C53] group-hover:text-[#121110]'
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border transition-all duration-300 flex items-center justify-center shrink-0 ${
                      isExpanded
                        ? 'border-[#121110] bg-[#121110] text-[#FAF8F5]'
                        : 'border-[#DCD5C9] text-[#8E867A] group-hover:border-[#121110] group-hover:text-[#121110]'
                    }`}
                  >
                    {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Expandable Content with Image & Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                        {/* Narrative & Features */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                          <span className="font-serif italic text-lg sm:text-xl text-[#B89355] block mb-3">
                            {cat.tagline}
                          </span>

                          <p className="font-sans text-base text-[#625C53] font-light leading-relaxed">
                            {cat.description}
                          </p>

                          <div className="mt-6 space-y-2.5">
                            {cat.features.map((feat, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-baseline gap-3 text-sm text-[#121110]"
                              >
                                <span className="text-[#B89355] font-serif">✦</span>
                                <span className="font-sans font-light">{feat}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8 flex items-center gap-6">
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={onOpenInquiry}
                              className="!bg-[#121110] !text-[#FAF8F5] hover:!bg-[#1C1A18]"
                            >
                              Request Arrangement
                            </Button>

                            <a
                              href="mailto:koncierge@villamonticello.com"
                              className="font-sans text-xs uppercase tracking-widest text-[#8E867A] hover:text-[#121110] transition-colors flex items-center gap-1.5"
                            >
                              <Mail size={13} className="text-[#B89355]" />
                              koncierge@villamonticello.com
                            </a>
                          </div>
                        </div>

                        {/* Visual for this Category */}
                        <div className="lg:col-span-5 relative">
                          <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#1C1A18] shadow-xl">
                            <Image
                              src={cat.imageUrl}
                              alt={cat.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 40vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
