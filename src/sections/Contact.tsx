"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br  text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Feel free to reach out to me through any of the platforms below.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Email */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <a
              href="mailto:tioapp28@gmail.com"
              className="mt-4 text-sm font-medium text-white"
            >
              📧 tioapp28@gmail.com
            </a>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <a
              href="https://github.com/tiosetiawan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-medium text-white"
            >
              🐙 GitHub: tiosetiawan
            </a>
          </motion.div>

          {/* Dribbble */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <a
              href="https://dribbble.com/tiosetiawan1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-medium text-white"
            >
              🎨 Dribbble: tiosetiawan1
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <a
              href="https://www.linkedin.com/in/tiosetiawan1/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-medium text-white"
            >
              💼 LinkedIn: Tio Setiawan
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
