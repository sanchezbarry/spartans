
import Image from "next/image";
import { Hero } from "./components/Hero";
import { ShieldOverlay } from "./components/ShieldOverlay";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ShieldOverlay />
      <main>
        <Hero />
  
      </main>
    </div>
  );
}
