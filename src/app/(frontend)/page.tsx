import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import About from "@/sections/About";
import { Skill } from "@/sections/Skill";
import { Posts } from "@/sections/Posts";
import { Footer } from "@/sections/Footer";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Skill />
      <Posts />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
