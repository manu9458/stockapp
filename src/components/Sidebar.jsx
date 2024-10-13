import React, { useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  // Function to toggle the "Profile" expansion
  const handleProfileClick = () => {
    setIsProfileExpanded(!isProfileExpanded);
  };

  return (
    <div className="sidebar">
      <ul className="nav-items">
        <li className="selected">
          <i className="dashboard-icon">🏠</i> Dashboard
        </li>
        <li>
          <i className="wallet-icon">💼</i> Wallets
        </li>
        <li onClick={handleProfileClick} className="profile-menu">
          <i className="profile-icon">👤</i> Profile
          {isProfileExpanded ? <ExpandLess className="expand-icon" /> : <ExpandMore className="expand-icon" />}
        </li>
        {isProfileExpanded && (
          <ul className="sub-menu">
            <li className="sub-item">View Profile</li>
            <li className="sub-item">Edit Profile</li>
          </ul>
        )}
        <li>
          <i className="team-icon">👥</i> Team
        </li>
        <li>
          <i className="investment-icon">💰</i> Investments
        </li>
        <li>
          <i className="reports-icon">📊</i> Reports
        </li>
        <li>
          <i className="videos-icon">🎥</i> Adding Videos
        </li>
        <li>
          <i className="airdrop-icon">✈️</i> Liza Social Airdrop
        </li>
        <li>
          <i className="deposit-icon">📥</i> Deposit History
        </li>
        <li>
          <i className="withdrawal-icon">📤</i> Withdrawal & History
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
