import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import Loop from "@/components/Loop";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navigation />
      <div className="relative z-10 mx-auto">
        <Hero />
        <Experience />
        <Loop />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </div>
  );
}
