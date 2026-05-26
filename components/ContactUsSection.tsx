'use client';

import { ContactUs } from '@/components/ContactUs';
import { motion } from 'motion/react';
import { Shield, Coffee, Phone } from 'lucide-react';

export default function ContactUsSection() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-linear-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-accent" />
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                Get in Touch
              </span>
            </div>
            <h2 className="cinzel text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Start your <span className="text-primary">journey</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Book a free coffee chat with one of our advisors. No pressure, no jargon — just an
              honest conversation about your finances and your future.
            </p>

            {/* Quick contact options */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+6500000000"
                className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-border hover:border-primary/40 transition-all"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Call us
                </span>
              </a>
              <a
                href="/events"
                className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-border hover:border-primary/40 transition-all"
              >
                <Coffee className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Book a coffee session
                </span>
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <ContactUs />
            </div>
          </motion.div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-3/4 bg-card border border-border">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=900&fit=crop&auto=format"
                alt="Financial advisor in a friendly consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />

              {/* Floating card */}
              <div className="absolute bottom-8 left-6 right-6 p-5 bg-card/90 backdrop-blur border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="cinzel text-sm text-primary tracking-wide">Free First Consultation</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Coffee&apos;s on us. Come as you are. We&apos;ll handle the rest.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/10 rounded-xl" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-accent/15 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
