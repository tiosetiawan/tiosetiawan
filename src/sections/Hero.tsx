"use client";
import React from "react";
import Image from "next/image";
import emojiImage from "@/assets/images/tio-program.png";
import { WavyBackground } from "@/components/WavyBackground";

export const Hero = () => {
  return (
    <WavyBackground>
      <div className="py-32 md:py-48 lg:py-10 relative z-0 overflow-x-clip">
        <div className="absolute"></div>
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src={emojiImage}
              className="size-[100px] hd"
              alt="Main Laptop"
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2 rounded-full "></div>
              <div className="text-sm font-medium">
                Available for new project
              </div>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <p className="font-serif text-center mt-8 tracking-wide">
              Hi, I'm Tio Setiawan, a Software Engineer specializing in creating
              scalable and user-friendly software solutions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a
              href="https://github.com/tiosetiawan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            >
              <span className="semi-bold">Explore My Work</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tiosetiawan1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
            >
              <span>👋🏻</span>
              <span className="semi-bold">Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};
