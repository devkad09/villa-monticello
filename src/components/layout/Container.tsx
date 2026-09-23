import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
  as: Component = 'div',
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  }[size];

  return (
    <Component
      className={`w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 ${sizeClasses} ${className}`}
    >
      {children}
    </Component>
  );
};
