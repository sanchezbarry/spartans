'use client';

import { motion } from 'motion/react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Calendar, MapPin, Clock, Users, ArrowRight, Coffee, Mic, BookOpen } from 'lucide-react';
import Link from 'next/link';

const upcomingEvents = [
  {
    id: 1,
    type: 'Coffee Session',
    icon: Coffee,
    title: 'Coffee with SPARTANS — June Edition',
    date: 'Saturday, 14 June 2026',
    time: '10:00 AM – 12:00 PM',
    location: 'The Coffee Academics, Tampines Mall',
    spots: 12,
    spotsLeft: 4,
    description:
      "Our signature monthly coffee session. Bring your financial questions, we'll bring the answers — and yes, coffee is on us. No agenda, no hard sell. Just real talk about money.",
    tags: ['Free', 'Beginners Welcome'],
    color: 'border-primary/30 hover:border-primary/60',
  },
  {
    id: 2,
    type: 'Workshop',
    icon: BookOpen,
    title: 'Insurance 101: What You Actually Need',
    date: 'Saturday, 21 June 2026',
    time: '2:00 PM – 4:30 PM',
    location: 'AIA Tampines Branch, Level 3',
    spots: 30,
    spotsLeft: 11,
    description:
      "Cut through the noise. Learn which insurance policies are worth your money, which ones you can skip, and how to structure your coverage as life changes.",
    tags: ['Free', 'Workshop'],
    color: 'border-accent/30 hover:border-accent/60',
  },
  {
    id: 3,
    type: 'Webinar',
    icon: Mic,
    title: 'Planning Your First Home Purchase in 2026',
    date: 'Wednesday, 25 June 2026',
    time: '7:30 PM – 9:00 PM',
    location: 'Online (Zoom)',
    spots: 100,
    spotsLeft: 47,
    description:
      "HDB, BTO, resale, private — we cover it all. How to plan your finances before you even start viewing flats, and the common mistakes first-timers make.",
    tags: ['Free', 'Online'],
    color: 'border-primary/30 hover:border-primary/60',
  },
  {
    id: 4,
    type: 'Coffee Session',
    icon: Coffee,
    title: 'Coffee with SPARTANS — July Edition',
    date: 'Saturday, 12 July 2026',
    time: '10:00 AM – 12:00 PM',
    location: 'The Coffee Academics, Tampines Mall',
    spots: 12,
    spotsLeft: 12,
    description:
      "Another edition of our beloved monthly coffee session. This month we're focusing on CPF strategies and how to make your contributions work harder for you.",
    tags: ['Free', 'CPF Focus'],
    color: 'border-accent/30 hover:border-accent/60',
  },
];

const pastEvents = [
  {
    title: 'Coffee with SPARTANS — May Edition',
    date: 'May 2026',
    attendees: 14,
    highlight: `"Best financial conversation I've ever had over kopi." — Attendee`,
  },
  {
    title: 'Investing Basics: ETFs, REITs & Beyond',
    date: 'April 2026',
    attendees: 28,
    highlight: '"Finally understood what an ETF is. Life-changing." — Attendee',
  },
  {
    title: 'Retirement Planning for the 30s & 40s',
    date: 'March 2026',
    attendees: 35,
    highlight: '"Walked in clueless, walked out with a 10-year plan." — Attendee',
  },
  {
    title: 'Marriage & Money: Combining Finances',
    date: 'February 2026',
    attendees: 22,
    highlight: '"Should have attended this before we got married." — Attendee',
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(139,29,42,0.07),transparent)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Events & Community</span>
              </div>
              <h1 className="cinzel text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                Learn, connect,<br />
                <span className="text-primary">grow together.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                Free workshops, coffee sessions, and webinars designed to make financial planning
                approachable. No jargon. No pressure. Just real conversations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#upcoming"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25"
                >
                  See Upcoming Events
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#past"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border text-sm text-foreground rounded hover:border-primary/40 hover:text-primary transition-all"
                >
                  Past Events
                </a>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Stats strip ── */}
        <section className="border-b border-border bg-card/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {[
                { value: '50+', label: 'Events this year' },
                { value: '800+', label: 'Seats filled' },
                { value: '100%', label: 'Free to attend' },
                { value: '4.9★', label: 'Average rating' },
              ].map((s) => (
                <div key={s.label} className="py-8 px-6 text-center">
                  <div className="cinzel text-3xl text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Upcoming events ── */}
        <section id="upcoming" className="py-24 lg:py-32">
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Mark Your Calendar</span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">Upcoming Events</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event, i) => {
                const Icon = event.icon;
                const fillPct = Math.round(((event.spots - event.spotsLeft) / event.spots) * 100);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className={`group relative p-7 rounded-xl bg-card border transition-all hover:shadow-2xl hover:shadow-primary/8 ${event.color}`}
                  >
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="cinzel text-xs text-primary tracking-[0.2em] uppercase">{event.type}</span>
                    </div>

                    <h3 className="cinzel text-xl mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{event.description}</p>

                    {/* Meta */}
                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary shrink-0" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        {event.location}
                      </div>
                    </div>

                    {/* Spots bar */}
                    <div className="mb-5">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.spots - event.spotsLeft} / {event.spots} spots taken
                        </span>
                        <span className={event.spotsLeft <= 4 ? 'text-primary font-medium' : ''}>
                          {event.spotsLeft} left
                        </span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${fillPct}%` }}
                        />
                      </div>
                    </div>

                    {/* Tags + CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1.5 group/btn">
                        Register
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="cinzel text-2xl md:text-3xl mb-2">
                  Can&apos;t make it to an event?
                </h3>
                <p className="text-muted-foreground">
                  Book a one-on-one coffee chat with an advisor at a time that suits you.
                </p>
              </div>
              <Link
                href="/partners"
                className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide rounded hover:bg-primary/85 transition-all hover:shadow-xl hover:shadow-primary/25 whitespace-nowrap"
              >
                Meet Our Advisors
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Past events ── */}
        <section id="past" className="py-24 lg:py-32">
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
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">In Case You Missed It</span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">Past Events</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="cinzel text-base mb-1">{event.title}</h4>
                      <span className="text-xs text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="w-3.5 h-3.5" />
                      {event.attendees} attended
                    </div>
                  </div>
                  <p className="text-sm text-accent/80 italic">{event.highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
