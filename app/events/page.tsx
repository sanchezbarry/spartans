import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { EventsGrid } from '@/components/EventsGrid';
import { sanityClient, EVENTS_QUERY } from '@/lib/sanity';
import type { SanityEvent } from '@/lib/sanity';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60;

export const metadata = {
  title: 'Free Financial Planning Events in Singapore',
  description:
    'Join SPARTANS Advisors for free workshops, coffee sessions, and webinars on insurance, retirement planning, and wealth management in Singapore. No jargon, no pressure.',
  openGraph: {
    title: 'Free Financial Planning Events in Singapore | SPARTANS Advisors',
    description:
      'Free workshops and coffee sessions on insurance, CPF, and retirement planning in Singapore. Hosted by AIA-affiliated financial advisors.',
  },
};

export default async function EventsPage() {
  const events: SanityEvent[] = await sanityClient.fetch(EVENTS_QUERY);

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
            <div className="max-w-3xl">
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
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Events grid ── */}
        <EventsGrid events={events} />

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
                href="/team"
                className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25 whitespace-nowrap"
              >
                Meet Our Advisors
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
