'use client';

import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Articles', href: '#story' },
    { label: 'Our Partners', href: '#framework' },
    { label: 'Events', href: '#advisors' },
    { label: 'Careers', href: '#articles' },
    { label: 'iSPARTANS', href: '#events' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 
        <div className="flex items-center justify-between h-20">
               <Link href="/">
          <div className="flex items-center gap-3">
            <div className="relative">

            <Image
              src="/logo.png"
              alt="Spartans Logo"
              width={50}
                height={50}
              />
      
              {/* <Shield className="w-10 h-10 text-primary" strokeWidth={1.5} /> */}
              <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
            </div>
            <div>
              <div className="tracking-[0.3em] text-primary uppercase">Spartans</div>
              
              <div className="text-xs text-muted-foreground tracking-wider">Advisors</div>
            </div>
          </div>
            </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm text-foreground hover:text-primary transition-colors">
              Client Login
            </button>
            <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
              Schedule Call
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-border">
                <button className="w-full px-6 py-2.5 text-foreground hover:text-primary transition-colors text-center">
                  Client Login
                </button>
                <button className="w-full px-6 py-2.5 bg-primary text-primary-foreground rounded-lg">
                  Schedule Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
