import React, { useContext, useState } from 'react';
import { ExpandMore, ExpandLess, Dashboard, AccountCircle, Group, AccountBalanceWallet, Report, Mail } from '@mui/icons-material'; // Add icons
import { List, ListItem, IconButton, Collapse, ListItemText, ListItemIcon } from '@mui/material';
import { AppContext } from './context/AppContext';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const { setActiveComponent } = useContext(AppContext); 
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("dashboard"); // Track the selected menu item

  const handleMenuClick = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const handleItemClick = (menu) => {
    setSelectedMenu(menu);
    setActiveComponent(menu);
  };

  return (
    <div className="sidebar">
      <List component="nav">
        {/* Dashboard */}
        <ListItem 
          button 
          onClick={() => handleItemClick("dashboard")}
          className={selectedMenu === "dashboard" ? 'active-item' : ''} 
        >
          <ListItemIcon sx={{ color: '#1976d2' }}> {/* Blue color for Dashboard */}
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Profile */}
        <ListItem button onClick={() => handleMenuClick('profile')} className={expandedMenu === 'profile' ? 'expanded-item' : ''}>
          <ListItemIcon sx={{ color: '#ff9800' }}> {/* Orange color for Profile */}
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          <IconButton>
            {expandedMenu === 'profile' ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
          </IconButton>
        </ListItem>
        <Collapse in={expandedMenu === 'profile'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleItemClick("profile")}>
              <ListItemText primary="View Profile" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick("editProfile")}>
              <ListItemText primary="Edit Profile" />
            </ListItem>
          </List>
        </Collapse>

        {/* Team */}
        <ListItem button onClick={() => handleMenuClick('team')} className={expandedMenu === 'team' ? 'expanded-item' : ''}>
          <ListItemIcon sx={{ color: '#4caf50' }}> {/* Green color for Team */}
            <Group />
          </ListItemIcon>
          <ListItemText primary="Team" />
          <IconButton>
            {expandedMenu === 'team' ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
          </IconButton>
        </ListItem>
        <Collapse in={expandedMenu === 'team'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleItemClick("mysponsor")}>
              <ListItemText primary="My Sponsor" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick("MyTeam")}>
              <ListItemText primary="My Team" />
            </ListItem>
          </List>
        </Collapse>

        {/* Fund Management */}
        <ListItem button onClick={() => handleMenuClick('fund-management')} className={expandedMenu === 'fund-management' ? 'expanded-item' : ''}>
          <ListItemIcon sx={{ color: '#f44336' }}> {/* Red color for Fund Management */}
            <AccountBalanceWallet />
          </ListItemIcon>
          <ListItemText primary="Fund Management" />
          <IconButton>
            {expandedMenu === 'fund-management' ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
          </IconButton>
        </ListItem>
        <Collapse in={expandedMenu === 'fund-management'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleItemClick("FundTransfer")}>
              <ListItemText primary="Transfer Fund" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick("AddFund")}>
              <ListItemText primary="Add Fund" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Withdrawal" />
            </ListItem>
          </List>
        </Collapse>

        {/* Reports */}
        <ListItem button onClick={() => handleMenuClick('reports')} className={expandedMenu === 'reports' ? 'expanded-item' : ''}>
          <ListItemIcon sx={{ color: '#9c27b0' }}> {/* Purple color for Reports */}
            <Report />
          </ListItemIcon>
          <ListItemText primary="Reports" />
          <IconButton>
            {expandedMenu === 'reports' ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
          </IconButton>
        </ListItem>
        <Collapse in={expandedMenu === 'reports'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="Fund Reports" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Performance Reports" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Activity Reports" />
            </ListItem>
          </List>
        </Collapse>

        {/* Package Buy */}
        <ListItem button onClick={() => handleItemClick('package-buy')} className={selectedMenu === 'package-buy' ? 'active-item' : ''}>
          <ListItemIcon sx={{ color: '#ff5722' }}> {/* Deep Orange for Package Buy */}
            <AccountBalanceWallet />
          </ListItemIcon>
          <ListItemText primary="Package Buy" />
        </ListItem>

        {/* Mailbox */}
        <ListItem button onClick={() => handleItemClick('mailbox')} className={selectedMenu === 'mailbox' ? 'active-item' : ''}>
          <ListItemIcon sx={{ color: '#3f51b5' }}> {/* Indigo color for Mailbox */}
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Mailbox" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
