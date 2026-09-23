'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Phone,
} from 'lucide-react';
import { Suite } from '@/types/suite';
import { hotelInfo } from '@/data/hotel';
import { Navbar } from '@/components/navigation/Navbar';
import { QuickBookingDrawer } from '@/components/booking/QuickBookingDrawer';
import { SuiteGallery } from '@/components/suites/SuiteGallery';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { BackNavigation } from '@/components/navigation/BackNavigation';

interface SuiteDetailViewProps {
  suite: Suite;
  relatedSuites: Suite[];
}

export const SuiteDetailView: React.FC<SuiteDetailViewProps> = ({
  suite,
  relatedSuites,
}) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Full-Width Cinematic Hero Gallery Header */}
        <section className="relative w-full h-[75vh] sm:h-[80vh] min-h-[520px] bg-[#121110] flex flex-col justify-between overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={suite.images[0]}
              alt={`${suite.name} - ${suite.category}`}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Layered gentle gradient - photography remains rich and visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/40 via-[#121110]/20 to-[#121110]/80" />
          </div>

          {/* Top Breadcrumb Navigation */}
          <div className="relative z-10 pt-28 sm:pt-32">
            <Container>
              <BackNavigation to="suites" />
            </Container>
          </div>

          {/* Center/Lower Hero Overlay Title */}
          <div className="relative z-10 pb-12 sm:pb-16">
            <Container>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B89355]">
                    Suite {String(suite.number).padStart(2, '0')}
                  </span>
                  <span className="w-8 h-[1px] bg-[#B89355]" />
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#FAF8F5]/85 font-semibold">
                    {suite.category}
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05]">
                  {suite.name}
                </h1>

                <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
                  {suite.tagline}
                </p>

                {/* Primary CTA in Hero */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    href={`/book?suite=${suite.slug}`}
                    icon={<CalendarCheck size={16} />}
                  >
                    Reserve This Suite
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    href={hotelInfo.bookingEngineUrl}
                    isExternal
                  >
                    Direct Engine Availability
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Minimal Key Details Strip */}
        <section className="border-b border-[#DCD5C9]/60 bg-[#FAF8F5] py-6 sm:py-8">
          <Container>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-[#121110]">
              {suite.size && (
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#8E867A]">
                    Floor Space
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-normal mt-1 flex items-baseline gap-1">
                    {suite.size}
                  </span>
                </div>
              )}

              {suite.bed && (
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#8E867A]">
                    Sleeping Configuration
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-normal mt-1">
                    {suite.bed}
                  </span>
                </div>
              )}

              {suite.view && (
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#8E867A]">
                    Aspect & Outlook
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-normal mt-1">
                    {suite.view}
                  </span>
                </div>
              )}

              <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#8E867A]">
                  Hospitality Privileges
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-normal mt-1 text-[#B89355]">
                  VIP Kotoka Transfer
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Editorial Storytelling Section */}
        <Section spacing="default" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Editorial Statement */}
              <div className="lg:col-span-5">
                <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-3">
                  The Design Narrative
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal leading-[1.14]">
                  An intimate space conceived with personal intention.
                </h2>
              </div>

              {/* Right Column: In-Depth Story Paragraphs */}
              <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed">
                {suite.editorialStory.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Immersive Gallery Section */}
        <Section spacing="default" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                  Visual Architecture
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal">
                  The Suite Gallery
                </h2>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#8E867A]">
                Click any image to expand
              </span>
            </div>

            <SuiteGallery images={suite.images} suiteName={suite.name} />
          </Container>
        </Section>

        {/* Clean Verified Amenities Grid */}
        <Section spacing="default" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
          <Container>
            <div className="max-w-3xl">
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                Curated Comforts
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal">
                Suite Amenities & Services
              </h2>
              <p className="font-sans text-base text-[#625C53] font-light mt-3">
                Every amenity has been chosen to ensure intuitive ease, effortless
                connectivity, and restorative tranquility.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {suite.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-baseline gap-4 py-4 border-b border-[#DCD5C9]/60"
                >
                  <span className="font-serif text-sm text-[#B89355] italic">
                    ✦
                  </span>
                  <span className="font-sans text-base text-[#121110] font-light">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Booking CTA Section: "MAKE THIS YOUR STAY" */}
        <Section
          id="booking"
          spacing="spacious"
          className="bg-[#121110] text-[#FAF8F5] relative overflow-hidden"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-4">
                Make This Your Stay
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight">
                Reserve the {suite.name} Suite
              </h2>

              <p className="font-sans text-base sm:text-lg text-white/80 font-light mt-6 max-w-2xl leading-relaxed">
                Experience personal hospitality where exceptional is standard. Book
                directly with Villa Monticello to receive guaranteed best rates,
                complimentary Kotoka airport chauffeur service, and breakfast at The
                Brasserie.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  href={`/book?suite=${suite.slug}`}
                  className="w-full sm:w-auto !bg-[#B89355] !text-[#121110] hover:!bg-[#c9a66d] shadow-2xl"
                >
                  Book This Suite
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={hotelInfo.bookingEngineUrl}
                  isExternal
                  className="w-full sm:w-auto"
                >
                  Check Real-Time Availability
                </Button>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-[#8E867A]">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#B89355]" />
                  Best Rate Guarantee
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={13} className="text-[#B89355]" />
                  Reservations: {hotelInfo.contact.displayPhone}
                </span>
              </div>
            </div>
          </Container>
        </Section>

        {/* Section 05: Related Suites ("EXPLORE MORE SUITES") */}
        <Section spacing="default" className="bg-[#FAF8F5] border-t border-[#DCD5C9]/60">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                  Continue Exploring
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal">
                  Explore More Suites
                </h2>
              </div>

              <Link
                href="/suites"
                className="font-sans text-xs uppercase tracking-[0.2em] text-[#8E867A] hover:text-[#121110] transition-colors"
              >
                View Full Collection (16 Suites) →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {relatedSuites.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/suites/${rel.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1A18] shadow-lg">
                    <Image
                      src={rel.images[0]}
                      alt={`${rel.name} Suite`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4 bg-[#121110]/80 backdrop-blur-sm px-2.5 py-1 text-[9px] font-sans uppercase tracking-widest text-[#B89355]">
                      {rel.category}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl text-[#121110] group-hover:text-[#B89355] transition-colors">
                        {rel.name}
                      </h3>
                      <ArrowRight
                        size={15}
                        className="text-[#8E867A] group-hover:text-[#121110] group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <span className="font-sans text-xs text-[#8E867A] mt-1 font-light">
                      {rel.size ? `${rel.size} · ` : ''}{rel.bed || ''}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <QuickBookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};
