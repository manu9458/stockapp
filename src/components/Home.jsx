import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import '../styles/Home.css'; // Custom CSS for background and layout
import LoginPage from './LoginandSignup/LoginPage';

const Home = () => {
  
  return (
    <Box className="container">
      <Box className="content">
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', display:'flex', justifyContent:'flex-start' }}>
          SafePlan
        </Typography>
        <Typography variant="h6" sx={{ color: 'white', mt: 1 }}>
          How to Make Money Trading Forex
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            sx={{ background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)', borderRadius: '30px' }}
          >
            LOGIN
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              borderRadius: '30px',
              paddingRight: '16px',
              paddingLeft: '16px',
              '&:hover': {
                borderColor: 'white',
              },
            }}
            endIcon={<span style={{ fontSize: '1rem', color: 'white', marginLeft: '8px' }}>→</span>}
          >
            REGISTER
          </Button>
        </Box>
      </Box>

      <Box className="image-container">
      <LoginPage></LoginPage>
</Box>

    </Box>
  );
};

export default Home;
