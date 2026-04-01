"use client";

import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useThemeContext } from "./NextThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  // Hydration error এড়ানোর জন্য এই useEffect দরকার
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 text-2xl rounded-md hover:opacity-90 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <CiLight /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default ThemeToggle;
