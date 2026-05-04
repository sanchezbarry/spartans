'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function ShieldOverlay() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Left Shield Half */}
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={isLoaded ? { x: '-100vw', opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
        className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/spartans.png"
            alt="Spartan Shield Left"
            fill
            className="object-cover object-left"
            priority
          />
        </div>
      </motion.div>

      {/* Right Shield Half */}
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={isLoaded ? { x: '100vw', opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
        className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/spartans.png"
            alt="Spartan Shield Right"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
      </motion.div>
    </>
  );
}
