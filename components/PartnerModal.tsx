'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Globe, MessageCircle, Tag } from 'lucide-react';
import type { SanityPartner } from '@/lib/sanity';

const PLATFORM_META: Record<string, { label: string; icon: React.ReactNode }> = {
  facebook: {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  instagram: {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  youtube: {
    label: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  tiktok: {
    label: 'TikTok',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  website: {
    label: 'Website',
    icon: <Globe className="w-4 h-4" />,
  },
  whatsapp: {
    label: 'WhatsApp',
    icon: <MessageCircle className="w-4 h-4" />,
  },
};

interface Props {
  partner: SanityPartner | null;
  onClose: () => void;
}

export function PartnerModal({ partner, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!partner) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [partner, onClose]);

  const allImages = partner
    ? [
        ...(partner.logo ? [partner.logo] : []),
        ...(partner.images ?? []),
      ]
    : [];

  return (
    <AnimatePresence>
      {partner && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-60 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={partner.name}
            className="fixed inset-0 z-61 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="relative w-full max-w-xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden flex flex-col pointer-events-auto"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/90 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 min-h-0">
                {/* Image gallery */}
                {allImages.length > 0 && (
                  <div className="relative w-full aspect-video bg-muted overflow-hidden shrink-0">
                    <Image
                      src={allImages[0].url}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 576px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent" />
                    {allImages.length > 1 && (
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                        {allImages.slice(0, 5).map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-accent' : 'bg-white/40'}`} />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div>
                    <h2 className="cinzel text-2xl mb-1">{partner.name}</h2>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Tag className="w-3.5 h-3.5 shrink-0" />
                      <span>{partner.offer}</span>
                    </div>
                  </div>

                  {/* Company Profile */}
                  {partner.companyProfile && (
                    <div>
                      <h3 className="cinzel text-xs tracking-[0.25em] text-accent uppercase mb-2">Company Profile</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{partner.companyProfile}</p>
                    </div>
                  )}

                  {/* SPARTANS Members Enjoy */}
                  {partner.spartansMembersEnjoy && (
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <h3 className="cinzel text-xs tracking-[0.25em] text-primary uppercase mb-2">SPARTANS Members Enjoy</h3>
                      <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{partner.spartansMembersEnjoy}</p>
                    </div>
                  )}

                  {/* Social links */}
                  {partner.socialLinks && partner.socialLinks.length > 0 && (
                    <div>
                      <h3 className="cinzel text-xs tracking-[0.25em] text-accent uppercase mb-3">Find Us</h3>
                      <div className="flex flex-wrap gap-2">
                        {partner.socialLinks.map((link, i) => {
                          const meta = PLATFORM_META[link.platform] ?? { label: link.platform, icon: <Globe className="w-4 h-4" /> };
                          return (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted hover:bg-primary/10 border border-border hover:border-primary/30 text-xs text-muted-foreground hover:text-primary transition-all"
                            >
                              {meta.icon}
                              {meta.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* T&C */}
                  {partner.termsAndConditions && (
                    <div className="pt-2 border-t border-border">
                      <h3 className="cinzel text-xs tracking-[0.25em] text-muted-foreground uppercase mb-2">Terms & Conditions</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">{partner.termsAndConditions}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
