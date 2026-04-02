'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'ghost' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  asChild?: boolean
}

export function Button({
  variant = 'gradient',
  size = 'md',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    gradient:
      'bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
    outline:
      'border border-white/20 text-slate-200 hover:border-white/40 hover:bg-white/5',
    glass:
      'backdrop-blur-md bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20',
  }

  const classes = cn(base, sizes[size], variants[variant], className)

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  )
}
