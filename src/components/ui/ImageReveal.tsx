'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageRevealProps extends Omit<ImageProps, 'onLoad'> {
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '2/3' | 'full';
  overlayScrim?: boolean;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio = '3/2',
  overlayScrim = false,
  priority = false,
  className = '',
  imageClassName = '',
  fill,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '2/3': 'aspect-[2/3]',
    full: 'h-full w-full',
  }[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden bg-[#1C1A18] ${aspectClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill={fill !== undefined ? fill : true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
        onLoad={() => setIsLoaded(true)}
        className={`object-cover transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.03] blur-sm'
        } ${imageClassName}`}
        {...props}
      />
      {overlayScrim && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/70 via-[#121110]/20 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
