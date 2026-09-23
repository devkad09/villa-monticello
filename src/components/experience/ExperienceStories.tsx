'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { experienceStories } from '@/data/experiences';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const ExperienceStories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Section
      id="stories"
      spacing="spacious"
      className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60 relative overflow-hidden"
    >
      <Container>
        {/* Section Header with Desktop Scroll Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#DCD5C9]/60">
          <div>
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-3">
              Curated Journeys
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal tracking-tight">
              Stories Beyond The Suite
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8E867A] hidden sm:inline">
              Scroll Gallery
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left in experiences"
                className="w-10 h-10 rounded-full border border-[#DCD5C9] flex items-center justify-center text-[#121110] hover:border-[#121110] hover:bg-[#121110] hover:text-white transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right in experiences"
                className="w-10 h-10 rounded-full border border-[#DCD5C9] flex items-center justify-center text-[#121110] hover:border-[#121110] hover:bg-[#121110] hover:text-white transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Editorial Gallery */}
        <div
          ref={scrollContainerRef}
          className="mt-10 sm:mt-12 flex items-stretch gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth -mx-6 px-6 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16 pb-4"
        >
          {experienceStories.map((story) => (
            <div
              key={story.id}
              className="flex-none w-[300px] sm:w-[380px] lg:w-[440px] flex flex-col group select-none"
            >
              {/* Large Atmospheric Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C1A18] shadow-lg">
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 440px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4 bg-[#121110]/80 backdrop-blur-sm px-3 py-1 text-[10px] font-sans uppercase tracking-widest text-[#B89355] border border-white/10">
                  {story.category}
                </div>

                {story.duration && (
                  <div className="absolute bottom-4 left-4 text-white/80 font-sans text-[11px] tracking-wide">
                    {story.duration}
                  </div>
                )}
              </div>

              {/* Story Narrative */}
              <div className="mt-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal group-hover:text-[#B89355] transition-colors">
                    {story.title}
                  </h3>
                  <span className="font-sans text-xs text-[#B89355] italic block mt-1">
                    {story.subtitle}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#625C53] font-light leading-relaxed mt-3">
                    {story.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCD5C9]/60">
                  <a
                    href="mailto:koncierge@villamonticello.com?subject=Inquiry%20regarding%20Experience"
                    className="font-sans text-xs uppercase tracking-[0.2em] text-[#121110] font-medium inline-flex items-center gap-2 group-hover:text-[#B89355] transition-colors"
                  >
                    Arrange With Koncierge
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
