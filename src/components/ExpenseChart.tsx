"use client";

import React from "react";
import { useExpenses } from "@/context/ExpenseContext";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ثبت پلاگین‌های Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart: React.FC = () => {
  const { expenses } = useExpenses();

  // آماده‌سازی داده‌ها برای چارت
  const categories = Array.from(new Set(expenses.map((expense) => expense.category))); // استخراج دسته‌بندی‌ها
  const dataByCategory = categories.map((category) =>
    expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0)
  );

  const data = {
    labels: categories, // برچسب دسته‌بندی‌ها
    datasets: [
      {
        label: "Expenses by Category",
        data: dataByCategory, // مقدار هر دسته
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#F44336"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Expense Distribution by Category",
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md m-2">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
