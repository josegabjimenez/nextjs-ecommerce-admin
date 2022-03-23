import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ chartData, className }) => {
  return (
    <>
      <Bar
        className={className}
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Productos por categoría 📦',
            },
            legend: {
              display: false,
              // position: 'right',
            },
          },
        }}
      />
    </>
  );
};

export default Chart;
