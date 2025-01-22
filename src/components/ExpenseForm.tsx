"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useExpenses } from "@/context/ExpenseContext";

type FormData = {
  title: string;
  amount: number;
  date: string;
};

const ExpenseForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { addExpense } = useExpenses();

  const onSubmit = (data: FormData) => {
    addExpense(data);
    reset(); // فرم را پس از ارسال پاک می‌کند
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        {...register("title", { required: true })}
        placeholder="Title"
        className="p-2 border rounded"
      />
      <input
        {...register("amount", { required: true, valueAsNumber: true })}
        placeholder="Amount"
        type="number"
        className="p-2 border rounded"
      />
      <input
        {...register("date", { required: true })}
        placeholder="Date"
        type="date"
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
