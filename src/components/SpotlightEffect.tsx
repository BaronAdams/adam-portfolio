'use client';

import React, { useRef, useEffect, useState } from 'react';

interface SpotlightEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightEffect({ children, className = '' }: SpotlightEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 100, 255, 0.1), transparent 80%)`,
      }}
    >
      {children}
    </div>
  );
}
