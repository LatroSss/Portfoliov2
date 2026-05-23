"use client";

import { useState, type FormEvent } from "react";

type BudowaProps = {
  onUnlock: () => void;
};

export default function Budowa({ onUnlock }: BudowaProps) {
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
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <div className="w-full max-w-md text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-muted">
          MatMat.dev
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white">Strona w budowie</h1>
        <p className="mb-8 text-muted">
          Portfolio jest jeszcze niedostępne publicznie. Wpisz hasło, żeby wejść.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Hasło"
            required
            disabled={loading}
            className="w-full rounded-md border border-white/10 bg-[#21262D] p-3 text-white min-h-[44px]"
          />

          {error && (
            <p className="text-center text-sm text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 text-white transition disabled:opacity-60"
          >
            {loading ? "Sprawdzanie..." : "Wejdź"}
          </button>
        </form>
      </div>
    </section>
  );
}
