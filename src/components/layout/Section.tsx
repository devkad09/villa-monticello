import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  spacing?: 'none' | 'compact' | 'default' | 'spacious';
  as?: React.ElementType;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  spacing = 'default',
  as: Component = 'section',
}) => {
  const spacingClasses = {
    none: '',
    compact: 'py-10 md:py-14',
    default: 'py-16 md:py-20 lg:py-24',
    spacious: 'py-20 md:py-24 lg:py-28',
  }[spacing];

  return (
    <Component
      id={id}
      className={`relative w-full ${spacingClasses} ${className}`}
    >
      {children}
    </Component>
  );
};
