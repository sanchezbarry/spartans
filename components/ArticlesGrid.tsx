'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { SanityPost } from '../lib/sanity';

const PAGE_SIZE = 9;

type Category = SanityPost['category'];

const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'Finance', value: 'finance' },
  { label: 'Lifestyle', value: 'lifestyle' },
  { label: 'Current Affairs', value: 'current-affairs' },
  { label: 'Insurance', value: 'insurance' },
];

const CATEGORY_LABEL: Record<Category, string> = {
  finance: 'Finance',
  lifestyle: 'Lifestyle',
  'current-affairs': 'Current Affairs',
  insurance: 'Insurance',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function ArticlesGrid({ articles }: { articles: SanityPost[] }) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  function handleCategoryChange(cat: Category | null) {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <>
      {/* Filter bar */}
      <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(isActive ? null : cat.value)}
                  className={`px-5 py-2 text-sm rounded transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}

            {activeCategory && (
              <button
                onClick={() => handleCategoryChange(null)}
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}

            <span className="ml-auto text-xs text-muted-foreground tabular-nums">
              {Math.min(visibleCount, filtered.length)} of {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory ?? 'all'}
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {visible.map((article, i) => (
              <motion.article
                key={article._id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35, delay: (i % PAGE_SIZE) * 0.05, ease: 'easeOut' }}
                className="group flex flex-col bg-card border border-border rounded overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Thumbnail (falls back to cover image) */}
                <div className="relative aspect-16/10 overflow-hidden bg-muted">
                  {(article.thumbnail?.url ?? article.coverImage?.url) ? (
                    <Image
                      src={article.thumbnail?.url ?? article.coverImage!.url}
                      alt={article.thumbnail?.alt ?? article.coverImage?.alt ?? article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-muted to-muted/50 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground tracking-widest uppercase">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-card/40 via-transparent to-transparent" />

                  {article.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium bg-primary text-primary-foreground rounded-sm">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-medium">
                      {CATEGORY_LABEL[article.category]}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    <span className="text-xs text-muted-foreground">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>

                  <h2 className="cinzel text-base leading-snug text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium group/link"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-border text-sm text-muted-foreground rounded hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              Load more articles
              <ArrowRight className="w-4 h-4 rotate-90" />
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-muted-foreground mb-4">
              {articles.length === 0
                ? 'No articles have been published yet.'
                : 'No articles in this category yet.'}
            </p>
            {articles.length > 0 && (
              <button
                onClick={() => handleCategoryChange(null)}
                className="text-sm text-primary hover:underline"
              >
                View all articles
              </button>
            )}
          </motion.div>
        )}
      </section>
    </>
  );
}
