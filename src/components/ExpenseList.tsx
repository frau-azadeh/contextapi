"use client";

import React from "react";
import { useExpenses } from "@/context/ExpenseContext";

type FormData = {
  id?: number;
  title: string;
  amount: number;
  date: string;
};

const ExpenseList: React.FC<{
  setEditingExpense: (expense: FormData | null) => void;
}> = ({ setEditingExpense }) => {
  const { expenses, removeExpense, searchQuery } = useExpenses();

  // فیلتر کردن هزینه‌ها بر اساس مقدار جستجو
  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul className="max-w-md mx-auto mt-4">
      {filteredExpenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between items-center p-2 border rounded mb-2"
        >
          <div>
            <h3 className="text-lg font-bold">{expense.title}</h3>
            <p>${expense.amount}</p>
            <p>{expense.date}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setEditingExpense(expense)}
              className="bg-yellow-500 text-white p-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => removeExpense(expense.id!)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
