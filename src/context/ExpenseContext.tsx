"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Expense = {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: string;
};

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id">) => void;
  removeExpense: (id: number) => void;
  updateExpense: (id: number, updatedExpense: Partial<Expense>) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);
export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState<string>("");

  // Load data from localStorage on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedExpenses = localStorage.getItem("expenses");
      if (storedExpenses) {
        try {
          setExpenses(JSON.parse(storedExpenses));
        } catch (error) {
          console.error("Error parsing localStorage data", error);
          setExpenses([]);
        }
      }
    }
  }, []);

  // Save data to localStorage when expenses change
  useEffect(() => {
    if (typeof window !== "undefined" && expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  // Add a new expense
  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prev) => [...prev, newExpense]);
  };

  // Remove an expense
  const removeExpense = (id: number) => {
    setExpenses((prev) => {
      const updatedExpenses = prev.filter((expense) => expense.id !== id);
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  // Update an existing expense
  const updateExpense = (id: number, updatedExpense: Partial<Expense>) => {
    setExpenses((prev) => {
      const updatedExpenses = prev.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense
      );
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense, updateExpense, searchQuery, setSearchQuery,  filterCategory,
      setFilterCategory, }}>
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
