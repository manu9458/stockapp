import React from "react";
import InvestmentCard from "../InvestmentCard/InvestmentCard";
import "../../styles/InvestmentPlans.css";

const investmentPlans = [
  { title: "50,000 INR to unlimited", amountRange: "50000 INR to unlimited", buttonColor: "#E65100" },
  { title: "Refer - 50,000 INR to unlimited", amountRange: "Refer - 50000 INR to unlimited", buttonColor: "#388E3C" },
  { title: "YP - 200,000 INR", amountRange: "YP - 200000 INR", buttonColor: "#388E3C" },
  { title: "YP - 500,000 INR", amountRange: "YP - 500000 INR", buttonColor: "#388E3C" },
];

const InvestmentPlans = () => {
  return (
    <div className="investment-plans-page">
      <h1 className="investment-plans-title">Select an Investment Plan</h1>
      <div className="investment-plans-container">
        {investmentPlans.map((plan, index) => (
          <InvestmentCard
            key={index}
            title={plan.title}
            amountRange={plan.amountRange}
            buttonColor={plan.buttonColor}
          />
        ))}
      </div>
    </div>
  );
};

export default InvestmentPlans;
