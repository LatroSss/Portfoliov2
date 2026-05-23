"use client";

import { motion, useInView } from "framer-motion";
import type { RefObject } from "react";

type ScrollDownArrowProps = {
  href?: string;
  sectionRef: RefObject<HTMLElement | null>;
};

export default function ScrollDownArrow({
  href = "#about",
  sectionRef,
}: ScrollDownArrowProps) {
  const sectionVisible = useInView(sectionRef, { amount: 0.15 });

  return (
    <div className="relative z-10 flex shrink-0 justify-center pb-6 pt-2 mb-10">
      <motion.a
        href={href}
        aria-label="Przewiń w dół"
        className="text-neutral-400 transition-colors hover:text-white"
        animate={{
          y: sectionVisible ? [0, 10, 0] : 0,
          opacity: sectionVisible ? 1 : 0,
        }}
        transition={{
          y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.25 },
        }}
        style={{ pointerEvents: sectionVisible ? "auto" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-8 w-8"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.a>
    </div>
  );
}
