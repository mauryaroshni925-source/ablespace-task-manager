"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type AccentColor = "amber" | "blue" | "pink" | "rose" | "emerald" | "black";

const accentMap: Record<AccentColor, string> = {
  amber: "#F59E0B",
  blue: "#3B82F6",
  pink: "#EC4899",
  rose: "#F43F5E",
  emerald: "#10B981",
  black: "#000000",
};

type ThemeContextType = {
  theme: Theme;
  accentColor: AccentColor;
  accentHex: string;
  toggleTheme: () => void;
  setAccentColor: (color: AccentColor) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [accentColor, setAccentColorState] = useState<AccentColor>("blue");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedAccent = localStorage.getItem("accentColor") as AccentColor | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedAccent) setAccentColorState(savedAccent);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("accentColor", accentColor);
    // CSS variable set karo taaki poori app me accent color use ho sake
    document.documentElement.style.setProperty("--accent-color", accentMap[accentColor]);
  }, [accentColor]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const setAccentColor = (color: AccentColor) => setAccentColorState(color);

  return (
    <ThemeContext.Provider
      value={{ theme, accentColor, accentHex: accentMap[accentColor], toggleTheme, setAccentColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}