"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Tasks", href: "/tasks" },
  { name: "Projects", href: "/projects" },
];

const accentColors = [
  { name: "amber", hex: "#F59E0B" },
  { name: "blue", hex: "#3B82F6" },
  { name: "pink", hex: "#EC4899" },
  { name: "rose", hex: "#F43F5E" },
  { name: "emerald", hex: "#10B981" },
  { name: "black", hex: "#000000" },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme, accentColor, setAccentColor } = useTheme();

  // dropdown khula hai ya nahi, uske andar konsa submenu khula hai
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState<"none" | "theme" | "color">("none");

  return (
    <aside className="w-64 h-screen bg-[#FAFAFA] dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-gray-800 flex flex-col p-3 relative">
      
      <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer mb-4">
        <div className="w-7 h-7 rounded-full bg-linear-to-br from-purple-500 to-pink-500" />
        <span className="text-sm font-medium dark:text-white">Dexter</span>
      </div>

      <p className="text-xs text-gray-400 font-medium px-2 mb-2">Workspace</p>

      <nav className="flex flex-col gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-1.5 rounded-md text-sm flex items-center gap-2 transition-colors ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom spacer - profile ko neeche push karta hai */}
      <div className="flex-1" />

      {/* PROFILE SECTION */}
      <div className="relative">
        <div
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setSubmenu("none");
          }}
          className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-linear-to-br from-purple-500 to-pink-500" />
          <div className="text-xs">
            <p className="font-medium dark:text-white">Dexter</p>
            <p className="text-gray-400">Dexter@gmail.com</p>
          </div>
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute bottom-12 left-0 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 text-sm">
            
            {/* Change Theme option */}
            <div
              onClick={() => setSubmenu(submenu === "theme" ? "none" : "theme")}
              className="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-between dark:text-white"
            >
              <span>Change Theme</span>
              <span className="text-gray-400">›</span>
            </div>

            {/* Theme submenu - Light/Dark */}
            {submenu === "theme" && (
              <div className="px-2 pb-1">
                <div
                  onClick={() => theme !== "light" && toggleTheme()}
                  className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer dark:text-white"
                >
                  <span>Light</span>
                  {theme === "light" && <span>✓</span>}
                </div>
                <div
                  onClick={() => theme !== "dark" && toggleTheme()}
                  className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer dark:text-white"
                >
                  <span>Dark</span>
                  {theme === "dark" && <span>✓</span>}
                </div>
              </div>
            )}

            {/* Color Mode option */}
            <div
              onClick={() => setSubmenu(submenu === "color" ? "none" : "color")}
              className="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-between dark:text-white"
            >
              <span>Color Mode</span>
              <span className="text-gray-400">›</span>
            </div>

            {/* Color submenu */}
            {submenu === "color" && (
              <div className="px-2 pb-1">
                {accentColors.map((c) => (
                  <div
                    key={c.name}
                    onClick={() => setAccentColor(c.name)}
                    className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer dark:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="capitalize">{c.name}</span>
                    </div>
                    {accentColor === c.name && <span>✓</span>}
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-gray-100 dark:border-gray-700 mt-1 pt-1">
              <Link
                href="/settings"
                className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer dark:text-white"
              >
                Settings
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}