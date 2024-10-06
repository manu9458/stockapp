import React from 'react';
import '../styles//DashboardContent.css';

const DashboardContent = () => {
    const data = [
        { id: 1, value: '26654903', label: 'User ID' },
        { id: 2, value: 'Seraj Ahmad', label: 'Name' },
        { id: 3, value: '1 USDT', label: 'Token Rate' },
        { id: 4, value: '-', label: 'Activation Date' },
        { id: 5, value: '0 USDT', label: 'Wallet' },
        { id: 6, value: '1', label: 'Team' },
        { id: 7, value: '0 USDT', label: 'Topup Wallet' },
        { id: 8, value: '0 LIZA', label: 'LIZA Wallet' },
        { id: 9, value: '0 USDT', label: 'Total Investments' },
        { id: 10, value: '0 USDT', label: 'Referral Income' },
        { id: 11, value: '5 LIZA', label: 'Airdrop Income' },
        { id: 12, value: '0 USDT', label: 'Social Media Wallet' },
      ];
      

  return (
    <div className="dashboard-grid">
      {data.map((item, index) => (
        <div key={index} className="info-card">
          <h3>{item.value}</h3>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;
