"use client";

import { motion } from "framer-motion";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8">
      {/* Pionowa linia z gradientem RGB */}
      <div
        aria-hidden
        className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-70"
      />

      <ul className="flex flex-col gap-8">
        {items.map((item, index) => (
          <motion.li
            key={`${item.year}-${item.title}`}
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
          >
            {/* Kropka na osi */}
            <span
              aria-hidden
              className="absolute -left-8 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-base ring-2 ring-blue-500/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </span>

            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              {item.year}
            </p>
            <h3 className="mb-1 text-base font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{item.description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
