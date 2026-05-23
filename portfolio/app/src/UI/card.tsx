// UI/card.tsx — tylko wygląd jednej karty (bez danych)
// Ten plik nie wie, jakie technologie masz — dostaje je przez props z skills.tsx
'use client';

import { motion } from "framer-motion";

export type SkillItem = {
  name: string;
  level: number; // 0–100, określa szerokość paska
};

type SkillCardProps = {
  title: string; // np. "Frontend Development"
  skills: SkillItem[];
};

// Wewnętrzny element UI — szary pasek + niebieskie wypełnienie
function ProgressBar({ level, label }: { level: number; label: string }) {
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-white/10"
      role="progressbar"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <motion.div
        className="h-full overflow-hidden rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-full rounded-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(59,130,246), rgb(168,85,247), rgb(236,72,153), rgb(59,130,246))",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}

// Jedna karta — renderuje listę skilli przekazanych w props
export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#21262D] px-6 py-8">
      <h3 className="mb-6 text-left text-xl font-bold text-white">{title}</h3>
      <ul className="flex flex-col gap-5">
        {skills.map((skill) => (
          <li key={skill.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white">{skill.name}</span>
              <span className="text-neutral-400">{skill.level}%</span>
            </div>
            <ProgressBar level={skill.level} label={skill.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
