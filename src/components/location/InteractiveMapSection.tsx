'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { MapPin, Navigation, ExternalLink, Plane, Compass, Layers } from 'lucide-react';
import { hotelConfig } from '@/data/hotel';

export function InteractiveMapSection() {
  const [showLiveMap, setShowLiveMap] = useState(false);

  const mapEmbedUrl = hotelConfig.urls.googleMapsEmbedUrl;
  const directionsUrl = hotelConfig.urls.directionsUrl;
  const mapsPlaceUrl = hotelConfig.urls.googleMapsUrl;

  return (
    <Section spacing="default" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-white border border-[#DCD5C9]/80 shadow-xl shadow-black/5 overflow-hidden">
          {/* Left Column: Studio-Grade Visual Location Panel */}
          <div className="lg:col-span-7 min-h-[420px] lg:min-h-[500px] relative bg-[#121110] overflow-hidden flex flex-col justify-between">
            {showLiveMap ? (
              <iframe
                title="Villa Monticello Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px] lg:min-h-[500px] relative z-10"
              />
            ) : (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg"
                  alt="Villa Monticello in Airport Residential Area Accra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/90 via-[#121110]/40 to-[#121110]/50" />

                {/* Floating Location Beacon Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
                  <div className="relative mb-3 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-[#B89355]/20 animate-ping absolute" />
                    <div className="w-10 h-10 rounded-full bg-[#B89355] text-[#121110] flex items-center justify-center shadow-lg relative z-10">
                      <MapPin size={20} />
                    </div>
                  </div>

                  <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#B89355] font-semibold">
                    Accra, Ghana
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1">
                    Villa Monticello
                  </h3>
                  <p className="font-sans text-xs text-white/80 mt-1 max-w-sm">
                    21 A Mankata Avenue Link · Airport Residential Area
                  </p>
                </div>
              </div>
            )}

            {/* Toggle Map Mode Button */}
            <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between pointer-events-auto mt-auto">
              <button
                type="button"
                onClick={() => setShowLiveMap((prev) => !prev)}
                className="inline-flex items-center gap-2 bg-[#121110]/85 hover:bg-[#121110] text-white text-[11px] font-sans uppercase tracking-[0.16em] px-4 py-2 border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
              >
                <Layers size={13} className="text-[#B89355]" />
                <span>{showLiveMap ? 'View Property Panel' : 'Switch To Live Map'}</span>
              </button>

              <span className="font-mono text-[11px] text-white/70 bg-black/60 px-3 py-1 border border-white/10 hidden sm:inline-block">
                5.6037° N, -0.1870° W
              </span>
            </div>
          </div>

          {/* Right Column: Location Details & Action Buttons */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-2">
                Hotel Address
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal leading-tight mb-1">
                Villa Monticello
              </h2>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] block mb-6">
                Accra, Ghana
              </span>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-[#625C53] font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#B89355] shrink-0 mt-1" />
                  <span>
                    21 A Mankata Avenue Link<br />
                    Airport Residential Area<br />
                    Greater Accra (GA-085-4150), Ghana
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DCD5C9]/60">
                  <Plane size={16} className="text-[#B89355] shrink-0" />
                  <span>5 Minutes from Kotoka International Airport (ACC)</span>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DCD5C9]/60">
                  <Navigation size={16} className="text-[#B89355] shrink-0" />
                  <span className="font-mono text-xs">GPS: 5.6037° N, -0.1870° W</span>
                </div>

                <div className="pt-2 text-[11px] text-[#8E867A] italic">
                  * Complimentary private airport transfer included with select suite reservations.
                </div>
              </div>
            </div>

            {/* Direct Action Buttons per prompt */}
            <div className="pt-8 mt-8 border-t border-[#DCD5C9]/60 space-y-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#121110] hover:bg-[#1C1A18] text-[#FAF8F5] font-sans text-xs uppercase tracking-[0.18em] font-medium py-4 px-6 transition-all duration-300 group shadow-md"
              >
                <span>GET DIRECTIONS →</span>
              </a>

              <a
                href={mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 border border-[#121110] hover:bg-[#121110] text-[#121110] hover:text-white font-sans text-xs uppercase tracking-[0.18em] font-medium py-3.5 px-6 transition-all duration-300 group"
              >
                <span>OPEN IN MAPS →</span>
                <ExternalLink
                  size={14}
                  className="text-[#B89355] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
