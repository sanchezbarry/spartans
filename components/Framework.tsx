'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Shield, TrendingUp, Users, Check } from 'lucide-react';

const phases = [
  {
    number: 'I',
    numeral: '01',
    icon: Compass,
    title: 'Discovery & Assessment',
    description: 'We begin by understanding your current position, values, and vision. No assumptions — only listening.',
    features: ['Financial health audit', 'Goal mapping session', 'Risk tolerance analysis', 'Family legacy planning'],
    color: 'from-primary/5 to-transparent',
  },
  {
    number: 'II',
    numeral: '02',
    icon: Shield,
    title: 'Strategic Planning',
    description: 'We develop a comprehensive battle plan tailored to your circumstances — precise, documented, actionable.',
    features: ['Custom investment strategy', 'Tax optimization framework', 'Insurance & protection plan', 'Estate planning coordination'],
    color: 'from-accent/5 to-transparent',
  },
  {
    number: 'III',
    numeral: '03',
    icon: TrendingUp,
    title: 'Execution & Growth',
    description: 'We implement with precision and monitor progress with the discipline of an elite tactical team.',
    features: ['Portfolio construction', 'Account consolidation', 'Automatic rebalancing', 'Performance tracking'],
    color: 'from-primary/5 to-transparent',
  },
  {
    number: 'IV',
    numeral: '04',
    icon: Users,
    title: 'Ongoing Partnership',
    description: "Your journey doesn't end at implementation. We adapt, refine, and evolve as your life does.",
    features: ['Quarterly strategy reviews', 'Annual planning sessions', 'Life event support', '24/7 client access'],
    color: 'from-accent/5 to-transparent',
  },
];

export function Framework() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <section id="framework" className="relative py-28 lg:py-36 bg-background overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full animate-mesh-b"
          style={{
            width: '50vw',
            height: '50vw',
            top: '10%',
            right: '-15%',
            background: 'radial-gradient(circle, rgba(139,29,42,0.07) 0%, transparent 65%)',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,169,106,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,169,106,0.03)_1px,transparent_1px)] bg-size-[5rem_5rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-accent" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">The Spartan Framework</span>
          </div>
          <h2 className="cinzel text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            A Proven Path to <span className="text-primary">Financial Victory</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl leading-relaxed">
            Our four-phase framework has guided thousands of families from financial uncertainty to lasting wealth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Phase selector */}
          <div className="lg:col-span-4 space-y-2">
            {phases.map((p, i) => (
              <motion.button
                key={p.numeral}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  active === i
                    ? 'bg-card border-primary/50 shadow-xl shadow-primary/10'
                    : 'bg-card/40 border-border hover:border-border hover:bg-card/70'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`cinzel text-3xl font-light transition-colors ${
                      active === i ? 'text-primary' : 'text-muted-foreground/30'
                    }`}
                  >
                    {p.numeral}
                  </span>
                  <div>
                    <div
                      className={`text-sm font-medium tracking-wide transition-colors ${
                        active === i ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {p.title}
                    </div>
                    {active === i && <div className="w-8 h-px bg-primary mt-1.5" />}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Phase detail */}
          <div className="lg:col-span-8">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`p-10 lg:p-14 rounded-2xl bg-linear-to-br ${phase.color} border border-border`}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-card border border-primary/30 flex items-center justify-center">
                  <phase.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="cinzel text-xs text-primary tracking-[0.25em] mb-1">
                    Phase {phase.number}
                  </div>
                  <h3 className="cinzel text-2xl lg:text-3xl text-foreground">{phase.title}</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                {phase.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {phase.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 flex items-center justify-between p-6 rounded-2xl bg-card border border-border"
            >
              <div>
                <div className="cinzel text-foreground text-sm mb-1">Ready to begin?</div>
                <div className="text-xs text-muted-foreground">Most clients see clarity within the first 90 days.</div>
              </div>
              <button className="px-6 py-3 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-lg hover:shadow-cta/25 whitespace-nowrap">
                Start Your Plan
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
