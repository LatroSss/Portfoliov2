"use client";

import { useRef } from "react";
import Image from "next/image";
import avatarImage from "../img/avatar.png";
import FadeIn from "../UI/FadeIn";
import ScrollDownArrow from "../UI/ScrollDownArrow";
import Timeline, { type TimelineItem } from "../UI/Timeline";

const milestones: TimelineItem[] = [
  {
    year: "2023",
    title: "Start z HTML, CSS i JavaScript",
    description:
      "Pierwsze kroki w front-endzie — layouty, responsywność i logika w przeglądarce.",
  },
  {
    year: "2025",
    title: "React i ekosystem npm",
    description:
      "Komponenty, hooki i pierwsze własne projekty publikowane na GitHubie.",
  },
  {
    year: "2026",
    title: "Next.js i TypeScript",
    description:
      "Aplikacje z App Routerem, Tailwind CSS i bardziej świadomą strukturą kodu.",
  },
  {
    year: "2026",
    title: "Portfolio MatMat.dev",
    description:
      "Spójna strona prezentująca projekty, umiejętności i drogę dalszego rozwoju.",
  },
  {
    year: "2026",
    title: "Rozwijanie dalszych umiejętności",
    description:
      "Rozwijanie dalszych umiejętności w zakresie programowania webowego.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-24 flex min-h-screen flex-col px-6 py-16 bg-gradient-to-b from-base to-surface bg-gradient-to-b from-base to-surface rounded-6xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
    >
      <div className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-5xl">
          <FadeIn>
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
              O mnie
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-8">
              <FadeIn delay={0.1}>
                <p className="text-lg leading-relaxed text-neutral-400">
                  Jestem programistą webowym z pasją do tworzenia nowoczesnych i
                  funkcjonalnych stron internetowych. Uczę się przez praktykę,
                  testuję pomysły i z każdym kolejnym projektem staram się iść o
                  krok dalej.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mx-auto w-full max-w-xs md:mx-0">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black">
                    <Image
                      src={avatarImage}
                      alt="Mateusz Mateja"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 60vw, 280px"
                      priority
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.25}>
              <Timeline items={milestones} />
            </FadeIn>
          </div>
        </div>
      </div>

      <ScrollDownArrow href="#skills" sectionRef={sectionRef} />
    </section>
  );
}
