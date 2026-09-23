'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ArrowDown } from 'lucide-react';
import { BackNavigation } from '@/components/navigation/BackNavigation';

export function AboutHero() {
  const handleScrollDown = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[75vh] sm:h-[80vh] min-h-[520px] bg-[#121110] flex flex-col justify-between overflow-hidden">
      {/* Background Photography with slow subtle zoom */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{ position: 'relative' }}
          className="relative w-full h-full"
        >
          <Image
            src="https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg"
            alt="Villa Monticello Courtyard Pool & Architecture"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        {/* Layered gentle gradient - photography remains rich and visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/40 via-[#121110]/20 to-[#121110]/80" />
      </div>

      {/* Top Breadcrumb */}
      <div className="relative z-10 pt-28 sm:pt-32">
        <Container>
          <BackNavigation to="home" />
        </Container>
      </div>

      {/* Hero Title Overlay */}
      <div className="relative z-10 pb-12 sm:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-3">
              Villa Monticello
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05]">
              A distinctive stay in the heart of Accra.
            </h1>

            <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
              Founded in 2011 in Accra’s Airport Residential Area. Sixteen individually designed suites conceived
              around privacy, authentic hospitality, and personalized service.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={handleScrollDown}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] text-[#B89355] hover:text-white transition-colors group cursor-pointer"
              >
                <span>Read Our Story</span>
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
