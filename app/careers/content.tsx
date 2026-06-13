'use client';

import { motion } from 'motion/react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import {
  ArrowRight,
  TrendingUp,
  Heart,
  Users,
  Award,
  BookOpen,
  Coffee,
} from 'lucide-react';
import Image from 'next/image';

const culture = [
  {
    icon: Users,
    title: 'Leadership Culture',
    desc: 'Every SPARTAN is a leader in their own right. You are encouraged to always think in a position of leadership regardless of rank and position.',
  },
  {
    icon: Coffee,
    title: 'Dedicated Mentorship',
    desc: 'Training includes classroom and field experiences with a strong focus on relationship-building and client service development — you are never left alone.',
  },
  {
    icon: BookOpen,
    title: 'Structured Learning',
    desc: 'Our exhaustive training program covers everything from the first approach to servicing your clients, and nothing will be left to chance.',
  },
  {
    icon: Heart,
    title: 'Purpose over commission',
    desc: "Yes, we earn commissions. But every advisor on our team joined because they care about making a real difference in clients' lives.",
  },
  {
    icon: TrendingUp,
    title: 'Growth is built in',
    desc: 'We sponsor your exams, fund your training, and give you a clear roadmap — from associate to senior to partner.',
  },
  {
    icon: Award,
    title: 'Recognised excellence',
    desc: "Top performers get featured in team spotlights, access to exclusive events, and are fast-tracked to AIA's elite advisor tiers.",
  },
];

export function CareersContent() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_60%_40%,rgba(139,29,42,0.07),transparent)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px bg-accent" />
                  <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Join the Team</span>
                </div>
                <h1 className="cinzel text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                  Build your career<br />
                  <span className="text-primary">with purpose.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Become a SPARTAN. Build a career that makes a real difference in people&apos;s lives —
                  with a team that has your back every step of the way.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25"
                >
                  Have a Chat With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-card border border-border">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&auto=format"
                    alt="Spartans team collaborating"
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 hidden dark:block bg-linear-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-card/90 backdrop-blur border border-border rounded-lg">
                    <p className="cinzel text-sm text-primary mb-1">Growing Team</p>
                    <p className="text-xs text-muted-foreground">
                      6 advisors · AIA Tampines · Est. 2019
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Family quote ── */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-8 h-px bg-accent mx-auto mb-8" />
              <blockquote className="cinzel text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground mb-6">
                &ldquo;We are not just colleagues,<br />
                <span className="text-primary">We are Family.</span>&rdquo;
              </blockquote>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Together, we leave nobody behind. Together, we succeed. Together, we set new milestones.
              </p>
              <div className="w-8 h-px bg-accent mx-auto mt-8" />
            </motion.div>
          </div>
        </section>

        {/* ── Culture ── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Life at SPARTANS</span>
                <div className="w-6 h-px bg-accent" />
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">Why join us?</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {culture.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="group p-7 rounded-xl bg-card border border-border hover:border-primary/35 transition-all hover:shadow-xl hover:shadow-primary/8"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="cinzel text-base mb-2">{c.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </motion.div>
                );
              })}
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Ready to Join?</span>
                <div className="w-6 h-px bg-accent" />
              </div>
              <h2 className="cinzel text-4xl md:text-5xl mb-5">
                Have a chat<br />
                <span className="text-primary">with us.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                No formal application required. Drop us a message and one of our leaders will reach out to schedule a casual conversation about your goals.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
