import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/Tradingchart.css'
const indicesData = [
  { name: 'SPXUSD', value: '5,699.3', change: '-0.23%', points: '-13.1' },
  { name: 'NSXUSD', value: '19,782.6', change: '-0.17%', points: '-34.4' },
  { name: 'DJI', value: '42,053.5', change: '0.00%', points: '+1.5' },
  { name: 'NKY', value: '37,723.91', change: '+1.53%', points: '+568.58' },
  { name: 'DEU40', value: '19,782.6', change: '-1.49%', points: '-299.63' },
];

const activeStocks = [
  { name: 'IDEA', company: 'VODAFONE IDEA LIMITED', value: '10.48', change: '+0.96%', points: '+0.10' },
  { name: 'RAJNISH', company: 'RAJNISH WELLNESS LIMITED', value: '4.17', change: '+4.51%', points: '+0.18' },
  { name: 'RPOWER', company: 'RELIANCE POWER LTD.', value: '36.35', change: '+5.00%', points: '+1.73' },
  { name: 'GTLINFRA', company: 'GTL INFRA', value: '6.30', change: '0.00%', points: '0.00' },
];

const chartData = [
  { month: 'Oct', value: 4000 },
  { month: 'Nov', value: 3000 },
  { month: 'Dec', value: 2000 },
  { month: 'Jan', value: 2780 },
  { month: 'Feb', value: 1890 },
  { month: 'Mar', value: 2390 },
  { month: 'Apr', value: 3490 },
];

const TradingChart = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleActiveTabChange = (event, newValue) => {
    setActiveTabIndex(newValue);
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#001B71', color: 'white', minHeight: '100vh' }}>
      {/* Heading */}
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Trading Chart
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap:'22px' }}>
        {/* Left Section (60% width) */}
        <Box sx={{ width: '35%', backgroundColor: '#fff', borderRadius: '10px', padding: '20px', color: '#000' }}>
          <Tabs value={tabIndex} onChange={handleTabChange} textColor="inherit" indicatorColor="primary">
            <Tab label="Indices" />
            <Tab label="Futures" />
            <Tab label="Bonds" />
            <Tab label="Forex" />
          </Tabs>

          <Box sx={{ paddingTop: '20px' }}>
            {/* Chart */}
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>

            {/* Indices Table */}
            <Table>
              <TableBody>
                {indicesData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: '#ff4d4d',
                            borderRadius: '50%',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Typography sx={{ marginLeft: '10px' }}>{item.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell sx={{ color: item.change.includes('+') ? 'green' : 'red' }}>{item.change}</TableCell>
                    <TableCell sx={{ color: item.points.includes('+') ? 'green' : 'red' }}>{item.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>

        {/* Right Section (35% width) */}
        <Box sx={{ width: '35%', backgroundColor: '#fff', borderRadius: '10px', padding: '20px', color: '#000' }}>
          <Tabs value={activeTabIndex} onChange={handleActiveTabChange} textColor="inherit" indicatorColor="primary">
            <Tab label="Active" />
            <Tab label="Gainers" />
            <Tab label="Losers" />
          </Tabs>

          <Box sx={{ paddingTop: '20px' }}>
            {/* Chart */}
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>

            {/* Active Stocks Table */}
            <Table>
              <TableBody>
                {activeStocks.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Typography>{item.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{item.company}</Typography>
                    </TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell sx={{ color: item.change.includes('+') ? 'green' : 'red' }}>{item.change}</TableCell>
                    <TableCell sx={{ color: item.points.includes('+') ? 'green' : 'red' }}>{item.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TradingChart;
