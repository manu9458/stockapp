import React from 'react';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav';
import DashboardContent from '../components/DashboardContent';
import '../styles/MainLayout.css'; // Adjusted for new styles

const MainLayout = () => {
  return (

    <div>
    <Nav></Nav>
        <div className="main-layout">
      <Sidebar />
      <div className="content-container">
       
        <DashboardContent />
      </div>
    </div>
    </div>
  );
};

export default MainLayout;
