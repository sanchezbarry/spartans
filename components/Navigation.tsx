'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../app/providers/ThemeContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const navItems = [
    { label: 'Articles', href: '/articles' },
    { label: 'Our Partners', href: '/partners' },
    { label: 'Events', href: '/events' },
    { label: 'Careers', href: '/careers' },
    { label: 'iSPARTANS', href: '/ispartans' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
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
              loading="eager"
              />
      
              {/* <Shield className="w-10 h-10 text-primary" strokeWidth={1.5} /> */}
              <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
            </div>
            <div>
              <div className="tracking-[0.3em] text-primary uppercase"><h6>Spartans</h6></div>
              
              <div className=" text-muted-foreground tracking-wider"><h6>Advisors</h6></div>
            </div>
          </div>
            </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
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
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-border">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 px-6 py-2.5 text-foreground hover:text-primary transition-colors"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
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
