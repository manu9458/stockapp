import React from 'react';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav';
import DashboardContent from '../components/DashboardContent';
import '../styles/MainLayout.css'; // Adjusted for new styles
import TopBar from './TopBar';

const MainLayout = () => {
  return (

    <div>
    <Nav></Nav>
        <div className="main-layout">
      <Sidebar />
      <div className="content-container">
      <TopBar></TopBar>
        <DashboardContent />
      </div>
    </div>
    </div>
  );
};

export default MainLayout;
