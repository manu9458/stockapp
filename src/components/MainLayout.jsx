import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import DashboardContent from "../components/DashboardContent";
import "../styles/MainLayout.css"; // Adjusted for new styles
import TopBar from "./TopBar";
import { AppContext } from "./context/AppContext";
import ProfilePage from "./Profile/ProfilePage";
import ChangePassword from "./Profile/ChangePassword";
import MySponser from "./Team/MySponser";
import MyTeam from "./Team/MyTeam";
import FundTransfer from "./Fund/FundTransfer";
import AddFund from "./Fund/AddFund";
import InvestmentPlans from "./InvestmentCard/InvestmentPlans";
import FundTransferHistory from "./FundTable/FundTransferHistory";
import Deposite from "./FundTable/Deposite";
import WithdrawalHistory from "./FundTable/WithdrawalHistory";
const MainLayout = () => {
  const { activeComponent } = useContext(AppContext);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <ProfilePage />;
      case "dashboard":
        return <DashboardContent />;
      case "editProfile":
        return <ChangePassword />;
      case "mysponsor":
        return <MySponser />;
      case "MyTeam":
        return <MyTeam />;
      case "FundTransfer":
        return <FundTransfer />;
      case "AddFund":
        return <AddFund />;
      case "InvestmentPlans":
          return <InvestmentPlans />;
      case "FundTransferHistory":
          return <FundTransferHistory />;
      case "DepositeHistory":
          return <Deposite />;
      case "WithdrawalHistory":
          return <WithdrawalHistory />;
        
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div>
      {/* Nav bar that stays on top */}
      <Nav className="nav" />
      <div className="main-layout">
        {/* Sidebar that stays fixed */}
        <Sidebar className="sidebar" />
        {/* Scrollable content container */}
        <div className="content-container">
          {/* TopBar stays on top */}
          <TopBar className="topbar" />
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
