"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration error এড়ানোর জন্য এই useEffect দরকার
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="px-4 py-2 text-2xl rounded-md   hover:opacity-90 transition-all"
    >
      {resolvedTheme === "dark" ? <CiLight /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default ThemeToggle;
