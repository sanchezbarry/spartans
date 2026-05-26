import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { ShieldOverlay } from '../components/ShieldOverlay';
import { Footer } from '../components/Footer';
import { PinnedStory } from '../components/PinnedStory';
import { Framework } from '../components/Framework';
import ContactUsSection from '../components/ContactUsSection';
import { Testimonials } from '../components/Testimonials';
import { ScrollProgress } from '../components/ScrollProgress';

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
