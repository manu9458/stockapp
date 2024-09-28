import React from 'react';
import '../styles/Roadmap.css';

const Roadmap = () => {
  const milestones = [
    {
      date: "Q1-2023",
      description:
        "What is forex trading? Forex trading is the process of buying and selling currencies. It is the largest and most liquid financial market in the world, with trillions of dollars traded every day.",
    },
    {
      date: "Q2-2024",
      description:
        "How does forex trading work? When you trade forex, you are essentially betting on the future direction of a currency pair. For example, if you think that the US dollar is going to appreciate against the Japanese yen, you would buy the USD/JPY currency pair.",
    },
    {
      date: "Q3-2025",
      description:
        "What are the risks of forex trading? Forex trading is a risky activity. There is always the possibility of losing money. However, there are also opportunities to make a lot of money.",
    },
    {
      date: "Q4-2026",
      description:
        "How can I get started in forex trading? There are many ways to get started in forex trading. You can open a demo account with a forex broker to practice trading with virtual money. Once you are comfortable with the process, you can open a live account and start trading with real money.",
    },
  ];

  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">Project Roadmap</h1>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-circle" />
            <div className="timeline-date">{milestone.date}</div>
            <div className="timeline-description">{milestone.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
