import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav-items">
        <li><i className="dashboard-icon">🏠</i> Dashboard</li>
        <li><i className="wallet-icon">💼</i> Wallets</li>
        <li><i className="profile-icon">👤</i> Profile</li>
        <li><i className="team-icon">👥</i> Team</li>
        <li><i className="investment-icon">💰</i> Investments</li>
        <li><i className="reports-icon">📊</i> Reports</li>
        <li><i className="videos-icon">🎥</i> Adding Videos</li>
        <li><i className="airdrop-icon">✈️</i> Liza Social Airdrop</li>
        <li><i className="deposit-icon">📥</i> Deposit History</li>
        <li><i className="withdrawal-icon">📤</i> Withdrawal & History</li>
      </ul>
    </div>
  );
};

export default Sidebar;
