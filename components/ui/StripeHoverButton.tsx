'use client'

import React from 'react'

interface StripeHoverButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'dark' | 'light'
}

export const StripeHoverButton = ({ href, children, variant = 'dark' }: StripeHoverButtonProps) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = React.useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center justify-center rounded-full p-[2px] group overflow-hidden"
    >
      {/* Default subtle border */}
      <div className={`absolute inset-0 rounded-full z-0 transition-opacity duration-300 ${variant === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} style={{ opacity: isHovered ? 0 : 1 }} />
      
      {/* Stripe-style gradient border spotlight that tracks the mouse */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out pointer-events-none rounded-full"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, #fb7185 0%, #e11d48 30%, #9f1239 50%, transparent 100%)`,
        }}
      />
      
      {/* Inner background to mask the center and create the "border" effect */}
      <div className={`relative z-10 flex items-center justify-center h-full w-full rounded-full px-8 py-3.5 transition-colors duration-300 ${variant === 'dark' ? 'bg-[#050505] text-white group-hover:bg-black/60 backdrop-blur-md' : 'bg-white text-black group-hover:bg-slate-50'}`}>
        <span className="font-semibold text-lg">{children}</span>
        <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1 font-bold">&rarr;</span>
      </div>
    </a>
  );
};
