import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import noughtsAndCrosses from '../images/game1.png';
import './i18nextConf';

function Home() {
  return (
    <div className="App">
      <body className="loginbg">
        <Header info="index" gender="" />
        <h1> Welcome to Oh Damn!</h1>
        <p> Please Sign Up or Log In to play</p>
        {/* eslint-disable global-require */}
        <img src={noughtsAndCrosses} alt="morpion game" className="fit-picture" />
        <Footer />
      </body>
    </div>
  );
}

export default Home;
