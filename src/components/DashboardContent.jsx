import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts';
import '../styles/DashboardContent.css';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WalletIcon from '@mui/icons-material/Wallet';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DashboardContent = () => {
  // Example data for graphs
  const graphData = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 20 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 40 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 100 },
  ];

  const barData = [
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 14 },
    { name: 'Mar', value: 16 },
    { name: 'Apr', value: 10 },
    { name: 'May', value: 20 },
  ];

  const pieData = [
    { name: 'Package A', value: 400 },
    { name: 'Package B', value: 300 },
    { name: 'Package C', value: 300 },
  ];

  const data = [
    { id: 1, value: '11124394', label: 'ID No.', icon: <AccountCircleIcon /> },
    { id: 2, value: '0 INR', label: 'Package', icon: <WalletIcon /> },
    { id: 3, value: '0 INR', label: 'Yearly Package', icon: <TrendingUpIcon /> },
    { id: 4, value: '0%', label: 'ROI %', icon: <TrendingUpIcon /> },
    { id: 5, value: '1', label: 'Team', icon: <PeopleIcon /> },
    { id: 6, value: '0 INR', label: 'Wallet', icon: <WalletIcon /> },
  ];

  return (
    <div className="dashboard-container">
      {/* Dashboard Heading */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      {/* Cards and Graphs */}
      <div className="dashboard-grid">
        {data.map((item, index) => (
          <div key={index} className="info-card">
            <div className="carditem">
              <div className="card-header">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
              <div className="card-icon">{item.icon}</div>
            </div>

            {/* Different chart types in each card */}
            {index === 0 && (
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
            {index === 1 && (
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
            {index === 2 && (
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={100}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={50} fill="#8884d8" />
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
                    ))}
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
