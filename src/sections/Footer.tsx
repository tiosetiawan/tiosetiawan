import React from "react";
import { Github, Linkedin, Mail, Palette } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/tiosetiawan",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tiosetiawan1/",
    label: "LinkedIn",
  },
  {
    icon: Palette,
    href: "https://dribbble.com/tiosetiawan1",
    label: "Dribbble",
  },
  {
    icon: Mail,
    href: "mailto:tioapp28@gmail.com",
    label: "Email",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight hover:text-cyan-300 transition-colors"
            >
              Tio<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Building digital experiences, one line at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="size-4" />
              </a>
            ))}
          </div>

          <Separator className="max-w-xs" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear}{" "}
            <a
              href="https://tiosetiawan.com"
              className="hover:text-foreground transition-colors"
            >
              tiosetiawan.com
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
