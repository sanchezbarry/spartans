'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/*
  Entrance choreography is timed to the ShieldOverlay: the portal draws around
  the shield, then its panels split at ~4.35s and clear by ~5.25s. Starting the
  reveal at BASE means the headline rises out of its mask just as the page is
  uncovered.
*/
const BASE = 4.4;
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headline = [
  { text: 'Disciplined', cls: 'text-foreground' },
  { text: 'today.', cls: 'text-foreground' },
  { text: 'Confident', cls: 'text-primary' },
  { text: 'tomorrow.', cls: 'text-primary' },
];

function CountUp({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  delay = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      delay,
      ease: EASE_OUT,
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent =
            prefix +
            v.toLocaleString('en-US', {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            }) +
            suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix, decimals, delay]);

  return (
    <span ref={ref}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  /* ── Scroll measurement: progress 0→1 as hero exits the viewport upward ── */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  /* ── Parallax layers at different depths ── */
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const textY       = useTransform(scrollYProgress, [0, 1], ['0%',  '-8%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textScale   = useTransform(scrollYProgress, [0, 1], [1, 0.93]);

  const glow1Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const glow2Y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);

  const statsOpacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ── Layer 1: static dark base ── */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />

      {/* ── Layer 2: animated gradient mesh (deepest, moves fastest) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full animate-mesh-a"
          style={{
            y: glow1Y,
            width: '80vw',
            height: '80vw',
            top: '-25%',
            left: '-15%',
            background: 'radial-gradient(circle, rgba(139,29,42,0.14) 0%, transparent 65%)',
          }}
        />
        <motion.div
          className="absolute rounded-full animate-mesh-b"
          style={{
            y: glow2Y,
            width: '55vw',
            height: '55vw',
            top: '10%',
            right: '-8%',
            background: 'radial-gradient(circle, rgba(200,169,106,0.08) 0%, transparent 60%)',
          }}
        />
        <motion.div
          className="absolute rounded-full animate-mesh-c"
          style={{
            y: glow1Y,
            width: '40vw',
            height: '40vw',
            bottom: '0%',
            left: '30%',
            background: 'radial-gradient(circle, rgba(139,29,42,0.06) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* ── Layer 3: subtle grid ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,169,106,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,169,106,0.025)_1px,transparent_1px)] bg-size-[5rem_5rem] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text — scale + dissolve on scroll ── */}
          <motion.div
            style={{ y: textY, opacity: textOpacity, scale: textScale }}
            className="lg:col-span-6 xl:col-span-5"
          >
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: BASE, ease: EASE_OUT }}
            >
              <motion.div
                className="h-px bg-accent origin-left"
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ duration: 0.6, delay: BASE + 0.2, ease: EASE_OUT }}
              />
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                Elite Financial Planning
              </span>
            </motion.div>

            {/* Headline — each line rises out of an overflow mask */}
            <h1 className="cinzel text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-8">
              {headline.map((line, i) => (
                <span
                  key={line.text}
                  className={`block overflow-hidden ${i === 2 ? 'mt-2' : ''}`}
                  style={{ paddingBottom: '0.08em', marginBottom: '-0.08em' }}
                >
                  <motion.span
                    className={`block ${line.cls}`}
                    initial={{ y: '115%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.95, delay: BASE + 0.1 + i * 0.13, ease: EASE_OUT }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: BASE + 0.65, ease: EASE_OUT }}
            >
              Elite financial planning for those who refuse to settle. Build your wealth legacy
              with Spartan precision and unwavering strategy.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 mb-14"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: BASE + 0.8, ease: EASE_OUT }}
            >
              <a
                href="#contact"
                className="btn-sheen group inline-flex items-center gap-2.5 px-8 py-3.5 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#framework"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-border text-sm tracking-wide text-foreground rounded hover:border-primary/40 hover:text-primary transition-all"
              >
                Explore Our Framework
              </a>
            </motion.div>

            {/* Stats — count up once revealed */}
            <motion.div
              style={{ opacity: statsOpacity }}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-border"
            >
              {[
                { label: 'Families Served', to: 2000, suffix: '+' },
                { label: 'Active Policies', to: 8000, suffix: '+' },
                { label: 'Agency & Individual Awards', to: 200, suffix: '+' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: BASE + 0.95 + i * 0.1, ease: EASE_OUT }}
                >
                  <div className="cinzel text-2xl md:text-3xl text-primary mb-1">
                    <CountUp
                      to={stat.to}
  
                      suffix={stat.suffix}

                      delay={BASE + 1.0 + i * 0.1}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo — Ken Burns settle + slower parallax ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: BASE + 0.25 }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            <div className="relative aspect-4/5 lg:aspect-5/6 xl:aspect-4/5 max-w-xl lg:max-w-none mx-auto overflow-hidden rounded-2xl bg-muted">
              <motion.img
                src="/homepage.webp"
                alt="Man in suit standing confidently on rocky hilltop at dusk — embodying Spartan discipline and ambition"
                className="absolute w-full object-cover object-center"
                style={{ top: '-15%', left: 0, height: '130%', y: imageY }}
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.4, delay: BASE + 0.25, ease: EASE_OUT }}
              />
              <div className="absolute inset-0 hidden dark:block bg-linear-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 hidden dark:block bg-linear-to-r from-background/30 via-transparent to-transparent lg:from-background/20" />

              {/* Floating credential badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: BASE + 1.0, duration: 0.7, ease: EASE_OUT }}
                style={{ y: badgeY }}
                className="absolute bottom-8 left-6 right-6 sm:right-auto sm:max-w-xs p-5 bg-card/85 backdrop-blur-md border border-border/80 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 20 24" fill="none" className="w-5 h-5 text-primary">
                      <path
                        d="M10 1.5C6 1.5 3 4.8 3 9v2.5c0 1.8.8 3.3 2 4.3L4.3 19h11.4L15 15.8c1.2-1 2-2.5 2-4.3V9C17 4.8 14 1.5 10 1.5z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M7 11h2.5M10.5 11H13M10 12.5v3.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="cinzel text-sm text-primary tracking-wide mb-0.5">
                      CORT & MDRT Awarded Agency
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Recognized for excellence in wealth management and client service
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative accents — gentle float */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/10 rounded-2xl hidden xl:block animate-float-slow" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-accent/15 rounded-xl hidden xl:block animate-float-slow" style={{ animationDelay: '-3s' }} />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE + 1.6, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground/70">Scroll</span>
        <div className="relative w-px h-10 bg-border overflow-hidden">
          <motion.div
            className="absolute left-0 w-px h-4 bg-accent"
            animate={{ y: [-16, 44] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
