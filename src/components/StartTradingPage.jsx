import React from 'react';
import '../styles/StartTradingPage.css';

const StartTradingPage = () => {
  return (
<div className="how-to-start-container">
      <h1 className="how-to-start-title">How To Start Trading</h1>
      <div className="how-to-start-content">
        <div className="how-to-start-image">
          <img src="your-image-url-here" alt="SafePlan Icon" className="how-to-start-img" />
        </div>
        <div className="how-to-start-text">
          <ol>
            <li>
              If you are interested in getting started with trading, there are a few things you need to do first. 
              First, you need to open a trading account. This is an account that allows you to buy and sell assets. 
              There are many different trading accounts available, so it is important to do some research to find 
              one that is right for you.
            </li>
            <li>
              Once you have opened a trading account, you need to deposit money into it. This money will be used 
              to buy assets. You can deposit money into your trading account using a variety of methods, such as 
              a bank transfer, a credit card, or a debit card.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default StartTradingPage;
