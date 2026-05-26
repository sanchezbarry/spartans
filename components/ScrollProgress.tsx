'use client';
import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left pointer-events-none"
      style={{
        scaleX,
        background:
          'linear-gradient(to right, transparent, #C8A96A 20%, #FFE4A0 50%, #C8A96A 80%, transparent)',
        boxShadow: '0 0 8px 1px rgba(200,169,106,0.5)',
      }}
    />
  );
}
