import React from 'react';
import { useExpenseState } from '../context/ExpenseContext';

function Budget() {
  const { budget, expenses } = useExpenseState();
  const totalExpenses = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  const remaining = budget - totalExpenses;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Budget</h2>
      <div className="flex justify-between mb-4">
        <span className="text-lg font-semibold text-gray-700">Total Budget:</span>
        <span className="text-lg font-semibold text-green-600">${budget}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-lg font-semibold text-gray-700">Remaining:</span>
        <span className={`text-lg font-semibold ${remaining < 0 ? 'text-red-600' : 'text-green-600'}`}>
          ${remaining}
        </span>
      </div>
    </div>
  );
}

export default Budget;
