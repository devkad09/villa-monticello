'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { awardsData } from '@/data/awards';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';

export function RecognitionSection() {
  return (
    <Section spacing="spacious" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#DCD5C9]/60">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
              Bespoke Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal leading-[1.1]">
              Industry Recognition
            </h2>
          </div>
          <p className="font-sans text-sm text-[#8E867A] font-light max-w-md leading-relaxed">
            Consistently honored by the international hospitality community for intimate boutique excellence,
            presidential accommodations, and authentic Ghanaian warmth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {awardsData.map((award, idx) => (
            <div
              key={award.id}
              className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#DCD5C9]/70 hover:border-[#B89355]/60 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] font-semibold">
                    {award.organization}
                  </span>
                  <Award size={18} className="text-[#B89355] group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#121110] font-normal mb-2 leading-tight">
                  {award.title}
                </h3>

                <span className="inline-block px-2.5 py-0.5 bg-[#FAF8F5] text-[#8E867A] font-mono text-[10px] uppercase tracking-wider mb-4 border border-[#DCD5C9]/40">
                  {award.years.join(' · ')}
                </span>

                <p className="font-sans text-xs text-[#625C53] font-light leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DCD5C9]/50 flex items-center justify-between text-[11px] font-sans text-[#8E867A]">
                <span>{award.category}</span>
                <span className="text-[#B89355]">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
