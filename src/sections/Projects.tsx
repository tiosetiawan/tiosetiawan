"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "Modern personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features smooth animations and a premium dark theme.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/tiosetiawan",
    featured: true,
  },
  {
    title: "Enterprise POS System",
    description:
      "Full-featured point-of-sale system with inventory management, real-time reporting, and multi-tenant architecture built with Laravel.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    featured: false,
  },
  {
    title: "API Gateway Service",
    description:
      "High-performance API gateway handling authentication, rate limiting, and request routing for microservices architecture.",
    tags: [".NET Core", "C#", "SQL Server", "Redis"],
    featured: false,
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

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
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
              Projects
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Selected Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              A collection of projects I&apos;ve worked on. Each one represents
              a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i + 1}
                variants={fadeUp}
                className="h-full"
              >
                <Card className="group h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Folder className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg leading-tight">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Badge
                            variant="default"
                            className="mt-1 text-[10px] px-1.5 py-0"
                          >
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    {project.github && (
                      <Button variant="wavy-outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="size-3.5" />
                          Source
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="wavy" size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="size-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={projects.length + 1}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <Button variant="wavy-outline" size="lg" asChild>
              <a
                href="https://github.com/tiosetiawan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
