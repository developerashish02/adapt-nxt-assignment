import Dashboard from "./Dashboard";
import SalesPieChart from "./SalesPieChart";

const DashboardWithPie = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <Dashboard />
      </div>
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <SalesPieChart />
      </div>
    </div>
  );
};

export default DashboardWithPie;
