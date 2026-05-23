"use client";

import { motion } from "framer-motion";

type SkillTagProps = {
  label: string;
  index: number;
};

export default function SkillTag({ label, index }: SkillTagProps) {
  return (
    <motion.li
      className="rounded-full p-px"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(59,130,246), rgb(168,85,247), rgb(236,72,153), rgb(34,211,238), rgb(59,130,246))",
        backgroundSize: "300% 100%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        boxShadow: [
          "0 0 0px rgba(59, 130, 246, 0)",
          "0 0 14px rgba(168, 85, 247, 0.55)",
          "0 0 0px rgba(236, 72, 153, 0)",
        ],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        delay: index * 0.35,
        ease: "easeInOut",
      }}
    >
      <span className="block rounded-full bg-black px-3 py-1 text-sm text-neutral-400 transition hover:bg-white/5 hover:text-white">
        {label}
      </span>
    </motion.li>
  );
}
