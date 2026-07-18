import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog — Tio Setiawan",
  description: "Thoughts on technology, code, and what I'm learning",
};

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container flex h-14 items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="size-4" />
              Back
            </Link>
          </Button>
        </div>
      </div>

      <div className="container max-w-4xl pt-24 pb-24">
        {/* Header */}
        <div className="mb-14">
          <Badge variant="secondary" className="mb-4">
            Blog
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All Articles
          </h1>
          <p className="mt-3 text-muted-foreground">
            {blogPosts.length} articles about technology, code, and learning
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden">
                {/* Image */}
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="size-3" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold leading-snug group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
