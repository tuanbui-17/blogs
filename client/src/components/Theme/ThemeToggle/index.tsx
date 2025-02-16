"use client";

import { MoonIcon } from "@/components/Icon/MoonIcon";
import { SunIcon } from "@/components/Icon/SunIcon";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const Icon = theme === "dark" ? MoonIcon : SunIcon;

  return (
    <button onClick={toggleDarkMode} aria-label="Toggle theme">
      <Icon
        width={30}
        height={25}
        fill={"none"}
        className="hover:text-accent-400 transition-colors duration-200 ease-in-out"
      />
    </button>
  );
};

export default ThemeToggle;
