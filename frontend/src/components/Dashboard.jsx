// components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = ({ user, onLogout, children }) => {
  return (
    <div className="dashboard">
      <Sidebar user={user} onLogout={onLogout} />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;