import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPieChart = () => {
  const data = {
    labels: ["Woo Commerce Store", "Shopify Store"],
    datasets: [
      {
        label: "Sales Portion",
        data: [60, 40], // Adjust the values to represent the percentage
        backgroundColor: ["#2dded4", "#fa7e7e"],
        borderColor: ["#2dded4", "#fa7e7e"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false, // Disable default legend
      },
      title: {
        display: true,
        text: "Sales Portion",
      },
    },
  };

  return (
    <div className="p-4 w-full max-w-xs mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Sales Portion</h2>
      <div className="relative h-64">
        <Pie data={data} options={options} />
      </div>
      <div className="mt-4 flex items-center justify-center text-sm">
        <div className="flex items-center mr-4">
          <div
            className="w-4 h-4 mr-2"
            style={{ backgroundColor: "#2dded4" }}
          ></div>
          <span>Woo Commerce Store</span>
        </div>
        <div className="flex items-center">
          <div
            className="w-4 h-4 mr-2"
            style={{ backgroundColor: "#fa7e7e" }}
          ></div>
          <span>Shopify Store</span>
        </div>
      </div>
    </div>
  );
};

export default SalesPieChart;
