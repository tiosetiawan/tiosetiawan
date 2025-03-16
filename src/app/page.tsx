import Image from "next/image";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import About from "@/sections/About";
import { Skill } from "@/sections/Skill";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skill />
      {/* <About /> */}
      <Footer />
    </div>
  );
}
