import { Line } from "react-chartjs-2";
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

const Dashboard = () => {
  // Data for Line Chart
  const lineData = {
    labels: [
      "2024-01-01",
      "2024-01-02",
      "2024-01-03",
      "2024-01-04",
      "2024-01-05",
      "2024-01-06",
      "2024-01-07",
    ],
    datasets: [
      {
        label: "Sales",
        data: [0.65, 0.59, 0.8, 0.81, 0.56, 0.55, 0.4],
        borderColor: "#2dded4",
        backgroundColor: "rgba(45, 222, 212, 0.2)", // Lighter shade for background
        pointBackgroundColor: "#2dded4",
        borderWidth: 2,
      },
      {
        label: "Orders",
        data: [1, 2, 1.5, 2.5, 2, 3, 2.2],
        borderColor: "#fa7e7e",
        backgroundColor: "rgba(250, 126, 126, 0.2)", // Lighter shade for background
        pointBackgroundColor: "#fa7e7e",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales vs Orders",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        ticks: {
          callback: (value) => `${value}k`,
        },
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sales vs Orders</h2>
      <Line data={lineData} options={options} />
    </div>
  );
};

export default Dashboard;
