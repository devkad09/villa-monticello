import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'editorial' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans font-medium uppercase transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-[11px] tracking-[0.18em] px-5 py-3 min-h-[44px]',
    md: 'text-[12px] tracking-[0.2em] px-7 py-3.5 min-h-[48px]',
    lg: 'text-[13px] tracking-[0.24em] px-9 py-4.5 min-h-[54px]',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#FAF8F5] text-[#121110] hover:bg-white hover:shadow-lg hover:shadow-black/10 active:scale-[0.99] border border-white/40 focus-visible:ring-white',
    secondary:
      'bg-transparent text-[#FAF8F5] border border-white/30 hover:border-white hover:bg-white/10 active:scale-[0.99] focus-visible:ring-white',
    ghost:
      'bg-transparent text-white/90 hover:text-white hover:bg-white/5 border border-transparent focus-visible:ring-white/50',
    gold:
      'bg-[#B89355] text-white hover:bg-[#A88245] hover:shadow-md hover:shadow-[#B89355]/20 active:scale-[0.99] border border-[#C5A869]/30 focus-visible:ring-[#B89355]',
    editorial:
      'font-serif normal-case tracking-normal text-base md:text-lg text-[#121110] underline underline-offset-8 decoration-1 decoration-[#8E867A]/40 hover:decoration-[#121110] px-0 py-1 bg-transparent border-0',
  }[variant];

  const content = (
    <span className="flex items-center gap-2.5">
      {icon && iconPosition === 'left' && <span className="transition-transform duration-200">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>
      )}
    </span>
  );

  const combinedClasses = `group ${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          id={props.id}
          aria-label={props['aria-label']}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} id={props.id} aria-label={props['aria-label']}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
