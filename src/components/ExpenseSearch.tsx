"use client";

import React from "react";
import { useExpenses } from "@/context/ExpenseContext";

const ExpenseSearch: React.FC = () => {
  const { searchQuery, setSearchQuery } = useExpenses();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default ExpenseSearch;
