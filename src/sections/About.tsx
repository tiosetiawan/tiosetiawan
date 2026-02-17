import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 text-white">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side: GitHub Activity */}
        <BlurFade delay={0.25} inView>
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">GitHub Contributions</h3>
            <div className="w-full overflow-x-auto">
              <iframe
                src="https://ghchart.rshah.org/tiosetiawan"
                title="GitHub Contributions"
                className="w-full h-48 md:h-56 lg:h-64 rounded-lg shadow-lg bg-black"
                frameBorder="0"
              ></iframe>
            </div>
            <p className="mt-4 text-xs md:text-sm text-gray-400">
              *Contributions in the last year
            </p>
          </div>
        </BlurFade>

        {/* Right Side: About Content */}
        <BlurFade delay={0.5} inView>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Hello World 👋
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-400">
              I am a{" "}
              <span className="font-semibold text-white">
                Software Engineer
              </span>{" "}
              with expertise in building scalable and user-friendly
              applications. My skills include:
            </p>
            <ul className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-gray-400 list-disc list-inside space-y-2">
              <li>
                Backend Development with{" "}
                <span className="font-semibold text-white">
                  PHP (Laravel, CodeIgniter)
                </span>
              </li>
              <li>
                Basic knowledge of{" "}
                <span className="font-semibold text-white">.NET Core</span>
              </li>
              <li>
                Frontend styling with{" "}
                <span className="font-semibold text-white">
                  CSS (Bootstrap, TailwindCSS)
                </span>
              </li>
              <li>
                Database management using{" "}
                <span className="font-semibold text-white">SQL Server</span> and{" "}
                <span className="font-semibold text-white">MySQL</span>
              </li>
              <li>
                UI/UX Design using{" "}
                <span className="font-semibold text-white">Figma</span>
              </li>
              <li>
                Business Flow Design with{" "}
                <span className="font-semibold text-white">Draw.io</span>
              </li>
            </ul>
            <a
              href="mailto:tioapp28@gmail.com"
              className="inline-block mt-4 md:mt-6 text-sm font-medium text-white hover:text-gray-300 transition"
            >
              📧 tioapp28@gmail.com
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
