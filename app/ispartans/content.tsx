'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import {
  ArrowRight,
  Smartphone,
  Newspaper,
  Heart,
  ShoppingBag,
  Wrench,
  Gift,
} from 'lucide-react';

const features = [
  {
    icon: Newspaper,
    title: 'Newsfeed',
    subtitle: 'Full of events, discounts and more.',
    desc: 'A newsfeed full of exciting events happening around Singapore, exclusive discounts and more — all curated for SPARTANS members.',
    tags: ['Events', 'Promotions', 'News'],
    color: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  },
  {
    icon: Heart,
    title: 'Health',
    subtitle: 'Be in the pink of it.',
    desc: 'Get exclusive discounts on outpatient, dental, specialist treatments & health screening at over 150 clinics islandwide.',
    tags: ['Teleconsultation 24/7', 'Health Screenings', 'Clinic Discounts'],
    color: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
  },
  {
    icon: ShoppingBag,
    title: 'Wealth',
    subtitle: 'Retail therapy.',
    desc: 'Discounts, 1-for-1 deals, birthday treats and more at F&B outlets and retail partners across Singapore.',
    tags: ['Exclusive Discounts', '1-for-1 Deals', 'Birthday Specials'],
    color: 'bg-primary/10 border-primary/20 text-primary',
  },
  {
    icon: Wrench,
    title: 'Services',
    subtitle: 'All at your fingertips.',
    desc: 'Cleaning, sanitization, automobile services and more — access trusted service providers at member-exclusive rates.',
    tags: ['Cleaning', 'Sanitization', 'Automobile'],
    color: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Download the app',
    desc: 'Available on iOS and Android. Sign in with your SPARTANS client account — setup takes about 2 minutes.',
  },
  {
    step: '02',
    title: 'Browse your perks',
    desc: 'Explore the newsfeed for the latest events, health deals, dining discounts, and service offers curated for members.',
  },
  {
    step: '03',
    title: 'Unlock member rates',
    desc: 'Show your iSPARTANS membership at participating partners to enjoy exclusive discounts not available to the public.',
  },
  {
    step: '04',
    title: 'Stay in the loop',
    desc: 'Get notified about new partner deals, upcoming events, and community updates — all in one place.',
  },
];

export function IspartansContent() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative py-24 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background dark:to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(139,29,42,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,29,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,29,42,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px bg-accent" />
                  <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                    The Members App
                  </span>
                </div>
                <h1 className="cinzel text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                  Exclusive Perks,<br />
                  <span className="text-primary">with iSPARTANS.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Unlock a world of exclusive membership perks. As a SPARTANS client, enjoy
                  curated deals on health, dining, retail, and services — all in one app.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-6 py-3.5 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all hover:shadow-xl"
                  >
                    <Smartphone className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs opacity-70">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-6 py-3.5 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all hover:shadow-xl"
                  >
                    <Smartphone className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs opacity-70">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Existing SPARTANS clients only · Free to join
                </p>
              </motion.div>

              {/* App mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:flex items-center justify-center"
              >
                <div className="relative">
                  <div className="relative w-64 rounded-[2.5rem] border-[6px] border-foreground/20 bg-card shadow-2xl shadow-black/40 overflow-hidden aspect-[9/18]">
                    <div className="absolute inset-0 bg-linear-to-b from-card to-background p-5 flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xs text-muted-foreground">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-1.5 rounded-full bg-muted-foreground/40" />
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                        </div>
                      </div>
                      <div className="rounded-2xl bg-linear-to-br from-primary/30 to-primary/10 border border-primary/30 p-4 mb-4">
                        <p className="text-xs text-primary/80 mb-1">Member Perks</p>
                        <p className="cinzel text-lg text-primary mb-1">iSPARTANS</p>
                        <p className="text-xs text-muted-foreground">Exclusive access · Active member</p>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 cinzel tracking-wider">YOUR BENEFITS</p>
                      {[
                        { label: 'Health discounts', tag: '150+ clinics' },
                        { label: 'F&B deals', tag: '1-for-1 offers' },
                        { label: 'Home services', tag: 'Member rates' },
                      ].map((a) => (
                        <div key={a.label} className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-xs text-muted-foreground">{a.label}</span>
                          <span className="text-xs text-primary font-medium">{a.tag}</span>
                        </div>
                      ))}
                      <div className="mt-auto pt-4">
                        <div className="w-full py-2.5 rounded-xl bg-cta text-center">
                          <span className="text-xs text-cta-foreground font-medium">Browse Perks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-8 top-16 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-rose-400" />
                      <div>
                        <p className="text-xs font-medium">New health deal!</p>
                        <p className="text-xs text-muted-foreground">20% off dental</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -left-10 bottom-20 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs font-medium">1-for-1 at Abundance</p>
                        <p className="text-xs text-muted-foreground">Weekday lunch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Features ── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Member Benefits</span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl mb-3">Everything in one app</h2>
              <p className="text-muted-foreground max-w-xl">
                Four pillars of exclusive perks — curated for SPARTANS members across health, lifestyle, dining, and services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="group p-7 rounded-xl bg-card border border-border hover:border-primary/35 transition-all hover:shadow-xl hover:shadow-primary/8"
                  >
                    <div className="flex items-start gap-5 mb-4">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${f.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="cinzel text-base mb-0.5">{f.title}</h4>
                        <p className="text-sm text-primary/80 italic">{f.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Simple Setup</span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">How it works</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  {i < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(100%+0.5rem)] right-[-0.5rem] h-px bg-border" />
                  )}
                  <div className="cinzel text-4xl text-primary/20 font-light mb-4">{step.step}</div>
                  <h4 className="cinzel text-base mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-card border-t border-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Not a client yet?</span>
                <div className="w-6 h-px bg-accent" />
              </div>
              <h2 className="cinzel text-4xl md:text-5xl mb-5">
                Join SPARTANS first,<br />
                <span className="text-primary">then unlock iSPARTANS.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                iSPARTANS is exclusive to our community of clients. Start your financial journey
                with us and get access to the app on day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25"
                >
                  Book a Free Coffee Chat
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border border-border text-sm text-foreground rounded hover:border-primary/40 hover:text-primary transition-all"
                >
                  Meet Our Advisors
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
