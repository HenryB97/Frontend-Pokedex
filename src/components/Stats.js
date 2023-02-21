import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Stats = ({ stats }) => {
  let labels = [];
  let values = [];

  for (let i = 0; i < stats.length; i++) {
    labels = [...labels, stats[i].stat.name];
    values = [...values, stats[i].base_stat];
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Stats",
        data: [...values],
        backgroundColor: "#FE8100",
        color: "#000",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 15,
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "white",
          font: {
            size: 13,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: "white",
          font: {
            size: 13,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Bar width="250" height="150" style={{backgroundColor: 'rgb(0, 0, 0, .5)', borderRadius: 10, padding: '5px 15px'}} data={data} options={options} />
    </>
  );
};
