"use client";
import React from "react";
import Image from "next/image";
import { WavyBackground } from "@/components/WavyBackground";

export const Hero = () => {
  return (
    <WavyBackground>
      <div className="py-20 md:py-32 lg:py-40 relative z-0 overflow-x-clip w-full">
        <div className="container px-4 md:px-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/tio-program.png"
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full"
              alt="Main Laptop"
            />
            <div className="bg-gray-950 border border-gray-800 px-3 py-1.5 md:px-4 md:py-1.5 inline-flex items-center gap-3 md:gap-4 rounded-lg mt-4 text-xs md:text-sm">
              <div className="bg-green-500 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"></div>
              <div className="font-medium text-gray-300">
                Available for new project
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="max-w-2xl mx-auto text-center mt-6 md:mt-8 px-4">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
              Hi, I'm Tio Setiawan
            </h1>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-400">
              A Software Engineer specializing in creating scalable and
              user-friendly software solutions.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-6 md:mt-8 gap-3 md:gap-4 px-4">
            <a
              href="https://github.com/tiosetiawan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-700 px-4 md:px-6 h-10 md:h-12 rounded-xl text-gray-300 hover:bg-gray-800 transition text-sm md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.107-.774.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.237-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.137 3.003.403 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.77.84 1.237 1.91 1.237 3.22 0 4.61-2.807 5.625-5.48 5.92.432.372.817 1.102.817 2.222v3.293c0 .32.192.694.8.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="font-medium">Explore My Work</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tiosetiawan1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-700 bg-white text-gray-900 px-4 md:px-6 h-10 md:h-12 rounded-xl hover:bg-gray-100 transition text-sm md:text-base"
            >
              <span>👋🏻</span>
              <span className="font-medium">Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};
