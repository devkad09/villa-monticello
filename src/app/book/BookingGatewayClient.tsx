'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { hotelInfo } from '@/data/hotel';
import { getAllSuites, getSuiteBySlug } from '@/data/suites';
import { Calendar, Users, ShieldCheck, Check, Sparkles, Phone, Mail, ExternalLink } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { Suite } from '@/types/suite';

export function BookingGatewayClient() {
  const searchParams = useSearchParams();
  const suiteParam = searchParams.get('suite');
  const checkInParam = searchParams.get('checkIn');
  const checkOutParam = searchParams.get('checkOut');
  const guestsParam = searchParams.get('guests');

  // Helper date defaults
  const getTomorrowStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getCheckoutStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  };

  const [selectedSuiteSlug, setSelectedSuiteSlug] = useState<string>(suiteParam || '');
  const [checkIn, setCheckIn] = useState<string>(checkInParam || getTomorrowStr());
  const [checkOut, setCheckOut] = useState<string>(checkOutParam || getCheckoutStr());
  const [guests, setGuests] = useState<number>(guestsParam ? parseInt(guestsParam, 10) : 2);
  const [allSuites] = useState<Suite[]>(getAllSuites());
  const selectedSuite = selectedSuiteSlug ? getSuiteBySlug(selectedSuiteSlug) : undefined;

  const handleSuiteChange = (slug: string) => {
    setSelectedSuiteSlug(slug);
    trackEvent('start_booking', { suiteSlug: slug });
  };

  const handleContinueBooking = () => {
    trackEvent('click_book_now', {
      suiteSlug: selectedSuiteSlug,
      checkIn,
      checkOut,
      guests,
      sourceLocation: 'booking_gateway_page',
    });

    // Seamlessly construct official Swiftbook deep-link or redirect to verified booking engine
    window.location.href = hotelInfo.bookingEngineUrl;
  };

  return (
    <Section spacing="spacious" className="bg-[#FAF8F5]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Booking Configuration Interface */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#DCD5C9]/80 shadow-2xl shadow-black/5">
            <div className="pb-8 border-b border-[#DCD5C9]/60 mb-8">
              <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
                Direct Reservation Gateway
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal leading-tight">
                Configure Your Stay
              </h2>
              <p className="font-sans text-xs text-[#8E867A] mt-2 leading-relaxed">
                Villa Monticello features sixteen individually curated suites. Select your preferred dates and suite,
                and continue directly to our official Swiftbook reservation system.
              </p>
            </div>

            {/* Suite Selection Continuity Display */}
            {selectedSuite && (
              <div className="mb-8 p-6 bg-[#FAF8F5] border border-[#B89355]/40 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 shrink-0 bg-[#121110] overflow-hidden">
                    <Image
                      src={selectedSuite.images[0]}
                      alt={selectedSuite.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-[#B89355] font-semibold">
                      <Check size={12} />
                      Your Selected Suite
                    </span>
                    <h3 className="font-serif text-xl text-[#121110] font-medium leading-tight">
                      {selectedSuite.name}
                    </h3>
                    <span className="font-sans text-xs text-[#8E867A]">
                      {selectedSuite.category} · {selectedSuite.size}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedSuiteSlug('')}
                  className="font-sans text-[11px] uppercase tracking-wider text-[#8E867A] hover:text-[#121110] underline shrink-0"
                >
                  Change Suite
                </button>
              </div>
            )}

            {/* Dates & Guests Controls */}
            <div className="space-y-6">
              {/* Suite Dropdown if not chosen or changed */}
              {!selectedSuite && (
                <div>
                  <label
                    htmlFor="gateway-suite"
                    className="font-sans text-xs uppercase tracking-wider text-[#121110] font-medium block mb-2"
                  >
                    Select Suite (Optional)
                  </label>
                  <select
                    id="gateway-suite"
                    value={selectedSuiteSlug}
                    onChange={(e) => handleSuiteChange(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DCD5C9] p-3.5 text-[#121110] font-sans text-sm focus:outline-none focus:border-[#B89355]"
                  >
                    <option value="">Any Available Suite (All 16 Bespoke Suites)</option>
                    {allSuites.map((s) => (
                      <option key={s.id} value={s.slug}>
                        {s.name} ({s.category})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="gateway-checkin"
                    className="font-sans text-xs uppercase tracking-wider text-[#121110] font-medium flex items-center gap-1.5 mb-2"
                  >
                    <Calendar size={13} className="text-[#B89355]" />
                    <span>Check-In Date</span>
                  </label>
                  <input
                    id="gateway-checkin"
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DCD5C9] p-3.5 text-[#121110] font-sans text-sm focus:outline-none focus:border-[#B89355]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="gateway-checkout"
                    className="font-sans text-xs uppercase tracking-wider text-[#121110] font-medium flex items-center gap-1.5 mb-2"
                  >
                    <Calendar size={13} className="text-[#B89355]" />
                    <span>Check-Out Date</span>
                  </label>
                  <input
                    id="gateway-checkout"
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DCD5C9] p-3.5 text-[#121110] font-sans text-sm focus:outline-none focus:border-[#B89355]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="gateway-guests"
                  className="font-sans text-xs uppercase tracking-wider text-[#121110] font-medium flex items-center gap-1.5 mb-2"
                >
                  <Users size={13} className="text-[#B89355]" />
                  <span>Number of Guests</span>
                </label>
                <select
                  id="gateway-guests"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="w-full bg-[#FAF8F5] border border-[#DCD5C9] p-3.5 text-[#121110] font-sans text-sm focus:outline-none focus:border-[#B89355]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleContinueBooking}
                  className="w-full bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.16em] font-semibold py-4.5 px-8 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl group cursor-pointer"
                >
                  <span>Continue to Official Booking Engine</span>
                  <ExternalLink
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
                <span className="font-sans text-[11px] text-[#8E867A] text-center block mt-3">
                  Transfers securely to Swiftbook · Official Reservation Provider for Villa Monticello
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Booking Benefits & Assistance */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Booking Privileges Card */}
            <div className="bg-[#121110] text-[#FAF8F5] p-8 sm:p-10 shadow-2xl border border-white/10">
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#B89355] font-semibold block mb-3">
                Why Book Direct
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-6">
                Direct Booking Privileges
              </h3>

              <div className="space-y-4 text-xs font-sans text-white/80">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#B89355] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase tracking-wider mb-0.5">
                      Best Rate Guarantee
                    </strong>
                    <span>Direct rates guarantee the best available price across any platform.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Sparkles size={18} className="text-[#B89355] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase tracking-wider mb-0.5">
                      VIP Kotoka Airport Transfer
                    </strong>
                    <span>Complimentary roundtrip transfers when booking select suites directly.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Check size={18} className="text-[#B89355] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase tracking-wider mb-0.5">
                      Flexible Late Checkout
                    </strong>
                    <span>Extended departure privilege based on availability at check-in.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Telephone & Concierge Assistance Card */}
            <div className="bg-white p-8 sm:p-10 border border-[#DCD5C9]/80 shadow-sm">
              <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
                Personalized Reservation
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#121110] font-normal mb-4">
                Prefer to Speak with The Koncierge?
              </h4>
              <p className="font-sans text-xs text-[#625C53] font-light leading-relaxed mb-6">
                Our reservations team is on hand 24/7 to accommodate bespoke arrival times, dietary
                requests, or presidential floor buyouts.
              </p>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex items-center gap-3 text-[#121110]">
                  <Phone size={15} className="text-[#B89355]" />
                  <a href={`tel:${hotelInfo.contact.phone}`} className="hover:text-[#B89355] font-medium">
                    {hotelInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[#121110]">
                  <Mail size={15} className="text-[#B89355]" />
                  <a href={`mailto:${hotelInfo.contact.reservationsEmail}`} className="hover:text-[#B89355]">
                    {hotelInfo.contact.reservationsEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
