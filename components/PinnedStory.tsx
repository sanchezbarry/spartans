'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Users, Heart, TrendingUp, ArrowRight, Star, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

/* ─────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────── */
function AnimatedCounter({
  value, prefix = '', suffix = '', active,
}: { value: number; prefix?: string; suffix?: string; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!active || done.current) return;
    done.current = true;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      const cur = eased * value;
      setDisplay(value % 1 !== 0 ? parseFloat(cur.toFixed(1)) : Math.round(cur));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value]);

  return <>{prefix}{value % 1 !== 0 ? display.toFixed(1) : display}{suffix}</>;
}

/* ─────────────────────────────────────────────
   Panel data
───────────────────────────────────────────── */
const stats = [
  { value: 5000,  suffix: '+',  prefix: '',  label: 'Families Served',  icon: Users },
  { value: 98,    suffix: '%',  prefix: '',  label: 'Client Retention',  icon: Heart },
  { value: 2.5,   suffix: 'B+', prefix: '$', label: 'Assets Managed',   icon: TrendingUp },
  { value: 15,    suffix: '+',  prefix: '',  label: 'Years of Trust',    icon: Star },
];

const values = [
  { icon: Shield,     title: 'Discipline', desc: 'Every decision made with unwavering Spartan precision and strategy.' },
  { icon: Star,       title: 'Excellence', desc: 'We hold ourselves to the highest standard in advice and results.' },
  { icon: Heart,      title: 'Loyalty',    desc: 'Our commitment to clients spans generations. You are family.' },
  { icon: TrendingUp, title: 'Growth',     desc: 'Time-tested wisdom meets cutting-edge strategy, always evolving.' },
];

const AUTO_ADVANCE_MS = 6000;

/* ─────────────────────────────────────────────
   Slide variants
───────────────────────────────────────────── */
const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48, scale: 0.98 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit:  (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48, scale: 0.98 }),
};

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function PinnedStory() {
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timerRef            = useRef<ReturnType<typeof setTimeout> | null>(null);
  const TOTAL               = 4;

  const go = useCallback((next: number, direction: 1 | -1) => {
    setDir(direction);
    setActive((next + TOTAL) % TOTAL);
  }, []);

  const next = useCallback(() => go(active + 1,  1),  [active, go]);
  const prev = useCallback(() => go(active - 1, -1), [active, go]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTO_ADVANCE_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, next]);

  const panelLabels = ['Our Origin', 'Our Impact', 'The Spartan Way', 'Your Journey'];

  return (
    <section
      className="relative py-0 bg-background overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Animated mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full animate-mesh-a" style={{ width: '70vw', height: '70vw', top: '-20%', left: '-10%', background: 'radial-gradient(circle, rgba(139,29,42,0.10) 0%, transparent 65%)' }} />
        <div className="absolute rounded-full animate-mesh-b" style={{ width: '50vw', height: '50vw', bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, rgba(200,169,106,0.07) 0%, transparent 65%)' }} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,169,106,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,169,106,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

      {/* ── Carousel wrapper ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">

        {/* Section label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-accent" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Our Story</span>
          </div>
          {/* Arrow controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Slide area ── */}
        <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/* ══ Panel 0 — Origin ══ */}
              {active === 0 && (
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div className="lg:col-span-6">
                    <p className="cinzel text-xs text-primary tracking-[0.3em] uppercase mb-5">01 / Origin</p>
                    <h2 className="cinzel text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                      Just a bunch of us<br /><span className="text-primary">who get it.</span>
                    </h2>
                    <p className="text-base text-accent mb-4 font-medium">Real people. Real finances. Real talk.</p>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-lg">
                      SPARTANS started as a group of friends who got tired of financial advice that felt out of reach.
                      We&apos;re advisors partnered with AIA — we manage our own money the same way we manage yours.
                      No jargon. No paywalls. Just honest planning over coffee.
                    </p>
                    <Link href="/partners" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                      Meet the team <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="hidden lg:block lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-card border border-border">
                      <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop&auto=format" alt="Team over coffee" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Coffee className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="cinzel text-xs text-primary">AIA Partner · Singapore</p>
                          <p className="text-xs text-muted-foreground">Free coffee sessions monthly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ══ Panel 1 — Stats ══ */}
              {active === 1 && (
                <div>
                  <p className="cinzel text-xs text-primary tracking-[0.3em] uppercase mb-5">02 / Impact</p>
                  <h2 className="cinzel text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-3">
                    Numbers that<br /><span className="text-primary">matter.</span>
                  </h2>
                  <p className="text-base text-accent mb-10 font-medium">Built one family at a time.</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {stats.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.label} className="p-6 lg:p-8 rounded-2xl bg-card/80 border border-border backdrop-blur-sm">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="cinzel text-4xl lg:text-5xl text-primary font-light mb-2">
                            <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} active={active === 1} />
                          </div>
                          <div className="text-sm text-muted-foreground">{s.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ══ Panel 2 — Values ══ */}
              {active === 2 && (
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  <div className="lg:col-span-4">
                    <p className="cinzel text-xs text-primary tracking-[0.3em] uppercase mb-5">03 / Values</p>
                    <h2 className="cinzel text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4">
                      Four values.<br /><span className="text-primary">One mission.</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mt-2">
                      Every decision, every interaction, every piece of advice — rooted in these four principles.
                    </p>
                  </div>
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {values.map((v) => {
                      const Icon = v.icon;
                      return (
                        <div key={v.title} className="p-6 rounded-2xl bg-card/80 border border-border backdrop-blur-sm hover:border-primary/40 transition-all">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <h4 className="cinzel text-base mb-2">{v.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ══ Panel 3 — CTA ══ */}
              {active === 3 && (
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div className="lg:col-span-6">
                    <p className="cinzel text-xs text-primary tracking-[0.3em] uppercase mb-5">04 / Journey</p>
                    <h2 className="cinzel text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                      Your shield<br /><span className="text-primary">starts here.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                      Life throws uncertainty your way — career changes, family milestones, market swings.
                      Start with a free coffee session and see why thousands of families trust us with what matters most.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                      <Link href="/events" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25">
                        Book a Free Coffee Chat <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href="/partners" className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border text-sm text-foreground rounded hover:border-primary/40 hover:text-primary transition-all">
                        Meet Our Advisors
                      </Link>
                    </div>
                    <div className="p-5 rounded-2xl bg-card/80 border border-border backdrop-blur-sm max-w-md">
                      <p className="text-sm text-muted-foreground italic mb-3">
                        &ldquo;Best financial conversation I&apos;ve ever had over coffee. Walked in clueless, walked out with a plan.&rdquo;
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 fill-primary text-primary" />)}
                        </div>
                        <span className="text-xs text-muted-foreground">— Coffee session attendee</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-card border border-border">
                      <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&auto=format" alt="Families achieving goals" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Dots + auto-advance progress ── */}
        <div className="mt-10 flex items-center gap-5">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {panelLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => go(i, i > active ? 1 : -1)}
                aria-label={label}
                className={`transition-all duration-400 rounded-full ${
                  i === active
                    ? 'w-8 h-2 bg-primary'
                    : 'w-2 h-2 bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Label */}
          <span className="cinzel text-xs text-primary tracking-[0.2em] uppercase hidden sm:block">
            {panelLabels[active]}
          </span>

          {/* Auto-advance progress bar */}
          <div className="flex-1 h-px bg-border overflow-hidden rounded-full">
            <motion.div
              key={`${active}-${paused}`}
              className="h-full bg-primary/50 origin-left"
              initial={{ scaleX: 0 }}
              animate={paused ? {} : { scaleX: 1 }}
              transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
            />
          </div>

          {/* Counter */}
          <span className="text-xs text-muted-foreground tabular-nums shrink-0">
            {active + 1} / {TOTAL}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
