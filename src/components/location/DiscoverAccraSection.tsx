'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Palette, UtensilsCrossed, Building2, Compass } from 'lucide-react';

export function DiscoverAccraSection() {
  const experiences = [
    {
      title: 'Contemporary Art & Galleries',
      category: 'Culture',
      image: 'https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider9.jpg',
      icon: <Palette size={15} className="text-[#B89355]" />,
      description:
        'Accra is a vibrant epicentre of contemporary African creativity. Our Koncierge arranges private studio viewings and access to renowned galleries and cultural foundations.',
    },
    {
      title: 'Gastronomy & Terroir',
      category: 'Dining',
      image: 'https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg',
      icon: <UtensilsCrossed size={15} className="text-[#B89355]" />,
      description:
        'Beyond The Brasserie, explore Accra’s sophisticated culinary renaissance—from fine West African seafood along the Gulf of Guinea to private chef tables.',
    },
    {
      title: 'Diplomatic & Executive Hubs',
      category: 'Commerce',
      image: 'https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider8.jpg',
      icon: <Building2 size={15} className="text-[#B89355]" />,
      description:
        'Airport Residential Area borders Airport City, Cantonments, and the central financial district, making Villa Monticello the effortless choice for discreet business focus.',
    },
    {
      title: 'Coastal Heritage & Exploration',
      category: 'Discovery',
      image: 'https://villamonticello.com/wp-content/uploads/2026/02/kwame-nkrumah1.jpg',
      icon: <Compass size={15} className="text-[#B89355]" />,
      description:
        'From historic coastal settlements that inspired our Elmina Suite to local artisan textile markets, experience the living heritage of Ghana with private chauffeur arrangements.',
    },
  ];

  return (
    <Section spacing="default" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
      <Container>
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#B89355] font-semibold block mb-2">
            The Living City
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal leading-[1.12]">
            Discover Accra
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#625C53] font-light mt-3 leading-relaxed">
            Accra is a capital of magnetic momentum, ancient maritime heritage, and bold contemporary art.
            Villa Monticello serves as your calm residential vantage point—close to everything, yet worlds away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#DCD5C9]/70 hover:border-[#B89355]/60 transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Editorial Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#1C1A18]">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 bg-[#121110]/85 backdrop-blur-sm px-2.5 py-1 text-[10px] font-sans uppercase tracking-wider text-[#B89355] border border-white/10">
                    {exp.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl text-[#121110] font-normal leading-tight group-hover:text-[#B89355] transition-colors">
                      {exp.title}
                    </h3>
                    <span className="shrink-0 ml-2">{exp.icon}</span>
                  </div>

                  <p className="font-sans text-xs text-[#625C53] font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#DCD5C9]/40 text-[10px] font-sans text-[#8E867A] uppercase tracking-wider flex items-center justify-between">
                <span>Koncierge Service</span>
                <span className="text-[#B89355]">Bespoke</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
