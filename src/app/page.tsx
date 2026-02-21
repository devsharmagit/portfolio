'use client'

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <div className="mono-shell"><div className="border-t border-white/[0.04]" /></div>
        <div className="pt-24">
          <Experience />
        </div>
        <div className="mono-shell"><div className="border-t border-white/[0.04]" /></div>
        <div className="pt-24">
          <Projects />
        </div>
        <div className="mono-shell"><div className="border-t border-white/[0.04]" /></div>
        <div className="pt-24">
          <Skills />
        </div>
        <div className="mono-shell"><div className="border-t border-white/[0.04]" /></div>
        <div className="pt-24">
          <Education />
        </div>
        <Footer />
      </main>
    </div>
  );
}
