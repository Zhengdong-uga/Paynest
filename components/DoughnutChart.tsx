"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance)

  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
      }
    ],
    labels: accountNames
  }

  return <Doughnut 
    data={data} 
    options={{
      cutout: '60%', // Adjust the cutout percentage to change the size of the hole in the middle
      plugins: {
        legend: {
          display: false // Hide the legend if you don't need it
        }
      }
    }}
  />
}

export default DoughnutChart