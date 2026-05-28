import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { TestimonialForm } from '@/components/TestimonialForm'
import { advisors, getAdvisorBySlug } from '@/lib/advisors'
import { sanityClient, TESTIMONIALS_BY_ADVISOR_QUERY, SanityTestimonial } from '@/lib/sanity'
import { Star, Mail, Phone, Quote } from 'lucide-react'

export const revalidate = 60

export function generateStaticParams() {
  return advisors.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const advisor = getAdvisorBySlug(slug)
  if (!advisor) return {}
  return {
    title: `${advisor.name} — Client Testimonials | SPARTANS Advisors`,
    description: `Read what ${advisor.name}'s clients say about their experience. ${advisor.specialty}.`,
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
        {/* ── Advisor hero ── */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_40%_60%,rgba(139,29,42,0.07),transparent)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-44 h-52 md:w-52 md:h-64 rounded-xl overflow-hidden border border-border">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-accent" />
                  <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                    SPARTANS Advisors
                  </span>
                </div>

                <h1 className="cinzel text-4xl md:text-5xl mb-2">{advisor.name}</h1>
                <p className="text-primary mb-1">{advisor.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{advisor.specialty}</p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {advisor.credentials.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-6 mb-5">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    {advisor.rating.toFixed(1)} rating
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {advisor.clients}+ clients
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed mb-5 max-w-xl">{advisor.bio}</p>

                <p className="text-sm text-accent/80 italic mb-6">{advisor.quote}</p>

                {/* Contact */}
                {(advisor.email || advisor.phone) && (
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {advisor.email && (
                      <a
                        href={`mailto:${advisor.email}`}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {advisor.email}
                      </a>
                    )}
                    {advisor.phone && (
                      <a
                        href={`tel:${advisor.phone}`}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {advisor.phone}
                      </a>
                    )}
                  </div>
                )}
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
              <h2 className="cinzel text-4xl md:text-5xl">
                What clients say
              </h2>
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
                {testimonials.map((t) => (
                  <div
                    key={t._id}
                    className="flex flex-col bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
                  >
                    <Quote className="w-6 h-6 text-primary/40 mb-3 shrink-0" />

                    {t.heading && (
                      <p className="cinzel text-sm mb-2">{t.heading}</p>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {t.quote}
                    </p>

                    {t.rating && (
                      <div className="flex gap-0.5 mb-3">
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

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium">{t.clientName}</p>
                      {t.clientTitle && (
                        <p className="text-xs text-muted-foreground">{t.clientTitle}</p>
                      )}
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
              <h2 className="cinzel text-3xl md:text-4xl mb-3">
                Leave a testimonial
              </h2>
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
