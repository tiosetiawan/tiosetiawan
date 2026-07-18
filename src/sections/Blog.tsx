"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, Tag } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4, ease: "easeOut" },
  }),
};

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-5xl mx-auto">
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
              Blog
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Writing & Learning
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto text-balance">
              Thoughts on technology, code, and what I&apos;m currently learning
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.slice(0, 6).map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i + 1}
                variants={fadeUp}
              >
                <Card className="group h-full flex flex-col">
                  <CardHeader className="pb-3">
                    {/* Meta Row */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`} className="group/title">
                      <h3 className="text-base font-semibold leading-snug group-hover/title:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </CardHeader>

                  <CardContent className="flex-1 pb-3">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-[10px] text-muted-foreground">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Read Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      Read
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={7}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <Button variant="wavy-outline" size="lg" asChild>
              <Link href="/blog">
                <Tag className="size-4" />
                View all articles
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
