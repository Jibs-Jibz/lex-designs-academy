"use client";

import { motion } from "framer-motion";

const STAGGER = 0.025;

/**
 * TextRoll — renders a heading where each WORD wipes upward on hover.
 * Works for multi-line wrapped headings.
 */
const TextRoll = ({ children, className = "" }) => {
  // Split into words, keep spaces as separate tokens so wrapping is natural
  const words = children.trim().split(/(\s+)/);

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`inline ${className}`}
    >
      {words.map((word, wi) => {
        if (/^\s+$/.test(word)) {
          // literal space between words
          return <span key={wi}>&nbsp;</span>;
        }

        const letters = word.split("");

        return (
          <span
            key={wi}
            className="relative inline-block overflow-hidden"
            style={{ lineHeight: "1.2" }}
          >
            {/* Top layer — scrolls up on hover */}
            <span className="flex">
              {letters.map((l, li) => {
                const delay = STAGGER * li;
                return (
                  <motion.span
                    key={li}
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
                    }}
                    transition={{ ease: "easeInOut", delay }}
                    className="inline-block"
                  >
                    {l}
                  </motion.span>
                );
              })}
            </span>

            {/* Bottom layer — slides in from below on hover */}
            <span
              className="absolute inset-0 flex"
              aria-hidden="true"
            >
              {letters.map((l, li) => {
                const delay = STAGGER * li;
                return (
                  <motion.span
                    key={li}
                    variants={{
                      initial: { y: "100%" },
                      hovered: { y: 0 },
                    }}
                    transition={{ ease: "easeInOut", delay }}
                    className="inline-block"
                  >
                    {l}
                  </motion.span>
                );
              })}
            </span>
          </span>
        );
      })}
    </motion.span>
  );
};

export { TextRoll };
