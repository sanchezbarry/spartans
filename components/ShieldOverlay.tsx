'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Phase = 'intro' | 'pulse' | 'vault' | 'split' | 'done';

const EASE_SPLIT: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_SPRING: [number, number, number, number] = [0.34, 1.2, 0.64, 1];
const GOLD = '#C8A96A';

function PulseRing({ delay, size }: { delay: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        border: `1px solid ${GOLD}`,
        left: '50%',
        top: '50%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ opacity: 0.65, scale: 0.1 }}
      animate={{ opacity: 0, scale: 1 }}
      transition={{ duration: 2.2, delay, ease: 'easeOut', repeat: Infinity, repeatDelay: 0.6 }}
    />
  );
}

function VaultDial() {
  const R = 115;
  const CX = 148;
  const CY = 148;

  return (
    <motion.svg
      width={296}
      height={296}
      viewBox="0 0 296 296"
      className="absolute pointer-events-none"
      style={{ left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' }}
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: 215 }}
      transition={{
        opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.55, ease: EASE_SPRING },
        rotate: { duration: 1.35, ease: [0.4, 0, 0.2, 1] },
      }}
    >
      {/* Outer track */}
      <circle cx={CX} cy={CY} r={R + 12} fill="none" stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Inner ring */}
      <circle cx={CX} cy={CY} r={R - 22} fill="none" stroke={GOLD} strokeWidth="0.8" strokeOpacity="0.45" />
      {/* Tick marks */}
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * 2 * Math.PI - Math.PI / 2;
        const isMaj = i % 6 === 0;
        const r1 = R + 14;
        const r2 = R + (isMaj ? 22 : 18);
        return (
          <line
            key={i}
            x1={CX + r1 * Math.cos(a)} y1={CY + r1 * Math.sin(a)}
            x2={CX + r2 * Math.cos(a)} y2={CY + r2 * Math.sin(a)}
            stroke={GOLD}
            strokeWidth={isMaj ? 1.5 : 0.8}
            strokeOpacity={isMaj ? 0.75 : 0.35}
          />
        );
      })}
      {/* Center pip */}
      <circle cx={CX} cy={CY} r="3" fill={GOLD} fillOpacity="0.4" />
    </motion.svg>
  );
}

export function ShieldOverlay() {
  const [phase, setPhase] = useState<Phase>('intro');

  useEffect(() => {
    const schedule: [Phase, number][] = [
      ['pulse', 1100],
      ['vault', 2400],
      ['split', 3700],
      ['done',  4800],
    ];
    const timers = schedule.map(([p, ms]) => setTimeout(() => setPhase(p), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;

  const isSplit = phase === 'split';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">

      {/* Background panels — together cover the full viewport; split on reveal */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: 'inset(0 50% 0 0)', background: 'var(--background)' }}
        animate={{ x: isSplit ? '-100%' : '0%' }}
        transition={{ duration: 0.9, ease: EASE_SPLIT }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: 'inset(0 0 0 50%)', background: 'var(--background)' }}
        animate={{ x: isSplit ? '100%' : '0%' }}
        transition={{ duration: 0.9, ease: EASE_SPLIT }}
      />

      {/* Content layer — fades out just before split */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isSplit ? 0 : 1 }}
        transition={{ duration: 0.22, ease: 'easeIn' }}
      >
        {/* Pulse rings */}
        {(phase === 'pulse' || phase === 'vault') && (
          <>
            <PulseRing delay={0}    size={270} />
            <PulseRing delay={0.55} size={410} />
            <PulseRing delay={1.1}  size={550} />
          </>
        )}

        {/* Vault dial */}
        {phase === 'vault' && <VaultDial />}

        {/* Inner accent ring */}
        {phase === 'vault' && (
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 186,
              height: 186,
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
              border: `1px solid ${GOLD}`,
              boxShadow: `0 0 18px 5px rgba(200,169,106,0.18)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
          />
        )}

        {/* Logo + flanking brand words */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-4">

            {/* "Spartans" — left */}
            <motion.span
              className="cinzel pointer-events-none"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: 'var(--foreground)',
                opacity: 0,
              }}
              animate={{ opacity: phase === 'intro' ? 0 : 0.42, x: phase === 'intro' ? -10 : 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              Spartans
            </motion.span>

            {/* Logo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: phase === 'vault' ? 1.1 : 1.0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Ambient glow */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  inset: '-72px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(200,169,106,0.38) 0%, transparent 65%)',
                }}
                animate={{ opacity: [0.45, 0.95, 0.45] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Image
                src="/logo.png"
                alt="Spartans Advisors"
                width={96}
                height={96}
                priority
                className="relative z-10"
              />
            </motion.div>

            {/* "Advisors" — right */}
            <motion.span
              className="cinzel pointer-events-none"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: 'var(--foreground)',
                opacity: 0,
              }}
              animate={{ opacity: phase === 'intro' ? 0 : 0.42, x: phase === 'intro' ? 10 : 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              Advisors
            </motion.span>

          </div>
        </div>
      </motion.div>

      {/* Gold seam — appears during vault phase, flashes on split */}
      <motion.div
        className="fixed inset-y-0 left-1/2 pointer-events-none"
        style={{
          translateX: '-50%',
          width: '1px',
          background:
            'linear-gradient(to bottom, transparent 0%, #C8A96A 15%, #FFF5D6 48%, #FFFFFF 50%, #FFF5D6 52%, #C8A96A 85%, transparent 100%)',
          boxShadow:
            '0 0 3px 1px rgba(255,237,180,0.4), 0 0 10px 3px rgba(200,169,106,0.25)',
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={
          isSplit
            ? { opacity: 0, scaleY: 1, filter: 'brightness(6)' }
            : phase === 'vault'
              ? { opacity: 1, scaleY: 1, filter: 'brightness(1)' }
              : { opacity: 0, scaleY: 0, filter: 'brightness(1)' }
        }
        transition={
          isSplit
            ? { duration: 0.18, ease: 'easeIn' }
            : phase === 'vault'
              ? { duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0.1 }
        }
      >
        <motion.div
          className="absolute inset-0"
          style={{
            boxShadow:
              '0 0 12px 4px rgba(200,169,106,0.2), 0 0 30px 10px rgba(200,169,106,0.1)',
          }}
          animate={phase === 'vault' ? { opacity: [0.4, 1, 0.4] } : { opacity: 0 }}
          transition={
            phase === 'vault'
              ? { delay: 0.8, duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.1 }
          }
        />
      </motion.div>
    </div>
  );
}
