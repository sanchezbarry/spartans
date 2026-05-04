
import Image from "next/image";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { ShieldOverlay } from "./components/ShieldOverlay";
import { Footer } from "./components/Footer";
import { Story } from "./components/Story";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <ShieldOverlay />
      <Navigation />
      <main>
        <Hero />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
