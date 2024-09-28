import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const InvestmentPlans = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#001B71', minHeight: '100vh' }}>
      {/* Heading */}
      <Typography variant="h3" align="center" sx={{ color: 'white', marginBottom: '40px' }}>
        Investment Plans
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Investment Package Card */}
        <Box
          sx={{
            width: '300px',
            backgroundColor: '#FF7F00',
            borderRadius: '10px',
            padding: '30px',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            INVESTMENT PACKAGE
          </Typography>

          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: 'black' }}>
              5K INR
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Box
              component="span"
              sx={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#000',
                marginRight: '10px',
              }}
            >
              ✓
            </Box>
            <Typography variant="body1">MINI-INVESTMENT - 50,000 INR</Typography>
          </Box>

          <Button
            variant="outlined"
            sx={{
              marginTop: '30px',
              borderColor: 'white',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            INVEST
          </Button>
        </Box>

        {/* ROI Income Card */}
        <Box
          sx={{
            width: '300px',
            backgroundColor: '#00CFFF',
            borderRadius: '10px',
            padding: '30px',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            ROI INCOME
          </Typography>

          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: 'black' }}>
              60K INR
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Box
              component="span"
              sx={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#000',
                marginRight: '10px',
              }}
            >
              ✓
            </Box>
            <Typography variant="body1">INVESTMENT - 50,000 INR TO 6,00,000 INR</Typography>
          </Box>

          <Button
            variant="outlined"
            sx={{
              marginTop: '30px',
              borderColor: 'white',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            INVEST
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InvestmentPlans;
