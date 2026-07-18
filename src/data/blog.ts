export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-apis-laravel",
    title: "Building Scalable APIs with Laravel",
    excerpt:
      "Deep dive into designing RESTful APIs that scale — from request validation to rate limiting and caching strategies.",
    content: [
      "Building APIs that can handle growing traffic is one of the most critical skills for a backend developer. Laravel provides an excellent foundation with its expressive syntax, built-in rate limiting, and robust queue system.",
      "## Request Validation",
      "The first line of defense for any API is proper request validation. Laravel's Form Request classes make this incredibly straightforward. Instead of cluttering your controllers with validation logic, you can create dedicated request classes that handle both authorization and validation.",
      "```php\nclass StorePostRequest extends FormRequest\n{\n    public function rules(): array\n    {\n        return [\n            'title' => 'required|string|max:255',\n            'content' => 'required|string',\n            'tags' => 'array',\n            'tags.*' => 'exists:tags,id',\n        ];\n    }\n}\n```",
      "This approach keeps your controllers clean and your validation logic testable and reusable.",
      "## Rate Limiting",
      "Laravel's built-in rate limiting with Redis is powerful yet simple to configure. You can define different limits for different endpoints or user roles.",
      "```php\nRateLimiter::for('api', function (Request $request) {\n    return Limit::perMinute(60)->by(\n        $request->user()?->id ?: $request->ip()\n    );\n});\n```",
      "## Caching Strategies",
      "For read-heavy APIs, caching is essential. I recommend a layered approach: use Laravel's Cache facade with Redis for frequently accessed data, implement HTTP cache headers for browser-level caching, and consider a CDN for static resources.",
      "```php\n$posts = Cache::remember('posts.recent', 3600, function () {\n    return Post::with('author')\n        ->latest()\n        ->take(20)\n        ->get();\n});\n```",
      "## Key Takeaways",
      "- Use Form Requests for clean validation",
      "- Implement rate limiting early — it's easier than retrofitting",
      "- Cache aggressively but invalidate carefully",
      "- Monitor your API with tools like Laravel Telescope",
      "Building scalable APIs is an ongoing journey. Start with these foundations and iterate based on real traffic patterns.",
    ],
    date: "Jul 12, 2026",
    readTime: "6 min read",
    tags: ["Laravel", "PHP", "API"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    imageAlt: "Server racks with LED lights",
  },
  {
    slug: "modern-frontend-nextjs-app-router",
    title: "Modern Frontend with Next.js App Router",
    excerpt:
      "Exploring the App Router paradigm — server components, streaming, and how it changes the way we build React apps.",
    content: [
      "Next.js 13+ introduced the App Router, fundamentally changing how we think about routing and rendering in React applications. Server Components, streaming, and nested layouts are now first-class citizens.",
      "## Server Components by Default",
      "In the App Router, every component is a Server Component unless you explicitly opt into client-side rendering with the 'use client' directive. This means your components run on the server, reducing the JavaScript bundle sent to the browser.",
      "```tsx\n// This runs on the server - no JS sent to client\nasync function BlogList() {\n  const posts = await db.post.findMany();\n  return posts.map(post => <PostCard key={post.id} {...post} />);\n}\n```",
      "## Streaming with Suspense",
      "One of the most powerful features is streaming. You can show content progressively as it becomes available, rather than waiting for the entire page to load.",
      "```tsx\nimport { Suspense } from 'react';\n\nexport default function Page() {\n  return (\n    <div>\n      <h1>Dashboard</h1>\n      <Suspense fallback={<StatsSkeleton />}>\n        <Stats />\n      </Suspense>\n      <Suspense fallback={<ChartSkeleton />}>\n        <RevenueChart />\n      </Suspense>\n    </div>\n  );\n}\n```",
      "## Layouts and Templates",
      "The App Router introduces shared layouts that persist across navigations. This means your sidebar or header doesn't re-render when navigating between pages.",
      "## When to Use Client Components",
      "Not everything should be a Server Component. Use Client Components when you need interactivity (useState, useEffect, event handlers), browser APIs (localStorage, geolocation), or certain third-party libraries.",
      "## Key Takeaways",
      "- Default to Server Components — they're faster and lighter",
      "- Use Suspense boundaries for better UX",
      "- Layouts persist — design your component tree accordingly",
      "- The 'use client' boundary is your tool for interactivity",
    ],
    date: "Jun 28, 2026",
    readTime: "8 min read",
    tags: ["Next.js", "React", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    imageAlt: "React code on screen",
  },
  {
    slug: "dotnet-core-microservices",
    title: "Getting Started with .NET Core Microservices",
    excerpt:
      "A practical guide to building your first microservice with .NET Core — from project setup to Docker deployment.",
    content: [
      "Microservices architecture has become the standard for building scalable, maintainable backend systems. .NET Core provides excellent tooling and performance for building microservices.",
      "## Project Setup",
      "Start with the minimal API template in .NET 8. It's lightweight, fast, and perfect for microservices.",
      '```csharp\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\n\nvar app = builder.Build();\n\napp.MapGet("/api/products", async (ProductService service) =>\n    await service.GetAllAsync());\n\napp.Run();\n```',
      "## Docker Containerization",
      "Every microservice should be containerized. Here's a production-ready Dockerfile for .NET:",
      '```dockerfile\nFROM mcr.microsoft.com/dotnet/sdk:8.0 AS build\nWORKDIR /src\nCOPY *.csproj .\nRUN dotnet restore\nCOPY . .\nRUN dotnet publish -c Release -o /app\n\nFROM mcr.microsoft.com/dotnet/aspnet:8.0\nWORKDIR /app\nCOPY --from=build /app .\nENTRYPOINT ["dotnet", "ProductService.dll"]\n```',
      "## Service Communication",
      "For inter-service communication, I recommend using gRPC for synchronous calls and RabbitMQ or Azure Service Bus for asynchronous messaging.",
      "## Key Takeaways",
      "- Use minimal APIs for microservices — less ceremony",
      "- Containerize everything from day one",
      "- Choose sync (gRPC) or async (message bus) communication wisely",
      "- Implement health checks for Kubernetes readiness probes",
    ],
    date: "Jun 10, 2026",
    readTime: "10 min read",
    tags: [".NET", "C#", "Docker"],
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
    imageAlt: "Code on multiple monitors",
  },
  {
    slug: "database-design-patterns",
    title: "Database Design Patterns That Scale",
    excerpt:
      "Essential patterns for designing SQL databases that perform well under load — indexing strategies, normalization, and more.",
    content: [
      "Good database design is the foundation of any performant application. Here are the patterns I've found most valuable across years of working with SQL Server and MySQL.",
      "## Indexing Strategy",
      "Indexes are your first line of defense against slow queries. But more indexes aren't always better — each write operation must update every index.",
      "```sql\n-- Composite index for common query pattern\nCREATE INDEX idx_orders_user_date\nON orders (user_id, created_at DESC);\n\n-- Covering index to avoid table lookups\nCREATE INDEX idx_posts_status_cover\nON posts (status)\nINCLUDE (title, created_at, author_id);\n```",
      "## Normalization vs Denormalization",
      "Third Normal Form (3NF) is the sweet spot for most applications. But for read-heavy workloads, strategic denormalization can dramatically improve performance.",
      "## Connection Pooling",
      "Always use connection pooling. Both SQL Server and MySQL drivers support it natively — make sure it's properly configured for your workload.",
      "## Key Takeaways",
      "- Index what you query, not everything",
      "- Use EXPLAIN to understand query plans",
      "- Denormalize only when you've measured the need",
      "- Connection pooling is not optional in production",
    ],
    date: "May 20, 2026",
    readTime: "7 min read",
    tags: ["MySQL", "SQL Server", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    imageAlt: "Database server visualization",
  },
  {
    slug: "ui-ux-tips-developer",
    title: "UI/UX Tips from a Developer's Perspective",
    excerpt:
      "Practical UI/UX principles every developer should know — from spacing systems to accessibility and Figma workflows.",
    content: [
      "As developers, we spend most of our time in code editors, but understanding UI/UX principles makes us better at building products people love to use.",
      "## Spacing Systems",
      "Consistent spacing is the difference between a polished UI and a messy one. Use an 8px grid system — all margins and paddings should be multiples of 8.",
      "```css\n/* Good: 8px scale */\n.card { padding: 16px; gap: 8px; }\n.section { margin-bottom: 32px; }\n\n/* Bad: arbitrary values */\n.card { padding: 13px; gap: 7px; }\n```",
      "## Typography Hierarchy",
      "Limit yourself to 2-3 font sizes per component. Use weight and color, not size, to create hierarchy within the same level.",
      "## Accessibility First",
      "Color contrast, keyboard navigation, and semantic HTML aren't optional — they're fundamental. Use tools like axe DevTools and Lighthouse to audit regularly.",
      "## Figma for Developers",
      "Learn Figma basics: auto-layout mirrors CSS flexbox, components mirror React components, and variants mirror props. Understanding this mapping makes handoff seamless.",
      "## Key Takeaways",
      "- Use 8px spacing grid religiously",
      "- Fewer font sizes = more professional look",
      "- Test with keyboard only — if you can't use it, users can't either",
      "- Figma auto-layout IS flexbox — use it",
    ],
    date: "May 5, 2026",
    readTime: "5 min read",
    tags: ["Design", "Figma", "CSS"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    imageAlt: "Design tools on desk",
  },
  {
    slug: "why-i-switched-to-tailwind",
    title: "Why I Switched to Tailwind CSS",
    excerpt:
      "How utility-first CSS changed my workflow — comparing Bootstrap, plain CSS, and why Tailwind won me over.",
    content: [
      "After years of writing custom CSS and using Bootstrap, switching to Tailwind CSS was one of the best decisions I've made for my development workflow.",
      "## The Problem with Custom CSS",
      "Custom CSS starts clean but inevitably becomes a mess. Naming things is hard (BEM helps but is verbose), dead code accumulates, and specificity wars begin.",
      "## Bootstrap's Limitations",
      "Bootstrap is great for rapid prototyping, but every Bootstrap site looks... like Bootstrap. Customizing it beyond theme variables requires fighting the framework.",
      "## Why Tailwind Wins",
      "Tailwind's utility-first approach means you style directly in your markup. No naming, no context switching, no unused CSS (thanks to purging). Combined with component extraction in React, it's incredibly productive.",
      '```tsx\n// Before: context switching between files\n// styles.css — .card { ... }\n// Card.tsx — <div className="card">\n\n// After: everything in one place\n<div className="rounded-xl border bg-card p-6 shadow-sm">\n  <h3 className="text-lg font-semibold">Title</h3>\n</div>\n```',
      "## The Learning Curve",
      "Yes, there's a learning curve. Memorizing utility classes takes time. But autocomplete (Tailwind CSS IntelliSense) and the consistent naming convention make it surprisingly quick to pick up.",
      "## Key Takeaways",
      "- Tailwind eliminates CSS naming and specificity problems",
      "- Combined with components, you never repeat yourself",
      "- The purging system means your production CSS is tiny",
      "- It's not for everyone, but it solved real problems for me",
    ],
    date: "Apr 18, 2026",
    readTime: "4 min read",
    tags: ["Tailwind CSS", "CSS", "DX"],
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
    imageAlt: "CSS code on screen",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
