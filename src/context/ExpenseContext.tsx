"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// تعریف نوع داده‌ها
type Expense = {
  id: number;
  title: string;
  amount: number;
  date: string;
};

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id">) => void;
  removeExpense: (id: number) =>void;
};

// ایجاد Context
const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

// Provider برای مدیریت Context
export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // state برای نگهداری هزینه‌ها
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // بارگذاری داده‌ها از LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedExpenses = localStorage.getItem("expenses");
      if (storedExpenses) {
        try {
          setExpenses(JSON.parse(storedExpenses)); // تبدیل رشته به آرایه
        } catch (error) {
          console.error("Error parsing LocalStorage data:", error);
          setExpenses([]);
        }
      }
    }
  }, []);

  // ذخیره داده‌ها در LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined" && expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  // اضافه کردن هزینه جدید
  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prev) => [...prev, newExpense]); // اضافه کردن به آرایه
  };

  const removeExpense = (id: number) => {
    setExpenses((prev) => {
      const updatedExpenses = prev.filter((expense) => expense.id !== id);
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses)); // ذخیره داده‌ها در localStorage
      return updatedExpenses;
    });
  };
  
  
  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// هوک برای دسترسی به Context
export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenses must be used within an ExpenseProvider");
  }
  return context;
};
