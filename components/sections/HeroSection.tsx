
'use client'
import Image from 'next/image';


import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { DOWNLOAD_LINKS } from '@/lib/constants'

const StripeHoverButton = ({ href, children, variant = 'dark' }: { href: string, children: React.ReactNode, variant?: 'dark' | 'light' }) => {
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
      <div className="absolute inset-0 rounded-full bg-white/10 z-0 transition-opacity duration-300" style={{ opacity: isHovered ? 0 : 1 }} />
      
      {/* Stripe-style gradient border spotlight that tracks the mouse */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out pointer-events-none rounded-full"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, #533afd 0%, #f72df3 30%, #ff6118 50%, transparent 100%)`,
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

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 leading-[0.9]">
            Music.<br />
            <span className="text-slate-400">Without the friction.</span>
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            No account. No subscription. Just play.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <StripeHoverButton href={DOWNLOAD_LINKS.ios} variant="light">
              Get for iOS
            </StripeHoverButton>
            <StripeHoverButton href={DOWNLOAD_LINKS.android} variant="dark">
              Get for Android
            </StripeHoverButton>
            <StripeHoverButton href={DOWNLOAD_LINKS.windows} variant="dark">
              Get for Windows
            </StripeHoverButton>
          </div>
        </motion.div>
      </div>

      {/* Enormous desktop interface, partially extending beyond the viewport */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-[120%] md:w-[110%] max-w-[1600px] mt-16 md:mt-24 aspect-[16/10] md:aspect-[16/9] bg-black rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden shadow-2xl border-t border-x border-white/10 flex items-center justify-center relative translate-y-12 md:translate-y-24"
      >
        <Image
          src="/images/screenshot-home.png"
          alt="PPPlayer Desktop Home"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>
    </section>
  )
}
