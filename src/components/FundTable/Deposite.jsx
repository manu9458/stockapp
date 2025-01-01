import React from "react";
import FundTable from "../FundTable/FundTable";
import "../../styles/FundTransferHistory.css";

const Deposite = () => {
  return (
    <div className="fund-transfer-history-page">
      <h1 className="page-title">Deposite History</h1>
      <FundTable />
    </div>
  );
};

export default Deposite;
