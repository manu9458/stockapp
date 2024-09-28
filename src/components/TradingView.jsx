import React from "react";
import "../styles/TradingView.css"; // Import the CSS file for styling

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    marketCap: "1.304T",
    fdMarketCap: "1.386T",
    price: "65,996",
    availableCoins: "19.76M",
    totalCoins: "21M",
    tradedVolume: "30.244B",
    change: "+0.32%",
    changePositive: true,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    marketCap: "324.083B",
    fdMarketCap: "324.083B",
    price: "2,692.52",
    availableCoins: "120.364M",
    totalCoins: "120.364M",
    tradedVolume: "16.482B",
    change: "-0.15%",
    changePositive: false,
  },
  {
    name: "Tether USDt",
    symbol: "USDT",
    marketCap: "119.435B",
    fdMarketCap: "121.396B",
    price: "1.00019",
    availableCoins: "119.413B",
    totalCoins: "121.373B",
    tradedVolume: "59.515B",
    change: "0.00%",
    changePositive: true,
  },
  // Add other cryptocurrencies in a similar format
];

const TradingView = () => {
  return (
    <div className="trading-view-container">
      <h2 className="trading-view-title">Live Trading View</h2>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>MKT CAP</th>
            <th>FD MKT CAP</th>
            <th>Price</th>
            <th>Avail Coins</th>
            <th>Total Coins</th>
            <th>Traded Vol</th>
            <th>CHG %</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td className="crypto-name">
                <span className={`crypto-icon ${crypto.symbol.toLowerCase()}`}></span>
                {crypto.name}
              </td>
              <td>{crypto.marketCap}</td>
              <td>{crypto.fdMarketCap}</td>
              <td>{crypto.price}</td>
              <td>{crypto.availableCoins}</td>
              <td>{crypto.totalCoins}</td>
              <td>{crypto.tradedVolume}</td>
              <td
                className={
                  crypto.changePositive ? "positive-change" : "negative-change"
                }
              >
                {crypto.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradingView;
