"use client";

import { ExpenseProvider } from "@/context/ExpenseContext";
import "./globals.css"; // استایل‌های عمومی
import { ThemeProvider } from "@/context/ThemeContext";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ThemeProvider>
          <ExpenseProvider>
            {children}
          </ExpenseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
