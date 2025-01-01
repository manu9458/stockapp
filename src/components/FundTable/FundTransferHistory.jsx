import React from "react";
import FundTable from "../FundTable/FundTable";
import "../../styles/FundTransferHistory.css";

const FundTransferHistory = () => {
  return (
    <div className="fund-transfer-history-page">
      <h1 className="page-title">Fund Transfer History</h1>
      <FundTable />
    </div>
  );
};

export default FundTransferHistory;
