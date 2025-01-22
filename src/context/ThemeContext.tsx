"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

// تایپ برای Context
type ThemeContextType = {
  theme: "light" | "dark"; // حالت تم
  toggleTheme: () => void; // متد تغییر تم
};

// تعریف مقدار اولیه Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// تعریف Provider
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// تعریف یک هوک برای دسترسی به Context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
