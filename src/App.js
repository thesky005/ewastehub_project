import React from 'react';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";
import SignUp from './components/SignUp';
import Merchant1 from './components/Merchant1';
import Verification from './components/Verification';
import ThankYou from './components/ThankYou';
import Bussiness from './components/Bussiness';
import Finanicial from './components/Finanicial'
   

const App = () => {

  return (
    <Router> 
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/merchant" element={<Merchant1/>}/>
      <Route path="/verification" element={<Verification/>}/>
      <Route path="/thankyou" element={<ThankYou/>}/>
      <Route path="/bussiness" element={<Bussiness/>}/>
      <Route path="/finanicial" element={<Finanicial/>}/>
    </Routes>
  </Router>
  );
};

export default App;
