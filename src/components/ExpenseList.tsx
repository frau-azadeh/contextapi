"use client";

import React from "react";
import { useExpenses } from "@/context/ExpenseContext";

type FormData = {
  id?: number;
  title: string;
  amount: number;
  date: string;
  category: string;
};

const ExpenseList: React.FC<{
  setEditingExpense: (expense: FormData | null) => void;
}> = ({ setEditingExpense }) => {
  const { expenses, removeExpense, searchQuery, filterCategory, setFilterCategory } = useExpenses();

  // فیلتر کردن هزینه‌ها بر اساس مقدار جستجو و دسته‌بندی
  const filteredExpenses = expenses
    .filter((expense) =>
      expense.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) // فیلتر جستجو
    .filter((expense) => (filterCategory ? expense.category === filterCategory : true)); // فیلتر دسته‌بندی

  return (
    <div className="max-w-md mx-auto mt-4">
      {/* Dropdown برای فیلتر دسته‌بندی */}
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      {/* لیست هزینه‌ها */}
      <ul>
        {filteredExpenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between items-center p-2 border rounded mb-2"
          >
            <div>
              <h3 className="text-lg font-bold">{expense.title}</h3>
              <p>${expense.amount}</p>
              <p>{expense.date}</p>
              <p className="italic text-sm text-gray-500">Category: {expense.category}</p>
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
    </div>
  );
};

export default ExpenseList;
