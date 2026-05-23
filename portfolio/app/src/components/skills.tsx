// components/skills.tsx — sekcja „Moje umiejętności” na stronie
// Tu trzymasz DANE i układ sekcji; wygląd karty jest w UI/card.tsx

import SkillCard, { type SkillItem } from "../UI/card";
import FadeIn from "../UI/FadeIn";

// --- DANE: edytuj tutaj, gdy chcesz dodać/zmienić umiejętności ---

const frontendSkills: SkillItem[] = [
  { name: "React & Next.js", level: 20 },
  { name: "TypeScript", level: 20 },
  { name: "Nowoczesny CSS", level: 40 },
  { name: "Animacje webowe", level: 30 },
];

const backendSkills: SkillItem[] = [
  { name: "Node.js", level: 5 },
  { name: "Express", level: 5 },
  { name: "MongoDB", level: 5 },
  { name: "PostgreSQL", level: 5 },
];

const databaseSkills: SkillItem[] = [
  { name: "MySQL", level: 0 },
  { name: "PostgreSQL", level: 0 },
  { name: "MongoDB", level: 10 },
  { name: "Redis", level: 0 },
];

const skillCategories = [
  { title: "🚀 Frontend", skills: frontendSkills },
  { title: "💻 Backend", skills: backendSkills },
  { title: "💾 Bazy danych", skills: databaseSkills },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-[#161B22] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="mb-16 text-center text-4xl font-bold text-white">

            Moje umiejętności
          </h2>
        </FadeIn>

        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-16">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.15} className="flex-1">
              <SkillCard title={category.title} skills={category.skills} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
