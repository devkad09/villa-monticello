'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/hero/Hero';
import { BookingBar } from '@/components/booking/BookingBar';
import { QuickBookingDrawer } from '@/components/booking/QuickBookingDrawer';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { hotelInfo } from '@/data/hotel';
import { Button } from '@/components/ui/Button';
import { SuitesIntro } from '@/components/suites/SuitesIntro';
import { FeaturedSuite } from '@/components/suites/FeaturedSuite';
import { SuiteExplorer } from '@/components/suites/SuiteExplorer';
import { ExperienceIntro } from '@/components/experience/ExperienceIntro';
import { TheBrasserieSection } from '@/components/dining/TheBrasserieSection';
import { KonciergeSection } from '@/components/experience/KonciergeSection';
import { RatingsStrip } from '@/components/trust/RatingsStrip';
import { GuestStoriesSection } from '@/components/trust/GuestStoriesSection';
import { RecognitionSection } from '@/components/trust/RecognitionSection';
import { HomeLocationSection } from '@/components/location/HomeLocationSection';
import { FinalConversionSection } from '@/components/cta/FinalConversionSection';
import { WhatsAppButton } from '@/components/cta/WhatsAppButton';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleExplore = () => {
    const nextSection = document.getElementById('introduction');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Luxury Navigation Bar (Transparent -> Sticky Solid Transition) */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Sticky Booking Search Bar on Scroll */}
      <BookingBar isSticky={true} />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Fullscreen Cinematic Hero Section */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onExplore={handleExplore}
        />

        {/* Inline Booking Bar directly below Hero */}
        <div className="relative z-20 -mt-2 sm:-mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBar isSticky={false} />
        </div>

        {/* Editorial Hotel Introduction */}
        <Section
          id="introduction"
          spacing="spacious"
          className="border-b border-[#DCD5C9]/50 bg-[#FAF8F5] relative overflow-hidden"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Editorial Statement */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <SectionHeading
                  eyebrow="The Residence"
                  title="Sixteen individually designed suites. A discreet address in Accra."
                  subtitle="In a city defined by energy and ambition, Villa Monticello offers a rare counterpoint: sixteen bespoke suites where refined design converges with authentic Ghanaian warmth. No crowds. No uniform corridors. Only understated hospitality, tailored to your exact pace."
                  align="left"
                  theme="light"
                />

                <div className="grid grid-cols-3 gap-6 pt-10 sm:pt-14 border-t border-[#DCD5C9]/60 mt-10">
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
                      100%
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#8E867A] mt-1 block">
                      Individual Design
                    </span>
                  </div>
                </div>

                <div className="pt-10 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="!bg-[#121110] !text-[#FAF8F5] hover:!bg-[#1C1A18]"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Reserve A Suite
                  </Button>
                  <Button
                    variant="editorial"
                    href={hotelInfo.bookingEngineUrl}
                    isExternal
                  >
                    Check Availability →
                  </Button>
                </div>
              </div>

              {/* Right Column: Architectural Photography Reveal */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/15">
                  <Image
                    src="https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg"
                    alt="Villa Monticello Architectural Courtyard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block">
                      Airport Residential Area
                    </span>
                    <span className="font-serif text-xl sm:text-2xl mt-1 block">
                      21 A Mankata Avenue Link
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* The Suites */}
        <SuitesIntro />
        <FeaturedSuite />
        <SuiteExplorer />

        {/* The Experience */}
        <ExperienceIntro />

        {/* The Brasserie */}
        <TheBrasserieSection />

        {/* Concierge */}
        <KonciergeSection onOpenInquiry={() => setIsBookingOpen(true)} />

        {/* Ratings & Guest Stories */}
        <RatingsStrip className="border-t border-[#DCD5C9]/60" />
        <GuestStoriesSection />

        {/* Recognition */}
        <RecognitionSection />

        {/* Location */}
        <HomeLocationSection />

        {/* Book Your Stay */}
        <FinalConversionSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Floating 24/7 WhatsApp Concierge Channel */}
      <WhatsAppButton variant="floating" />

      {/* Quick Booking Drawer Modal */}
      <QuickBookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
