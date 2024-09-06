import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useExpenseState } from './context/ExpenseContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SpendingChart() {
  const { expenses } = useExpenseState();

  const data = {
    labels: expenses.map(expense => expense.text),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map(expense => expense.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-lg h-80">
        <Bar data={data} options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return `${tooltipItem.label}: $${tooltipItem.raw}`;
                },
              },
            },
          },
        }} />
      </div>
    </div>
  );
}

export default SpendingChart;
