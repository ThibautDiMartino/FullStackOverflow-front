import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

window.addEventListener('load', () => {
  function sendData() {
    const FD = new FormData();
    const XHR = new XMLHttpRequest();
    const object = {};
    let json = {};
    const password = document.getElementById('password');
    const email = document.getElementById('email');

    FD.append('email', email.value);
    FD.append('password', password.value);
    XHR.addEventListener('load', (event) => {
      alert(event.target.responseText);
    });
    XHR.addEventListener('error', () => {
      alert('Oops! Something went wrong.');
    });
    XHR.open('POST', 'http://localhost:3000/signup');
    XHR.setRequestHeader('Content-Type', 'application/json');
    FD.forEach((value, key) => {
      object[key] = value;
    });
    json = JSON.stringify(object);
    XHR.send(json);
  }
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendData();
  });
});

function LogIn() {
  return (
    <div className="App">
      <Header info="index" gender="" />
      <div id="connection-form">
        <p>Connect to your account:</p>
        <form id="form">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="button" value="Connect" id="submit" />
        </form>
        {/* <Link to="/dashboard" id="submit">
          Connect
        </Link> */}

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
