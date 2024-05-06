import React from "react";
import { Line } from "react-chartjs-2";
import { LinecharData } from "./FakeData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineGraph() {
  // const options = {};
  const options = {
    plugins: {
      display: true,
      legend: {
        labels: {
          font: {
            size: 14,
          },
          filter: function (item, chart) {
            // Hide legend for the specific dataset with label set to null
            return item.text !== null;
          },
        },
      },
    },
  };
  const data = {};
  return (
    <div>
      <Line data={LinecharData} options={options} />
    </div>
  );
}
