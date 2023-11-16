/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useContext } from "react";
import { Line } from "react-chartjs-2";
import { WeatherContext } from "../../pages/Weather/Weather";
import { convertToAMPM } from "../../utils/info";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ForecaseChart() {
  const { weatherInfo } = useContext(WeatherContext);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Weather Forecast",
      },
    },
  };
  const labels = (weatherInfo as any)?.list?.map((info: any) => {
    return convertToAMPM(info?.dt_txt?.split(" ")[1]);
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Weather",
        data: (weatherInfo as any)?.list?.map((info: any) => {
          return Math.ceil(info?.main?.temp);
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
