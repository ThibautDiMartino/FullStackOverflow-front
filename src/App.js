import React from 'react';
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import noughtsAndCrosses from './images/game.jpg';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <body className="App-form">
        <Router>
          <div>
            <ul className="topnav">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li className="right">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="right">
                <Link to="/login">Log In</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/signup">
                <SignIn />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>

            </Switch>
          </div>
        </Router>
        <h1> Welcome to Oh Damn!</h1>
        <p> Please Sign Up or Log In to play</p>
        {/* eslint-disable global-require */}
        <img src={noughtsAndCrosses} alt="morpion game" className="fit-picture" />
      </body>

    </div>
  );
}

function Home() {
  return App;
}

function SignIn() {
  return SignUp;
}

function LogIn() {
  return <h2>LogIn</h2>;
}

export default App;
