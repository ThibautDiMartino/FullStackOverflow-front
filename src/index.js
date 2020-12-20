import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Home from './pages';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import morpion from './pages/games/morpion';
import stick from './pages/games/stick';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Router>
    {/* All our Routes goes here! */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/404" component={NotFound} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/morpion" component={morpion} />
      <Route exact path="/stick" component={stick} />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
