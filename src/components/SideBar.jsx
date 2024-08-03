import { Link } from "react-router-dom";

const SideBar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: "Order", path: "/order" },
    { name: "Return", path: "/return" },
    { name: "Customer", path: "/customer" },
    { name: "Shipping", path: "/shipping" },
  ];

  return (
    <div className="w-64 bg-white text-gray-800 flex flex-col shadow-md">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="p-4 hover:bg-purple-100 hover:text-purple-500 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
