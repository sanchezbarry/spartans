import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { advisors } from '@/lib/advisors'

export const metadata = {
  title: 'Meet Our Financial Advisors',
  description:
    'Meet the SPARTANS Advisors team — AIA-accredited financial consultants based in Tampines, Singapore. Find the right advisor for insurance, retirement planning, CPF strategies, and wealth management.',
  openGraph: {
    title: 'Meet Our Financial Advisors | SPARTANS Advisors',
    description:
      'AIA-accredited financial consultants in Singapore. Expert guidance on insurance, CPF, retirement, and wealth management. Find your advisor.',
  },
}

const LEADER_SLUGS = ['assuredbydovanson', 'assuredbyshearn', 'assuredbychermayne']

const leaders = LEADER_SLUGS.map((s) => advisors.find((a) => a.slug === s)!)
const rest = advisors.filter((a) => !LEADER_SLUGS.includes(a.slug))

function AdvisorCard({ advisor, large = false }: { advisor: typeof advisors[0]; large?: boolean }) {
  return (
    <Link
      href={`/advisor/${advisor.slug}`}
      className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
    >
      <div className="relative aspect-3/4 overflow-hidden bg-muted">
        <Image
          src={advisor.image}
          alt={advisor.name}
          fill
          sizes={large
            ? '(max-width: 768px) 90vw, 30vw'
            : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw'}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority={large}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className={large ? 'p-5' : 'p-4'}>
        <p className={`cinzel font-medium text-foreground leading-snug mb-1 group-hover:text-primary transition-colors ${large ? 'text-base' : 'text-sm'}`}>
          {advisor.name}
        </p>
        <p className={`text-muted-foreground leading-snug ${large ? 'text-sm' : 'text-xs'}`}>
          {advisor.title}
        </p>
      </div>
    </Link>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background dark:to-[#1a100a]" />
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

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">

            {/* Leaders */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Leadership</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl">
                {leaders.map((advisor) => (
                  <AdvisorCard key={advisor.slug} advisor={advisor} large />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Rest of team */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Our Advisors</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-5">
                {rest.map((advisor) => (
                  <AdvisorCard key={advisor.slug} advisor={advisor} />
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
