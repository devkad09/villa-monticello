'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackNavigationProps {
  to?: 'suites' | 'home' | 'offers';
  customHref?: string;
  customLabel?: string;
  variant?: 'light' | 'dark'; // 'light' for dark backgrounds, 'dark' for light backgrounds
  className?: string;
}

export const BackNavigation: React.FC<BackNavigationProps> = ({
  to = 'home',
  customHref,
  customLabel,
  variant = 'light',
  className = '',
}) => {
  let href = '/';
  let label = 'Back to Villa Monticello';

  if (to === 'suites') {
    href = '/suites';
    label = 'Back to Suites';
  } else if (to === 'offers') {
    href = '/offers';
    label = 'Back to Offers';
  }

  if (customHref) href = customHref;
  if (customLabel) label = customLabel;

  const textColor =
    variant === 'light'
      ? 'text-[#FAF8F5]/85 hover:text-white'
      : 'text-[#625C53] hover:text-[#121110]';

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 font-sans text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-300 group ${textColor} ${className}`}
    >
      <ArrowLeft
        size={14}
        className="transition-transform duration-300 group-hover:-translate-x-1 text-[#B89355] shrink-0"
      />
      <span>{label}</span>
    </Link>
  );
};
