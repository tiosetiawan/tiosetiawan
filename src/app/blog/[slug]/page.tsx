import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getPostBySlug } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Tio Setiawan`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container flex h-14 items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="size-4" />
              Back
            </Link>
          </Button>
          <span className="text-sm text-muted-foreground">Blog</span>
        </div>
      </div>

      <article className="pt-20 pb-24">
        <div className="container max-w-3xl">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden mb-12 border border-border">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {post.content.map((block, i) => {
              // Headings
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold tracking-tight mt-12 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }

              // Code blocks
              if (block.startsWith("```")) {
                const lines = block.replace(/```\w*\n?/g, "").trim();
                return (
                  <div
                    key={i}
                    className="relative rounded-xl border border-border bg-[#0D0D10] my-6 overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/50">
                      <span className="size-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="size-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-muted-foreground">
                      <code>{lines}</code>
                    </pre>
                  </div>
                );
              }

              // Regular paragraph
              return (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground my-4"
                >
                  {block}
                </p>
              );
            })}
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="gap-2">
                  <ArrowLeft className="size-4" />
                  Back to Home
                </Link>
              </Button>

              <div className="flex gap-2">
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((related) => (
                    <Button
                      key={related.slug}
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <Link href={`/blog/${related.slug}`}>
                        {related.title.slice(0, 30)}...
                      </Link>
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
