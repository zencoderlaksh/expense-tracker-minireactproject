import React, { useState } from 'react';
import { useExpenseDispatch } from '../context/ExpenseContext';

function ExpenseForm() {
  const dispatch = useExpenseDispatch();
  const [expense, setExpense] = useState({ text: '', amount: '' });
  const [budget, setBudget] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    setExpense({ text: '', amount: '' });
  };

  const handleSetBudget = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_BUDGET',
      payload: Number(budget),
    });
    setBudget('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Expense Form */}
      <form onSubmit={handleAddExpense} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Add Expense</h2>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Expense description"
            value={expense.text}
            onChange={(e) => setExpense({ ...expense, text: e.target.value })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Amount"
            value={expense.amount}
            onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Expense
        </button>
      </form>

      {/* Budget Form */}
      <form onSubmit={handleSetBudget} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Set Budget</h2>
        <div className="flex flex-col space-y-2">
          <input
            type="number"
            placeholder="Set Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Set Budget
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
