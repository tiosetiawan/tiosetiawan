"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Workflow,
  Server,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = [
  {
    icon: Server,
    title: "Backend",
    description: "PHP (Laravel, CodeIgniter)",
  },
  {
    icon: Layers,
    title: ".NET",
    description: "Basic .NET Core knowledge",
  },
  {
    icon: Code2,
    title: "Frontend",
    description: "CSS (Bootstrap, TailwindCSS)",
  },
  {
    icon: Database,
    title: "Database",
    description: "SQL Server & MySQL",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma",
  },
  {
    icon: Workflow,
    title: "Business Flow",
    description: "Draw.io",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Hello World <span>👋</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              I&apos;m a{" "}
              <span className="font-medium text-foreground">
                Software Engineer
              </span>{" "}
              passionate about crafting digital experiences that make a
              difference. Here&apos;s what I bring to the table.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i + 1}
                variants={fadeUp}
              >
                <Card className="group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <skill.icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {skill.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Separator className="mb-16" />

          {/* GitHub Chart */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4">
              Open Source
            </Badge>
            <h3 className="text-xl font-bold tracking-tight mb-8">
              GitHub Contributions
            </h3>
            <Card className="overflow-hidden">
              <CardContent className="p-2 sm:p-4">
                <iframe
                  src="https://ghchart.rshah.org/38bdf8/tiosetiawan"
                  title="GitHub Contributions"
                  className="w-full h-[120px] sm:h-[140px] rounded-lg"
                  frameBorder="0"
                  loading="lazy"
                />
              </CardContent>
            </Card>
            <p className="mt-3 text-xs text-muted-foreground">
              *Contributions in the last year
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
