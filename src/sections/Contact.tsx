"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Palette, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "tioapp28@gmail.com",
    href: "mailto:tioapp28@gmail.com",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "tiosetiawan",
    href: "https://github.com/tiosetiawan",
    color: "text-white",
    bgColor: "bg-white/10",
  },
  {
    icon: Palette,
    label: "Dribbble",
    value: "tiosetiawan1",
    href: "https://dribbble.com/tiosetiawan1",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Tio Setiawan",
    href: "https://www.linkedin.com/in/tiosetiawan1/",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Contact
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-balance">
              Feel free to reach out through any of the platforms below.
              I&apos;m always open to new opportunities.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact, i) => (
              <motion.div
                key={contact.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i + 1}
                variants={fadeUp}
              >
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    contact.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="block group"
                >
                  <Card className="h-full transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={cn(
                              "flex size-10 items-center justify-center rounded-xl transition-colors",
                              contact.bgColor,
                            )}
                          >
                            <contact.icon
                              className={cn("size-5", contact.color)}
                            />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {contact.label}
                            </p>
                            <p className="font-medium text-foreground">
                              {contact.value}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="size-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={contacts.length + 1}
            variants={fadeUp}
            className="mt-10 text-center text-sm text-muted-foreground"
          >
            Prefer email?{" "}
            <a
              href="mailto:tioapp28@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              Send me a message directly →
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
