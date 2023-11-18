import React from 'react';
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import Main from './Main';
import Catagories from './Catagories';
import Header from './Header';
import Footer from './Footer';
import Middle from './Middle';

const Home = () => {

  return (
    <div>
      <Main/>
      <Catagories/>
      <Middle/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
