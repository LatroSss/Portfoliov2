"use client";

import { useState, type FormEvent } from "react";

type BudowaProps = {
  onUnlock: () => void;
};

export default function Budowa({ onUnlock }: BudowaProps) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Nieprawidłowe hasło.");
        return;
      }

      onUnlock();
    } catch {
      setError("Coś poszło nie tak. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6">
      {/* Subtelna siatka w tle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative z-10 w-full max-w-lg text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted">
          mateuszmateja.dev
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Strona w budowie
        </h1>
        <p className="text-lg text-muted sm:text-xl">Zapraszam wkrótce.</p>
      </div>

      {/* Mała ikona logowania admina */}
      <button
        type="button"
        onClick={() => {
          setLoginOpen(true);
          setError("");
        }}
        className="fixed bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#21262D] text-muted transition hover:border-white/20 hover:text-white"
        aria-label="Logowanie administratora"
        title="Admin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          className="h-5 w-5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>

      {/* Panel logowania */}
      {loginOpen && (
        <div
          className="fixed inset-0 z-30 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setLoginOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-sm rounded-xl border border-white/10 bg-[#161B22] p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-login-title"
          >
            <h2 id="admin-login-title" className="mb-1 text-lg font-semibold text-white">
              Logowanie admina
            </h2>
            <p className="mb-5 text-sm text-muted">Podgląd portfolio przed publikacją.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Hasło"
                required
                autoFocus
                disabled={loading}
                className="w-full rounded-md border border-white/10 bg-[#21262D] p-3 text-white min-h-[44px]"
              />

              {error && (
                <p className="text-center text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setLoginOpen(false)}
                  className="flex-1 rounded-md border border-white/10 px-4 py-2.5 text-sm text-muted transition hover:text-white"
                >
                  Anuluj
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2.5 text-sm text-white transition disabled:opacity-60"
                >
                  {loading ? "..." : "Wejdź"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
