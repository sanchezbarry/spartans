import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import {
  sanityClient,
  POST_BY_SLUG_QUERY,
  ALL_SLUGS_QUERY,
} from '../../../lib/sanity';
import type { SanityPostFull } from '../../../lib/sanity';

export const revalidate = 60;

const CATEGORY_LABEL: Record<string, string> = {
  finance: 'Finance',
  lifestyle: 'Lifestyle',
  'current-affairs': 'Current Affairs',
  insurance: 'Insurance',
};

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityClient.fetch(ALL_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post: SanityPostFull | null = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    openGraph: post.coverImage?.url
      ? { images: [{ url: post.coverImage.url }] }
      : undefined,
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { url: string; alt?: string; caption?: string } }) => (
      <figure className="my-10">
        <img
          src={value.url}
          alt={value.alt ?? ''}
          className="w-full rounded object-cover"
        />
        {value.caption && (
          <figcaption className="mt-3 text-center text-xs text-muted-foreground tracking-wide">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-foreground/80 leading-[1.85] mb-6">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="cinzel text-2xl md:text-3xl text-foreground mt-12 mb-5">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="cinzel text-xl text-foreground mt-10 mb-4">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-accent pl-6 my-8 text-muted-foreground italic text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="space-y-2 mb-6 pl-1">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="space-y-2 mb-6 pl-1 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3 text-foreground/80">
        <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-foreground/80">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: SanityPostFull | null = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero image */}
      {post.coverImage?.url && (
        <div className="relative w-full aspect-21/9 max-h-130 overflow-hidden bg-muted mt-20">
          <img
            src={post.coverImage.url}
            alt={post.coverImage.alt ?? post.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-6 lg:px-8 pb-24">
        {/* Back link + meta */}
        <div className={`${post.coverImage?.url ? '-mt-16 relative z-10' : 'pt-36'}`}>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-medium">
              {CATEGORY_LABEL[post.category] ?? post.category}
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs text-muted-foreground">{publishedDate}</span>
            {post.featured && (
              <>
                <span className="w-px h-3 bg-border" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-sm">
                  Featured
                </span>
              </>
            )}
          </div>

          <h1 className="cinzel text-3xl md:text-4xl xl:text-5xl leading-tight text-foreground mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-b border-border pb-10">
            {post.excerpt}
          </p>
        </div>

        {/* Body */}
        {post.body && (
          <div className="prose-custom">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
