'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Patterson',
    role: 'CEO, Technology Venture',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'SPARTANS transformed my approach to wealth. Their strategic planning helped me navigate a successful exit and structure my windfall for generational impact. The discipline they bring is genuinely unmatched.',
  },
  {
    name: 'Dr. Lisa Chen',
    role: 'Orthopedic Surgeon',
    location: 'Austin, TX',
    rating: 5,
    text: "After years neglecting my finances while building my practice, SPARTANS gave me clarity and confidence. They handle the complexity so I can focus on my patients, knowing my family's future is secure.",
  },
  {
    name: 'Robert & Amanda Foster',
    role: 'Retired Executives',
    location: 'Naples, FL',
    rating: 5,
    text: "We've worked with several advisors over 30 years. SPARTANS is categorically different — they treat our money like their own. Our retirement income strategy has given us freedom we didn't think possible.",
  },
  {
    name: 'James Rodriguez',
    role: 'Business Owner',
    location: 'Denver, CO',
    rating: 5,
    text: 'The team at SPARTANS understands entrepreneurs. They helped me separate personal and business wealth, optimize my tax situation, and plan for an eventual exit. Strategic thinking at its finest.',
  },
  {
    name: 'Sarah Thompson',
    role: 'VP of Marketing',
    location: 'Seattle, WA',
    rating: 5,
    text: "What impressed me most was the holistic approach. They didn't just manage my portfolio — they coordinated with my CPA and attorney to optimize every dimension of my financial life. True partnership.",
  },
  {
    name: 'David & Michelle Park',
    role: 'Young Professionals',
    location: 'Chicago, IL',
    rating: 5,
    text: "As a young family, we thought wealth management was only for the ultra-rich. SPARTANS showed us how strategic planning early creates exponential benefits. They're invested in our long-term success.",
  },
];

const awards = [
  { year: '2026', title: "Top Wealth Management Firm", organization: "Barron's" },
  { year: '2025', title: 'Best Financial Planning Team', organization: 'Forbes' },
  { year: '2025', title: 'Excellence in Client Service', organization: 'Financial Planning Association' },
  { year: '2024', title: 'Top RIA Firm', organization: 'Investment News' },
];

export function Testimonials() {
  return (
    <section className="relative py-28 lg:py-36 bg-gradient-to-b from-card via-background to-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-accent"></div>
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
              <div className="w-px h-10 bg-border"></div>
              <div className="text-right">
                <div className="cinzel text-2xl text-primary">5,000+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Families served</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group"
            >
              <div className="h-full p-7 rounded-sm bg-card border border-border hover:border-primary/35 transition-all hover:shadow-xl hover:shadow-primary/8">
                <div className="flex items-start justify-between mb-5">
                  <Quote className="w-8 h-8 text-accent/40" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  &quot;{t.text}&quot;
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-0.5">{t.name}</p>
                  <p className="text-xs text-primary mb-0.5">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-sm border border-border bg-card overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-border flex items-center gap-3">
            <div className="w-4 h-px bg-primary"></div>
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
