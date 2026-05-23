import { GitHubLink, LinkedInLink } from "../UI/Links";

export default function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-4">
          <GitHubLink />
          <LinkedInLink />
        </div>
        <p className="text-center text-sm text-neutral-400">
          &copy; 2026 Mateusz Mateja. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
