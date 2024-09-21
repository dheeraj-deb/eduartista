import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Manage Agents");
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    // Set the active tab based on the current path
    switch (window.location.pathname) {
      case "/admin":
        setActiveTab("Manage Agents");
        navigate("/admin/agent");
        break;
    }
  }, [navigate]);

  const tabs = [
    { name: "Dashboard", path: "/admin" },
    { name: "Manage Agents", path: "/admin/agent" },
    { name: "Manage Users", path: "/admin/user" },
    { name: "Manage Orders", path: "/admin/order" },
  ];

  const handleTabClick = (tab) => {
    if (tab.name !== "Manage Agents") {
      // Disable navigation for all tabs except "Manage Agents"
      return;
    }
    setActiveTab(tab.name);
    navigate(tab.path); // Navigate to the specified path
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <h1 className="text-2xl py-9 p-4">Admin Dashboard</h1>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.name}
            onClick={() => handleTabClick(tab)}
            className={`p-4 cursor-pointer hover:bg-gray-700 
              transition-all duration-300 ease-in-out transform
              ${
                activeTab === tab.name
                  ? "bg-gray-600 text-gray-200 rounded-lg scale-105"
                  : tab.name !== "Manage Agents"
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
