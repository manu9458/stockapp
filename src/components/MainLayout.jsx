import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import DashboardContent from "../components/DashboardContent";
import "../styles/MainLayout.css"; // Adjusted for new styles
import TopBar from "./TopBar";
import { useState } from "react";
import ProfilePage from "./Profile/ProfilePage";
import { AppContext } from "./context/AppContext";
import ChangePassword from "./Profile/ChangePassword";
import MySponser from "./Team/MySponser";
import MyTeam from "./Team/MyTeam";
import FundTransfer from "./Fund/FundTransfer";
import AddFund from "./Fund/AddFund";
const MainLayout = () => {
  const { activeComponent } = useContext(AppContext);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <ProfilePage />; // Render the ProfilePage
      case "dashboard":
        return <DashboardContent />; // Render the DashboardContent
      case "editProfile":
        return <ChangePassword />; // Render the EditProfile
      case "mysponer":
        return <MySponser />;
      case "MyTeam":
        return <MyTeam />;
        case "FundTransfer":
          return <FundTransfer />;
        case "AddFund":
          return <AddFund />;
      default:
        return <DashboardContent />; // Render the DashboardContent
    }
  };
  return (
    <div>
      <Nav></Nav>
      <div className="main-layout">
        <Sidebar />
        <div className="content-container">
          <TopBar></TopBar>
          {/* <DashboardContent /> */}
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
