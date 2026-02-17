import { getPayloadClient } from "@/payload";
import Image from "next/image";
import Link from "next/link";

export async function Posts() {
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    where: {
      status: {
        equals: "published",
      },
    },
    sort: "-publishedAt",
    limit: 6,
    depth: 1,
  });

  if (posts.docs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Latest Posts
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.docs.map((post) => {
            const featuredImage =
              typeof post.featuredImage === "object" && post.featuredImage
                ? post.featuredImage
                : null;

            return (
              <article
                key={post.id}
                className="group bg-gray-950 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors"
              >
                <Link href={`/posts/${post.slug}`} className="block">
                  {featuredImage?.url && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={featuredImage.url}
                        alt={featuredImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  {!featuredImage?.url && (
                    <div className="aspect-video bg-gray-900 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="p-5">
                    {post.publishedAt && (
                      <time className="text-xs text-gray-500 mb-2 block">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "id-ID",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    )}
                    <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
