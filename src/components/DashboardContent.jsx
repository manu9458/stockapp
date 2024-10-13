import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import '../styles/DashboardContent.css';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const DashboardContent = () => {
  // Example data for the graph
  const graphData = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 20 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 40 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 100 },
  ];

  const data = [
    { id: 1, value: '11124394', label: 'ID No.' },
    { id: 2, value: '0 INR', label: 'Package' },
    { id: 3, value: '0 INR', label: 'Yearly Package' },
    { id: 4, value: '0%', label: 'ROI %' },
    { id: 5, value: '1', label: 'Team' },
    { id: 6, value: '0 INR', label: 'Topup Wallet' },
    { id: 7, value: '0 INR', label: 'Wallet' },
    { id: 8, value: '0 INR', label: 'ROI Income' },
  ];

  return (
    <div className="dashboard-grid">
      {data.map((item, index) => (
        <div key={index} className="info-card">
          <div className='carditem'>
          <div className="">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
          <div>
          <AccessibilityIcon className="card-icon" />
          </div>
          </div>
          {/* <div className="card-subheader">
            <p>{item.label}</p>
            <AccessibilityIcon className="card-icon" />
          </div> */}

          {/* Adding the graph below the labels */}
          {/* <div className="chart-container">
            <ResponsiveContainer width="100%" height={60}>
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;
