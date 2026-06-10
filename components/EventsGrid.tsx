'use client';

import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, Coffee, Mic, BookOpen, Users, GraduationCap, Mic2 } from 'lucide-react';
import type { SanityEvent } from '@/lib/sanity';

const TYPE_META: Record<string, { label: string; Icon: React.ElementType }> = {
  'coffee-session': { label: 'Coffee Session', Icon: Coffee },
  'workshop':       { label: 'Workshop',       Icon: BookOpen },
  'webinar':        { label: 'Webinar',         Icon: Mic },
  'talk':           { label: 'Talk',            Icon: Mic2 },
  'seminar':        { label: 'Seminar',         Icon: GraduationCap },
  'networking':     { label: 'Networking',      Icon: Users },
};

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function isPast(dateStr: string) {
  return new Date(dateStr + 'T23:59:59') < new Date();
}

export function EventsGrid({ events }: { events: SanityEvent[] }) {
  if (events.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <p className="text-muted-foreground">No events scheduled yet. Check back soon.</p>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-14">
          <div className="w-6 h-px bg-accent" />
          <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Mark Your Calendar</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event, i) => {
            const meta = event.type ? TYPE_META[event.type] : null;
            const Icon = meta?.Icon ?? Calendar;
            const past = isPast(event.date);

            return (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className={`group relative p-7 rounded-xl bg-card border transition-all hover:shadow-2xl hover:shadow-primary/8 ${
                  past
                    ? 'border-border opacity-60'
                    : 'border-primary/30 hover:border-primary/60'
                }`}
              >
                {/* Type badge */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  {meta && (
                    <span className="cinzel text-xs text-primary tracking-[0.2em] uppercase">
                      {meta.label}
                    </span>
                  )}
                  {past && (
                    <span className="ml-auto text-[10px] tracking-[0.15em] uppercase text-muted-foreground border border-border rounded-sm px-2 py-0.5">
                      Past
                    </span>
                  )}
                </div>

                <h3 className="cinzel text-xl mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {event.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    {formatDate(event.date)}
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

                {/* Pills + Register */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border ${
                      event.isFree
                        ? 'bg-primary/10 text-primary border-primary/20'
                        : 'bg-accent/10 text-accent border-accent/20'
                    }`}
                  >
                    {event.isFree ? 'Free' : 'Paid'}
                  </span>

                  {event.registerUrl && !past && (
                    <a
                      href={event.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1.5 group/btn"
                    >
                      Register
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
