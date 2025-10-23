"use client";

import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Timeline />
      <HowItWorks />
      <Impact />
      <Gallery />
      <Partners />
      <Footer />
    </main>
  );
}

