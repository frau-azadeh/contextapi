"use client";

import React from "react";
import { useExpenses } from "@/context/ExpenseContext";

const ExpenseList: React.FC = () => {
  const { expenses } = useExpenses();

  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="space-y-4">
          {expenses.map((expense) => (
            <li key={expense.id} className="p-4 border rounded">
              <h3 className="text-lg font-bold">{expense.title}</h3>
              <p>Amount: ${expense.amount}</p>
              <p>Date: {expense.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
