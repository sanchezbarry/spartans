'use client';

import { motion } from 'motion/react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

const partners = [
  {
    name: 'POWERHOUSE KTV',
    offer: 'Up to 10% Off Home Karaoke Packages',
    logo: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2021/09/Screenshot-2021-09-02-at-9.46.46-AM.png',
    href: 'https://spartansadvisors.com/powerhousektv/',
  },
  {
    name: 'The Weekend Florist',
    offer: 'Up to 10% Off',
    logo: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2021/09/33.jpg',
    href: 'https://spartansadvisors.com/theweekendflorist/',
  },
  {
    name: '6 DAYS Cleaning',
    offer: 'Free Home Sanitisation',
    logo: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2021/09/Background.jpg',
    href: 'https://spartansadvisors.com/6days/',
  },
  {
    name: 'Abundance',
    offer: '10% Off Weekday Lunch',
    logo: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/02/195959779_251443456742971_7011640674426618798_n-1.jpg',
    href: 'https://spartansadvisors.com/abundance/',
  },
  {
    name: 'The Automotive Guys',
    offer: 'Free Consignment Service Worth Up to S$700',
    logo: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/02/auto6.jpg',
    href: 'https://spartansadvisors.com/the-automotive-guys/',
  },
  {
    name: 'For Kanso',
    offer: 'Up to 10% Off Curated Scents',
    logo: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/03/Logo-with-Circle-Frame.png',
    href: 'https://spartansadvisors.com/for-kanso/',
  },
];

export function PartnersContent() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_40%_60%,rgba(139,29,42,0.07),transparent)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Our Network</span>
              </div>
              <h1 className="cinzel text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                Exclusive perks.<br />
                <span className="text-primary">Just for clients.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                SPARTANS clients get access to exclusive deals from our network of trusted partner
                businesses — from lifestyle to home services to dining.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Partner grid ── */}
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Partner Companies</span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">Our Partners</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/8 transition-all"
                >
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card/70 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="cinzel text-lg mb-3">{partner.name}</h3>
                    <div className="flex items-start gap-2 mb-5 flex-1">
                      <Tag className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{partner.offer}</p>
                    </div>
                    <Link
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm text-muted-foreground hover:text-primary"
                    >
                      View offer
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-card border-t border-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Become a Client</span>
                <div className="w-6 h-px bg-accent" />
              </div>
              <h2 className="cinzel text-4xl md:text-5xl mb-5">
                Want access to <span className="text-primary">these perks?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Partner benefits are exclusive to SPARTANS clients. Book a free coffee session
                with one of our advisors to get started.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25"
              >
                Book a Free Coffee Session
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
