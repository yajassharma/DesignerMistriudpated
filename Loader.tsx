
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export const RouteLoader = ({ isLoading }: { isLoading: boolean }) => {
  // Use a spring for ultra-smooth physics-based movement
  const scaleX = useSpring(0, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isLoading) {
      // Start loading: quickly go to ~70% and stall slightly
      scaleX.set(0.7);
    } else {
      // Complete: go to 100%
      scaleX.set(1);
    }
  }, [isLoading, scaleX]);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 origin-left"
        style={{ scaleX }}
        initial={{ scaleX: 0 }}
      />
      {/* Glowing Head of the bar */}
      <motion.div
        className="absolute top-0 h-[3px] w-[100px] bg-white blur-[3px] opacity-50"
        style={{ 
            left: useTransform(scaleX, (v) => `${v * 100}%`),
            x: "-100%"
        }}
      />
      
      {/* Subtle Glow underneath */}
      <motion.div 
         className="absolute top-0 left-0 right-0 h-4 bg-orange-500/20 blur-xl origin-left"
         style={{ scaleX }}
      />
    </div>
  );
};
