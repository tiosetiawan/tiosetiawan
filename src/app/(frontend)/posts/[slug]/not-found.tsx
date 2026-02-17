import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function NotFound() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          404
        </h1>
        <p className="text-gray-400 text-lg mb-8">Post not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-100 transition-colors font-medium"
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
      </div>

      <Footer />
    </main>
  );
}
