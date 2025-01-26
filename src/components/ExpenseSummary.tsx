"use client";

import React from "react";
import { useExpenses } from "@/context/ExpenseContext";

const ExpenseSummary: React.FC = () => {
  const { expenses } = useExpenses();

  // محاسبه آمارها
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const numberOfExpenses = expenses.length;
  const highestExpense = expenses.reduce(
    (max, expense) => (expense.amount > max ? expense.amount : max),
    0
  );

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md m-2">
      <h2 className="text-2xl font-bold mb-4">Expense Summary</h2>
      <p>Total Expenses: <span className="font-bold">${totalExpenses}</span></p>
      <p>Number of Expenses: <span className="font-bold">{numberOfExpenses}</span></p>
      <p>Highest Expense: <span className="font-bold">${highestExpense}</span></p>
    </div>
  );
};

export default ExpenseSummary;
