"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { useClickOutside } from "@/hooks/use-click-outside";

const colorThemes = [
  { id: "ocean", label: "Ocean", swatch: "from-blue-600 to-sky-400" },
  { id: "emerald", label: "Emerald", swatch: "from-emerald-600 to-teal-400" },
  { id: "violet", label: "Violet", swatch: "from-violet-600 to-fuchsia-400" },
  { id: "sunset", label: "Sunset", swatch: "from-orange-600 to-amber-400" }
] as const;

export function ThemeSelector() {
  const { colorTheme, setColorTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(selectorRef, () => setOpen(false), open);

  return (
    <div ref={selectorRef} className="relative z-[60]">
      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="theme-transition inline-flex h-11 items-center gap-2 rounded-full border px-4 theme-surface-strong text-sm font-medium text-[var(--heading)]"
        whileHover={{ y: -2, scale: 1.03, boxShadow: "0 14px 30px var(--glow)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
        aria-label="Choose color theme"
      >
        <Palette className="h-4 w-4 text-[var(--primary)]" />
        <span className="capitalize">{colorTheme}</span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-[70] mt-3 w-52 rounded-2xl p-3 glass-panel"
          >
            <div className="space-y-2">
              {colorThemes.map((theme) => (
                <motion.button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    setColorTheme(theme.id);
                    setOpen(false);
                  }}
                  className={`theme-transition flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left ${
                    colorTheme === theme.id ? "theme-surface-muted" : "hover:bg-[var(--surface-muted)]"
                  }`}
                  whileHover={{ x: 3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                >
                  <span className={`h-6 w-6 rounded-full bg-gradient-to-br ${theme.swatch}`} />
                  <span className="text-sm font-medium text-[var(--heading)]">{theme.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
