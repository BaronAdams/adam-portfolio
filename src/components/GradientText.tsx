'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: string;
  className?: string;
  animated?: boolean;
}

export function GradientText({
  children,
  className = '',
  animated = true,
}: GradientTextProps) {
  if (!animated) {
    return (
      <span
        className={`bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={`bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent ${className}`}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {children}
    </motion.span>
  );
}
