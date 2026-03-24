"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-transition relative inline-flex h-11 w-20 items-center rounded-full border px-1.5 theme-surface-strong"
      aria-label="Toggle dark mode"
    >
      <motion.span
        className="absolute left-1.5 top-1.5 h-8 w-8 rounded-full bg-[var(--primary)]"
        animate={{ x: isDark ? 34 : 0 }}
        transition={{ type: "spring", stiffness: 340, damping: 24 }}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1 text-[var(--heading)]">
        <Sun className={`h-4 w-4 ${isDark ? "opacity-50" : "opacity-100"}`} />
        <Moon className={`h-4 w-4 ${isDark ? "opacity-100" : "opacity-50"}`} />
      </span>
    </button>
  );
}
