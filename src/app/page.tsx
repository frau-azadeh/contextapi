"use client";

import React, { useState } from "react";
import  MainLayout  from "@/components/MainLayout";
import  ThemeSwitcher  from "@/components/ThemeSwitcher";
import  ExpenseForm  from "@/components/ExpenseForm";
import  ExpenseList  from "@/components/ExpenseList";
import  ExpenseSearch  from "@/components/ExpenseSearch";
import ExpenseChart from "@/components/ExpenseChart";

type FormData = {
  id?: number;
  title: string;
  amount: number;
  date: string;
  category: string; 
};

const HomePage: React.FC = () => {
  const [editingExpense, setEditingExpense] = useState<FormData | null>(null);

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Welcome to Costly</h1>
        <ThemeSwitcher />
        <ExpenseSearch />
        <ExpenseChart/>
        <ExpenseForm
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
        />
        <ExpenseList setEditingExpense={setEditingExpense} />
      </div>
    </MainLayout>
  );
};

export default HomePage;
