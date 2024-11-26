'use client';

import Accoutpossess from "@/components/accoutpossess";
import HeroSection from "@/components/hero-section";
import ScaryTemp from "@/components/scry-temp";
import TempData from "@/components/temp-data";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.94] antialiased bg-grid-white/[0.05]">
        <HeroSection />
        <TempData />
        <ScaryTemp />
        <Accoutpossess />
      </main>
    </>
  );
}
