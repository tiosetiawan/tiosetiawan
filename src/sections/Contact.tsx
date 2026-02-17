"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br text-white px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-400">
            Feel free to reach out to me through any of the platforms below.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {/* Email */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-white/5 transition"
          >
            <a
              href="mailto:tioapp28@gmail.com"
              className="text-xs md:text-sm font-medium text-white hover:text-gray-300 transition"
            >
              📧 tioapp28@gmail.com
            </a>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-white/5 transition"
          >
            <a
              href="https://github.com/tiosetiawan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium text-white hover:text-gray-300 transition"
            >
              🐙 GitHub: tiosetiawan
            </a>
          </motion.div>

          {/* Dribbble */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-white/5 transition"
          >
            <a
              href="https://dribbble.com/tiosetiawan1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium text-white hover:text-gray-300 transition"
            >
              🎨 Dribbble: tiosetiawan1
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-white/5 transition"
          >
            <a
              href="https://www.linkedin.com/in/tiosetiawan1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium text-white hover:text-gray-300 transition"
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
