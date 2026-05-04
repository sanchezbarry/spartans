

'use client';

import { motion } from 'motion/react';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary tracking-wide">Elite Financial Planning</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            <span className="block text-foreground">Discipline.</span>
            <span className="block text-foreground">Strategy.</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Victory.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Elite financial planning for those who refuse to settle. Build your wealth empire with Spartan precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-2">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-lg hover:bg-card transition-all">
              Explore Our Framework
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all"
            >
              <Shield className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="mb-2">$2.5B+</h3>
              <p className="text-muted-foreground text-sm">Assets Under Management</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all"
            >
              <Users className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="mb-2">5,000+</h3>
              <p className="text-muted-foreground text-sm">Families Served</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all"
            >
              <TrendingUp className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="mb-2">98%</h3>
              <p className="text-muted-foreground text-sm">Client Retention Rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
}
