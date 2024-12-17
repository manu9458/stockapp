import React from "react";
import { Button, Box, Typography } from "@mui/material";
import "../styles/Home.css"; // Custom CSS for background and layout
import LoginPage from "./LoginandSignup/LoginPage";

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div style={{ fontSize: "56px", fontWeight: "bold", color:"white" }}> Capita<i>Grow</i></div>
        <div style={{marginTop:'7px', color:"white"}}> How to Make Money Trading Forex</div>
      </div>
      <div className="image-container">
        <LoginPage></LoginPage>
      </div>
    </div>
  );
};

export default Home;
