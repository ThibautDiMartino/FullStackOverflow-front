import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

window.addEventListener('load', () => {
  function sendData() {
    const FD = new FormData();
    const XHR = new XMLHttpRequest();
    const object = {};
    let json = {};
    const firstname = document.getElementById('firstName');
    const lastname = document.getElementById('lastName');
    const password = document.getElementById('password');
    const gender = document.getElementById('gender');
    const email = document.getElementById('email');

    FD.append('firstName', firstname.value);
    FD.append('lastName', lastname.value);
    FD.append('gender', gender.value);
    FD.append('email', email.value);
    FD.append('password', password.value);
    XHR.addEventListener('load', (event) => {
      alert(event.target.responseText);
    });
    XHR.addEventListener('error', () => {
      alert('Oops! Something went wrong.');
    });
    XHR.open('POST', 'http://localhost:3000/signup', true);
    XHR.setRequestHeader('Content-Type', 'application/json');
    FD.forEach((value, key) => {
      object[key] = value;
    });
    json = JSON.stringify(object);
    XHR.send(json);
  }
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    alert('test');
    event.preventDefault();
    sendData();
  });
});

function SignUp() {
  return (
    <div className="App">
      <Header info="index" gender="" />
      <div id="connection-form">
        <p>Create your account:</p>
        <form id="form" name="form">
          <input type="text" name="firstName" id="firstName" placeholder="Fist Name" />
          <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <select className="gender" name="gender" id="gender">
            <option selected>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" />

          {/* <Link to="/dashboard" name="submit" type="submit" id="submmit"> */}
          <button type="submit" value="send" id="submit"> send </button>
          {/* Create */}
          {/* </Link> */}
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
