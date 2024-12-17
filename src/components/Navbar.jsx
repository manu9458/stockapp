import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home'; // Example left-side icon
import FacebookIcon from '@mui/icons-material/Facebook'; // Right-side icons
import TwitterIcon from '@mui/icons-material/Twitter';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Navbar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#19193e' }}>
      <Toolbar>
        {/* Left Icon with some margin */}
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          Capita<i>Grow</i>
        </IconButton>

        {/* Menu Items with some spacing */}
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', gap: 3 }}>
          <MenuItem>
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" color="inherit">
              Fund
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" color="inherit">
              Trade
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" color="inherit">
              Contact
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" color="inherit">
              Plan
            </Typography>
          </MenuItem>
        </Box>

        {/* Right side icons with some margin */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
