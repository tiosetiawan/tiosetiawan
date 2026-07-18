import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Skill } from "@/sections/Skill";
import { ProjectsSection } from "@/sections/Projects";
import About from "@/sections/About";
import { Blog } from "@/sections/Blog";
import Contact from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { SectionGlow } from "@/components/SectionGlow";

export default function Home() {
  return (
    <div className="relative">
      <Header />

      {/* Hero + Bottom Glow */}
      <div className="relative">
        <Hero />
        <SectionGlow position="bottom" color="cyan" />
      </div>

      {/* Tech Stack + Glows */}
      <div className="relative">
        <SectionGlow position="top" color="cyan" />
        <Skill />
        <SectionGlow position="bottom" color="emerald" />
      </div>

      {/* Projects + Glows */}
      <div className="relative">
        <SectionGlow position="top" color="emerald" />
        <ProjectsSection />
        <SectionGlow position="bottom" color="cyan" />
      </div>

      {/* Blog + Glows */}
      <div className="relative">
        <SectionGlow position="top" color="cyan" />
        <Blog />
        <SectionGlow position="bottom" color="purple" />
      </div>

      {/* About + Glows */}
      <div className="relative">
        <SectionGlow position="top" color="purple" />
        <About />
        <SectionGlow position="bottom" color="emerald" />
      </div>

      {/* Contact + Top Glow */}
      <div className="relative">
        <SectionGlow position="top" color="emerald" />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
