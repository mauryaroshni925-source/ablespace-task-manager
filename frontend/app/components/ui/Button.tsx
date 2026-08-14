"use client";

import { useTheme } from "../../context/ThemeContext";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({ children, variant = "primary", onClick, type = "button" }: ButtonProps) {
  const { accentHex } = useTheme();

  const baseStyles =
    "w-full py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2";

  if (variant === "primary") {
    return (
      <button
        type={type}
        onClick={onClick}
        style={{ backgroundColor: accentHex }}
        className={`${baseStyles} text-white hover:opacity-90`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700`}
    >
      {children}
    </button>
  );
}