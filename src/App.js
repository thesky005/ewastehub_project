import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Home from './components/Home';
import HomeAr from './components/HomeAr'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";
import SignUp from './components/SignUp';
import Merchant1 from './components/Merchant1';
import Verification from './components/Verification';
import ThankYou from './components/ThankYou';


const App = () => {

  return (
    // <LanguageProvider>
    //   <Header/>
    //   <Home />
    //   {/* <Main/> */}
    // </LanguageProvider>
    <Router>
    <Routes>
      {/* <Route path ="" element ={<Login/>}/> */}
      <Route path ="/" element ={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/merchant1" element={<Merchant1/>}/>
      <Route path="/homear" element={<HomeAr/>}/>
      <Route path="/verification" element={<Verification/>}/>
      <Route path="/thankyou" element={<ThankYou/>}/>
    </Routes>
  </Router>
  );
};

export default App;
