import { getPayloadClient } from "@/payload";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
      status: { equals: "published" },
    },
    limit: 1,
  });

  const post = posts.docs[0];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | tiosetiawan.com`,
    description: post.excerpt || undefined,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
      status: { equals: "published" },
    },
    limit: 1,
    depth: 2,
  });

  const post = posts.docs[0];

  if (!post) {
    notFound();
  }

  const featuredImage =
    typeof post.featuredImage === "object" && post.featuredImage
      ? post.featuredImage
      : null;

  const author =
    typeof post.author === "object" && post.author ? post.author : null;

  const categories = post.categories
    ?.map((cat) => (typeof cat === "object" ? cat : null))
    .filter((cat): cat is NonNullable<typeof cat> => cat !== null);

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <article className="py-16 md:py-24">
        <div className="container px-4 md:px-8 max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          {/* Categories */}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <span
                  key={category.id}
                  className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-gray-400 text-sm">
            {author && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">
                    {author.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span>{author.email}</span>
              </div>
            )}
            {post.publishedAt && (
              <time className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </div>

          {/* Featured Image */}
          {featuredImage?.url && (
            <div className="relative aspect-video overflow-hidden rounded-xl mt-8">
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="mt-10 prose prose-invert prose-lg max-w-none">
            {post.content?.root?.children && (
              <RichTextContent content={post.content.root.children} />
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function RichTextContent({ content }: { content: any[] }) {
  return (
    <>
      {content.map((node, index) => {
        if (node.type === "paragraph") {
          return (
            <p key={index} className="text-gray-300 leading-relaxed mb-4">
              {node.children?.map((child: any, childIndex: number) => {
                if (child.type === "text") {
                  let text = child.text;
                  if (child.bold) text = <strong key={childIndex}>{text}</strong>;
                  if (child.italic) text = <em key={childIndex}>{text}</em>;
                  if (child.underline)
                    text = <u key={childIndex}>{text}</u>;
                  return <span key={childIndex}>{text}</span>;
                }
                if (child.type === "link") {
                  return (
                    <a
                      key={childIndex}
                      href={child.url}
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {child.children?.[0]?.text}
                    </a>
                  );
                }
                return null;
              })}
            </p>
          );
        }

        if (node.type === "heading") {
          const level = node.tag || 2;
          const text = node.children
            ?.map((child: any) => (child.type === "text" ? child.text : ""))
            .join("");
          if (level === 1)
            return (
              <h1 key={index} className="font-serif font-bold text-white mt-8 mb-4 text-3xl">
                {text}
              </h1>
            );
          if (level === 2)
            return (
              <h2 key={index} className="font-serif font-bold text-white mt-8 mb-4 text-2xl">
                {text}
              </h2>
            );
          if (level === 3)
            return (
              <h3 key={index} className="font-serif font-bold text-white mt-8 mb-4 text-xl">
                {text}
              </h3>
            );
          return (
            <h4 key={index} className="font-serif font-bold text-white mt-8 mb-4 text-lg">
              {text}
            </h4>
          );
        }

        if (node.type === "list") {
          const ListTag = node.listType === "number" ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={`mb-4 pl-6 ${
                node.listType === "number" ? "list-decimal" : "list-disc"
              } text-gray-300`}
            >
              {node.children?.map((item: any, itemIndex: number) => (
                <li key={itemIndex} className="mb-2">
                  {item.children?.map((child: any, childIndex: number) =>
                    child.children?.map((c: any) => c.text).join("")
                  )}
                </li>
              ))}
            </ListTag>
          );
        }

        if (node.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-6"
            >
              {node.children?.map((child: any, childIndex: number) =>
                child.children?.map((c: any) => c.text).join("")
              )}
            </blockquote>
          );
        }

        return null;
      })}
    </>
  );
}
