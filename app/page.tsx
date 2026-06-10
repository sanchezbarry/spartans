import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { ShieldOverlay } from '../components/ShieldOverlay';
import { Footer } from '../components/Footer';
import { PinnedStory } from '../components/PinnedStory';
import { Framework } from '../components/Framework';
import ContactUsSection from '../components/ContactUsSection';
import { Testimonials } from '../components/Testimonials';
import { ScrollProgress } from '../components/ScrollProgress';

export const metadata = {
  title: {
    absolute: 'SPARTANS Advisors — Financial Planning & Insurance Singapore',
  },
  description:
    'SPARTANS Advisors is an AIA-affiliated financial advisory team in Tampines, Singapore. We help individuals and families plan their insurance, CPF, retirement, and wealth — with honesty and no hard sell.',
  openGraph: {
    title: 'SPARTANS Advisors — Financial Planning & Insurance Singapore',
    description:
      'AIA-affiliated financial advisors in Singapore. Expert guidance on insurance, CPF, retirement planning, and wealth management. Book a free coffee consultation.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <ShieldOverlay />
      <Navigation />
      <main>
        <Hero />
        <PinnedStory />
        <Framework />
        <Testimonials />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}
