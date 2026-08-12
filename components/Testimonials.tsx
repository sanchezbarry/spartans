'use client';

import { useSyncExternalStore } from 'react';
import { motion } from 'motion/react';
import { testimonials, type Testimonial } from '../lib/testimonials';

const awards = [
  { label: 'MDRT', title: 'Million Dollar Round Table', organization: 'Awarded agency' },
  { label: 'COT', title: 'Court of the Table', organization: 'Awarded agency' },
];

/**
 * The star and quote marks are defined once and referenced with <use> instead of
 * rendering a lucide component per card. Inlining six SVGs into every card cost
 * ~550 bytes and six DOM elements each, which dominated the page at this many
 * cards. Paths are lucide's `star` and `quote`, copied verbatim.
 */
function IconDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <symbol
          id="t-star"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </symbol>
        <symbol
          id="t-quote"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        </symbol>
      </defs>
    </svg>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-80 shrink-0 flex flex-col p-6 rounded-2xl bg-card/80 border border-border hover:border-primary/35 transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 mx-3">
      <div className="flex items-start justify-between mb-4">
        <svg className="w-7 h-7 text-accent/40" aria-hidden="true">
          <use href="#t-quote" />
        </svg>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, j) => (
            <svg key={j} className="w-3 h-3 fill-primary text-primary" aria-hidden="true">
              <use href="#t-star" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic line-clamp-6">
        &quot;{t.text}&quot;
      </p>
      <div className="mt-auto pt-3 border-t border-border">
        <p className="text-sm font-medium text-foreground mb-0.5">{t.name}</p>
        {t.role && <p className="text-xs text-primary mb-0.5">{t.role}</p>}
        <p className="text-xs text-muted-foreground">
          {t.advisor ? `Advised by ${t.advisor}` : 'Verified client review'}
        </p>
      </div>
    </div>
  );
}

const ROW_COUNT = 3;
const CARDS_PER_ROW = 24;
const VISIBLE = ROW_COUNT * CARDS_PER_ROW;

/**
 * Every card is duplicated to make the marquee seamless, so mounting all of
 * `testimonials` meant ~300 cards of DOM for the handful anyone reads. We show
 * a window of {@link VISIBLE} instead, walked with a stride that is coprime to
 * the list length: that picks distinct entries spanning the full date range
 * rather than a contiguous run of one advisor's reviews.
 *
 * `offset` rotates the window so repeat visitors don't always see the same
 * faces. It stays 0 through SSR and hydration and only moves after mount —
 * picking randomly during render would desync server and client markup.
 */
const STRIDE = 7;

/** Fixed for the lifetime of the page, so the window never shifts mid-view. */
const clientOffset = Math.floor(Math.random() * testimonials.length);
const subscribeNever = () => () => {};
const getClientOffset = () => clientOffset;
const getServerOffset = () => 0;

function buildRows(offset: number): Testimonial[][] {
  const rows: Testimonial[][] = Array.from({ length: ROW_COUNT }, () => []);
  for (let i = 0; i < Math.min(VISIBLE, testimonials.length); i++) {
    rows[i % ROW_COUNT].push(testimonials[(offset + i * STRIDE) % testimonials.length]);
  }
  return rows;
}

/**
 * Each row scrolls one full copy of itself, so the duration has to grow with
 * the card count or the marquee speeds up as reviews are added. 12.5s per card
 * matches the original pace (a 320px card plus its 24px gutter, ~27px/s).
 */
const SECONDS_PER_CARD = 12.5;

export function Testimonials() {
  const offset = useSyncExternalStore(subscribeNever, getClientOffset, getServerOffset);
  const rows = buildRows(offset);

  return (
    <section className="relative py-28 lg:py-36 bg-linear-to-b from-card via-background to-card overflow-hidden">
      <IconDefs />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-accent" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Client Success</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="cinzel text-4xl md:text-5xl lg:text-6xl leading-tight">
              Trusted by <span className="text-primary">Thousands</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="cinzel text-2xl text-primary">5/5</div>
                <div className="text-xs text-muted-foreground mt-0.5">Average client rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-right">
                <div className="cinzel text-2xl text-primary">1,000+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Families served</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Marquee rows (full-bleed, edges fade out) ── */}
      <div className="space-y-4 mb-16">
        {rows.map((row, r) => (
          /* Odd rows scroll right ←, even rows scroll left → */
          <div key={r} className="overflow-hidden marquee-mask">
            <div
              className={r % 2 === 0 ? 'flex animate-marquee-left' : 'flex animate-marquee-right'}
              style={{ animationDuration: `${row.length * SECONDS_PER_CARD}s` }}
            >
              {[...row, ...row].map((t, i) => (
                <TestimonialCard key={`r${r}-${i}`} t={t} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Awards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-border flex items-center gap-3">
            <div className="w-4 h-px bg-primary" />
            <span className="cinzel text-xs text-primary tracking-[0.25em] uppercase">Industry Recognition</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {awards.map((award, i) => (
              <motion.div
                key={award.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`p-8 text-center ${i < awards.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-border' : ''}`}
              >
                <div className="cinzel text-3xl text-primary mb-2">{award.label}</div>
                <p className="text-sm font-medium text-foreground mb-1">{award.title}</p>
                <p className="text-xs text-muted-foreground">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
