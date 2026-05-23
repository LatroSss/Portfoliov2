// UI/projectCard.tsx — wygląd jednej karty projektu (bez danych)

import Image, { type StaticImageData } from "next/image";

export type ProjectItem = {
  name: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  demo: string;
};

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-[#21262D]">
      <div className="relative aspect-[4/3] w-full bg-[#eef2f6]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-contain p-3"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className="px-6 py-5">
        <h3 className="mb-2 text-xl font-bold text-white">{project.name}</h3>
        <p className="mb-4 text-sm text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 transition hover:text-blue-300 hover:underline"
          >
            Live demo
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 transition hover:text-blue-300 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
