import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TradingChart from './components/TradingChart';
import InvestmentPlans from './components/InvestmentPlans';
import Roadmap from './components/Roadmap';
import TradingView from './components/TradingView';
import Objective from './components/Objective';
import StartTradingPage from './components/StartTradingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
import DashboardContent from './components/DashboardContent';
import MainLayout from './components/MainLayout';

const Allcom = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <TradingChart />
      <InvestmentPlans />
      <Roadmap />
      <TradingView />
      <Objective />
      <StartTradingPage />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Allcom />} />
        <Route path="/dashboard" element={<MainLayout />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
