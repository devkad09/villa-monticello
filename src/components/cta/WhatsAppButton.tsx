'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { hotelConfig } from '@/data/hotel';
import { trackEvent } from '@/lib/analytics';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'inline';
  className?: string;
}

export function WhatsAppButton({ variant = 'floating', className = '' }: WhatsAppButtonProps) {
  const whatsappUrl = hotelConfig.whatsapp.url;

  const handleClick = () => {
    trackEvent('click_whatsapp', { method: 'whatsapp', number: hotelConfig.whatsapp.number });
    trackEvent('click_concierge', { method: 'whatsapp', number: hotelConfig.whatsapp.number });
  };

  if (variant === 'inline') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`inline-flex items-center gap-2.5 px-5 py-3 border border-[#B89355] text-[#121110] bg-[#FAF8F5] hover:bg-[#B89355] hover:text-white transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-medium group ${className}`}
      >
        <MessageCircle size={16} className="text-[#B89355] group-hover:text-white transition-colors" />
        <span>Chat With The Koncierge</span>
      </a>
    );
  }

  // Floating variant for desktop and mobile
  return (
    <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat with The Koncierge on WhatsApp"
        className="flex items-center gap-3 bg-[#121110]/90 hover:bg-[#121110] text-[#FAF8F5] border border-[#B89355]/40 hover:border-[#B89355] shadow-2xl backdrop-blur-md px-4 py-3 rounded-none transition-all duration-300 group hover:shadow-black/30"
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#B89355]/15 text-[#B89355] group-hover:bg-[#B89355] group-hover:text-[#121110] transition-colors">
          <MessageCircle size={17} />
          {/* Subtle live pulse indicator */}
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#121110]" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#B89355] font-semibold leading-none">
            The Koncierge 24/7
          </span>
          <span className="font-sans text-xs text-white/90 font-light mt-1 leading-none">
            Chat on WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
}
