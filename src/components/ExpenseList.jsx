import React from 'react';
import { useExpenseState } from '../context/ExpenseContext';

function ExpenseList() {
  const { expenses } = useExpenseState();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Expense List</h2>
      <ul className="space-y-4">
        {expenses.map((expense, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <span className="text-lg font-medium text-gray-700">{expense.text}</span>
            <span className="text-lg font-semibold text-gray-900">${expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
