"use client"
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi"; // آیکن‌ها از React Icons

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 fixed top-4 right-4 shadow-lg transition duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FiMoon className="text-gray-800 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeSwitcher;

