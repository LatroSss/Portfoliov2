"use client";

import { useState } from "react";

// Linki nawigacji — jedna tablica, żeby nie powielać tego samego w desktop i mobile
const navLinks = [
  { href: "#about", label: "O mnie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#projects", label: "Projekty" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  // Stan menu mobilnego — false = zamknięte, true = rozwinięte
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="font-semibold text-lg text-white">
          MatMat<span className="text-muted">.dev</span>
        </div>

        {/* Nawigacja desktop — ukryta na mobile (md:flex = widoczna od 768px) */}
        <nav className="hidden gap-6 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Przycisk hamburger — tylko na mobile (md:hidden = znika od 768px) */}
        <button
          type="button"
          className="rounded-md p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            // Ikona X — gdy menu jest otwarte
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Ikona hamburger — gdy menu jest zamknięte
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Panel menu mobilnego — rozwija się pod headerem */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-6 py-2 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block min-h-[44px] py-3 text-sm text-muted transition hover:text-white"
              // Po kliknięciu linku zamykamy menu (scroll i tak przeniesie do sekcji)
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
