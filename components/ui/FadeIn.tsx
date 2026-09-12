'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export function FadeIn({ children, className, ...props }: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}
