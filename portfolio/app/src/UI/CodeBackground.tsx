"use client";

import { motion, useReducedMotion } from "framer-motion";

// --- DANE: fragmenty kodu wyświetlane w tle ---
// Edytuj tę tablicę, żeby zmienić tekst „latający” w Hero
const CODE_SNIPPETS = [
  "const app = () => {}",
  "<div className=\"hero\">",
  "export default function",
  "npm run dev",
  "{ skills.map(...) }",
  "useState(false)",
  "import React from",
  "tailwindcss",
  "useEffect(() => {}, [])",
  "return <section>",
  "async function fetch()",
  "type Props = { }",
  "interface User { }",
  "console.log('hi')",
  "flex flex-col",
  "motion.div",
  "next/image",
  "formspree.io",
  "git push origin",
  "responsive design",
];

// --- POZYCJE: obliczamy raz na starcie (poza komponentem) ---
// Dzięki temu fragmenty nie „skaczą” przy każdym re-renderze Reacta
// left/top w % — każdy snippet ma inne miejsce na ekranie
const codeParticles = CODE_SNIPPETS.map((text, index) => ({
  text,
  left: `${(index * 13) % 88 + 6}%`,
  top: `${(index * 19) % 75 + 8}%`,
  // Każdy fragment ma inną prędkość animacji (8–16 s na pełny cykl)
  duration: 8 + (index % 5) * 2,
  // Opóźnienie startu — nie wszystkie ruszają naraz
  delay: index * 0.35,
  // Na mobile pokazuj co drugi — mniej elementów = lepsza wydajność
  hideOnMobile: index % 2 === 1,
}));

export default function CodeBackground() {
  // Wyłącz animację, gdy użytkownik ma w systemie „ogranicz ruch”
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {codeParticles.map((particle) => (
        <motion.span
          key={particle.text}
          className={`absolute max-w-[12rem] truncate font-mono text-[10px] text-blue-400/70 sm:text-xs sm:max-w-none ${
            particle.hideOnMobile ? "hidden sm:inline" : ""
          }`}
          style={{ left: particle.left, top: particle.top }}
          // Bez animacji — statyczny tekst w tle
          initial={{ opacity: 0.25 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.25 }
              : {
                  y: [0, -28, 0],
                  opacity: [0.15, 0.45, 0.15],
                }
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.text}
        </motion.span>
      ))}
    </div>
  );
}
