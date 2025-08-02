import React from "react";

const Dashboard = ({ intern }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h2>Welcome, {intern.name}</h2>
        <p>Referral Code: <strong>{intern.referralCode}</strong></p>
        <p>Total Donations Raised: ₹{intern.donations}</p>
      </div>
    </div>
  );
};

export default Dashboard;
