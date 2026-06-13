'use client';

import { motion } from 'motion/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type Phase = 'intro' | 'pulse' | 'vault' | 'portal' | 'split' | 'done';

const EASE_SPLIT: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_SPRING: [number, number, number, number] = [0.34, 1.2, 0.64, 1];
const GOLD = '#C8A96A';

/* Deterministic pseudo-random so SSR and client markup match (no hydration drift). */
const rand = (i: number, seed = 1) => {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

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

/* ── Doctor-Strange-style portal that opens around the shield ── */
const PORTAL_SIZE = 520;
const PORTAL_C = PORTAL_SIZE / 2;
const PORTAL_R = 188;        // rim radius — the seam lines start just outside this
const DRAW_DURATION = 0.7;   // how long the rim takes to trace itself
const SPARK_COUNT = 72;

function Portal({ state }: { state: 'draw' | 'flare' }) {
  const circ = 2 * Math.PI * PORTAL_R;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: '50%',
        top: '50%',
        translateX: '-50%',
        translateY: '-50%',
        width: PORTAL_SIZE,
        height: PORTAL_SIZE,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        state === 'flare'
          ? { opacity: [1, 1, 0], scale: 1.14, filter: 'brightness(2.4)' }
          : { opacity: 1, scale: 1, filter: 'brightness(1)' }
      }
      transition={
        state === 'flare'
          ? { duration: 0.55, ease: 'easeIn' }
          : { duration: 0.35, ease: 'easeOut' }
      }
    >
      <svg width={PORTAL_SIZE} height={PORTAL_SIZE} viewBox={`0 0 ${PORTAL_SIZE} ${PORTAL_SIZE}`}>
        <defs>
          <radialGradient id="portal-bloom">
            <stop offset="0%" stopColor="rgba(255,237,180,0)" />
            <stop offset="74%" stopColor="rgba(255,237,180,0)" />
            <stop offset="90%" stopColor="rgba(232,180,90,0.22)" />
            <stop offset="100%" stopColor="rgba(232,180,90,0)" />
          </radialGradient>
        </defs>

        {/* Soft bloom hugging the rim */}
        <circle cx={PORTAL_C} cy={PORTAL_C} r={PORTAL_R} fill="url(#portal-bloom)" />

        {/* Faint outer halo ring */}
        <circle cx={PORTAL_C} cy={PORTAL_C} r={PORTAL_R + 11} fill="none" stroke={GOLD} strokeOpacity="0.18" strokeWidth="0.6" />

        {/* Main rim — traces itself clockwise from the top */}
        <motion.circle
          cx={PORTAL_C}
          cy={PORTAL_C}
          r={PORTAL_R}
          fill="none"
          stroke="#FFE9B0"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(-90 ${PORTAL_C} ${PORTAL_C})`}
          style={{ filter: 'drop-shadow(0 0 5px #FFE9B0) drop-shadow(0 0 13px rgba(232,180,90,0.6))' }}
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: DRAW_DURATION, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Rotating spark crown — small streaks that flick outward from the rim */}
        <motion.g
          style={{ transformBox: 'view-box', transformOrigin: `${PORTAL_C}px ${PORTAL_C}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 9, ease: 'linear', repeat: Infinity }}
        >
          {Array.from({ length: SPARK_COUNT }).map((_, i) => {
            const a = (i / SPARK_COUNT) * Math.PI * 2;
            const len = 4 + rand(i, 1) * 20;
            const r1 = PORTAL_R + 1;
            const r2 = PORTAL_R + 1 + len;
            const ca = Math.cos(a);
            const sa = Math.sin(a);
            return (
              <line
                key={i}
                className="portal-spark-line"
                x1={PORTAL_C + r1 * ca}
                y1={PORTAL_C + r1 * sa}
                x2={PORTAL_C + r2 * ca}
                y2={PORTAL_C + r2 * sa}
                stroke={rand(i, 3) > 0.6 ? '#FFF3D0' : '#E8B45A'}
                strokeWidth={rand(i, 2) > 0.78 ? 1.5 : 0.8}
                strokeLinecap="round"
                style={{
                  opacity: 0,
                  animationDuration: `${(0.5 + rand(i, 4) * 0.7).toFixed(2)}s`,
                  animationDelay: `${(0.25 + rand(i, 5) * 0.6).toFixed(2)}s`,
                }}
              />
            );
          })}
        </motion.g>

        {/* Leading comet that races the rim as it draws */}
        <motion.g
          style={{ transformBox: 'view-box', transformOrigin: `${PORTAL_C}px ${PORTAL_C}px` }}
          initial={{ rotate: -90 }}
          animate={{ rotate: 270, opacity: [1, 1, 0] }}
          transition={{ duration: DRAW_DURATION, ease: [0.4, 0, 0.2, 1] }}
        >
          <circle
            cx={PORTAL_C + PORTAL_R}
            cy={PORTAL_C}
            r="4"
            fill="#FFFFFF"
            style={{ filter: 'drop-shadow(0 0 6px #FFF3D0) drop-shadow(0 0 15px #E8B45A)' }}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}

export function ShieldOverlay() {
  const [phase, setPhase] = useState<Phase>('intro');

  useIsomorphicLayoutEffect(() => {
    if (sessionStorage.getItem('spartans_intro_seen')) {
      setPhase('done');
      return;
    }

    const schedule: [Phase, number][] = [
      ['pulse',  1000],
      ['vault',  2100],
      ['portal', 3200],
      ['split',  4350],
      ['done',   5350],
    ];
    const timers = schedule.map(([p, ms]) =>
      setTimeout(() => {
        setPhase(p);
        if (p === 'done') sessionStorage.setItem('spartans_intro_seen', '1');
      }, ms)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;

  const isSplit = phase === 'split';
  const portalUp = phase === 'portal' || phase === 'split';

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
        transition={{ duration: 0.3, ease: 'easeIn' }}
      >
        {/* Pulse rings */}
        {(phase === 'pulse' || phase === 'vault') && (
          <>
            <PulseRing delay={0}    size={270} />
            <PulseRing delay={0.55} size={410} />
            <PulseRing delay={1.1}  size={550} />
          </>
        )}

        {/* Vault dial — stays as inner detail through the portal */}
        {(phase === 'vault' || phase === 'portal' || phase === 'split') && <VaultDial />}

        {/* Inner accent ring */}
        {(phase === 'vault' || phase === 'portal' || phase === 'split') && (
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

        {/* Portal ring around the shield */}
        {portalUp && <Portal state={isSplit ? 'flare' : 'draw'} />}

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
              animate={{ opacity: 1, scale: phase === 'vault' || phase === 'portal' ? 1.1 : 1.0 }}
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

      {/* Gold seam — shoots outward from the portal rim toward the screen edges */}
      {[
        {
          key: 'seam-top',
          style: { top: 0, bottom: `calc(50% + ${PORTAL_R + 2}px)` },
          origin: 'bottom',
          gradient:
            'linear-gradient(to top, #FFF5D6 0%, #FFE9B0 10%, #C8A96A 38%, transparent 100%)',
        },
        {
          key: 'seam-bottom',
          style: { top: `calc(50% + ${PORTAL_R + 2}px)`, bottom: 0 },
          origin: 'top',
          gradient:
            'linear-gradient(to bottom, #FFF5D6 0%, #FFE9B0 10%, #C8A96A 38%, transparent 100%)',
        },
      ].map((seg) => (
        <motion.div
          key={seg.key}
          className="fixed left-1/2 pointer-events-none"
          style={{
            ...seg.style,
            translateX: '-50%',
            width: '1px',
            transformOrigin: seg.origin,
            background: seg.gradient,
            boxShadow:
              '0 0 3px 1px rgba(255,237,180,0.4), 0 0 10px 3px rgba(200,169,106,0.25)',
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={
            isSplit
              ? { opacity: 0, scaleY: 1, filter: 'brightness(6)' }
              : phase === 'portal'
                ? { opacity: 1, scaleY: 1, filter: 'brightness(1)' }
                : { opacity: 0, scaleY: 0, filter: 'brightness(1)' }
          }
          transition={
            isSplit
              ? { duration: 0.2, ease: 'easeIn' }
              : phase === 'portal'
                ? { duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.1 }
          }
        >
          <motion.div
            className="absolute inset-0"
            style={{
              boxShadow:
                '0 0 12px 4px rgba(200,169,106,0.2), 0 0 30px 10px rgba(200,169,106,0.1)',
            }}
            animate={phase === 'portal' ? { opacity: [0.4, 1, 0.4] } : { opacity: 0 }}
            transition={
              phase === 'portal'
                ? { delay: 1.0, duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.1 }
            }
          />
        </motion.div>
      ))}
    </div>
  );
}
