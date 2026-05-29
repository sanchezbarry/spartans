'use client';

import { motion } from 'motion/react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import {
  ArrowRight,
  MapPin,
  Clock,
  TrendingUp,
  Heart,
  Users,
  Award,
  BookOpen,
  Coffee,
  Star,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

const openings = [
  {
    id: 1,
    title: 'Financial Advisor',
    type: 'Full-Time',
    location: 'Tampines, Singapore',
    level: 'All Levels',
    description:
      "Join our growing team of advisors and help Singaporean families achieve their financial goals. We welcome fresh graduates and career switchers — we'll train you and support your MAS licensing journey.",
    requirements: [
      'Singapore citizen or PR',
      'Strong interpersonal and communication skills',
      'Genuine passion for helping people',
      'Self-motivated and entrepreneurial mindset',
      'Willingness to obtain M5, M9, HI, and BCP certifications (we sponsor these)',
    ],
    perks: ['Uncapped commission + base allowance', 'Mentorship from senior advisors', 'Exam fee sponsorship', 'Flexible hours'],
    featured: true,
  },
  {
    id: 2,
    title: 'Senior Financial Advisor',
    type: 'Full-Time',
    location: 'Tampines, Singapore',
    level: 'Senior (5+ yrs)',
    description:
      `We are looking for experienced advisors who want to grow their practice within a supportive, high-performance team. Bring your book of business and we'll give you the infrastructure to scale it.`,
    requirements: [
      'Minimum 5 years in financial advisory',
      'Active M5, M9, HI, and BCP certifications',
      'Proven track record with client retention',
      'Leadership qualities and team mentorship experience',
    ],
    perks: [
      'Enhanced commission structure',
      'Team-building support',
      'Priority event slots and marketing resources',
      'Partnership track eligibility',
    ],
    featured: false,
  },
  {
    id: 3,
    title: 'Content Creator — The Money Mine',
    type: 'Part-Time / Freelance',
    location: 'Remote (Singapore-based)',
    level: 'Mid Level',
    description:
      "Help us grow The Money Mine — our financial education content platform on YouTube, TikTok, and Instagram. You'll create videos, reels, and short-form content that makes financial topics genuinely entertaining.",
    requirements: [
      'Experience in video production or social media content',
      'Interest in personal finance (formal qualifications not required)',
      'Comfortable on camera or behind it',
      'Familiarity with Singapore financial context preferred',
    ],
    perks: ['Flexible remote work', 'Performance bonus on content metrics', 'Learn from certified advisors', 'Creative freedom'],
    featured: false,
  },
  {
    id: 4,
    title: 'Client Relations Executive',
    type: 'Full-Time',
    location: 'Tampines, Singapore',
    level: 'Entry Level',
    description:
      "Be the friendly face that connects our clients to their advisors. You'll manage scheduling, follow-ups, and client queries — making sure every touchpoint feels warm and personal.",
    requirements: [
      'Excellent written and verbal communication',
      'Strong organisational skills',
      'Experience with CRM tools (preferred but not required)',
      'A genuinely warm and service-oriented personality',
    ],
    perks: ['Competitive salary', 'Career progression to advisory role', 'Full training provided', 'Friendly team culture'],
    featured: false,
  },
];

const culture = [
  {
    icon: Coffee,
    title: 'We keep it real',
    desc: "No corporate fluff here. We're a team that has lunch together, disagrees constructively, and genuinely celebrates each other's wins.",
  },
  {
    icon: TrendingUp,
    title: 'Growth is built in',
    desc: 'We sponsor your exams, fund your training, and give you a clear roadmap — from associate to senior to partner.',
  },
  {
    icon: Heart,
    title: 'Purpose over commission',
    desc: "Yes, we earn commissions. But every advisor on our team joined because they care about making a real difference in clients' lives.",
  },
  {
    icon: Users,
    title: 'Strength in squad',
    desc: 'We win as a team. Regular team meetups, shared leads for juniors, and a culture where no one is left to figure things out alone.',
  },
  {
    icon: Award,
    title: 'Recognised excellence',
    desc: "Top performers get featured in team spotlights, access to exclusive events, and fast-tracked to AIA's elite advisor tiers.",
  },
  {
    icon: BookOpen,
    title: 'Always learning',
    desc: 'Weekly team learning sessions, access to industry conferences, and a library of curated resources for continuous development.',
  },
];

function JobCard({ job }: { job: typeof openings[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-xl bg-card border transition-all ${
        job.featured
          ? 'border-primary/40 shadow-xl shadow-primary/8'
          : 'border-border hover:border-primary/30'
      }`}
    >
      <div className="p-7">
        {job.featured && (
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span className="text-xs text-primary cinzel tracking-[0.2em] uppercase">Featured Opening</span>
          </div>
        )}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="cinzel text-xl mb-1">{job.title}</h3>
            <p className="text-sm text-primary">{job.level}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {job.type}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary" />
            {job.type}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{job.description}</p>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? 'Show less' : 'View full requirements'}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-5 space-y-5"
          >
            <div>
              <h4 className="cinzel text-sm mb-3 text-foreground">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="cinzel text-sm mb-3 text-foreground">What You Get</h4>
              <ul className="space-y-2">
                {job.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>

      <div className="px-7 py-4 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Applications reviewed on a rolling basis</span>
        <a
          href={`mailto:careers@spartansadvisors.com?subject=Application: ${job.title}`}
          className="group inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Apply Now
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_60%_40%,rgba(139,29,42,0.07),transparent)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px bg-accent" />
                  <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Join the Team</span>
                </div>
                <h1 className="cinzel text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                  Build your career<br />
                  <span className="text-primary">with purpose.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Become a SPARTAN. Build a career that makes a real difference in people&apos;s lives —
                  with a team that has your back every step of the way.
                </p>
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cta text-cta-foreground text-sm tracking-wide rounded hover:bg-cta/85 transition-all hover:shadow-xl hover:shadow-cta/25"
                >
                  See Open Roles
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-card border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&auto=format"
                    alt="Spartans team collaborating"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-card/90 backdrop-blur border border-border rounded-lg">
                    <p className="cinzel text-sm text-primary mb-1">Growing Team</p>
                    <p className="text-xs text-muted-foreground">
                      6 advisors · AIA Tampines · Est. 2019
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>

        {/* ── Culture ── */}
        <section className="py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Life at SPARTANS</span>
                <div className="w-6 h-px bg-accent" />
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">Why join us?</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {culture.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="group p-7 rounded-xl bg-background border border-border hover:border-primary/35 transition-all hover:shadow-xl hover:shadow-primary/8"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="cinzel text-base mb-2">{c.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Open Roles ── */}
        <section id="openings" className="py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Open Positions
                </span>
              </div>
              <h2 className="cinzel text-4xl md:text-5xl">Current Openings</h2>
              <p className="text-muted-foreground mt-3">
                Don&apos;t see a role that fits? Email us anyway at{' '}
                <a
                  href="mailto:careers@spartansadvisors.com"
                  className="text-primary hover:underline"
                >
                  careers@spartansadvisors.com
                </a>
                . We hire for character first.
              </p>
            </motion.div>

            <div className="space-y-5">
              {openings.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
