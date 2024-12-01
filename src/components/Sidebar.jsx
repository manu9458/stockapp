import React, { useContext, useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import '../styles/Sidebar.css';
import { AppContext } from './context/AppContext';

const Sidebar = () => {

  const { setActiveComponent } = useContext(AppContext); 
  // States to track expanded menus
  const [expandedMenu, setExpandedMenu] = useState(null);

  // Function to toggle the expanded state of a menu
  const handleMenuClick = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar">
      <ul className="nav-items">
        <li className="selected">
          <i className="dashboard-icon" onClick={() => setActiveComponent("dashboard")}>🏠</i> Dashboard
        </li>
        <li onClick={() => handleMenuClick('profile')} className="profile-menu">
          <i className="profile-icon">👤</i> Profile
          {expandedMenu === 'profile' ? <ExpandLess className="expand-icon" /> : <ExpandMore className="expand-icon" />}
        </li>
        {expandedMenu === 'profile' && (
          <ul className="sub-menu">
          <li className="sub-item" onClick={() => setActiveComponent("profile")}>
          View Profile
        </li>
        <li className="sub-item" onClick={() => setActiveComponent("editProfile")}>
          Edit Profile
        </li>
          </ul>
        )}
        <li onClick={() => handleMenuClick('team')} className="team-menu">
          <i className="team-icon">👥</i> Team
          {expandedMenu === 'team' ? <ExpandLess className="expand-icon" /> : <ExpandMore className="expand-icon" />}
        </li>
        {expandedMenu === 'team' && (
          <ul className="sub-menu">
            <li className="sub-item" onClick={() => setActiveComponent("mysponer")}>My Sponsor</li>
            <li className="sub-item" onClick={() => setActiveComponent("MyTeam")}>My Team</li>
          </ul>
        )}
        <li onClick={() => handleMenuClick('fund-management')} className="fund-management-menu">
          <i className="fund-icon">💼</i> Fund Management
          {expandedMenu === 'fund-management' ? <ExpandLess className="expand-icon" /> : <ExpandMore className="expand-icon" />}
        </li>
        {expandedMenu === 'fund-management' && (
          <ul className="sub-menu">
            <li className="sub-item" onClick={() => setActiveComponent("FundTransfer")}>Transfer Fund</li>
            <li className="sub-item" onClick={() => setActiveComponent("AddFund")}>Add Fund</li>
            <li className="sub-item">Withdrawal</li>
          </ul>
        )}
        <li onClick={() => handleMenuClick('package-buy')} className="package-buy-menu">
          <i className="investment-icon">💰</i> Fund reports
          {expandedMenu === 'package-buy' ? <ExpandLess className="expand-icon" /> : <ExpandMore className="expand-icon" />}
        </li>
        {expandedMenu === 'package-buy' && (
          <ul className="sub-menu">
            <li className="sub-item">Fund Transfer</li>
            <li className="sub-item">Deposit</li>
            <li className="sub-item">Withdrawal</li>
          </ul>
        )}
        <li onClick={() => handleMenuClick('reports')} className="reports-menu">
          <i className="reports-icon">📊</i> Reports
          {expandedMenu === 'reports' ? <ExpandLess className="expand-icon" /> : <ExpandMore className="expand-icon" />}
        </li>
        {expandedMenu === 'reports' && (
          <ul className="sub-menu">
            <li className="sub-item">Fund Reports</li>
            <li className="sub-item">Performance Reports</li>
            <li className="sub-item">Activity Reports</li>
          </ul>
        )}
        <li>
          <i className="airdrop-icon">✈️</i> Package Buy
        </li>
        <li>
          <i className="mailbox-icon">📥</i> Mailbox
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
