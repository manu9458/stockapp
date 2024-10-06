import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { AccountCircle, Lock, Person } from '@mui/icons-material';
import { Checkbox, Button, TextField } from '@mui/material';
import MainLayout from './MainLayout';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    // Function to handle login
    const handleLogin = () => {
      // Check if username and password match the correct credentials
      if (username === 'abrar' && password === 'abrar@123') {
        setIsAuthenticated(true); // Successful login
      } else {
        alert('Incorrect username or password'); // Show alert if credentials are incorrect
      }
    };
  
    // Function to handle 'Enter' key press
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };
  
    if (isAuthenticated) {
      // Render the dashboard component if authenticated
      return <MainLayout />;
    }
  
    return (
      <div className="login-container">
        <div className="login-box">
          {/* Replace the image with an icon */}
          <Person className="login-logo-icon" style={{ fontSize: 60 }} />
  
          <div className="login-inputs">
            <div className="input-field">
              <TextField
                placeholder="User Id"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state
                onKeyPress={handleKeyPress} // Add onKeyPress listener to trigger login on Enter
                InputProps={{
                  startAdornment: <AccountCircle className="input-icon" />
                }}
              />
            </div>
            <div className="input-field">
              <TextField
                type="password"
                placeholder="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                onKeyPress={handleKeyPress} // Add onKeyPress listener to trigger login on Enter
                InputProps={{
                  startAdornment: <Lock className="input-icon" />
                }}
              />
            </div>
          </div>
  
          <div className="login-options">
            <label>
              <Checkbox color="primary" /> Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
  
          <Button variant="contained" fullWidth className="login-btn" onClick={handleLogin}>
            Login
          </Button>
  
          <div className="register-link">
            Don’t have an account? <a href="/register">Register</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginPage;