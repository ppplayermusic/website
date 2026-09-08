'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface StripeHoverTextProps {
  children: React.ReactNode
  className?: string
}

export const StripeHoverText = ({ children, className }: StripeHoverTextProps) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative inline-grid", className)}
    >
      {/* Background layer: the default text content and colors */}
      <span className="col-start-1 row-start-1 z-10">{children}</span>
      
      {/* The spotlight gradient layer that tracks the mouse and is clipped to the text */}
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 z-20 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          backgroundImage: `radial-gradient(150px circle at ${mousePosition.x}px ${mousePosition.y}px, #533afd 0%, #f72df3 30%, #ff6118 50%, transparent 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {children}
      </span>
    </span>
  );
};
