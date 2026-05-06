

'use client';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#1a100a]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(139,29,42,0.08),transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-accent"></div>
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Elite Financial Planning</span>
            </div>

            <h1 className="cinzel text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-8">
              <span className="block text-foreground">Disciplined</span>
              <span className="block text-foreground">today.</span>
              <span className="block mt-2 text-primary">Confident</span>
              <span className="block text-primary">tomorrow.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Elite financial planning for those who refuse to settle. Build your wealth legacy with Spartan precision and unwavering strategy.
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

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border">
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
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[5/6] xl:aspect-[4/5] max-w-xl lg:max-w-none mx-auto overflow-hidden rounded-sm bg-muted">
              <img
                src="https://images.unsplash.com/photo-1766142903386-6de2a43b66ed?w=900&h=1100&fit=crop&auto=format"
                alt="Man in suit standing confidently on rocky hilltop at dusk — embodying Spartan discipline and ambition"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent lg:from-background/20"></div>

              {/* Floating credential badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-8 left-6 right-6 sm:right-auto sm:max-w-xs p-5 bg-card/90 backdrop-blur border border-border rounded"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 20 24" fill="none" className="w-5 h-5 text-primary">
                      <path d="M10 1.5C6 1.5 3 4.8 3 9v2.5c0 1.8.8 3.3 2 4.3L4.3 19h11.4L15 15.8c1.2-1 2-2.5 2-4.3V9C17 4.8 14 1.5 10 1.5z" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M7 11h2.5M10.5 11H13M10 12.5v3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="cinzel text-sm text-primary tracking-wide mb-0.5">Barron&apos;s Top Firm 2026</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Recognized for excellence in wealth management and client service</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/10 rounded-sm hidden xl:block"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-accent/15 rounded-sm hidden xl:block"></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
}
