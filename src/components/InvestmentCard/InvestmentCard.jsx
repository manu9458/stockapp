import React from "react";
import "../../styles/InvestmentCard.css";

const InvestmentCard = ({ title, amountRange, buttonColor }) => {
  return (
    <div className="investment-card">
      <div className="investment-card-header">
        <img
          src="https://via.placeholder.com/50" // Replace with your icon URL
          alt="Icon"
          className="investment-card-icon"
        />
      </div>
      <div className="investment-card-body">
        <h3 className="investment-card-title">{title}</h3>
        <p className="investment-card-amount">{amountRange}</p>
        <button
          className="investment-card-button"
          style={{ backgroundColor: buttonColor }}
        >
          Enter Now
        </button>
      </div>
    </div>
  );
};

export default InvestmentCard;
