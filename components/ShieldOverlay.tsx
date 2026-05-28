'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Phase = 'visible' | 'split' | 'done';

// easeInOutQuart — snappy, premium curtain feel
const SPLIT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export function ShieldOverlay() {
  const [phase, setPhase] = useState<Phase>('visible');

  // Trigger split after branding hold
  useEffect(() => {
    const t = setTimeout(() => setPhase('split'), 1700);
    return () => clearTimeout(t);
  }, []);

  // Unmount after animation completes
  useEffect(() => {
    if (phase !== 'split') return;
    const t = setTimeout(() => setPhase('done'), 1000);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* ── Left panel ── shows the left half of the splash, slides off-left */}
      <motion.div
        className="fixed inset-0"
        style={{ clipPath: 'inset(0 50% 0 0)' }}
        animate={{ x: phase === 'split' ? '-100%' : '0%' }}
        transition={{ duration: 0.85, ease: SPLIT_EASE }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/shield-mobile.png"
            alt="Spartans Advisors"
            fill
            className="object-cover object-center md:hidden"
            priority
          />
          <Image
            src="/shield.png"
            alt="Spartans Advisors"
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
        </div>
      </motion.div>

      {/* ── Right panel ── shows the right half, slides off-right */}
      <motion.div
        className="fixed inset-0"
        style={{ clipPath: 'inset(0 0 0 50%)' }}
        animate={{ x: phase === 'split' ? '100%' : '0%' }}
        transition={{ duration: 0.85, ease: SPLIT_EASE }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/shield-mobile.png"
            alt=""
            aria-hidden
            fill
            className="object-cover object-center md:hidden"
            priority
          />
          <Image
            src="/shield.png"
            alt=""
            aria-hidden
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
        </div>
      </motion.div>

      {/* ── Gold seam ── dramatic crack before split */}
      <motion.div
        className="fixed inset-y-0 left-1/2 pointer-events-none"
        style={{
          translateX: '-50%',
          width: '2px',
          background:
            'linear-gradient(to bottom, transparent 0%, #C8A96A 12%, #FFF5D6 48%, #FFFFFF 50%, #FFF5D6 52%, #C8A96A 88%, transparent 100%)',
          boxShadow:
            '0 0 4px 2px rgba(255,237,180,0.95), 0 0 18px 6px rgba(200,169,106,0.75), 0 0 50px 16px rgba(200,169,106,0.35), 0 0 100px 30px rgba(200,169,106,0.12)',
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={
          phase === 'split'
            ? { opacity: 0, scaleY: 1, filter: 'brightness(6)' }
            : { opacity: 1, scaleY: 1, filter: 'brightness(1)' }
        }
        transition={
          phase === 'split'
            ? { duration: 0.18, ease: 'easeIn' }
            : { delay: 1.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }
        }
      >
        {/* Breathing pulse on top of the static glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            boxShadow:
              '0 0 30px 10px rgba(200,169,106,0.6), 0 0 80px 30px rgba(200,169,106,0.25)',
          }}
          animate={phase !== 'split' ? { opacity: [0.4, 1, 0.4] } : { opacity: 0 }}
          transition={
            phase !== 'split'
              ? { delay: 1.5, duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.1 }
          }
        />
      </motion.div>
    </div>
  );
}
