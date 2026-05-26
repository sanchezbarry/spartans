import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { ArticlesGrid } from '../../components/ArticlesGrid';
import { sanityClient, POSTS_QUERY } from '../../lib/sanity';
import type { SanityPost } from '../../lib/sanity';

export const revalidate = 60;

export default async function ArticlesPage() {
  const articles: SanityPost[] = await sanityClient.fetch(POSTS_QUERY);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Page header */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,29,42,0.07),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              Insights & Research
            </span>
          </div>
          <h1 className="cinzel text-4xl md:text-5xl xl:text-6xl text-foreground mb-4">
            Articles
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Perspectives on wealth, markets, and the disciplines that separate the strategic
            from the reactive.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </section>

      <ArticlesGrid articles={articles} />

      <Footer />
    </div>
  );
}
