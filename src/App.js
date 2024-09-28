
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import TradingChart from './components/TradingChart';
import InvestmentPlans from './components/InvestmentPlans'
import Roadmap from './components/Roadmap';
import TradingView from './components/TradingView';
import Objective from './components/Objective';
import StartTradingPage from './components/StartTradingPage';
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Home></Home>
    <TradingChart></TradingChart>
    <InvestmentPlans></InvestmentPlans>
    <Roadmap></Roadmap>
    <TradingView></TradingView>
    <Objective></Objective>
    <StartTradingPage></StartTradingPage>
    </div>
  );
}

export default App;
