import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import noughtsAndCrosses from './images/game.png';

function App() {
  return (
    <div className="App">
      <body className="App-form">
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#news">Sign Up</a>
          <a href="#contact">Log In</a>
        </div>
        <h1> Welcome to Oh Damn!</h1>
        <p> Please Sign Up or Log In to play</p>
        {/* eslint-disable global-require */}
        <img src={noughtsAndCrosses} alt="morpion game" className="fit-picture" />
      </body>

    </div>
  );
}

export default App;
