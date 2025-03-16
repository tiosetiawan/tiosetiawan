import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"], // Tambahkan berat font sesuai kebutuhan
});

export const metadata: Metadata = {
  title: "tiosetiawan.com",
  description: "Website Tio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          poppins.variable,
          "bg-black text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
