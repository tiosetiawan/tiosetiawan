import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import About from "@/sections/About";
import { Skill } from "@/sections/Skill";
import { Footer } from "@/sections/Footer";
import Contact from "@/sections/Contact"; // Perbaiki impor ini

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skill />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
