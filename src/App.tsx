import React from "react";
import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  response: true,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "hour"
      }
    }
  }
};

const values = [
  {
    x: new Date("June 21, 2022 02:15:00"),
    y: 102
  },
  {
    x: new Date("July 21, 2022 05:15:00"),
    y: 102.2
  },
  {
    x: new Date("August 21, 2022 08:15:00"),
    y: 105.3
  },
  {
    x: new Date("September 21, 2022 09:15:00"),
    y: 104.4
  }
];

export const data = {
  datasets: [
    {
      data: values
    }
  ]
};

export function App() {
  return <Line options={options} data={data} />;
}
