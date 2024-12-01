import React, { useState } from "react";
import "../../styles/FundTransfer.css"; // Import the CSS file for styling

const FundTransfer = () => {
  const [amount, setAmount] = useState("");
  const [fromAccount, setFromAccount] = useState("Wallet");
  const [toAccount, setToAccount] = useState("Wallet");
  const [remark, setRemark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transfer of ${amount} from ${fromAccount} to ${toAccount} submitted. Remark: ${remark}`);
  };

  return (
   <div style={{padding:'17px'}}>
     <div className="fund-transfer-container">
      <div className="header">
        <h2>
          <span className="icon">📊</span> Fund Transfer
        </h2>
      </div>

      <div className="wallet-summary">
        <div className="wallet-card">
          <div className="balance">
            <h3>0 INR</h3>
            <p>Wallet</p>
          </div>
          <div className="graph">
            {/* Placeholder for a graph */}
            <svg width="100" height="40">
              <polyline
                points="0,30 20,10 40,20 60,5 80,15"
                style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
              />
            </svg>
          </div>
        </div>
      </div>

      <form className="fund-transfer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount *</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="from">From *</label>
          <select
            id="from"
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
          >
            <option value="Wallet">Wallet</option>
            {/* Add more options as required */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="to">To *</label>
          <select
            id="to"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
          >
            <option value="Wallet">Wallet</option>
            {/* Add more options as required */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="remark">Remark *</label>
          <textarea
            id="remark"
            placeholder="Enter remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Transfer
        </button>
      </form>
    </div>
   </div>
  );
};

export default FundTransfer;
