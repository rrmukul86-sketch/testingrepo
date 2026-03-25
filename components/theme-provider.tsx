"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ColorTheme = "ocean" | "emerald" | "violet" | "sunset";

type ThemeContextType = {
  theme: Theme;
  colorTheme: ColorTheme;
  toggleTheme: () => void;
  setColorTheme: (theme: ColorTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(nextTheme: Theme, nextColorTheme: ColorTheme) {
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.dataset.colorTheme = nextColorTheme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("ocean");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const storedColorTheme = window.localStorage.getItem("color-theme") as ColorTheme | null;
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = storedTheme ?? (preferredDark ? "dark" : "light");
    const nextColorTheme = storedColorTheme ?? "ocean";
    applyTheme(nextTheme, nextColorTheme);
    setTheme(nextTheme);
    setColorThemeState(nextColorTheme);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      colorTheme,
      toggleTheme: () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        applyTheme(nextTheme, colorTheme);
        window.localStorage.setItem("theme", nextTheme);
      },
      setColorTheme: (nextColorTheme: ColorTheme) => {
        setColorThemeState(nextColorTheme);
        applyTheme(theme, nextColorTheme);
        window.localStorage.setItem("color-theme", nextColorTheme);
      }
    }),
    [colorTheme, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
