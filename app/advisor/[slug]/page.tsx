import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { TestimonialForm } from '@/components/TestimonialForm'
import { advisors, getAdvisorBySlug } from '@/lib/advisors'
import { sanityClient, TESTIMONIALS_BY_ADVISOR_QUERY, SanityTestimonial } from '@/lib/sanity'
import { Star, Mail, Phone, Quote, MessageCircle } from 'lucide-react'

export const revalidate = 60

export function generateStaticParams() {
  return advisors.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const advisor = getAdvisorBySlug(slug)
  if (!advisor) return {}
  const description = `${advisor.specialty}. Book a consultation with ${advisor.name}, an AIA-affiliated financial consultant at SPARTANS Advisors in Singapore.`
  return {
    title: `${advisor.name} — Financial Advisor Singapore`,
    description,
    openGraph: {
      title: `${advisor.name} | SPARTANS Advisors`,
      description,
      ...(advisor.image ? { images: [{ url: advisor.image }] } : {}),
    },
  }
}

export default async function AdvisorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const advisor = getAdvisorBySlug(slug)
  if (!advisor) notFound()

  const testimonials: SanityTestimonial[] = await sanityClient.fetch(
    TESTIMONIALS_BY_ADVISOR_QUERY,
    { advisorSlug: slug }
  )

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_40%_60%,rgba(139,29,42,0.07),transparent)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* ── Photo ── */}
              <div className="order-first lg:order-last flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-3/4 rounded-2xl overflow-hidden border border-border/60 shadow-2xl">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* ── Info ── */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px bg-accent" />
                  <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                    SPARTANS Advisors
                  </span>
                </div>

                <h1 className="cinzel text-4xl md:text-5xl xl:text-6xl mb-3 leading-tight">
                  {advisor.name}
                </h1>
                <p className="text-primary text-lg mb-1">{advisor.title}</p>
                <p className="text-sm text-muted-foreground mb-6">{advisor.specialty}</p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {advisor.credentials.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    {advisor.rating.toFixed(1)} rating
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {advisor.clients}+ clients
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">{advisor.bio}</p>

                {/* Quote */}
                <p className="text-sm text-accent/80 italic mb-8 border-l-2 border-accent/30 pl-4">
                  {advisor.quote}
                </p>

                {/* Contact */}
                <div className="flex flex-wrap gap-3">
                  {advisor.whatsapp && (
                    <Link
                      href={advisor.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta text-cta-foreground text-sm rounded-lg hover:bg-cta/85 transition-all hover:shadow-lg hover:shadow-cta/25"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Link>
                  )}
                  {advisor.email && (
                    <a
                      href={`mailto:${advisor.email}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      {advisor.email}
                    </a>
                  )}
                  {advisor.phone && (
                    <a
                      href={`tel:${advisor.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      {advisor.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Testimonials ── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Client Stories
                </span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">What clients say</h2>
              {testimonials.length > 0 && (
                <p className="text-muted-foreground mt-3">
                  {testimonials.length} verified testimonial{testimonials.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {testimonials.length === 0 ? (
              <p className="text-muted-foreground">
                No testimonials yet. Be the first to share your experience.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                  <div
                    key={t._id}
                    className="flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all"
                  >
                    {t.photo?.url && (
                      <div className="relative w-full aspect-4/3 overflow-hidden">
                        <Image
                          src={t.photo.url}
                          alt={t.clientName}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>
                    )}

                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Quote className="w-6 h-6 text-primary/40 shrink-0" />
                        {t.rating && (
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className="w-3.5 h-3.5"
                                fill={s <= t.rating! ? 'currentColor' : 'none'}
                                color={s <= t.rating! ? 'var(--color-primary)' : 'currentColor'}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {t.heading && <p className="cinzel text-sm mb-2">{t.heading}</p>}

                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                        {t.quote}
                      </p>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-medium">{t.clientName}</p>
                        {t.clientTitle && (
                          <p className="text-xs text-muted-foreground">{t.clientTitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Testimonial form ── */}
        <section className="py-20 bg-card border-t border-border">
          <div className="max-w-2xl mx-auto px-6">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Share Your Experience
                </span>
              </div>
              <h2 className="cinzel text-3xl md:text-4xl mb-3">Leave a testimonial</h2>
              <p className="text-muted-foreground">
                Worked with {advisor.name}? We&apos;d love to hear about your experience.
                Submissions are reviewed before publishing.
              </p>
            </div>
            <TestimonialForm advisorSlug={advisor.slug} advisorName={advisor.name} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
