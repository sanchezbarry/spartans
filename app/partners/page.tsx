'use client';

import { motion } from 'motion/react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ArrowRight, Star, Users, Coffee } from 'lucide-react';
import Link from 'next/link';

const advisors = [
  {
    id: 1,
    name: 'Marcus Tan',
    title: 'Senior Financial Advisor',
    specialty: 'Retirement & CPF Planning',
    bio: "Marcus has been in the industry for over 12 years and is known for making CPF strategy feel less like a government form and more like a superpower. He's helped hundreds of Singaporean families retire earlier than they thought possible.",
    credentials: ['CFP®', 'AIA Elite'],
    rating: 5.0,
    clients: 180,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format',
    quote: '"I manage my own CPF the same way I manage yours. Skin in the game."',
  },
  {
    id: 2,
    name: 'Priya Krishnan',
    title: 'Financial Advisor',
    specialty: 'Young Professionals & First Home Buyers',
    bio: "Priya specialises in helping millennials navigate the transition from 'spending everything' to 'actually building wealth'. Her coffee sessions are famously waitlisted — she has a gift for making money talk feel natural.",
    credentials: ['ChFC', 'AIA Gold'],
    rating: 5.0,
    clients: 130,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&auto=format',
    quote: '"Your 30s are when it clicks. I help you get there in your 20s."',
  },
  {
    id: 3,
    name: 'Jason Lim',
    title: 'Senior Financial Advisor',
    specialty: 'Business Owners & Self-Employed',
    bio: "Having run his own business before becoming an advisor, Jason brings a unique perspective to business owners who need to keep personal and company finances separate. He speaks entrepreneur, not just finance.",
    credentials: ['CFP®', 'AIA Premier'],
    rating: 4.9,
    clients: 95,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&auto=format',
    quote: `"I've sat on your side of the table. I know what keeps you up at night."`,
  },
  {
    id: 4,
    name: 'Aisha Rahman',
    title: 'Financial Advisor',
    specialty: 'Family Protection & Syariah-Compliant Planning',
    bio: "Aisha is passionate about making financial planning culturally relevant. She specialises in Syariah-compliant insurance and investment structures, ensuring that families can plan with confidence and conviction.",
    credentials: ['CFP®', 'AIA Gold'],
    rating: 5.0,
    clients: 110,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&auto=format',
    quote: '"Faith and finances can work together — I help you build both."',
  },
  {
    id: 5,
    name: 'Kevin Chen',
    title: 'Financial Advisor',
    specialty: 'Investment-Linked Policies & Equities',
    bio: "Kevin is the team's investment geek — in the best possible way. He tracks markets obsessively and translates complex portfolio theory into strategies real people can act on. His clients call him 'the calm in the storm'.",
    credentials: ['CFA® Level 2', 'AIA Gold'],
    rating: 4.9,
    clients: 88,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&auto=format',
    quote: `"Markets are emotional. Your strategy shouldn't be."`,
  },
  {
    id: 6,
    name: 'Sophie Ng',
    title: 'Financial Advisor',
    specialty: 'Education Planning & Child Protection',
    bio: "Sophie became a financial advisor after becoming a mum and realising how unprepared most parents are for the real cost of raising children in Singapore. She helps families plan for education, milestones, and the unexpected.",
    credentials: ['CFP®', 'AIA Silver'],
    rating: 5.0,
    clients: 74,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&auto=format',
    quote: '"Every parent wants the best for their kids. I help you afford it."',
  },
];

const partners = [
  {
    name: 'AIA Singapore',
    description: 'Our primary insurance and protection partner — one of the largest and most trusted insurers in Asia.',
    logo: 'AIA',
  },
  {
    name: 'Lion Global Investors',
    description: 'Leading asset management solutions across Asian markets, powering our investment-linked products.',
    logo: 'LGI',
  },
  {
    name: 'EndowUs',
    description: 'CPF, SRS, and cash investment platform for our clients who want digital-first portfolio management.',
    logo: 'EW',
  },
  {
    name: 'MoneyOwl',
    description: 'Unbiased financial planning tools that complement our advisory services.',
    logo: 'MO',
  },
];

export default function PartnersPage() {
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Our Team</span>
              </div>
              <h1 className="cinzel text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                Real advisors.<br />
                <span className="text-primary">Real people.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We&apos;re not suits in a tower. We&apos;re Singaporeans who have wrestled with the same
                financial decisions you&apos;re facing — and found a better way. Let us show you.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Advisor grid ── */}
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">The SPARTANS Team</span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">Meet Your Advisors</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {advisors.map((advisor, i) => (
                <motion.div
                  key={advisor.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/8 transition-all"
                >
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent" />
                    {/* Credentials */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {advisor.credentials.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2 py-0.5 rounded-full bg-primary/80 text-primary-foreground backdrop-blur"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="mb-4">
                      <h3 className="cinzel text-lg mb-0.5">{advisor.name}</h3>
                      <p className="text-sm text-primary mb-0.5">{advisor.title}</p>
                      <p className="text-xs text-muted-foreground">{advisor.specialty}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {advisor.bio}
                    </p>

                    <p className="text-xs text-accent/80 italic mb-5">{advisor.quote}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border mb-5">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                        {advisor.rating.toFixed(1)}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="w-3.5 h-3.5 text-primary" />
                        {advisor.clients}+ clients
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/events"
                      className="group/btn flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm text-muted-foreground hover:text-primary"
                    >
                      <Coffee className="w-4 h-4" />
                      Book a coffee chat
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Strategic Partners ── */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Our Network</span>
              </div>
              <h2 className="cinzel text-3xl md:text-4xl">Strategic Partners</h2>
              <p className="text-muted-foreground mt-3 max-w-xl">
                We work with best-in-class institutions to give you access to the widest range of
                financial tools and products.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="cinzel text-lg text-primary font-bold">{p.logo}</span>
                  </div>
                  <h4 className="cinzel text-sm mb-2">{p.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Ready?</span>
                <div className="w-6 h-px bg-accent" />
              </div>
              <h2 className="cinzel text-4xl md:text-5xl mb-5">
                Find your <span className="text-primary">Spartan advisor</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Every member of our team offers a free first coffee session. Come meet us, ask anything,
                and decide if we&apos;re the right fit — no pressure, ever.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide rounded hover:bg-primary/85 transition-all hover:shadow-xl hover:shadow-primary/25"
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
