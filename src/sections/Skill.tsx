"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiFigma,
  SiBootstrap,
  SiDotnet,
  SiReact,
  SiPhp,
} from "react-icons/si";
import { Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

const techStack: TechItem[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/10",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/5",
    borderColor: "border-cyan-500/20",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-400",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/5",
    borderColor: "border-yellow-500/20",
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/5",
    borderColor: "border-indigo-500/20",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "text-red-400",
    bgColor: "bg-red-500/5",
    borderColor: "border-red-500/20",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/5",
    borderColor: "border-cyan-500/20",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-400",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    color: "text-violet-400",
    bgColor: "bg-violet-500/5",
    borderColor: "border-violet-500/20",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-orange-400",
    bgColor: "bg-orange-500/5",
    borderColor: "border-orange-500/20",
  },
  {
    name: "AWS",
    icon: Cloud,
    color: "text-amber-400",
    bgColor: "bg-amber-500/5",
    borderColor: "border-amber-500/20",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "text-pink-400",
    bgColor: "bg-pink-500/5",
    borderColor: "border-pink-500/20",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.4, ease: "easeOut" },
  }),
};

export function Skill() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4">
              Tech Stack
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Tools & Technologies
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto text-balance">
              The technologies I use to build scalable, modern applications
            </p>
          </motion.div>

          {/* Tech Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i + 1}
                variants={fadeUp}
              >
                <Card
                  className={cn(
                    "group h-full border transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5",
                    tech.borderColor,
                    tech.bgColor,
                  )}
                >
                  <CardContent className="flex flex-col items-center justify-center gap-2.5 p-4 sm:p-5">
                    <tech.icon
                      className={cn(
                        "size-7 sm:size-8 transition-transform duration-300 group-hover:scale-110",
                        tech.color,
                      )}
                    />
                    <span className="text-[11px] sm:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                      {tech.name}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
