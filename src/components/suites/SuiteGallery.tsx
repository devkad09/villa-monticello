'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface SuiteGalleryProps {
  images: string[];
  suiteName: string;
}

export const SuiteGallery: React.FC<SuiteGalleryProps> = ({
  images,
  suiteName,
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  }, [activeLightboxIndex, images.length]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  }, [activeLightboxIndex, images.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, showNext, showPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightboxIndex]);

  const primaryImage = images[0] || '';
  const supportingImages = images.slice(1);

  return (
    <div className="w-full">
      {/* Desktop & Tablet Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        {/* Large Primary Image */}
        <div
          onClick={() => openLightbox(0)}
          className="md:col-span-8 relative aspect-[16/10] overflow-hidden bg-[#1C1A18] cursor-pointer group shadow-xl"
        >
          <Image
            src={primaryImage}
            alt={`${suiteName} - Primary View`}
            fill
            sizes="(max-width: 768px) 100vw, 65vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
          <div className="absolute bottom-4 right-4 bg-[#121110]/80 backdrop-blur-md px-3 py-1.5 rounded-sm text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 size={13} className="text-[#B89355]" />
            <span className="font-sans text-[10px] uppercase tracking-widest">
              Expand
            </span>
          </div>
        </div>

        {/* Supporting Images Column */}
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 lg:gap-6">
          {supportingImages.map((img, idx) => (
            <div
              key={img + idx}
              onClick={() => openLightbox(idx + 1)}
              className="relative aspect-[16/10] overflow-hidden bg-[#1C1A18] cursor-pointer group shadow-lg"
            >
              <Image
                src={img}
                alt={`${suiteName} - Angle ${idx + 2}`}
                fill
                sizes="(max-width: 768px) 50vw, 35vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-3 right-3 bg-[#121110]/80 backdrop-blur-md px-2.5 py-1 rounded-sm text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={11} className="text-[#B89355]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close image gallery"
              className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-6 z-20 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-6 z-20 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            {/* Current Active Image */}
            <div className="relative w-[90vw] h-[80vh] max-w-6xl">
              <Image
                src={images[activeLightboxIndex]}
                alt={`${suiteName} - Full View`}
                fill
                quality={95}
                sizes="90vw"
                className="object-contain"
              />
            </div>

            {/* Caption & Counter Bottom */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 font-sans text-xs tracking-widest uppercase">
              {suiteName} · {activeLightboxIndex + 1} of {images.length}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
