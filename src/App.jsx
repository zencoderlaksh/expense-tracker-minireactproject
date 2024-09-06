import React, { useEffect } from 'react';
import { ExpenseProvider, useExpenseState, useExpenseDispatch } from './context/ExpenseContext';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import useLocalStorage from './hooks/useLocalStorage';
import SpendingChart from './SpendingChart';

const App = () => {
  const { expenses, budget } = useExpenseState();
  const dispatch = useExpenseDispatch();
  const [storedExpenses, setStoredExpenses] = useLocalStorage('expenses', []);
  const [storedBudget, setStoredBudget] = useLocalStorage('budget', 0);

  useEffect(() => {
    setStoredExpenses(expenses);
    setStoredBudget(budget);
  }, [expenses, budget, setStoredExpenses, setStoredBudget]);

  return (
    <ExpenseProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
        <Header className="sticky top-0 z-50" />
        <div className="container mx-auto py-6">
          <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
            <div className="flex-1">
              <ExpenseForm />
            </div>
            <div className="flex-1">
              <Budget />
            </div>
          </div>
          <div className="overflow-auto max-h-[calc(100vh-150px)]">
            <ExpenseList />
            <SpendingChart />
          </div>
        </div>
      </div>
    </ExpenseProvider>
  );
};

export default App;
