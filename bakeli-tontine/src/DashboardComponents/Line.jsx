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
  const data = {};
  return (
    <div>
      <Line data={LinecharData} />
    </div>
  );
}
