import React from 'react';
import Home from './components/Home'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp';
import Header from './components/Header';
import Verification from './components/Verification';
import ThankYou from './components/ThankYou';
import EwasteFacility from './components/EwasteFacility';
import Trading from './components/Trading';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import TradingHero from './components/TradingHero';


const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);



  return (
    <>
    <Router>
    <Header isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findewastefacility" element={<EwasteFacility />} />
        <Route path="/signup" element={<SignUp setIsUserLoggedIn={setIsUserLoggedIn} />} />
        {/* <Route path="/merchant" element={<Merchant1/>}/> */}
        <Route path="/verification" element={<Verification />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/trading" element={<Trading/>} /> 
        <Route path="/customerdasboard" element={<Dashboard/>} />
        <Route path="/tradinglp" element={<TradingHero/>} />
        <Route path="/api/chatbot" element={<Chatbot/>} />
        {/* <Route path="/bussiness" element={<Bussiness/>}/> */}
        {/* <Route path="/finanicial" element={<Finanicial/>}/> */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
