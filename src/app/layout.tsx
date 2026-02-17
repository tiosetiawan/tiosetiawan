import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "tiosetiawan.com",
  description: "Website Tio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
