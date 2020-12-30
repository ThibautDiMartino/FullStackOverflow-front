import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

window.addEventListener('load', () => {
  function sendData(data) {
    const FD = new FormData();
    const XHR = new XMLHttpRequest();
    const object = {};
    let json = {};

    Object.keys(data).forEach((name) => {
      FD.append(name, data[name]);
    });
    FD.append('Firstname', 'Toto');
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
    sendData(form);
  });
});

function SignUp() {
  return (
    <div className="App">
      <Header info="index" gender="" />
      <div id="connection-form">
        <p>Create your account:</p>
        <form id="form" name="form">
          <input type="text" name="pseudo" id="pseudo" placeholder="Nickname" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <select className="gender">
            <option selected>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" />
          <button type="submit" value="send"> send </button>

          {/* <Link to="/dashboard" name="submit" type="submit">
            Create
          </Link> */}
        </form>
        {/* <input type="button" value="Create" /> */}
      </div>
      <div id="do-acc">
        Already have an account?
        <Link to="/login"> Connect</Link>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
