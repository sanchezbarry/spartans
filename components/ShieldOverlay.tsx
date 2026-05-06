'use client';

import { motion, useSpring, useTransform, useMotionTemplate, useMotionValueEvent, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function ShieldOverlay() {
  const [isLoaded, setIsLoaded] = useState(false);
  const progress = useSpring(0, { damping: 20, stiffness: 300 });

  // Map progress to clip-path coordinates (shield hides from center outward)
  const clipPathValue = useTransform(progress, [0, 0.33, 0.66, 1], [

    'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',

    'polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)',
           
    'polygon(25% 0%, 75% 0%, 75% 100%, 25% 100%)',

    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  ]);

  useMotionValueEvent(progress, 'change', (latest) => {
    if (latest === 1) {
      setIsLoaded(true);
    }
  });

  useEffect(() => {
    // Start the animation after a brief delay
    const timer = setTimeout(() => {
      animate(progress, 1, { duration: 1.5, ease: 'easeInOut' });
    }, 200);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isLoaded ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          clipPath: clipPathValue,
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/spartans.png"
            alt="Spartan Shield Overlay"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </>
  );
}
