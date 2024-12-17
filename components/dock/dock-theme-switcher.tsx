"use client";

import { useTheme } from "next-themes";
import { Laptop, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DockThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const ICON_SIZE = 24;

  return (
    <button onClick={handleClick}>
      {theme === "light" ? (
        <Sun size={ICON_SIZE} />
      ) : theme === "dark" ? (
        <Moon size={ICON_SIZE} />
      ) : (
        <Laptop size={ICON_SIZE} />
      )}
    </button>
  );
};

export { DockThemeSwitcher };
