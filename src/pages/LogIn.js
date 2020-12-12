import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LogIn() {
  return (
    <div className="App">
      <Header info="index" gender="" />
      <div id="connection-form">
        <p>Connect to your account:</p>
        <form>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
        </form>
        <Link to="/dashboard">
          Connect
        </Link>
        {/* <input type="button" value="Connect" /> */}
      </div>
      <div id="do-acc">
        Don&apos;t have an account?
        <Link to="/signup"> Create one</Link>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;
