import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Rewards from "../components/Rewards";

const DashboardPage = () => {
  const [internData, setInternData] = useState({
    name: "",
    referralCode: "",
    donations: 0,
  });

  useEffect(() => {
    // Dummy data from backend
    setInternData({
      name: "Prathamesh Katre",
      referralCode: "prathamesh2025",
      donations: 12500,
    });
  }, []);

  return (
    <div>
      <Header />
      <Dashboard intern={internData} />
      <Rewards />
    </div>
  );
};

export default DashboardPage;
