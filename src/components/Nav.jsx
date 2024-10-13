import React from 'react';
import '../styles/Nav.css'
import AbcIcon from '@mui/icons-material/Abc';
import LogoutIcon from '@mui/icons-material/Logout';
const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <AbcIcon></AbcIcon>
      </div>
      <div className="center-section"></div>
      <div className="right-section">
        <div className="message-icon">
          <span className="message-count">0</span>
          <i className="icon-message">💬</i> {/* Replace with an icon */}
        </div>
        <div className="power-icon">
          <i className="icon-power">
          <LogoutIcon/>
          </i> 
        </div>
      </div>
    </div>
  );
};

export default Nav;
