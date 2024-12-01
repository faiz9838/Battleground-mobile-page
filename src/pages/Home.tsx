import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { GameModes } from '@/components/sections/GameModes';
import { NewsSection } from '@/components/sections/NewsSection';
import { ThreeScene } from '@/components/ThreeScene';
import { Footer } from '@/components/Footer';
import { News } from '@/components/News';
import { StylishVideoSection } from '@/components/StylishVideoSection';

export function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <StylishVideoSection />
      <News />
      <Features />
      <GameModes />
      {/* <ThreeScene /> */}
      <NewsSection />
      <Footer />
    </div>
  );
}