import React from 'react';
import {
  // Redirect,
  // Route,
  Link,
} from 'react-router-dom';
// import { Switch } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LogIn() {
  async function sendData() {
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
      if (event.target.responseText === '[]') {
        alert('User does\'nt exist or invalid email and password');
      } else {
        window.location.href = 'http://localhost:3001/dashboard';
      }
      return event;
    });
    XHR.addEventListener('error', () => {
      alert('Oops! Something went wrong.');
    });
    XHR.open('POST', 'http://localhost:3000/signin/login', true);
    XHR.setRequestHeader('Content-Type', 'application/json');
    FD.forEach((value, key) => {
      object[key] = value;
    });
    json = JSON.stringify(object);
    XHR.send(json);
  }

  function submit(event) {
    event.preventDefault();
    sendData();
  }

  return (
    <div className="App">
      <Header info="index" gender="" />
      <div id="connection-form">
        <p>Connect to your account:</p>
        <form onSubmit={submit} id="form">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <button
            type="submit"
            value="send"
            id="submit"
            // onClick={handleClick}
          >
            Connect
          </button>
        </form>
      </div>
      <div id="do-acc">
        Don&apos;t have an account?
        <Link to="/signup"> Create one</Link>
      </div>
      <Footer />
    </div>
  );
}

// LogIn.propTypes = {
//   history: PropTypes.isRequired,

// };

export default LogIn;
