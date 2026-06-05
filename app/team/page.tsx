import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { advisors } from '@/lib/advisors'

export const metadata = {
  title: 'Our Team | SPARTANS Advisors',
  description: 'Meet the SPARTANS Advisors team — dedicated financial consultants committed to your financial future.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(139,29,42,0.07),transparent)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-6 h-px bg-accent" />
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                The People Behind the Plan
              </span>
              <div className="w-6 h-px bg-accent" />
            </div>
            <h1 className="cinzel text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Meet the Team
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Every advisor at SPARTANS brings a unique story and a shared mission — to put your
              financial future first.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* Advisor grid */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {advisors.map((advisor) => (
                <Link
                  key={advisor.slug}
                  href={`/advisor/${advisor.slug}`}
                  className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <p className="cinzel text-sm font-medium text-foreground leading-snug mb-1 group-hover:text-primary transition-colors">
                      {advisor.name}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {advisor.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
