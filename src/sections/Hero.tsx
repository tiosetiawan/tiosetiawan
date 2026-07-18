"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const codeLines = [
  { indent: 0, text: "const", keyword: true, rest: " developer = {" },
  { indent: 2, text: "name:", key: true, rest: ' "Tio Setiawan",' },
  { indent: 2, text: "role:", key: true, rest: ' "Software Engineer",' },
  { indent: 2, text: "stack:", key: true, rest: " [" },
  { indent: 4, text: "", rest: '"Next.js", "Laravel", ".NET",' },
  { indent: 4, text: "", rest: '"TypeScript", "MySQL", "AWS"' },
  { indent: 2, text: "", rest: "]," },
  { indent: 2, text: "available:", key: true, rest: " true," },
  { indent: 2, text: "location:", key: true, rest: ' "Indonesia",' },
  { indent: 0, text: "};", rest: "" },
  { indent: 0, text: "", rest: "" },
  { indent: 0, text: "export", keyword: true, rest: " default developer;" },
];

export const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Top glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative">
        <div className="container pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
          {/* ---- Top Content ---- */}
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            {/* Availability Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-1.5 mb-8">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm text-muted-foreground">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                Hi, I&apos;m{" "}
                <span className="text-white-400">Tio Setiawan</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-xl mx-auto text-balance"
            >
              Software Engineer focused on building{" "}
              <span className="text-foreground">scalable</span> and{" "}
              <span className="text-foreground">user-friendly</span> web
              applications with modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button
                variant="wavy"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://github.com/tiosetiawan",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <Github className="size-4" />
                View my work
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="wavy-outline"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/tiosetiawan1",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <Linkedin className="size-4" />
                Let&apos;s connect
              </Button>
            </motion.div>
          </div>

          {/* ---- Code Editor Window ---- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="max-w-xl mx-auto"
          >
            <div className="rounded-xl border border-border bg-[#0D0D10] shadow-2xl shadow-black/50 overflow-hidden">
              {/* Window Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#0A0A0D]">
                <span className="size-3 rounded-full bg-[#FF5F56]" />
                <span className="size-3 rounded-full bg-[#FFBD2E]" />
                <span className="size-3 rounded-full bg-[#27C93F]" />
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] text-muted-foreground/60 tracking-wide">
                    portfolio.tsx
                  </span>
                </div>
                <Sparkles className="size-3 text-cyan-400/60" />
              </div>

              {/* Code Area */}
              <div className="p-5 font-mono text-sm leading-relaxed overflow-hidden">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    {/* Line Number */}
                    <span className="select-none shrink-0 w-8 text-right mr-4 text-white/15 text-xs leading-relaxed">
                      {i + 1}
                    </span>

                    {/* Code */}
                    <span className="whitespace-pre">
                      {" ".repeat(line.indent)}
                      {line.keyword ? (
                        <span className="text-purple-400">{line.text}</span>
                      ) : line.key ? (
                        <span className="text-cyan-400">{line.text}</span>
                      ) : line.text ? (
                        <span className="text-white/80">{line.text}</span>
                      ) : null}
                      {line.rest && (
                        <>
                          {line.rest.includes('"') ? (
                            <span>
                              {line.rest.split(/(\".*?\")/).map((part, j) =>
                                part.startsWith('"') ? (
                                  <span key={j} className="text-emerald-400">
                                    {part}
                                  </span>
                                ) : (
                                  <span key={j} className="text-white/50">
                                    {part}
                                  </span>
                                ),
                              )}
                            </span>
                          ) : (
                            <span className="text-white/50">{line.rest}</span>
                          )}
                        </>
                      )}
                    </span>

                    {/* Blinking Cursor on last visible line */}
                    {i === visibleLines - 1 && (
                      <span className="inline-block w-2 h-[1.1em] bg-cyan-400 ml-0.5 animate-pulse align-middle" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
