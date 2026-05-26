'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Patterson',
    role: 'CEO, Technology Venture',
    location: 'Singapore',
    rating: 5,
    text: 'SPARTANS transformed my approach to wealth. Their strategic planning helped me navigate a successful exit and structure my windfall for generational impact.',
  },
  {
    name: 'Dr. Lisa Chen',
    role: 'Medical Professional',
    location: 'Singapore',
    rating: 5,
    text: 'After years neglecting my finances while building my practice, SPARTANS gave me clarity and confidence. They handle the complexity so I can focus on my patients.',
  },
  {
    name: 'Robert & Amanda Foster',
    role: 'Retired Professionals',
    location: 'Singapore',
    rating: 5,
    text: "We've worked with several advisors. SPARTANS is categorically different — they treat our money like their own. Our retirement income strategy has given us freedom we didn't think possible.",
  },
  {
    name: 'James Rodriguez',
    role: 'Business Owner',
    location: 'Singapore',
    rating: 5,
    text: 'The team at SPARTANS understands entrepreneurs. They helped me separate personal and business wealth, optimise my tax situation, and plan for an eventual exit.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Marketing Director',
    location: 'Singapore',
    rating: 5,
    text: "What impressed me most was the holistic approach. They didn't just manage my portfolio — they coordinated with my accountant to optimise every dimension of my financial life.",
  },
  {
    name: 'David & Michelle Park',
    role: 'Young Professionals',
    location: 'Singapore',
    rating: 5,
    text: "As a young family, we thought wealth management was only for the ultra-rich. SPARTANS showed us how strategic planning early creates exponential benefits.",
  },
  {
    name: 'Raymond Tan',
    role: 'Software Engineer',
    location: 'Singapore',
    rating: 5,
    text: "The coffee sessions are genuinely helpful — no hard sell, just real talk about money. I walked out with an actual plan, not a brochure.",
  },
  {
    name: 'Priya Nair',
    role: 'HR Manager',
    location: 'Singapore',
    rating: 5,
    text: "My advisor at SPARTANS has been with me through a job change, a new home, and a baby. That kind of continuity is rare and incredibly reassuring.",
  },
];

const awards = [
  { year: '2026', title: 'Top Wealth Management Firm', organization: "Barron's" },
  { year: '2025', title: 'Best Financial Planning Team', organization: 'Forbes' },
  { year: '2025', title: 'Excellence in Client Service', organization: 'FPA' },
  { year: '2024', title: 'Top RIA Firm', organization: 'Investment News' },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-80 shrink-0 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/35 transition-all hover:shadow-xl hover:shadow-primary/8 mx-3">
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-7 h-7 text-accent/40" />
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className="w-3 h-3 fill-primary text-primary" />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
        &quot;{t.text}&quot;
      </p>
      <div className="pt-3 border-t border-border">
        <p className="text-sm font-medium text-foreground mb-0.5">{t.name}</p>
        <p className="text-xs text-primary mb-0.5">{t.role}</p>
        <p className="text-xs text-muted-foreground">{t.location}</p>
      </div>
    </div>
  );
}

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

export function Testimonials() {
  return (
    <section className="relative py-28 lg:py-36 bg-linear-to-b from-card via-background to-card overflow-hidden">
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
                <div className="cinzel text-2xl text-primary">4.9/5</div>
                <div className="text-xs text-muted-foreground mt-0.5">Average client rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-right">
                <div className="cinzel text-2xl text-primary">5,000+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Families served</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Marquee rows (full-bleed, no max-width) ── */}
      <div className="space-y-4 mb-16">
        {/* Row 1: scrolls left → */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-left">
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: scrolls right ← */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
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
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {awards.map((award, i) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`p-8 text-center ${i < awards.length - 1 ? 'border-r border-border' : ''} ${i < 2 ? 'border-b border-border lg:border-b-0' : ''}`}
              >
                <div className="cinzel text-3xl text-primary mb-2">{award.year}</div>
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
