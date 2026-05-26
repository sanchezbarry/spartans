'use client';

import { motion } from 'motion/react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import {
  ArrowRight,
  Star,
  Gift,
  Users,
  Trophy,
  Shield,
  Zap,
  BookOpen,
  Coffee,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Earn Spartan Points',
    desc: 'Earn points every time you complete a financial milestone — reviewing your coverage, attending events, reaching savings goals, or referring friends.',
    color: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  },
  {
    icon: Gift,
    title: 'Redeem Real Rewards',
    desc: "Swap your points for dining vouchers, retail gift cards, coffee session upgrades, or donate to charity in your name. Real rewards, no fine print.",
    color: 'bg-primary/10 border-primary/20 text-primary',
  },
  {
    icon: BookOpen,
    title: 'Exclusive Content',
    desc: 'Members-only access to our full financial literacy library, live Q&A sessions with advisors, and early access to The Money Mine series.',
    color: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  },
  {
    icon: Users,
    title: 'Community Circle',
    desc: 'Join the iSPARTANS community group — share wins, ask questions, and connect with other members who are on the same financial journey as you.',
    color: 'bg-green-500/10 border-green-500/20 text-green-400',
  },
  {
    icon: Trophy,
    title: 'Leaderboard & Badges',
    desc: 'Climb the ranks from Recruit to Spartan Commander. Earn achievement badges for hitting milestones and get recognised by the community.',
    color: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  },
  {
    icon: Shield,
    title: 'Policy Dashboard',
    desc: 'See all your policies, coverage gaps, and upcoming renewals in one clean view. No more digging through emails to find your documents.',
    color: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  },
];

const tiers = [
  {
    name: 'Recruit',
    points: '0 pts',
    icon: '🛡️',
    perks: ['Basic rewards catalogue', 'Community access', 'Monthly newsletter'],
    current: false,
  },
  {
    name: 'Spartan',
    points: '500 pts',
    icon: '⚔️',
    perks: ['Full rewards catalogue', 'Priority event booking', 'Monthly advisor check-in', 'Exclusive content library'],
    current: true,
  },
  {
    name: 'Elite',
    points: '2,000 pts',
    icon: '🏆',
    perks: ['Premium rewards (Grab, dining, retail)', 'VIP event seating', 'Quarterly advisor review', 'Family account linking'],
    current: false,
  },
  {
    name: 'Commander',
    points: '5,000 pts',
    icon: '👑',
    perks: ['Top-tier rewards + cash redemption', 'Private advisory sessions', 'Annual financial health report', 'Referral bonus boost'],
    current: false,
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Download the app',
    desc: 'Available on iOS and Android. Log in with your SPARTANS client account — it takes about 2 minutes to set up.',
  },
  {
    step: '02',
    title: 'Complete your profile',
    desc: 'Link your existing policies, set your financial goals, and take the quick onboarding quiz to personalise your dashboard.',
  },
  {
    step: '03',
    title: 'Start earning points',
    desc: 'Every action counts — from attending a workshop to reviewing your coverage. Points stack up faster than you think.',
  },
  {
    step: '04',
    title: 'Redeem & grow',
    desc: 'Swap points for rewards, climb the tiers, and track your financial progress — all in one place.',
  },
];

const stats = [
  { value: '3,200+', label: 'Active Members' },
  { value: '42,000+', label: 'Points Redeemed' },
  { value: '180+', label: 'Rewards Available' },
  { value: '4.8★', label: 'App Store Rating' },
];

export default function ISpartansPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative py-24 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(139,29,42,0.1),transparent)]" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,169,106,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,169,106,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

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
                    The Rewards App
                  </span>
                </div>
                <h1 className="cinzel text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                  iSPARTANS.<br />
                  <span className="text-primary">Your rewards,</span><br />
                  your way.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Being a SPARTANS client should feel rewarding in every sense. Earn points for the
                  financial moves you&apos;re already making, and redeem them for things you actually want.
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

              {/* App mockup visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:flex items-center justify-center"
              >
                <div className="relative">
                  {/* Phone frame */}
                  <div className="relative w-64 rounded-[2.5rem] border-[6px] border-foreground/20 bg-card shadow-2xl shadow-black/40 overflow-hidden aspect-[9/18]">
                    {/* Screen content */}
                    <div className="absolute inset-0 bg-linear-to-b from-card to-background p-5 flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xs text-muted-foreground">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-1.5 rounded-full bg-muted-foreground/40" />
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                        </div>
                      </div>

                      {/* Points card */}
                      <div className="rounded-2xl bg-linear-to-br from-primary/30 to-primary/10 border border-primary/30 p-4 mb-4">
                        <p className="text-xs text-primary/80 mb-1">Your Points</p>
                        <p className="cinzel text-3xl text-primary mb-1">1,240</p>
                        <p className="text-xs text-muted-foreground">Spartan tier · 760 to Elite</p>
                        <div className="mt-2 h-1 bg-primary/20 rounded-full">
                          <div className="h-full w-[62%] bg-primary rounded-full" />
                        </div>
                      </div>

                      {/* Recent activity */}
                      <p className="text-xs text-muted-foreground mb-3 cinzel tracking-wider">RECENT ACTIVITY</p>
                      {[
                        { label: 'Attended workshop', pts: '+50' },
                        { label: 'Policy review', pts: '+30' },
                        { label: 'Referral bonus', pts: '+100' },
                      ].map((a) => (
                        <div key={a.label} className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-xs text-muted-foreground">{a.label}</span>
                          <span className="text-xs text-primary font-medium">{a.pts}</span>
                        </div>
                      ))}

                      {/* Redeem button */}
                      <div className="mt-auto pt-4">
                        <div className="w-full py-2.5 rounded-xl bg-primary text-center">
                          <span className="text-xs text-primary-foreground font-medium">Redeem Rewards</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -right-8 top-16 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <div>
                        <p className="text-xs font-medium">Milestone unlocked!</p>
                        <p className="text-xs text-muted-foreground">+100 bonus points</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge 2 */}
                  <div className="absolute -left-10 bottom-20 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs font-medium">$20 Grab voucher</p>
                        <p className="text-xs text-muted-foreground">Ready to redeem</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Stats ── */}
        <section className="border-b border-border bg-card/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {stats.map((s) => (
                <div key={s.label} className="py-8 px-6 text-center">
                  <div className="cinzel text-3xl text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Built for You
                </span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl mb-3">Everything in one app</h2>
              <p className="text-muted-foreground max-w-xl">
                iSPARTANS turns your financial journey into something you actually look forward to checking.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${f.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="cinzel text-base mb-2">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Tiers ── */}
        <section className="py-24 bg-card border-y border-border">
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Membership Tiers
                </span>
                <div className="w-6 h-px bg-accent" />
              </div>
              <h2 className="cinzel text-4xl md:text-5xl mb-3">Climb the ranks</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The more you grow financially, the more you earn. Each tier unlocks better rewards and more exclusive access.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`relative p-6 rounded-xl border transition-all ${
                    tier.current
                      ? 'bg-primary/5 border-primary/40 shadow-xl shadow-primary/10'
                      : 'bg-background border-border hover:border-primary/30'
                  }`}
                >
                  {tier.current && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary text-primary-foreground cinzel tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-3xl mb-3">{tier.icon}</div>
                  <h3 className="cinzel text-xl mb-1">{tier.name}</h3>
                  <p className="text-sm text-primary mb-5">{tier.points}</p>
                  <ul className="space-y-2">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Simple Setup
                </span>
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
                  {/* Connector line */}
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Not a client yet?
                </span>
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
                <a
                  href="/events"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide rounded hover:bg-primary/85 transition-all hover:shadow-xl hover:shadow-primary/25"
                >
                  Book a Free Coffee Chat
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/partners"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border border-border text-sm text-foreground rounded hover:border-primary/40 hover:text-primary transition-all"
                >
                  Meet Our Advisors
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
