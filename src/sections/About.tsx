import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <div className="p-48 pt-5">
      <section id="header">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hello World 👋
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
            Nice to meet you
          </span>
        </BlurFade>
      </section>
    </div>
  );
};

export default About;
