import React from 'react';
import '../styles/Nav.css';
import { AppBar, Toolbar, Typography, IconButton, Badge, Grid } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';

const Nav = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {/* Left Section - Title with Icon */}
        <Grid container alignItems="center">
          <IconButton color="inherit">
            {/* <PublicIcon /> */}
          </IconButton>
          <Typography variant="h6" style={{ marginLeft: '7px' }}>
            CapitaGrow
          </Typography>
        </Grid>

        {/* Right Section - Notification and Logout Icons */}
        <Grid container alignItems="center" justifyContent="flex-end">
          <div className="message-icon">
            <Badge badgeContent={4} color="warning">
              <MailIcon color="action" />
            </Badge>
          </div>
          <div className="power-icon">
            <IconButton color="inherit">
              <LogoutIcon />
            </IconButton>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
