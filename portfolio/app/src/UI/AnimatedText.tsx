"use client";

import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
};

export default function AnimatedText({ text }: AnimatedTextProps) {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.4, delay: index * 0.05 },
            y: {
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 1.2,
              delay: index * 0.08 + 0.4,
              ease: "easeInOut",
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}
