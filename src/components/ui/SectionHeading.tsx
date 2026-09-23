import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const themeClasses = {
    light: {
      eyebrow: 'text-[#8E867A]',
      title: 'text-[#121110]',
      subtitle: 'text-[#625C53]',
    },
    dark: {
      eyebrow: 'text-[#B89355]',
      title: 'text-[#FAF8F5]',
      subtitle: 'text-[#DCD5C9]/80',
    },
  }[theme];

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] mb-3.5 ${themeClasses.eyebrow}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight ${themeClasses.title}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-sm sm:text-base md:text-lg font-light leading-relaxed mt-4 md:mt-6 ${themeClasses.subtitle}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
