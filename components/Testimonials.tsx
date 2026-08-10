'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

/**
 * Verbatim client recommendations. Do not paraphrase — reproduce the reviewer's
 * own wording. `role` and `advisor` are omitted where the reviewer didn't state
 * one. Rows below take these four at a time, so add in multiples of four.
 */
const testimonials = [
  {
    name: 'Panya Tern',
    role: 'Early Childhood Educator',
    advisor: 'Dovanson',
    text: 'Dovanson is an advisor who is hands-on and present. He makes time to touch base with his clients and sends little gifts. I would recommend Dovanson to anyone who are setting up their families.',
  },
  {
    name: 'Javier Ong',
    role: 'Teacher',
    advisor: 'Ryan Tan',
    text: 'Ryan Tan Li Wei is the advisor that helped me gain more knowledge on my future plannings and what he does as a financial advisor. He’s professional, friendly and very understanding towards my life situations.',
  },
  {
    name: 'Chui Yee Siau',
    advisor: 'Sijun',
    text: 'Lai Sijun helped me make sense of my financial goals and gave clear, personalized advice that truly fit my situation. With his guidance, I finally feel confident and in control of my financial future.',
  },
  {
    name: 'Kim Junghan',
    advisor: 'Glenn',
    text: 'Glenn is a great advisor who’s very patient with someone with no prior knowledge about finances like me, and even goes further beyond to engage me about my personal life and troubles.',
  },
  {
    name: 'Jamie Tan',
    role: 'Student',
    advisor: 'Stacey',
    text: 'Stacey is very helpful, whenever I have doubts about my plan, she helped me at her earliest convenience, she’s very patient in assisting me with my plans and will only recommend what works best for me. She’s knowledgeable and always prepared during our appointment.',
  },
  {
    name: 'Sim Jia Feng',
    advisor: 'Sijun',
    text: 'Sijun is a trustworthy advisor that sells only what you need. He advised my better than my previous agent. And I was successful and happy to be in his hands for financial planning.',
  },
  {
    name: 'Ian Teo',
    role: 'SIA Executive',
    text: 'Really appreciate how there was zero hard selling. Everything was explained patiently, and the recommendations made a lot of sense for my current life stage. Felt very comfortable throughout — like talking to a friend who genuinely wants to help.',
  },
  {
    name: 'Amanda Pe',
    role: 'Media Sales',
    advisor: 'Alicia',
    text: 'A patient and non-judgmental advisor. Before I met Alicia, I wasn’t sure how to manage my finances or protect my wealth and was worried to voice out my concerns. Alicia patiently explained the importance of policies that will protect me in my time of need.',
  },
];

const awards = [
  { label: 'MDRT', title: 'Million Dollar Round Table', organization: 'Awarded agency' },
  { label: 'COT', title: 'Court of the Table', organization: 'Awarded agency' },
];

type Testimonial = {
  name: string;
  role?: string;
  advisor?: string;
  text: string;
};

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-80 shrink-0 flex flex-col p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/35 transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 mx-3">
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-7 h-7 text-accent/40" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className="w-3 h-3 fill-primary text-primary" />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
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
        {/* Row 1: scrolls left → */}
        <div className="overflow-hidden marquee-mask">
          <div className="flex animate-marquee-left">
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: scrolls right ← */}
        <div className="overflow-hidden marquee-mask">
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
