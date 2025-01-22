"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Expense = {
  id: number;
  title: string;
  amount: number;
  date: string;
};

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id">) => void;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // مقداردهی اولیه با استفاده از LocalStorage
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  // ذخیره داده‌ها در LocalStorage هنگام تغییر
  useEffect(() => {
    console.log("Saving to LocalStorage:", expenses);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // تابع اضافه کردن هزینه جدید
  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenses must be used within an ExpenseProvider");
  }
  return context;
};
