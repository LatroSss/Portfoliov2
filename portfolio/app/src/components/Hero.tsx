"use client";

import { useRef } from "react";
import { GitHubLink, LinkedInLink } from "../UI/Links";
import AnimatedText from "../UI/AnimatedText";
import SkillTag from "../UI/SkillTag";
import ScrollDownArrow from "../UI/ScrollDownArrow";
import CodeBackground from "../UI/CodeBackground";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
  ];

  const gradientBorder =
    "rounded-full p-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_25px_rgba(124,58,237,0.45)] hover:shadow-[0_0_25px_rgba(124,58,237,0.65)] transition";
  const darkButtonInner =
    "block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-950";

  return (
    <section
      ref={heroRef}
      className="relative flex h-[calc(100dvh-73px)] flex-col overflow-hidden bg-black"
    >
      {/* Warstwa 1: siatka w tle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      {/* Warstwa 2: latające fragmenty kodu */}
      <CodeBackground />
      {/* Warstwa 3: przyciemnienie brzegów */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-8">
        <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,720px)] h-48"
            >
              <div className="absolute left-[8%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[rgb(37,99,235)] blur-[90px] opacity-80" />
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(124,58,237)] blur-[100px] opacity-85" />
              <div className="absolute right-[8%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[rgb(219,39,119)] blur-[90px] opacity-80" />
            </div>

            <h1
              aria-label="Mateusz Mateja"
              className="relative z-10 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-x-4 text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]"
            >
              <span className="flex justify-center">
                <AnimatedText text="Mateusz" />
              </span>
              <span className="flex justify-center">
                <AnimatedText text="Mateja" />
              </span>
            </h1>

            <div className="relative z-10 mt-5 flex items-center justify-center gap-3 sm:gap-4">
              <span className="inline-block h-px w-8 sm:w-12 bg-blue-500" />
              <span className="text-base sm:text-lg font-medium tracking-[0.2em] uppercase text-muted">
                Web Developer
              </span>
              <span className="inline-block h-px w-8 sm:w-12 bg-blue-500" />
            </div>
            <div className="relative z-10 mt-4 flex items-center justify-center gap-4">
              <GitHubLink />
              <LinkedInLink />
            </div>
          </div>

          <p className="relative z-10 mt-6 max-w-2xl text-xl text-muted">
            Tworzę projekty webowe w wolnym czasie — uczę się przez praktykę,
            testuję pomysły i z każdym kolejnym projektem staram się iść o krok
            dalej.
          </p>

          <ul className="relative z-10 mt-8 flex flex-wrap justify-center gap-3 text-sm sm:gap-4">
            {skills.map((skill, index) => (
              <SkillTag key={skill} label={skill} index={index} />
            ))}
          </ul>

          <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={gradientBorder}>
              <span className={darkButtonInner}>Napisz do mnie</span>
            </a>
            <a
              href="/CV_Mateusz_Mateja.docx"
              download="CV_Mateusz_Mateja.docx"
              className={gradientBorder}
            >
              <span className={darkButtonInner}>Pobierz CV</span>
            </a>
          </div>
        </div>
      </div>

      <ScrollDownArrow href="#about" sectionRef={heroRef} />
    </section>
  );
}
