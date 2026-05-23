"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "../UI/FadeIn";

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

const inputClassName =
  "w-full rounded-md border border-white/10 bg-[#21262D] p-3 text-white min-h-[44px]";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORMSPREE_FORM_ID) {
      setError("Brak NEXT_PUBLIC_FORMSPREE_FORM_ID w pliku .env.local.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (!response.ok) {
        setError(
          response.status === 404
            ? "Nieprawidłowe ID Formspree. Utwórz formularz na formspree.io i wklej ID do .env.local."
            : "Nie udało się wysłać wiadomości. Spróbuj ponownie."
        );
        return;
      }

      setIsSubmitted(true);
      form.reset();
    } catch {
      setError("Brak połączenia. Sprawdź internet i spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-[#161B22] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Kontakt
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          {!FORMSPREE_FORM_ID ? (
            <p
              className="mx-auto max-w-2xl rounded-xl border border-amber-500/30 bg-amber-500/10 px-6 py-5 text-center text-amber-200"
              role="alert"
            >
              Dodaj ID formularza do{" "}
              <code className="text-white">.env.local</code>:<br />
              <code className="mt-2 inline-block text-sm text-white">
                NEXT_PUBLIC_FORMSPREE_FORM_ID=twoje_id
              </code>
              <br />
              ID znajdziesz na{" "}
              <a
                href="https://formspree.io/forms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                formspree.io/forms
              </a>{" "}
              (link wygląda jak formspree.io/f/
              <strong>twoje_id</strong>).
            </p>
          ) : isSubmitted ? (
            <p
              className="mx-auto max-w-2xl rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-5 text-center text-green-300"
              role="status"
            >
              Wiadomość została wysłana. Odezwę się wkrótce!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-2xl flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Imię"
                required
                disabled={isSubmitting}
                className={inputClassName}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                disabled={isSubmitting}
                className={inputClassName}
              />
              <textarea
                name="message"
                placeholder="Wiadomość"
                required
                disabled={isSubmitting}
                className={`${inputClassName} h-48 resize-none py-3`}
              />

              {error && (
                <p className="text-center text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 text-white transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij"}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
