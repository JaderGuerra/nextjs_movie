"use client";
import { Sun, Moon } from "./icons";
import { useTheme } from "@/hooks/theme/useTheme";

export const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      <div className="cursor-pointer" onClick={toggleTheme}>
        {isDarkTheme ? <Sun /> : <Moon />}
      </div>
    </>
  );
};
