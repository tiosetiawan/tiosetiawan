import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tio Setiawan — Software Engineer",
  description:
    "Software Engineer specializing in building scalable, user-friendly web applications.",
  openGraph: {
    title: "Tio Setiawan — Software Engineer",
    description:
      "Software Engineer specializing in building scalable, user-friendly web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased",
          // Tech grid: dots + circuit lines, responsive
          "before:fixed before:inset-0 before:z-0",
          "before:bg-tech-grid",
          "before:[mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_80%)]",
          "before:pointer-events-none",
        )}
      >
        {children}
      </body>
    </html>
  );
}
