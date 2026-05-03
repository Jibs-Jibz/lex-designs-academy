"use client";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[38px] h-[38px] rounded-full bg-black/10 dark:bg-white/10 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      whileHover={{ y: 2 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        type="button"
        className={cn(
          "flex items-center justify-center rounded-full p-1.5 transition-all duration-300",
          isDark ? "bg-white text-black" : "bg-black text-white"
        )}
        aria-label="Toggle theme"
      >
        <Icon
          width="24"
          height="24"
          className="transition-transform duration-500"
          icon={isDark ? "line-md:moon-filled-to-sunny-filled-loop-transition" : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"}
        />
      </button>
    </motion.div>
  );
}
