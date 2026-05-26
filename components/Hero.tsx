'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  /* ── Scroll measurement: progress 0→1 as hero exits the viewport upward ── */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  /* ── Parallax layers at different depths ── */
  // Image: moves down slowly (appears to stay behind — classic parallax)
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  // Text block: drifts up slightly and dissolves
  const textY       = useTransform(scrollYProgress, [0, 1], ['0%',  '-8%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textScale   = useTransform(scrollYProgress, [0, 1], [1, 0.93]);

  // Background glow orbs: move faster than image (deepest layer)
  const glow1Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const glow2Y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);

  // Stats strip: fades slightly later than main text
  const statsOpacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);

  // Image overlay badge: trails behind with slight delay feel
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Elite Financial Planning
                </span>
              </div>

              <h1 className="cinzel text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-8">
                <span className="block text-foreground">Disciplined</span>
                <span className="block text-foreground">today.</span>
                <span className="block mt-2 text-primary">Confident</span>
                <span className="block text-primary">tomorrow.</span>
              </h1>

              <p
                className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Elite financial planning for those who refuse to settle. Build your wealth legacy
                with Spartan precision and unwavering strategy.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
                <button className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide rounded hover:bg-primary/85 transition-all hover:shadow-xl hover:shadow-primary/25">
                  Begin Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-border text-sm tracking-wide text-foreground rounded hover:border-primary/40 hover:text-primary transition-all">
                  Explore Our Framework
                </button>
              </div>

              {/* Stats — fade out slightly later */}
              <motion.div
                style={{ opacity: statsOpacity }}
                className="grid grid-cols-3 gap-6 pt-10 border-t border-border"
              >
                {[
                  { value: '$2.5B+', label: 'Assets Managed' },
                  { value: '5,000+', label: 'Families Served' },
                  { value: '98%', label: 'Client Retention' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="cinzel text-2xl md:text-3xl text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo — slower parallax, stays longer ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            {/*
              Image container: overflow-hidden clips the parallax.
              Image is 130% tall, offset -15% from top → headroom for 15% of movement.
            */}
            <div className="relative aspect-4/5 lg:aspect-5/6 xl:aspect-4/5 max-w-xl lg:max-w-none mx-auto overflow-hidden rounded-2xl bg-muted">
              <motion.img
                src="https://images.unsplash.com/photo-1766142903386-6de2a43b66ed?w=900&h=1100&fit=crop&auto=format"
                alt="Man in suit standing confidently on rocky hilltop at dusk — embodying Spartan discipline and ambition"
                className="absolute w-full object-cover object-center"
                style={{ top: '-15%', left: 0, height: '130%', y: imageY }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-background/30 via-transparent to-transparent lg:from-background/20" />

              {/* Floating credential badge — trails at a slightly different parallax depth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
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
                      Barron&apos;s Top Firm 2026
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Recognized for excellence in wealth management and client service
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/10 rounded-2xl hidden xl:block" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-accent/15 rounded-xl hidden xl:block" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
