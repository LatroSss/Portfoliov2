// components/projects.tsx — sekcja projektów: dane + układ

import ProjectCard, { type ProjectItem } from "../UI/projectCard";
import FadeIn from "../UI/FadeIn";
import resultsSummaryImage from "../img/image.png";

const projects: ProjectItem[] = [
  {
    name: "Results Summary Component",
    description:
      "Frontend Mentor — podsumowanie wyników quizu. HTML, CSS, JS, responsywny layout, dane z JSON.",
    image: resultsSummaryImage,
    link: "https://github.com/LatroSss/results-summary-component-main",
    demo: "https://results-summary-component-main-alpha-two.vercel.app",
  },
  {
    name: "QR Code Component",
    description:
      "Frontend Mentor — karta z kodem QR. HTML i CSS, responsywny design mobile/desktop.",
    image:
      "https://raw.githubusercontent.com/LatroSss/qr-code-component-main/main/preview.jpg",
    link: "https://github.com/LatroSss/qr-code-component-main",
    demo: "https://qr-code-component-main-delta-gold.vercel.app",
  },
  {
    name: "NFT Preview Card",
    description:
      "Frontend Mentor — karta podglądu NFT z efektem hover. HTML, CSS, layout z Figmy.",
    image:
      "https://raw.githubusercontent.com/LatroSss/nft-preview-card-component-main/main/preview.jpg",
    link: "https://github.com/LatroSss/nft-preview-card-component-main",
    demo: "https://nft-preview-card-component-main-pi-two.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Projekty
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.15}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
